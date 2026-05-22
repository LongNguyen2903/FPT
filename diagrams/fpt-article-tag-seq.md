# Sơ đồ Sequence Diagram: Luồng Quản lý và Hiển thị Bài viết & FAQ theo Tag-based Mapping (Với Form Drawer & Article Preview)

Dưới đây là sơ đồ trình tự luồng nghiệp vụ quản lý bài viết/FAQ thông qua các Form Drawer trượt bên phải, tính năng Xem trước Bài viết (Article Preview Drawer) mô phỏng giao diện fpt.vn, cơ chế đồng bộ theo Tag, và quy tắc Fallback khi xem SKU Detail/Preview.

![Sơ đồ Sequence Diagram](./fpt-article-tag-seq.png)

## Mã nguồn Mermaid (Dùng để render ảnh)

```mermaid
%%{init: { 'theme': 'dark' } }%%
sequenceDiagram
    autonumber

    %% KHAI BÁO THỰC THỂ (UML 2.5)
    %% actor = Con người | participant = Hệ thống
    actor Operator as "Người vận hành"
    participant CMS as "CMS Portal (Wireframe)"
    participant Backdrop as "Backdrop mờ (Overlay)"
    participant FormDrawer as "Form Drawer (Trượt phải)"
    participant PreviewDrawer as "Article Preview Drawer"
    participant Mock as "Mock Data (Dữ liệu)"


    Note over Operator, Mock: 1. QUẢN LÝ DANH MỤC, CÂU HỎI & BÀI VIẾT (Thêm/Sửa bằng Form Drawer)


    Operator->>+CMS: "Mở tab Danh mục / Câu hỏi / Bài viết"
    CMS->>+Mock: "Tải danh sách dữ liệu tương ứng"
    Mock-->>-CMS: "Trả về danh sách mock data"
    CMS-->>-Operator: "Hiển thị danh sách bảng dữ liệu"


    rect rgba(100, 149, 237, 0.08)
        Operator->>+CMS: "Click nút 'Thêm mới' hoặc 'Sửa' một mục"
        CMS-)Backdrop: "Hiển thị backdrop mờ (display: block)"
        CMS->>+FormDrawer: "Điền dữ liệu mẫu & thiết lập display: flex"
        CMS-)FormDrawer: "Kích hoạt hiệu ứng trượt (transform: translateX(0) sau 10ms)"
        deactivate CMS
        FormDrawer-->>Operator: "Hiển thị Form Drawer trượt từ bên phải phủ lên nền cũ"
    end


    Operator->>FormDrawer: "Nhập thông tin & click 'Lưu'"
    FormDrawer->>+Mock: "Cập nhật dữ liệu mock data"
    Mock-->>-FormDrawer: "Xác nhận cập nhật thành công"
    FormDrawer-)Backdrop: "Ẩn backdrop (display: none)"

    FormDrawer->>+FormDrawer: "Trượt ẩn về bên phải (transform: translateX(100%))"
    deactivate FormDrawer
    FormDrawer->>+FormDrawer: "Ẩn hoàn toàn sau 250ms (display: none)"
    deactivate FormDrawer
    deactivate FormDrawer
    FormDrawer-->>Operator: "Cập nhật bảng danh sách hiển thị mới"


    Note over Operator, Mock: 2. TÍNH NĂNG XEM TRƯỚC BÀI VIẾT (Article Preview Drawer)


    Operator->>+CMS: "Click tiêu đề bài viết hoặc nút '👁️ Xem trước'"
    CMS->>+Mock: "Truy vấn thông tin chi tiết bài viết (art-1, art-2,...)"
    Mock-->>-CMS: "Trả về dữ liệu bài viết"

    rect rgba(50, 205, 50, 0.08)
        CMS-)Backdrop: "Hiển thị preview backdrop (display: block)"
        CMS->>+PreviewDrawer: "Render động giao diện mô phỏng fpt.vn tương ứng"
        CMS-)PreviewDrawer: "Thiết lập display: flex & transform: translateX(0)"
        deactivate CMS
        PreviewDrawer-->>Operator: "Hiển thị giao diện mô phỏng thực tế fpt.vn trượt từ bên phải"
    end


    Operator->>Backdrop: "Click vào vùng backdrop ngoài drawer hoặc click nút đóng (✖)"
    PreviewDrawer-)Backdrop: "Ẩn preview backdrop (display: none)"

    PreviewDrawer->>+PreviewDrawer: "Trượt ẩn về bên phải (transform: translateX(100%))"
    deactivate PreviewDrawer
    PreviewDrawer->>+PreviewDrawer: "Ẩn hoàn toàn sau 250ms (display: none)"
    deactivate PreviewDrawer
    deactivate PreviewDrawer


    Note over Operator, Mock: 3. CƠ CHẾ TAG-BASED MAPPING & FALLBACK TRONG SKU

    Operator->>+CMS: "Xem chi tiết SKU (Ví dụ: CAM-SE) hoặc mở SKU Preview"
    CMS->>+Mock: "Lấy danh sách tag của SKU và lọc bài viết trùng tag"


    alt Có bài viết trùng tag
        Mock-->>CMS: "Trả về các bài viết trùng tag SKU (Ví dụ: tag #camera)"
    else Không có bài viết trùng tag & Bật Fallback
        Mock-->>CMS: "Trả về bài viết Khuyến mãi Hot (tag #khuyenmai)"
    end
    deactivate Mock


    CMS->>+CMS: "Render Tab FAQ của SKU (Hiển thị song song FAQ & Bài viết liên quan)"
    deactivate CMS
    CMS-->>-Operator: "Hiển thị giao diện chi tiết SKU / Preview với liên kết Xem trước"
```

