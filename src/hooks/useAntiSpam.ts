import { useState, useEffect, useRef, useCallback } from "react";
import { portfolioData } from "@/data/portfolioData";
import { AntiSpamConfig } from "@/types/portfolio";

const STORAGE_LAST_SUBMIT_TIME = "portfolio_contact_last_submit";
const STORAGE_SUBMISSION_HISTORY = "portfolio_contact_history";
const STORAGE_LAST_MESSAGE = "portfolio_contact_last_message";

const DEFAULT_CONFIG: AntiSpamConfig = {
  cooldownSeconds: 60,
  maxPerHour: 3,
  minMessageLength: 10,
  maxMessageLength: 1000,
  minSubmitTimeSeconds: 2.5,
};

export interface AntiSpamValidationResult {
  isValid: boolean;
  reason?: string;
}

export const useAntiSpam = () => {
  const config = portfolioData.antiSpam || DEFAULT_CONFIG;

  const [honeypot, setHoneypot] = useState<string>("");
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const [remainingCooldown, setRemainingCooldown] = useState<number>(0);
  const formRenderTimeRef = useRef<number>(Date.now());

  // Tính toán thời gian cooldown còn lại từ localStorage khi khởi tạo
  useEffect(() => {
    const calculateInitialCooldown = () => {
      try {
        const lastSubmitRaw = localStorage.getItem(STORAGE_LAST_SUBMIT_TIME);
        if (lastSubmitRaw) {
          const lastSubmit = parseInt(lastSubmitRaw, 10);
          if (!isNaN(lastSubmit)) {
            const elapsed = Math.floor((Date.now() - lastSubmit) / 1000);
            const remaining = config.cooldownSeconds - elapsed;
            if (remaining > 0) {
              setRemainingCooldown(remaining);
            }
          }
        }
      } catch (e) {
        console.warn("AntiSpam localStorage read error:", e);
      }
    };

    calculateInitialCooldown();
  }, [config.cooldownSeconds]);

  // Bộ đếm lùi từng giây khi cooldown đang hoạt động
  useEffect(() => {
    if (remainingCooldown <= 0) return;

    const intervalId = window.setInterval(() => {
      setRemainingCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingCooldown]);

  // Lấy danh sách các lần submit trong 1 giờ qua
  const getRecentSubmissionHistory = useCallback((): number[] => {
    try {
      const historyRaw = localStorage.getItem(STORAGE_SUBMISSION_HISTORY);
      if (!historyRaw) return [];
      const history: number[] = JSON.parse(historyRaw);
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      return history.filter((time) => time > oneHourAgo);
    } catch {
      return [];
    }
  }, []);

  // Kiểm tra tính hợp lệ đa tầng trước khi gửi
  const validateSubmission = useCallback(
    (messageText: string): AntiSpamValidationResult => {
      const trimmedMessage = messageText.trim();

      // Tầng 1: Honeypot Bot Trap (Kiểm tra cả DOM element thực tế và React state)
      const domHoneypot =
        honeypotRef.current?.value ||
        (typeof document !== "undefined"
          ? (document.getElementById("website_url") as HTMLInputElement)?.value
          : "");
      const actualHoneypot = (domHoneypot || honeypot || "").trim();

      if (actualHoneypot.length > 0) {
        return {
          isValid: false,
          reason:
            "Hệ thống phát hiện hành vi gửi biểu mẫu tự động. Yêu cầu đã bị từ chối!",
        };
      }

      // Tầng 2: Time-to-Submit Protection
      const elapsedSeconds = (Date.now() - formRenderTimeRef.current) / 1000;
      if (elapsedSeconds < config.minSubmitTimeSeconds) {
        return {
          isValid: false,
          reason: "Thao tác gửi quá nhanh! Vui lòng kiểm tra lại thông tin trước khi gửi.",
        };
      }

      // Tầng 3: Cooldown giữa 2 lần gửi
      if (remainingCooldown > 0) {
        return {
          isValid: false,
          reason: `Vui lòng chờ thêm ${remainingCooldown} giây trước khi gửi tiếp tin nhắn!`,
        };
      }

      // Tầng 4: Giới hạn số lượng tin nhắn trong 1 giờ (Rate Limit)
      const recentHistory = getRecentSubmissionHistory();
      if (recentHistory.length >= config.maxPerHour) {
        return {
          isValid: false,
          reason: `Bạn đã đạt giới hạn gửi tin nhắn tối đa (${config.maxPerHour} tin / giờ). Vui lòng thử lại sau!`,
        };
      }

      // Tầng 5: Kiểm tra độ dài nội dung tin nhắn
      if (trimmedMessage.length < config.minMessageLength) {
        return {
          isValid: false,
          reason: `Nội dung tin nhắn quá ngắn (tối thiểu ${config.minMessageLength} ký tự)!`,
        };
      }

      if (trimmedMessage.length > config.maxMessageLength) {
        return {
          isValid: false,
          reason: `Nội dung tin nhắn vượt quá giới hạn tối đa (${config.maxMessageLength} ký tự)!`,
        };
      }

      // Tầng 6: Chống gửi nội dung trùng lặp liên tiếp
      try {
        const lastMessage = localStorage.getItem(STORAGE_LAST_MESSAGE);
        if (
          lastMessage &&
          lastMessage.toLowerCase() === trimmedMessage.toLowerCase()
        ) {
          return {
            isValid: false,
            reason: "Nội dung tin nhắn này vừa được gửi trước đó. Vui lòng không gửi nội dung trùng lặp!",
          };
        }
      } catch {
        // bỏ qua lỗi đọc storage
      }

      return { isValid: true };
    },
    [honeypot, remainingCooldown, config, getRecentSubmissionHistory]
  );

  // Ghi nhận submit thành công vào storage và kích hoạt cooldown
  const recordSuccessfulSubmission = useCallback(
    (messageText: string) => {
      const now = Date.now();
      try {
        localStorage.setItem(STORAGE_LAST_SUBMIT_TIME, now.toString());

        const history = getRecentSubmissionHistory();
        history.push(now);
        localStorage.setItem(
          STORAGE_SUBMISSION_HISTORY,
          JSON.stringify(history)
        );

        localStorage.setItem(STORAGE_LAST_MESSAGE, messageText.trim());
      } catch (e) {
        console.warn("AntiSpam localStorage write error:", e);
      }

      setRemainingCooldown(config.cooldownSeconds);
      setHoneypot("");
      if (honeypotRef.current) {
        honeypotRef.current.value = "";
      }
      formRenderTimeRef.current = Date.now();
    },
    [config.cooldownSeconds, getRecentSubmissionHistory]
  );

  return {
    honeypot,
    setHoneypot,
    honeypotRef,
    remainingCooldown,
    validateSubmission,
    recordSuccessfulSubmission,
    isCooldownActive: remainingCooldown > 0,
  };
};
