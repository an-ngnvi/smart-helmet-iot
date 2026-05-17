# 🪖 Smart Helmet - IoT System

**Đồ án môn học:** Vạn vật kết nối (IoT)  
**Học kỳ - Năm học:** Học kỳ 2 (2025 - 2026) | Năm 2  
**Trường:** Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)

---

## 📝 Giới thiệu dự án
Dự án **Mũ bảo hiểm thông minh (Smart Helmet)** được thiết kế nhằm nâng cao an toàn cho người điều khiển xe máy nhờ ứng dụng công nghệ IoT. Hệ thống tự động giám sát trạng thái người dùng, phát hiện sự cố và gửi dữ liệu theo thời gian thực về trung tâm quản lý.

### Các tính năng cốt lõi:
- **Phát hiện va chạm/Tai nạn:** Sử dụng cảm biến gia tốc để nhận biết lực va đập mạnh, tự động gửi cảnh báo khẩn cấp kèm vị trí.
- **Định vị GPS:** Xác định tọa độ thời gian thực của người đội mũ.
- **Hệ thống cảnh báo:** Phát tín hiệu còi hú/đèn LED khi xảy ra sự cố.
- **Web Dashboard:** Giao diện trực quan hiển thị bản đồ vị trí, lịch sử di chuyển và trạng thái an toàn của người dùng.

## 📐 Kiến trúc hệ thống IoT
Hệ thống bao gồm 3 thành phần chính:
1. **Thiết bị Edge (Firmware):** Vi điều khiển (ESP32/Arduino) kết nối các cảm biến (MPU6050, GPS Neo-6M) gắn trên mũ bảo hiểm.
2. **Giao thức kết nối:** Truyền dữ liệu qua HTTP/MQTT về Cloud.
3. **Ứng dụng Web (Web App):** Nhận dữ liệu, lưu trữ và hiển thị trực quan lên Dashboard cho người thân hoặc trung tâm cứu hộ theo dõi.

## 🛠️ Công nghệ sử dụng
- **Phần cứng & Nhúng:** C/C++ (Arduino IDE), ESP32/ESP8266, GPS Module, MPU6050 Acceleration Sensor.
- **Phần mềm (Web):** HTML5, CSS3, JavaScript (hoặc điền Framework web bạn dùng như React/Node.js/PHP).
- **Giao thức:** MQTT / HTTP REST API.

## 🚀 Hướng dẫn triển khai

### 1. Triển khai phần cứng (Firmware)
- Mở thư mục `firmware/` bằng Arduino IDE.
- Cài đặt các thư viện cảm biến cần thiết.
- Cấu hình thông tin Wi-Fi/Thông tin MQTT Broker trong code.
- Biên dịch và nạp code xuống kit vi điều khiển trên mũ.

### 2. Triển khai phần mềm (Web)
- Mở thư mục `web/`.
- Cấu hình API kết nối tới cơ sở dữ liệu hoặc Broker để nhận dữ liệu từ mũ.
- Chạy ứng dụng trên local server hoặc deploy lên nền tảng web.

## 📊 Tài liệu dự án
Các sơ đồ nguyên lý phần cứng, sơ đồ khối hệ thống và tài liệu kiểm thử được lưu trữ tại thư mục `docs/`:
- 📜 **[Báo cáo môn học chính thức (PDF)](docs/report.pdf)**
- 📘 **[Hướng dẫn lắp ráp & Sử dụng (PDF)](docs/user-guide.pdf)**

---

## 👥 Sinh viên thực hiện
- **Họ và tên:** Nguyễn Văn An  
- **Mã số sinh viên:** [Điền MSSV của bạn vào đây]