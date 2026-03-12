# quoctri.dev

Portfolio cá nhân của Nguyễn Quốc Anh, mọi người thường gọi là Trí.

Website: [quoctri.dev](https://quoctri.dev)

## Thông tin nhanh

- Java Backend Developer
- Hiện đang làm chính tại Bee Logistics
- Từng làm Java Backend Developer tại VAWAY
- Từng học tại FPT Polytechnic, GPA 3.85/4.0
- Sinh ngày 12/04/2007, ở Hải Phòng

## Định hướng

Mình tập trung vào Java Backend, ưu tiên các hệ thống rõ nghiệp vụ, dễ mở rộng và chạy ổn định trong môi trường thực tế. Stack mình dùng nhiều là Spring Boot, Spring Security, JPA/Hibernate, RESTful API, Docker, Nginx và các hệ quản trị cơ sở dữ liệu như MySQL, MongoDB, MSSQL.

## Kỹ năng chính

- Java, JavaScript
- Spring Boot, Spring Security, JPA/Hibernate, RESTful API
- ReactJS, HTML, CSS, TailwindCSS
- MySQL, MongoDB, MSSQL
- Docker, Nginx, VPS
- Git, GitHub, Postman, VS Code, IntelliJ IDEA

## Dự án nổi bật

### Foco

Nền tảng SaaS quản lý bán hàng đa chi nhánh. Mình phụ trách backend, thiết kế dữ liệu, xây hơn 20 RESTful APIs, áp dụng JWT và phân quyền để đồng bộ frontend-backend theo nghiệp vụ thực tế.

Tech: `Spring Boot`, `Spring Security`, `JWT`, `SQL Server`, `Cloudflare R2`  
Source: [github.com/quoctridev/Foco](https://github.com/quoctridev/Foco)

### POS_Func

Dự án tốt nghiệp Java Swing theo mô hình nhiều lớp DAO - DTO - Entity - UI, xử lý bán hàng, hóa đơn, kho, phân quyền người dùng và thống kê doanh thu.

Tech: `Java Swing`, `SQL Server`, `DAO/DTO`, `Inventory`, `Statistics`  
Source: [github.com/quoctridev/POS_Func](https://github.com/quoctridev/POS_Func)

### QuocTriMoney

Tool automation nhận webhook giao dịch ngân hàng rồi đẩy thông báo sang Telegram, phục vụ theo dõi giao dịch nhanh và dễ mở rộng thêm tích hợp khác.

Tech: `Node.js`, `Express`, `Telegram Bot`, `SePay`, `Webhook`  
Source: [github.com/quoctridev/QuocTriMoney](https://github.com/quoctridev/QuocTriMoney)

## Thành tích

- Top 3 sinh viên xuất sắc nhất ngành
- Ong Vàng học kỳ Summer 2024
- Quán quân BugSlayer FPT Thanh Hóa
- MOS Word 925
- Tham gia Hackathon FPT

## Liên hệ

- Website: [quoctri.dev](https://quoctri.dev)
- GitHub: [github.com/quoctridev](https://github.com/quoctridev)
- Facebook: [facebook.com/quoctris.dev](https://www.facebook.com/quoctris.dev/)
- Telegram: [@quoctrisdev](https://t.me/quoctrisdev)
- Email: [quoctris.dev@gmail.com](mailto:quoctris.dev@gmail.com)
- SĐT: `0793391878`

## Chạy local

```bash
node server.js
```

Site sẽ chạy tại `http://127.0.0.1:4173`.

Nếu muốn dùng form liên hệ Telegram:

1. Tạo file `.env` từ `.env.example`
2. Điền `TELEGRAM_BOT_TOKEN` và `TELEGRAM_CHAT_ID`
3. Chạy lại `node server.js`
