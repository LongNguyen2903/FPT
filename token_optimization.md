# Token Optimization Guide

## Mục tiêu
Giảm lượng token tiêu thụ trong mỗi phiên làm việc mà vẫn duy trì chất lượng phân tích và phát triển nghiệp vụ.

## Các nguyên tắc chính
1. **Tóm tắt thay vì đọc toàn bộ file**
   - Với các file lớn (PDF, DOCX, HTML, CSV) tạo file `*_summary.md` chứa các điểm chính, tiêu đề, cấu trúc và các đoạn mẫu cần thiết.
   - Trong các phiên làm việc sau, chỉ sử dụng `view_file` trên file tóm tắt này.
2. **Giới hạn phạm vi `view_file`**
   - Sử dụng `StartLine`/`EndLine` để đọc một đoạn cụ thể (ví dụ 1‑200 dòng) thay vì toàn bộ nội dung file.
3. **Xóa lịch sử không cần thiết**
   - Sau khi một nhiệm vụ hoàn thành, xóa các `PLANNER_RESPONSE` và log không liên quan để giảm token nhập ở các lượt sau.
4. **Chuẩn hoá đường dẫn và metadata**
   - Dùng alias ngắn gọn (ví dụ `ldp-camera.pdf`) thay vì đường dẫn tuyệt đối dài.
5. **Giới hạn độ dài phản hồi**
   - Đặt độ dài tối đa cho câu trả lời (~150‑200 token) khi không cần mô tả chi tiết.
6. **Lưu hướng dẫn trong file**
   - Tạo file `token_optimization.md` trong thư mục gốc hoặc `docs/` để mọi phiên làm việc có thể đọc nhanh (< 500 token).
7. **Phân tách mã nguồn (Decomposition) đối với các file UI/UX lớn**
   - Tách triệt để CSS và Javascript ra các file riêng biệt (ví dụ: `.css`, `.js` tách khỏi `.html` gốc). 
   - Khi cần chỉnh sửa giao diện hay logic, AI chỉ cần đọc và thao tác trên file CSS/JS tương ứng thay vì tải lại toàn bộ file HTML lớn (ví dụ >2MB).
8. **Định vị trước khi đọc (Read-After-Locate)**
   - Luôn dùng `grep_search` với từ khóa chính xác (ID, class, tên hàm) để xác định số dòng cần sửa trước khi gọi `view_file`.
9. **Áp dụng kỹ thuật chỉnh sửa cục bộ (Surgical Edits)**
   - Sử dụng `replace_file_content` hoặc `multi_replace_file_content` với phạm vi dòng cực kỳ hẹp để thay thế chính xác block code cần sửa, tránh viết lại boilerplate code không liên quan.
10. **Module hóa tài liệu nghiệp vụ (Modular Documentation)**
    - Chia nhỏ tài liệu URD/SRS theo từng phân hệ chức năng (Module) thay vì lưu trữ trong một file Word/PDF tổng dung lượng lớn. AI chỉ cần đọc tài liệu của phân hệ đang xử lý.

## Quy trình thực hiện
1. **Tạo file tóm tắt** cho mỗi tài liệu lớn (PDF, HTML, v.v.).
2. **Cập nhật alias** trong các lệnh công cụ.
3. **Xóa lịch sử** khi nhiệm vụ kết thúc.
4. **Tham khảo guide** ở đầu mỗi phiên làm việc.

---

*Áp dụng ngay để tối ưu token cho các phiên làm việc sau.*
