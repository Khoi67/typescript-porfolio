# Hướng Dẫn Quản Lý & Cập Nhật Portfolio

Chào bạn! Dự án Portfolio này đã được refactor theo chuẩn **Clean Architecture / Data-Driven Configuration** (Single Source of Truth). 

Từ bây giờ, bạn **KHÔNG CẦN** can thiệp vào code React/TSX trong thư mục `src/components/` khi muốn thay đổi thông tin. Mọi dữ liệu đều được quản lý tập trung tại:

📍 **`src/data/portfolioData.ts`**

---

## 🚀 Hướng Dẫn Cập Nhật Nhanh

### 1. Thông Tin Cá Nhân & Bio (`personalInfo`)
Mở `src/data/portfolioData.ts`:
- **Họ & Tên**: Sửa `firstName`, `lastName`, `fullName`.
- **Chức danh chạy hiệu ứng chữ (Typewriter)**: Sửa mảng `typingSequence`.
  ```ts
  typingSequence: [
    "Web Developer", 3000,
    "Fullstack Developer", 2500,
    "IT Help Desk", 2000,
  ]
  ```
- **Câu châm ngôn (Quote)**: Sửa thuộc tính `quote`.
- **Đoạn văn giới thiệu (Bio)**: Thêm hoặc sửa các câu trong mảng `bio`.
- **Bảng thông tin chi tiết**: Thêm/sửa các thuộc tính trong `attributes` (Sinh nhật, Giới tính, Trường, Ngành học, Email, Link Facebook,...).
- **Ảnh đại diện & CV**: Đặt file mới vào `src/assets/` và import tương ứng ở đầu file.

---

### 2. Kỹ Năng Chuyên Môn (`skillCategories`)
Muốn thêm nhóm kỹ năng mới (ví dụ: Cloud / DevOps / Testing) hoặc sửa phần trăm thanh tiến trình:
```ts
skillCategories: [
  {
    title: "DevOps & Cloud",
    descriptionPoints: [
      "CI/CD: GitHub Actions, Docker",
      "Cloud: AWS (S3, EC2), Vercel",
    ],
    skills: [
      { name: "Docker", percentage: 80, color: "#333" },
      { name: "AWS", percentage: 70, color: "#333" },
    ],
  },
  // Các nhóm khác...
]
```

---

### 3. Thêm / Sửa Dự Án (`projects`)
Muốn thêm 1 dự án mới, chỉ cần thêm 1 object vào mảng `projects`:
```ts
{
  id: "ten-du-an-moi",
  title: "Tên Dự Án",
  shortDescription: "Mô tả ngắn gọn hiển thị trên card.",
  icon: "react", // Hỗ trợ: "react" | "trello" | "movie" | "form" | "list" | custom JSX
  iconColor: "#2bebfd",
  detail: {
    description: "Mô tả chi tiết bài toán và giải pháp...",
    frontend: "Next.js, TailwindCSS",
    backend: "NestJS, PostgreSQL",
    member: 1,
    role: "Fullstack Developer",
    demo: "https://your-demo.vercel.app",
    github: "https://github.com/your-username/repo",
    tags: ["Next.js", "NestJS", "TypeScript"],
  },
}
```

---

### 4. Mạng Xã Hội (`socialLinks`) & Menu (`navigation`)
- Khi cập nhật `socialLinks` hoặc `navigation`, cả thanh bên Desktop (`LeftPart`) lẫn Menu trên điện thoại (`MobileMenu`) sẽ **tự động đồng bộ** mà không bị lệch hay quên chỗ nào.

---

### 5. Cấu Hình Email Tự Động (EmailJS)
Form liên hệ hỗ trợ nhận tin nhắn trực tiếp vào hộp thư Gmail của bạn thông qua EmailJS (Free 200 email/tháng):
1. Đăng ký tài khoản tại [emailjs.com](https://www.emailjs.com/).
2. Kết nối Gmail của bạn tại **Email Services** ➔ Lấy **Service ID**.
3. Tạo template tại **Email Templates** với các biến:
   - `{{from_name}}`: Tên người gửi
   - `{{from_email}}`: Email người gửi
   - `{{message}}`: Nội dung tin nhắn
   - `{{reply_to}}`: Trỏ tới `{{from_email}}`
   ➔ Lấy **Template ID**.
4. Vào **Account** ➔ **API Keys** ➔ Lấy **Public Key**.
5. Mở file `.env` và điền:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

---

## 🛠️ Lệnh Chạy Dự Án

- **Khởi động server phát triển (Dev server)**:
  ```bash
  cmd /c npm run dev
  ```
- **Kiểm tra kiểu dữ liệu & Build production**:
  ```bash
  cmd /c npm run build
  ```
