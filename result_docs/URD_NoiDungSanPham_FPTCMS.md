# FPT.VN URD - PHÂN HỆ NỘI DUNG SẢN PHẨM (FPT CMS ADMIN)

**Mã tài liệu**: URDCMSPRODUCTCONTENTV1.1  
**Phiên bản**: V1.1  
**Ngày cập nhật**: 07/08/2026  
**Đơn vị thực hiện**: BA Senior & Product Owner Team  

---

## REVISION HISTORY

| Date | Version | Author | Change Description |
| :--- | :--- | :--- | :--- |
| 30/07/2026 | V1.0 | BA Senior & PO Team | Khởi tạo tài liệu URD toàn diện cho Phân hệ NỘI DUNG SẢN PHẨM (pdh-sku, cms-display, payment-methods, badge-tag). |
| 07/08/2026 | V1.1 | BA Senior & PO Team | **Cập nhật BR-TAG-02 Quy tắc Pop-up Cảnh báo Xóa Badge/Tag gỡ liên kết vào Sub-module 4**: Bật Modal xác nhận cảnh báo gỡ tag khỏi Card gói / Trang chi tiết / Checkout trước khi xóa khỏi thư viện. |

---

## IV. SUB-MODULE 4: QUẢN LÝ BADGE/TAG (badge-tag)

### 1. Business Rules
| Code | Quy tắc nghiệp vụ |
| :--- | :--- |
| **BR-TAG-01** | Mã Tag và Tên Tag không được trùng lặp trong cơ sở dữ liệu thư viện dùng chung. |
| **BR-TAG-02** | **Quy tắc Xóa & Pop-up Cảnh báo Gỡ liên kết Badge/Tag**:<br>- Khi người dùng thực hiện thao tác Xóa (🗑️) một Badge/Tag đang gắn với bất kỳ gói cước hoặc vị trí hiển thị nào (Card gói / Trang chi tiết / Checkout), hệ thống bắt buộc bật Modal Pop-up Cảnh báo xác nhận:<br>&nbsp;&nbsp;• *Tiêu đề Pop-up*: `Xóa Badge/Tag?`<br>&nbsp;&nbsp;• *Thông điệp Cảnh báo*: `Badge "[Tên Badge/Tag]" sẽ bị xóa khỏi thư viện. Nơi đang dùng badge này (Card gói / Trang chi tiết / Check out) sẽ không còn hiển thị tag.`<br>&nbsp;&nbsp;• *Nút hành động*: `Hủy` (Hủy bỏ thao tác xóa) và `Xác nhận` (Đồng ý xóa hẳn khỏi thư viện đồng thời tự động gỡ nhãn tag tại toàn bộ các vị trí/gói cước đang liên kết). |

### 2. Mô tả màn hình (Screen Description)
| Field / Nút Thao tác | Kiểu dữ liệu | Ràng buộc | Hành vi hệ thống |
| :--- | :--- | :--- | :--- |
| **Input Tên Badge/Tag** | Input Text | Max 50 ký tự | Tên nhãn hiển thị trên thẻ gói cước và Checkout. |
| **Color Picker Màu nền (Background)** | Color Input | Hex code (#HEX) | Thiết lập màu nền hiển thị của Tag. |
| **Color Picker Màu chữ (Text Color)** | Color Input | Hex code (#HEX) | Thiết lập màu chữ hiển thị của Tag. |
| **Checkbox Phạm vi áp dụng** | Multi Checkbox | Card, Detail, Checkout | Phân loại danh sách Tag xuất hiện tại các Dropdown cấu hình tương ứng. |
| **Nút Xóa (🗑️) trên dòng** | Table Action Icon | **Trigger Pop-up Cảnh báo BR-TAG-02** | Bật Modal Pop-up xác nhận xóa kèm thông điệp cảnh báo gỡ tag khỏi Card gói / Trang chi tiết / Checkout. |
