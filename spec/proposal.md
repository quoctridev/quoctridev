# Proposal – Personal Portfolio Website

## Tổng quan dự án

**Tên dự án:** Portfolio Nguyễn Quốc Anh (Trí)  
**Tác giả:** Nguyễn Quốc Anh (sinh ngày 12/04/2007)  
**Mục tiêu:** Xây dựng website portfolio cá nhân hiện đại để giới thiệu bản thân, kỹ năng, thành tích và các dự án tiêu biểu.

---

## Mục tiêu

1. **Giới thiệu bản thân** – Trình bày thông tin cá nhân, vai trò Fullstack Developer và phương thức liên hệ.
2. **Showcase dự án** – Hiển thị các dự án tiêu biểu với hình ảnh, mô tả và công nghệ sử dụng.
3. **Thể hiện chuyên môn** – Liệt kê các kỹ năng chính: Backend, Frontend, database, deploy và automation.
4. **Cung cấp công cụ tiện ích** – Tích hợp các mini-tool hữu ích cho kỹ thuật viên (PSU Calculator, Tech Toolkit, Thiệp cưới,...).
5. **Tạo ấn tượng chuyên nghiệp** – Giao diện đẹp, responsive, có dark mode và animation mượt mà.

---

## Phạm vi dự án

### Trang chính (index.html)

| Section | Mô tả |
|---------|-------|
| **Hero** | Tên, vai trò, bio ngắn và social chính (Facebook, GitHub) |
| **Skills** | Nhóm kỹ năng chính: Backend, Frontend, Deploy, Automation |
| **Projects** | Các dự án tiêu biểu lấy từ GitHub profile |
| **Achievements** | Thành tích nổi bật trong quá trình học tập |
| **Contact** | CTA liên hệ qua email, Telegram và điện thoại |

### Trang tiện ích

| File | Chức năng |
|------|-----------|
| `tech-toolkit-v1.html` | Bộ công cụ offline cho KTV PC & Android (PSU calc, SHA-256, ADB Builder, DPI/dp converter,...) |
| `psuUtil.html` | Chuyển đổi Volt ↔ Watt ↔ Ampere cho nguồn điện |
| `taothiepcuoi.html` | Tạo thiệp mời cưới với QR code, tải PNG, nhạc nền |
| `inputDateTime-custom.html` | Demo custom input datetime |

---

## Công nghệ sử dụng

| Layer | Công nghệ |
|-------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Styling** | Tailwind CSS (CDN), Custom CSS Variables |
| **Animation** | AOS (Animate On Scroll) |
| **Slider** | Swiper.js |
| **Icons** | Phosphor Icons |
| **Fonts** | Inter (Google Fonts), Great Vibes, Playfair Display, Poppins |
| **QR Code** | qrcodejs |
| **Screenshot** | html2canvas |

---

## Tính năng nổi bật

- ✅ **Dark Mode** – Chuyển đổi sáng/tối với lưu localStorage
- ✅ **Responsive Design** – Tương thích mobile, tablet, desktop
- ✅ **Smooth Animation** – AOS fade, zoom, slide effects
- ✅ **Data-driven** – Dữ liệu profile/projects được quản lý tập trung trong `data.json`
- ✅ **Offline Tools** – Các tiện ích chạy trực tiếp trên trình duyệt, không cần server
- ✅ **SEO Ready** – Meta tags, semantic HTML, sitemap.xml
- ✅ **PWA Ready** – CNAME cho custom domain

---

## Lộ trình phát triển

### Phase 1: MVP ✅ (Hoàn thành)
- [x] Trang portfolio chính với đầy đủ sections
- [x] Dark mode toggle
- [x] Responsive layout
- [x] Các trang utility tools

### Phase 2: Enhancement (Đề xuất)
- [ ] Thêm trang Blog/Articles
- [ ] Tích hợp form liên hệ với backend (PHP/NodeJS)
- [ ] Thêm analytics (Google Analytics)
- [ ] Tối ưu SEO nâng cao
- [ ] Thêm animations nâng cao (GSAP)

### Phase 3: Advanced (Tương lai)
- [ ] Chuyển sang framework (Next.js/Nuxt.js)
- [ ] CMS headless cho quản lý nội dung
- [ ] Đa ngôn ngữ (i18n)
- [ ] Tích hợp CI/CD

---

## Kết luận

Dự án đã hoàn thành MVP với giao diện chuyên nghiệp, responsive và có các tính năng hiện đại. Các trang utility tool là điểm nhấn độc đáo, thể hiện kỹ năng kỹ thuật của chủ sở hữu portfolio.
