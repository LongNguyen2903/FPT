# Sơ đồ Sequence Diagram: Hiển thị Block "Thông tin hay" theo Tag sản phẩm

Dưới đây là sơ đồ trực quan luồng tự động hiển thị bài viết liên quan (Thông tin hay) dựa trên Tag sản phẩm, cập nhật theo cơ chế cấu hình tập trung mới.

![Sơ đồ Sequence Diagram](./fpt-article-tag-seq.png)

## Mã nguồn Mermaid (Dùng để render ảnh)
```mermaid
%%{init: { 'theme': 'dark' } }%%
sequenceDiagram
    autonumber
    participant Admin as "Vận hành Admin"
    participant Portal as "CMS Portal"
    participant Customer as "Khách hàng"
    participant FE as "Website FE"
    participant API as "CMS API"
    participant DB as "Cơ sở dữ liệu"

    Note over Admin, DB: Phân hệ thiết lập (Vận hành Admin)
    Admin->>Portal: "1. Đăng tải/Chỉnh sửa bài viết (Gán tag: 'camera')"
    Portal->>DB: "2. Lưu thông tin bài viết & tag"
    Admin->>Portal: "3. Truy cập Menu 'Cấu hình Thông tin hay' & gán SKUs cho tag 'camera'"
    Portal->>DB: "4. Lưu ma trận liên kết Tag-based Mapping"

    Note over Customer, DB: Phân hệ hiển thị (End-User)
    Customer->>FE: "5. Truy cập chi tiết sản phẩm Camera SE"
    FE->>API: "6. Yêu cầu dữ liệu SKU sản phẩm"
    API->>DB: "7. Truy vấn thông tin SKU"
    DB-->>API: "8. Trả về thông tin SKU & tag liên kết ('camera')"
    API->>DB: "9. Truy vấn bài viết có tag 'camera' (Top 5 mới nhất)"
    DB-->>API: "10. Trả về danh sách bài viết trùng tag"
    API-->>FE: "11. Trả về dữ liệu SKU & danh sách bài viết"
    FE-->>Customer: "12. Dựng UI chi tiết & hiển thị khối 'Thông tin hay'"
```

## Giải thích luồng nghiệp vụ chi tiết

### 1. Phân hệ thiết lập (Vận hành Admin)
*   **Bước 1 - 2:** Khi Vận hành đăng tải hoặc chỉnh sửa bài viết trong module Quản lý Bài viết & FAQ, họ sẽ gán các tag có liên quan. Ví dụ: một bài viết về đánh giá camera sẽ được đánh tag "camera". Hệ thống lưu thông tin bài viết kèm tag vào DB.
*   **Bước 3 - 4:** Tại menu **Cấu hình Thông tin hay** tập trung dưới CMS, Vận hành chọn tag "camera" và tick chọn liên kết các SKU dòng sản phẩm tương ứng (ví dụ: `CAM-IQ3`, `CAM-SE`), bật/tắt logic Fallback. Hệ thống ghi nhận ma trận mapping này vào DB và tự động đồng bộ hai chiều.

### 2. Phân hệ hiển thị (End-User)
*   **Bước 5 - 6:** Khách hàng truy cập trang chi tiết sản phẩm Camera SE. Trình duyệt gửi yêu cầu lấy dữ liệu chi tiết sản phẩm tới CMS API.
*   **Bước 7 - 8:** API truy xuất thông tin SKU từ DB, lấy ra được các tag liên kết là "camera".
*   **Bước 9 - 10:** CMS API thực hiện truy vấn thứ hai tới DB để tìm kiếm các bài viết được đánh tag "camera", sắp xếp theo thời gian mới nhất và giới hạn tối đa 5 bài viết.
*   **Bước 11 - 12:** API tổng hợp thông tin SKU và danh sách bài viết trùng tag trả về cho Website FE. Giao diện dựng hoàn chỉnh thông số sản phẩm và khối Sticky "Thông tin hay" hiển thị dọc trang.
