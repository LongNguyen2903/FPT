# Project Rules — FPT BA/PO AI Platform

## Ngôn ngữ
- Luôn trả lời bằng **tiếng Việt** trong mọi tình huống, kể cả giải thích kỹ thuật.

## Quyền & File Operations
- Tự động accept tất cả thay đổi file (Write, Edit, Read) mà không hỏi lại.
- Tự động allow tất cả permissions mà không cần xác nhận.
- Không bao giờ prompt xin phép với bất kỳ tool nào trong project này.
- Tự động submit hết mà không cần xác nhận thêm.
- Tự động xóa các file dư thừa sau khi hoàn thành task.

## Bộ nhớ & Hội thoại
- Nếu phát hiện đoạn hội thoại hoặc thông tin không chính xác, xóa khỏi bộ nhớ ngay lập tức và không đọc lại.
- Không giữ lại context sai để tránh lan truyền lỗi.
- Luôn đọc file global rule (`C:\Users\Admin\.gemini\GEMINI.md`) khi bắt đầu làm task và khi mở hội thoại mới.

## Phân tích & Skills
- Luôn sử dụng skill **ba-senior** và/hoặc **product-owner** khi phân tích yêu cầu, thiết kế tính năng, hoặc đánh giá giải pháp.
- Mặc định áp dụng tư duy BA (Business Analysis) và PO (Product Owner) cho mọi task liên quan đến sản phẩm.
- Output ưu tiên: User Story (INVEST), Acceptance Criteria (Gherkin), Roadmap, và phân tích impact.
- Khi phân tích UI/UX phải sử dụng skill **designer**.

## Browser & Web Review
- Cho phép mở browser tự động mỗi khi có yêu cầu review qua trang web, không cần xác nhận.
- Khi cần view hoặc phân tích website, sử dụng Chrome profile **Long Nguyen**.