## Bảng ký hiệu sử dụng trong sơ đồ

| Ký hiệu | Cú pháp Mermaid | Ý nghĩa |
|:--------:|:----------------|:---------|
| 🧍 Actor | `actor Operator as "Người vận hành"` | Con người tương tác với hệ thống |
| 📦 Participant | `participant CMS as "CMS Portal"` | Thành phần nội bộ hệ thống |
| ──▶ Sync | `A->>B: "msg"` | Gọi đồng bộ — bên gửi **chờ** phản hồi |
| ╌╌▶ Return | `A-->>B: "msg"` | Phản hồi / Trả về kết quả |
| ──▷ Async | `A-)B: "msg"` | Gọi bất đồng bộ — bên gửi **không chờ** (hiệu ứng UI) |
| ↻ Self | `A->>A: "msg"` | Tự gọi xử lý nội bộ |
| ▮ Activate | `+` / `-` hoặc `activate`/`deactivate` | Hộp kích hoạt (đang xử lý tích cực) |
| [alt/else] | `alt ... else ... end` | Rẽ nhánh điều kiện if-else |
| 📝 Note | `Note over A, B: "text"` | Dải phân cảnh / Ghi chú ngang |
| 🟦 Rect | `rect rgba(...) ... end` | Highlight vùng xử lý UI quan trọng |

## Giải thích luồng nghiệp vụ chi tiết

### 1. Quản lý Danh mục, Câu hỏi & Bài viết trong CMS Portal
*   **Bước 1 - 4 (Tải danh sách)**: Người vận hành 🧍 điều hướng qua các tab "Bài viết", "Câu hỏi (FAQ)" hoặc "Danh mục". CMS Portal được **kích hoạt** (▮ activation box) xử lý yêu cầu, gọi đồng bộ (──▶) tới Mock Data để tải dữ liệu, nhận phản hồi (╌╌▶ return) và hiển thị danh sách trên bảng điều khiển.
*   **Bước 5 - 9 (Thêm/Sửa bằng Drawer — Vùng highlight 🟦)**: Khi người vận hành click thêm mới hoặc sửa, hệ thống:
    *   Gửi lệnh **bất đồng bộ** (──▷ async) tới Backdrop để hiển thị mờ ngay lập tức mà không chờ phản hồi.
    *   **Kích hoạt** (▮) Form Drawer bằng lời gọi đồng bộ, sau đó gửi async hiệu ứng trượt CSS.
    *   Drawer trượt mượt mà từ bên phải vào màn hình.
*   **Bước 10 - 16 (Lưu dữ liệu)**: Khi lưu thành công, dữ liệu được ghi đồng bộ vào Mock Data (▮ activate Mock → confirm → deactivate). Backdrop ẩn bằng async (`-)`), Drawer tự gọi (↻ self-message) để trượt ẩn và biến mất. Hộp activation của FormDrawer kết thúc (`deactivate`).

### 2. Tính năng Xem trước Bài viết (Article Preview Drawer)
*   **Bước 17 - 19 (Tải dữ liệu)**: Khi người vận hành muốn kiểm tra giao diện bài viết, CMS được **kích hoạt** (▮), gọi đồng bộ (──▶) tới Mock Data để lấy dữ liệu chi tiết bài viết dựa trên ID.
*   **Bước 20 - 23 (Mở Drawer — Vùng highlight 🟦)**: Hệ thống:
    *   Gửi **async** (──▷) tới Backdrop để hiển thị mờ ngay.
    *   **Kích hoạt** (▮) Article Preview Drawer, render động giao diện mô phỏng `fpt.vn`:
        *   **Camera IQ4S (`art-1`)**: Layout Smart Home cao cấp, tông màu cam/đen.
        *   **Aston Villa (`art-2`)**: Layout báo chí thể thao FPT Play.
        *   **Các bài khác**: Layout mặc định đơn giản.
*   **Bước 24 - 27 (Đóng Drawer)**: Click vùng backdrop → Drawer tự gọi (↻) trượt ẩn, **hủy kích hoạt** (`deactivate`) kết thúc activation box.

### 3. Tự động đồng bộ và Fallback trong SKU Detail & Preview
*   **Bước 28 - 29**: CMS được **kích hoạt** (▮), gọi đồng bộ tới Mock Data (▮ activate) để trích xuất Tag của SKU.
*   **Bước 30 - 31 (Rẽ nhánh `alt`/`else`)**: 
    *   ✅ **Nhánh 1 (alt)**: Có bài viết trùng tag → trả về bài viết trùng tag.
    *   🔄 **Nhánh 2 (else)**: Không trùng tag + Fallback bật → trả về bài Khuyến mãi Hot (`#khuyenmai`).
*   **Bước 32 - 33**: CMS tự gọi (↻ self-message) render Tab FAQ, sau đó trả kết quả (╌╌▶ return) cho Operator và **hủy kích hoạt** (`-`).
