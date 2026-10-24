import emailjs from "@emailjs/browser";
import { portfolioData } from "@/data/portfolioData";
import { ContactFormData } from "@/types/portfolio";

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

/**
 * Gửi email liên hệ qua EmailJS service
 * @param formData Dữ liệu từ form gồm name, email, message
 */
export const sendContactEmail = async (
  formData: ContactFormData
): Promise<SendEmailResponse> => {
  const config = portfolioData.emailjs;

  // Kiểm tra cấu hình key
  if (
    !config ||
    !config.serviceId ||
    !config.templateId ||
    !config.publicKey ||
    config.serviceId.includes("your_service_id") ||
    config.publicKey.includes("your_public_key")
  ) {
    return {
      success: false,
      message:
        "Chưa cấu hình EmailJS! Vui lòng điền Service ID, Template ID và Public Key vào file .env hoặc src/data/portfolioData.ts.",
    };
  }

  // Chuẩn bị tham số cho template EmailJS
  const templateParams = {
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    reply_to: formData.email.trim(),
    message: formData.message.trim(),
    to_name: portfolioData.personalInfo.fullName,
  };

  try {
    const result = await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams,
      config.publicKey
    );

    if (result.status === 200) {
      return {
        success: true,
        message: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công đến Khôi.",
      };
    }

    return {
      success: false,
      message: `Gửi tin nhắn thất bại (Mã lỗi: ${result.status}). Vui lòng thử lại sau.`,
    };
  } catch (error: any) {
    console.error("EmailJS Error:", error);
    const errorText =
      error?.text ||
      error?.message ||
      "Không thể kết nối đến dịch vụ Email. Vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau.";
    return {
      success: false,
      message: errorText,
    };
  }
};
