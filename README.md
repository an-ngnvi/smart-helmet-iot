# 🪖 Smart Helmet - Mũ Bảo Hiểm Thông Minh

**Đồ án môn học:** Vạn vật kết nối (IoT)  
**Học kỳ - Năm học:** Học kỳ 2 (2024 - 2025)  
**Trường:** Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)  

---

## 📝 Giới thiệu dự án
Dự án thiết kế hệ thống **mũ bảo hiểm thông minh** tích hợp cảm biến đo nhiệt độ, độ ẩm và nồng độ bụi mịn PM2.5. Khi bụi vượt ngưỡng nguy hiểm, hệ thống tự động đóng kính chắn gió bằng servo motor để bảo vệ người dùng. Dữ liệu hiển thị trực tiếp trên màn hình OLED, giao diện web cục bộ và được lưu trữ lên Google Sheets trên cloud.

### Tính năng chính:
* **Đo môi trường:** Nhiệt độ, độ ẩm (DHT11), nồng độ bụi mịn PM2.5 (GP2Y1010AU0F)
* **Chắn bụi tự động:** Servo motor tự động đóng/mở kính chắn gió theo ngưỡng bụi cài đặt
* **Cảnh báo:** Còi buzzer và đèn LED khi vượt ngưỡng nguy hiểm
* **Hiển thị:** Màn hình OLED SH1106G hiển thị trạng thái và chỉ số môi trường
* **Web Dashboard:** Giao diện web cục bộ xem dữ liệu, biểu đồ và cấu hình ngưỡng
* **Lưu trữ cloud:** Đẩy dữ liệu lên Google Sheets qua HTTP
* **Blynk:** Theo dõi và điều khiển từ xa qua ứng dụng Blynk

---

## 📐 Luồng xử lý của hệ thống
* **Đầu vào:** Cảm biến DHT11 và GP2Y1010AU0F thu thập dữ liệu môi trường, gửi về vi điều khiển ESP32.
* **Xử lý trung tâm:** ESP32 tính toán dữ liệu (áp dụng thuật toán lọc Kalman) và đưa ra quyết định điều khiển ngoại vi.
* **Đầu ra tại chỗ:** Hiển thị thông số lên màn hình OLED, điều khiển Servo motor đóng/mở kính chắn gió và kích hoạt còi còi báo động Buzzer khi cần.
* **Kết nối Cloud & Web:** ESP32 khởi tạo Web Server cục bộ để chạy Web Dashboard, đồng thời đồng bộ dữ liệu trực tuyến lên Google Sheets và ứng dụng Blynk IoT.

---

## 🛠️ Công nghệ sử dụng

### Phần cứng:
* **Vi điều khiển:** ESP32
* **Cảm biến nhiệt độ/độ ẩm:** DHT11
* **Cảm biến bụi:** GP2Y1010AU0F
* **Màn hình:** OLED SH1106G (I2C)
* **Thiết bị ngoại vi:** Servo motor, Buzzer, LED, 3 nút nhấn

### Phần mềm:
* **Firmware:** C/C++ (Arduino IDE), FreeRTOS tasks, Kalman Filter
* **Web:** HTML, CSS, JavaScript, Bootstrap 4, Chart.js, DataTables
* **Backend:** Google Apps Script (Google Sheets), Blynk IoT Platform

---

## 🚀 Hướng dẫn triển khai

### 1. Firmware (ESP32)
* Mở thư mục `firmware/` bằng Arduino IDE.
* Cài đặt các thư viện: `BlynkSimpleEsp32`, `DHT`, `GP2Y1010AU0F`, `ESPAsyncWebServer`, `Adafruit_SH110X`, `SimpleKalmanFilter`, `ESP32Servo`, `Arduino_JSON`.
* Cấu hình WiFi và Blynk Token qua giao diện web sau khi nạp code (ESP32 chạy ở chế độ AP: `ESP32_IOT`).
* Nạp code xuống ESP32.

### 2. Web Dashboard
* Mở thư mục `web/`.
* Deploy file `Mã.gs` lên Google Apps Script và lấy URL endpoint.
* Điền URL endpoint vào biến `googleSheetURL` trong firmware.
* Truy cập dashboard qua IP của ESP32 hoặc địa chỉ `esp32.local`.