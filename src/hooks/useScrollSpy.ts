import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect active section id based on getBoundingClientRect
 * @param sectionIds Array of section DOM IDs to monitor
 * @param offset Pixel threshold from top of viewport to consider active
 */
export const useScrollSpy = (
  sectionIds: string[],
  offset: number = 180
): [string, (id: string) => void] => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");
  const isClickingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cho phép set active ngay lập tức khi click
  const setActiveManually = (id: string) => {
    setActiveId(id);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    // Mở lại scroll listener sau khi cuộn trang xong (khoảng 800ms)
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 850);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Nếu đang trong quá trình cuộn do click menu thì không ghi đè
      if (isClickingRef.current) return;

      // Kiểm tra nếu chạm sát đáy trang -> active section cuối cùng (contact)
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Kiểm tra nếu ở đỉnh trang -> active section đầu tiên (home)
      if (window.scrollY < 120) {
        setActiveId(sectionIds[0]);
        return;
      }

      // Duyệt qua từng section để tìm section đang nằm trong tầm nhìn
      let currentSection = sectionIds[0];

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Nếu mép trên của section đã cuộn qua hoặc chạm threshold offset
          if (rect.top <= offset) {
            currentSection = id;
          }
        }
      }

      setActiveId(currentSection);
    };

    // Kiểm tra ngay khi mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [sectionIds, offset]);

  return [activeId, setActiveManually];
};
