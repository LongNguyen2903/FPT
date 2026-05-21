# Sơ đồ Sequence Diagram: Luồng Bộ chọn SKU nâng cao (Advanced SKU Selector)

Dưới đây là sơ đồ luồng hoạt động của bộ chọn SKU nâng cao khi người dùng cấu hình Tag Mapping trong trang CMS quản lý Thông tin hay. Thiết kế này giúp hệ thống xử lý mượt mà và trực quan ngay cả khi có hàng trăm hoặc hàng ngàn SKU sản phẩm.

![Sơ đồ Sequence Diagram](./sku-selector-ux-flow.png)

## Mã nguồn Mermaid (Dùng để render ảnh)
```mermaid
%%{init: { 'theme': 'dark' } }%%
sequenceDiagram
    autonumber
    participant User as "Người dùng (Admin)"
    participant Sidebar as "Sidebar Cấu hình Tag"
    participant Modal as "Modal SKU Selector"
    participant Data as "Trạng thái Dữ liệu (JS)"
    participant MainTable as "Bảng Danh sách chính"

    Note over User, Sidebar: KHỞI ĐỘNG CẤU HÌNH SKU
    User->>Sidebar: "1. Click nút '✏️ Quản lý SKUs'"
    Sidebar->>Data: "2. Sao chép danh sách SKU đã liên kết sang biến tạm tempSelectedSkus"
    Sidebar->>Modal: "3. Mở Modal chọn SKU nâng cao"
    Modal->>Modal: "4. Render danh sách SKU ban đầu dựa trên tempSelectedSkus"

    Note over User, Modal: TƯƠNG TÁC TÌM KIẾM & LỌC TRÊN MODAL
    User->>Modal: "5. Nhập từ khóa hoặc chọn bộ lọc Dịch vụ (Internet/Camera/...)"
    Modal->>Modal: "6. Lọc động danh sách SKU hiển thị (giữ nguyên trạng thái checkbox đã chọn)"
    
    User->>Modal: "7. Check/uncheck từng SKU HOẶC Click 'Chọn tất cả / Bỏ chọn tất cả'"
    Modal->>Data: "8. Cập nhật các thay đổi vào biến tạm tempSelectedSkus"
    Modal->>Modal: "9. Highlight các SKU được chọn & cập nhật bộ đếm 'Đã chọn N SKUs'"

    Note over User, MainTable: XÁC NHẬN VÀ LƯU THAY ĐỔI
    User->>Modal: "10. Click 'Xác nhận chọn'"
    Modal->>Sidebar: "11. Đóng Modal & render lại khu vực Preview Badges trên Sidebar"
    User->>Sidebar: "12. Click nút 'Lưu cấu hình'"
    Sidebar->>Data: "13. Ghi đè tempSelectedSkus vào tagMappingData[tag].skus"
    Sidebar->>MainTable: "14. Render lại bảng chính (Tự động thu gọn +N SKUs nếu SKU > 3)"
    MainTable-->>User: "15. Hiển thị thông báo lưu thành công & cập nhật bảng gọn gàng"
```

## Giải thích luồng nghiệp vụ chi tiết

### 1. Khởi động và Khởi tạo trạng thái tạm thời
*   **Bước 1 - 2:** Khi người dùng bắt đầu chỉnh sửa danh sách SKU liên kết cho một Tag, hệ thống không cập nhật trực tiếp vào dữ liệu gốc mà sao chép danh sách SKU cũ sang một biến tạm `tempSelectedSkus`. Điều này giúp người dùng dễ dàng bấm "Hủy" mà không làm thay đổi dữ liệu hiện tại.
*   **Bước 3 - 4:** Modal chọn SKU mở ra và hiển thị danh sách SKU với trạng thái checkbox được check tương ứng dựa trên `tempSelectedSkus`.

### 2. Tìm kiếm, Lọc và Chọn hàng loạt
*   **Bước 5 - 6:** Khi danh sách SKU quá lớn, người dùng có thể tìm kiếm nhanh theo mã/tên SKU hoặc lọc theo phân loại (Internet, Camera, Truyền hình, Thiết bị). Việc lọc này chỉ ẩn/hiển thị các phần tử trên giao diện, không làm mất đi các SKU đã được chọn trước đó.
*   **Bước 7 - 9:** Người dùng có thể click chọn nhanh tất cả SKU đang hiển thị sau khi lọc. Biến tạm `tempSelectedSkus` được đồng bộ thời gian thực và cập nhật bộ đếm "Đã chọn N SKUs" trên tiêu đề modal.

### 3. Đồng bộ giao diện và Lưu cấu hình
*   **Bước 10 - 11:** Khi bấm "Xác nhận", modal đóng lại và danh sách SKU được hiển thị gọn gàng trên sidebar dưới dạng các Chips/Badges kèm nút xóa nhanh `x` để người dùng có thể loại bỏ nhanh SKU mà không cần mở lại modal.
*   **Bước 12 - 15:** Khi lưu cấu hình, dữ liệu chính thức được ghi nhận. Bảng danh sách tag mapping ở bên trái sẽ hiển thị danh sách SKU thu gọn: hiển thị tối đa 3 SKU đầu tiên, còn lại hiển thị badge số lượng `+N` kèm tooltip hiển thị toàn bộ danh sách khi rê chuột vào, giúp giao diện bảng luôn cân đối và không bị kéo giãn chiều cao dòng.
