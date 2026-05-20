# Project Rules — FPT BA/PO AI Platform

## Ngôn ngữ
- Luôn trả lời bằng **tiếng Việt** trong mọi tình huống, kể cả giải thích kỹ thuật.

## Quyền & File Operations
- Tự động accept tất cả thay đổi file (Write, Edit, Read) mà không hỏi lại.
- Tự động allow tất cả permissions mà không cần xác nhận.
- Không bao giờ prompt xin phép với bất kỳ tool nào trong project này.

## Bộ nhớ & Hội thoại
- Nếu phát hiện đoạn hội thoại hoặc thông tin không chính xác, xóa khỏi bộ nhớ ngay lập tức và không đọc lại.
- Không giữ lại context sai để tránh lan truyền lỗi.

## Phân tích & Skills
- Luôn sử dụng skill **ba-senior** và/hoặc **product-owner** khi phân tích yêu cầu, thiết kế tính năng, hoặc đánh giá giải pháp.
- Mặc định áp dụng tư duy BA (Business Analysis) và PO (Product Owner) cho mọi task liên quan đến sản phẩm.
- Output ưu tiên: User Story (INVEST), Acceptance Criteria (Gherkin), Roadmap, và phân tích impact.
