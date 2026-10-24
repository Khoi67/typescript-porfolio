import React, { useState } from "react";
import { message } from "antd";
import { portfolioData } from "@/data/portfolioData";
import { ContactFormData } from "@/types/portfolio";
import { sendContactEmail } from "@/services/emailService";
import { useAntiSpam } from "@/hooks/useAntiSpam";
import { RiSendPlaneFill, RiTimeLine } from "react-icons/ri";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { contact, footer } = portfolioData;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    honeypot,
    setHoneypot,
    honeypotRef,
    remainingCooldown,
    validateSubmission,
    recordSuccessfulSubmission,
    isCooldownActive,
  } = useAntiSpam();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Kiểm tra tính đầy đủ của trường cơ bản
    if (!formData.name.trim()) {
      message.warning("Vui lòng nhập họ và tên của bạn!");
      return;
    }

    if (!formData.email.trim()) {
      message.warning("Vui lòng nhập địa chỉ email của bạn!");
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      message.warning("Địa chỉ email không đúng định dạng. Vui lòng kiểm tra lại!");
      return;
    }

    if (!formData.message.trim()) {
      message.warning("Vui lòng nhập nội dung tin nhắn!");
      return;
    }

    // 2. Kiểm tra chống spam đa tầng (Honeypot, Cooldown, Rate Limit, Nội dung, Trùng lặp)
    const spamCheck = validateSubmission(formData.message);
    if (!spamCheck.isValid) {
      message.warning(spamCheck.reason || "Yêu cầu gửi tin nhắn không hợp lệ!");
      return;
    }

    setIsSubmitting(true);
    const hideLoading = message.loading("Đang gửi tin nhắn của bạn...", 0);

    try {
      const response = await sendContactEmail(formData);
      hideLoading();

      if (response.success) {
        message.success(response.message, 5);
        // Ghi nhận submit thành công để kích hoạt cooldown và cập nhật lịch sử rate limit
        recordSuccessfulSubmission(formData.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        message.error(response.message, 6);
      }
    } catch (err) {
      hideLoading();
      message.error("Đã xảy ra lỗi không xác định. Vui lòng thử lại sau!", 5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="arlo_tm_section" id="contact" style={{ paddingTop: 80 }}>
      <div className="container">
        <div className="arlo_tm_title_holder contact">
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
                <h4>Get in Touch</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  {contact.address && (
                    <li>
                      <p>
                        <label>Address:</label>
                        <span>{contact.address}</span>
                      </p>
                    </li>
                  )}
                  {contact.email && (
                    <li>
                      <p>
                        <label>Email:</label>
                        <span>
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </span>
                      </p>
                    </li>
                  )}
                  {contact.github && (
                    <li>
                      <p>
                        <label>Github:</label>
                        <span>
                          <a
                            href={
                              contact.githubUrl ||
                              `https://github.com/${contact.github}`
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {contact.github}
                          </a>
                        </span>
                      </p>
                    </li>
                  )}
                  {contact.phone && (
                    <li>
                      <p>
                        <label>Phone:</label>
                        <span>
                          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                        </span>
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="arlo_tm_contact_wrap">
                <div className="main_input_wrap">
                  <form
                    className="contact_form"
                    id="contact_form"
                    onSubmit={handleSubmit}
                  >
                    {/* Bẫy Bot (Honeypot) - Ẩn hoàn toàn với người dùng thực, bot quét tự động sẽ điền */}
                    <div
                      style={{
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 0,
                        width: 0,
                        zIndex: -1,
                        overflow: "hidden",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                    >
                      <label htmlFor="website_url">Do not fill this field</label>
                      <input
                        id="website_url"
                        name="website_url"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        defaultValue=""
                        ref={honeypotRef}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="wrap">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="wrap">
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="wrap">
                      <textarea
                        id="message"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows={5}
                      ></textarea>
                    </div>
                    <div style={{ marginTop: 28, textAlign: "left" }}>
                      <button
                        type="submit"
                        disabled={isSubmitting || isCooldownActive}
                        style={{
                          background:
                            isSubmitting || isCooldownActive
                              ? "#94a3b8"
                              : "linear-gradient(135deg, #E3872D 0%, #c46a16 100%)",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "30px",
                          padding: "14px 38px",
                          fontSize: "15px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          cursor:
                            isSubmitting || isCooldownActive
                              ? "not-allowed"
                              : "pointer",
                          boxShadow:
                            isSubmitting || isCooldownActive
                              ? "none"
                              : "0 6px 20px rgba(227, 135, 45, 0.45)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting && !isCooldownActive) {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                              "0 10px 28px rgba(227, 135, 45, 0.65)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting && !isCooldownActive) {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 6px 20px rgba(227, 135, 45, 0.45)";
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span style={{ display: "inline-block" }}>
                              Sending Message...
                            </span>
                          </>
                        ) : isCooldownActive ? (
                          <>
                            <span>Gửi lại sau ({remainingCooldown}s)</span>
                            <RiTimeLine size={18} />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <RiSendPlaneFill size={18} />
                          </>
                        )}
                      </button>

                      {isCooldownActive && (
                        <p
                          style={{
                            marginTop: 10,
                            fontSize: "13px",
                            color: "#64748b",
                            fontStyle: "italic",
                          }}
                        >
                          * Vui lòng chờ {remainingCooldown}s trước khi gửi tin nhắn tiếp theo để tránh spam.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_footer_wrap">
          <div className="container">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
