# WORKSPACE RULES & AGENT GUIDELINES

🚨 **QUY TẮC ƯU TIÊN CAO NHẤT (HIGHEST PRIORITY RULE)**:
- **BẢO TỒN NỘI DUNG ĐÃ HOÀN THIỆN & TUÂN THỦ TEMPLATE**: Tuyệt đối KHÔNG ĐƯỢC tự ý chỉnh sửa, làm xáo trộn hoặc thay đổi các thông tin/nội dung đã hoàn thiện trong tài liệu. Bắt buộc phải TUÂN THỦ NGHIÊM NGẠT cấu trúc Template chuẩn đã được quy định (`.agent/skills/ba-senior/templates/fpt_urd_template.doc`). KHÔNG ĐƯỢC tự ý làm khác template hay tự phát sinh thêm các mục/cấu trúc mới (ví dụ: Kịch bản nghiệm thu Gherkin, v.v...) nếu chưa có sự cho phép từ người dùng.

1. Luôn trả lời bằng tiếng Việt.
2. Tự động cho phép accept change file mà không cần hỏi lại.
3. Luôn dùng skills ba-senior / product-owner / doc-toolkit để phân tích và xử lý tài liệu.
4. Khi làm việc hoặc viết docs luôn format theo chuẩn UTF-8.
5. Tuyệt đối không được rollback hoặc ghi đè các đoạn code/nội dung cũ đã chạy ổn định khi thêm tính năng mới.
6. Tránh sử dụng PowerShell để đọc/ghi/sửa đổi file code. Bắt buộc dùng trực tiếp các công cụ ghi file của hệ thống IDE (replace_file_content, write_to_file) để ngăn ngừa lỗi vỡ font chữ (Mojibake).
7. **Quy tắc tạo và xuất tài liệu Word (URD/SRS/DOCX)**: Khi viết, tạo mới hoặc export tài liệu Word URD/SRS cho dự án FPT, BẮT BUỘC **chỉ xuất định dạng `.docx`** (KHÔNG cần tạo file `.doc`), đồng thời áp dụng chính xác CSS, cấu trúc HTML-Word, Trang bìa Header, Bảng Revision History (`table.data-table`), Bảng UseCase (`table.usecase-table` với `td.label` background `#f2f2f2`) và chuẩn màu sắc từ template `.agent/skills/ba-senior/templates/fpt_urd_template.doc`.

