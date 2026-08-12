# USER REQUIREMENTS DOCUMENT (URD)
**Dự án:** FPT CMS Admin - Hệ thống Quản trị Nội dung FPT Telecom  
**Phân hệ:** NỘI DUNG SẢN PHẨM  
**Mã hiệu:** URDCMSPRODUCTCONTENTV1.1  
**Phiên bản:** 1.1  
**Ngày cập nhật:** 06/08/2026  

---

## REVISION HISTORY

| Date | Version | Author | Change Description |
| :--- | :--- | :--- | :--- |
| 30/07/2026 | V1.0 | BA Senior & Product Owner Team | Tổng hợp và khởi tạo tài liệu URD toàn diện cho Phân hệ NỘI DUNG SẢN PHẨM (pdh-sku, cms-display, payment-methods, badge-tag). |
| 06/08/2026 | V1.1 | BA Senior & Product Owner Team | **Bổ sung Phân định Nguồn Hệ thống ECP / FCP**: Thêm cột HỆ THỐNG & bộ lọc Hệ thống trên màn Nội dung sản phẩm (`pdh-sku`), Thêm dải Tab chọn ECP/FCP và nút Chọn Tất Cả theo hệ thống tại màn Cấu hình Checkout (`cms-display`) phục vụ Vận hành (VH) không bị nhập sót thông tin. |

---

## MỤC LỤC
- [A. GIỚI THIỆU](#a-giới-thiệu)
  - [1. Mục đích tài liệu](#1-mục-đích-tài-liệu)
  - [2. Thông tin chung](#2-thông-tin-chung)
  - [3. Thuật ngữ và viết tắt](#3-thuật-ngữ-và-viết-tắt)
- [B. TỔNG QUAN HỆ THỐNG](#b-tổng-quan-hệ-thống)
  - [1. Sơ đồ luồng nghiệp vụ tổng quan (Business Flow)](#1-sơ-đồ-luồng-nghiệp-vụ-tổng-quan-business-flow)
  - [2. Danh sách các chức năng (Function List)](#2-danh-sách-các-chức-năng-function-list)
  - [3. Ma trận quyền (Permission Matrix)](#3-ma-trận-quyền-permission-matrix)
- [C. ĐẶC TẢ CHI TIẾT CÁC CHỨC NĂNG](#c-đặc-tả-chi-tiết-các-chức-năng)
  - [I. SUB-MODULE 1: QUẢN LÝ NỘI DUNG SẢN PHẨM (pdh-sku)](#i-sub-module-1-quản-lý-nội-dung-sản-phẩm-pdh-sku)
  - [II. SUB-MODULE 2: THÔNG TIN CHECKOUT & BANNER/POPUP CHECKOUT (cms-display)](#ii-sub-module-2-thông-tin-checkout--bannerpopup-checkout-cms-display)
  - [III. SUB-MODULE 3: PHƯƠNG THỨC THANH TOÁN (payment-methods)](#iii-sub-module-3-phương-thức-thanh-toán-payment-methods)
  - [IV. SUB-MODULE 4: THƯ VIỆN QUẢN LÝ BADGE/TAG (badge-tag)](#iv-sub-module-4-thư-viện-quản-lý-badgetag-badge-tag)
  - [V. QUY TẮC NGHIỆP VỤ HỆ THỐNG (BUSINESS RULES)](#v-quy-tắc-nghiệp-vụ-hệ-thống-business-rules)
  - [VI. MÔ TẢ MÀN HÌNH (SCREEN DESCRIPTIONS)](#vi-mô-tả-màn-hình-screen-descriptions)
  - [VII. CÁC TRƯỜNG HỢP LỖI & THÔNG BÁO (ERROR MESSAGES)](#vii-các-trường-hợp-lỗi--thông-báo-error-messages)
- [D. YÊU CẦU PHI CHỨC NĂNG](#d-yêu-cầu-phi-chức-năng)
- [E. PHỤ LỤC](#e-phụ-lục)

---

## A. GIỚI THIỆU

### 1. Mục đích tài liệu
Tài liệu này đặc tả toàn bộ các yêu cầu nghiệp vụ, luồng xử lý, ma trận quyền, quy tắc nghiệp vụ và chi tiết màn hình cho phân hệ **NỘI DUNG SẢN PHẨM** trên hệ thống FPT CMS Admin. Phân hệ bao gồm 4 sub-module nghiệp vụ liên kết chặt chẽ:
1. **Nội dung sản phẩm (`pdh-sku`)**: Quản lý thông tin thương mại, hình ảnh, bài viết, đặc tính, phân định Nguồn Hệ thống (`ECP` / `FCP`) và quyền lợi đi kèm cho từng mã SKU sản phẩm (Gói Dịch vụ DV, Gói Thiết bị TB, Gói Stand-Alone SA).
2. **Thông tin checkout (`cms-display`)**: Cấu hình chu kỳ cước, tagline, offer lines, thiết bị đi kèm (phân chia Tab tìm kiếm theo nguồn ECP / FCP) và quy tắc Banner/Popup hiển thị trên luồng đặt hàng đa kênh (Website fpt.vn, App HiFPT, Tongdaiwifi, Global).
3. **Phương thức Thanh toán (`payment-methods`)**: Quản lý các đối tác cổng thanh toán, ví điện tử, ngân hàng áp dụng cho luồng Checkout.
4. **Quản lý Badge/Tag (`badge-tag`)**: Thư viện quản lý các nhãn nổi bật (Tag Nổi Bật / Card Badge) tập trung dùng chung cho Card gói cước, Trang chi tiết và Luồng Checkout.

Tài liệu là căn cứ pháp lý và kỹ thuật cho Product Owner, BA, Solution Architect, Software Engineer và QC triển khai phát triển và kiểm thử nghiệm thu.

### 2. Thông tin chung

| STT | HẠNG MỤC | MÔ TẢ |
| :--- | :--- | :--- |
| 1 | **Giới thiệu tổng quan** | Phân hệ NỘI DUNG SẢN PHẨM quản lý toàn bộ vòng đời hiển thị thương mại của các sản phẩm FPT Telecom (Internet, Truyền hình FPT Play, Camera AI, FPT Smart Home) từ danh sách niêm yết, trang chi tiết đến luồng đặt hàng Checkout đa kênh. |
| 2 | **Hiện trạng** | Dữ liệu cước gốc và mã SKU được quản lý đồng thời tại 2 hệ thống cốt lõi: ECP (Enterprise Customer Platform) và FCP (Flexible Customer Platform). Trước đây thông tin bị phân tán, không rõ nguồn gốc dữ liệu dẫn đến Vận hành (VH) dễ nhập sót/nhầm lẫn thông tin gói cước. |
| 3 | **Mục tiêu kỳ vọng** | Phân định rõ ràng nguồn gốc dữ liệu (ECP vs FCP) trên toàn bộ danh sách sản phẩm và màn hình cấu hình Checkout. Tự động hóa 100% việc chuẩn hóa hiển thị từ dữ liệu cước gốc. Cho phép PO/BA/VH cấu hình hiển thị thương mại, quản lý quy tắc Checkout đa kênh, đặt Banner/Popup tiếp thị và gắn Badge/Tag realtime không cần can thiệp source code. |
| 4 | **Phạm vi triển khai** | Áp dụng trên hệ thống FPT CMS Admin và đồng bộ dữ liệu realtime sang các kênh bán hàng: Website fpt.vn, Ứng dụng HiFPT, Website tongdaiwifi và hệ thống Kiosk. |

### 3. Thuật ngữ và viết tắt

| STT | THUẬT NGỮ | MÔ TẢ |
| :--- | :--- | :--- |
| 1 | **URD** | User Requirements Document - Tài liệu yêu cầu người dùng |
| 2 | **SKU** | Stock Keeping Unit - Mã gói cước / sản phẩm thương mại trên hệ thống FPT |
| 3 | **QLCS** | Quản lý cước & Sản phẩm gốc (Core Billing System / Product Hub của FPT Telecom) |
| 4 | **ECP** | **Enterprise Customer Platform** - Hệ thống quản lý cước và dịch vụ khách hàng doanh nghiệp/truyền thống của FPT Telecom |
| 5 | **FCP** | **Flexible Customer Platform** - Hệ thống quản lý cước và sản phẩm thế hệ mới linh hoạt của FPT Telecom |
| 6 | **Nguồn Hệ thống** | Định danh hệ thống lõi quản lý dữ liệu cước gốc của sản phẩm (`ECP` hoặc `FCP`) |
| 7 | **RBAC** | Role-Based Access Control - Hệ thống phân quyền dựa trên vai trò |
| 8 | **Gói DV** | Gói Dịch vụ viễn thông (Internet, Truyền hình, Combo Internet - Truyền hình) |
| 9 | **Gói TB** | Gói Thiết bị phần cứng (Camera, Access Point, Mesh Wi-Fi, Box, Router) |
| 10 | **Gói SA** | Gói Stand-Alone (Dịch vụ FPT Play Box độc lập không phụ thuộc đường truyền) |
| 11 | **Card Badge / Tagline** | Nhãn thương mại nổi bật hiển thị trên thẻ gói cước (lấy từ thư viện badge-tag) |
| 12 | **Offer Lines** | Danh sách các dòng nội dung ưu đãi / khuyến mãi đi kèm từng chu kỳ cước |
| 13 | **VH** | Đội ngũ Vận hành hệ thống CMS |

---

## B. TỔNG QUAN HỆ THỐNG

### 1. Sơ đồ luồng nghiệp vụ tổng quan (Business Flow)

```
                       ┌─────────────────────────────────────────────────────────┐
                       │   Hệ thống Core Billing / Product Hub (ECP & FCP)       │
                       └───────────────────────────┬─────────────────────────────┘
                                                   │ Đồng bộ SKU gốc + Nhãn nguồn (ECP / FCP)
                                                   ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       PHÂN HỆ NỘI DUNG SẢN PHẨM                                         │
│                                                                                                         │
│  ┌──────────────────────────────┐    ┌──────────────────────────────┐    ┌───────────────────────────┐  │
│  │ 1. NỘI DUNG SẢN PHẨM         │    │ 2. THÔNG TIN CHECKOUT        │    │ 4. QUẢN LÝ BADGE/TAG      │  │
│  │    (pdh-sku)                 │    │    (cms-display)             │    │    (badge-tag)            │  │
│  │ ├─ Cột & Bộ lọc ECP / FCP    │    │ ├─ Tab Lọc Sản phẩm ECP/FCP  │    │ ├─ Thư viện Tag           │  │
│  │ ├─ Tên Web, Mô tả SEO        │    │ ├─ Cấu hình đa kênh          │    │ ├─ Quản lý Bg/Color       │  │
│  │ ├─ Gallery 1:1 / 4:3         │    │ ├─ Chu kỳ & Offer Lines      │    │ └─ Phân loại chọn         │  │
│  │ ├─ Đánh dấu Nổi bật ☆        │    │ ├─ Bundled Content ECP/FCP   │    └─────────────┬─────────────┘  │
│  │ └─ Quyền lợi & Bài viết      │    │ └─ Quy tắc Banner/Popup      │                  │              │
│  └──────────────┬───────────────┘    └──────────────┬───────────────┘                  │              │
│                 │                                   │                                  │ Liên kết     │
│                 └───────────────────────────────────┴──────────────────────────────────┘ Tagline        │
│                                                     │                                                 │
│                                                     ▼                                                 │
│                                       ┌───────────────────────────┐                                   │
│                                       │ 3. PHƯƠNG THỨC THANH TOÁN │                                   │
│                                       │ └─ Ví/Thẻ/Ngân hàng/COD   │                                   │
│                                       └─────────────┬─────────────┘                                   │
└─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┘
                                                      │ Đồng bộ Realtime
                                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              KÊNH KHÁCH HÀNG (fpt.vn / HiFPT / tongdaiwifi)                             │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. Danh sách các chức năng (Function List)

| STT | Mã Chức năng | Tên Chức năng | Sub-module | Version | Loại | Mô tả tóm tắt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **UC-PDH-01** | Quản lý Danh sách Sản phẩm SKU | pdh-sku | 2.1 | **Update** | Bảng danh sách SKU, bổ sung **Cột HỆ THỐNG (Badge ECP/FCP)** và **Dropdown bộ lọc Hệ thống**, lọc theo Loại gói (DV, TB, SA), Loại sản phẩm & tìm kiếm. |
| 2 | **UC-PDH-02** | Xem Chi tiết SKU (Read-only Drawer) | pdh-sku | 2.0 | New | Drawer bên phải hiển thị thông tin Read-only đồng bộ từ QLCS (gồm nhãn ECP/FCP) & cấu hình Web. |
| 3 | **UC-PDH-03** | Chỉnh sửa Nội dung SKU Full-Page Inline | pdh-sku | 2.1 | Update | Form chỉnh sửa full-page 3 tab: Thông tin chung (hiển thị Nguồn hệ thống ECP/FCP Read-only), Gói đính kèm & Quyền lợi, Ảnh & Quảng bá. |
| 4 | **UC-PDH-04** | Cấu hình Phân loại Gói Dịch vụ (DV) | pdh-sku | 2.0 | Update | Khóa trường QLCS, ẩn thuộc tính nổi bật ☆, cấu hình Gói đính kèm, Quyền lợi (Icon+Text). |
| 5 | **UC-PDH-05** | Cấu hình Phân loại Gói Thiết bị (TB) | pdh-sku | 2.0 | Update | 5 cột thuộc tính với checkbox NỔI BẬT ☆ (max 3), Gallery 15 ảnh (1:1), Banner giữa trang. |
| 6 | **UC-CK-01** | Cấu hình Kênh Checkout & Kế thừa Global | cms-display | 2.0 | New | Quản lý cấu hình riêng/kế thừa cho Global, Website fpt.vn, App HiFPT, Tongdaiwifi. |
| 7 | **UC-CK-02** | Multi-select SKU & Phân loại Tab ECP/FCP | cms-display | 2.1 | **Update** | Cột trái danh sách sản phẩm bổ sung **2 Tab ECP & FCP** và nút **Chọn tất cả**, lọc tìm kiếm theo từng hệ thống, cảnh báo ghi đè. |
| 8 | **UC-CK-03** | Cấu hình Chu kỳ & Offer Lines Internet | cms-display | 2.0 | Update | Cấu hình Trả trước/Trả sau, chu kỳ 1..36 tháng, chọn Tagline từ badge-tag, Offer lines. |
| 9 | **UC-CK-04** | Cấu hình Gói Camera & Gói Cloud | cms-display | 2.0 | Update | Phân cấp Gói Cloud → Chu kỳ → Tagline & Offer lines. |
| 10 | **UC-CK-05** | Cấu hình Bundled Content & Thông điệp | cms-display | 2.1 | Update | Xem thiết bị/dịch vụ đính kèm đồng bộ từ ECP/FCP, sửa mô tả Web và nhập thông điệp truyền thông dưới đơn hàng. |
| 11 | **UC-CK-06** | Quản lý Quy tắc Banner & Popup Checkout | cms-display | 2.0 | New | Cấu hình quy tắc hiển thị Banner & Popup qua 3 bước luồng Checkout theo Priority. |
| 12 | **UC-PM-01** | Quản lý Phương thức Thanh toán | payment-methods | 2.0 | Update | Cấu hình cổng thanh toán, ví điện tử, ngân hàng áp dụng trên luồng Checkout. |
| 13 | **UC-TAG-01** | Quản lý Thư viện Badge/Tag dùng chung | badge-tag | 2.0 | New | Quản lý Tên tag, Mã màu nền/chữ, Phân loại nơi sử dụng (card, detail, checkout). |

### 3. Ma trận quyền (Permission Matrix)

| Chức năng / Hành động | Super Admin | Admin CMS | Biên tập viên | Viewer | Ghi chú |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xem Danh sách & Chi tiết SKU (gồm cột ECP/FCP)** | Full | View | View | View | Xem Read-only |
| **Chỉnh sửa Nội dung SKU (pdh-sku)** | Full | Edit | Edit | Denied | Quyền thuộc nhóm NỘI DUNG SẢN PHẨM |
| **Cấu hình Checkout & Tab ECP/FCP (cms-display)** | Full | Edit | Edit | Denied | Đồng bộ realtime Checkout |
| **Quản lý Quy tắc Banner & Popup Checkout** | Full | Edit | Edit | Denied | Cấu hình luồng Checkout 3 bước |
| **Cấu hình Phương thức Thanh toán** | Full | Edit | Denied | Denied | Yêu cầu Admin CMS trở lên |
| **Quản lý Thư viện Badge/Tag (badge-tag)** | Full | Edit | Edit | Denied | Thư viện màu nhãn dùng chung |

---

## C. ĐẶC TẢ CHI TIẾT CÁC CHỨC NĂNG

### I. SUB-MODULE 1: QUẢN LÝ NỘI DUNG SẢN PHẨM (pdh-sku)

#### 1. UC-PDH-01: Quản lý Danh sách Sản phẩm SKU (Cập nhật V2.1)

##### a. Thuộc tính Use Case

| Thuộc tính | Đặc tả chi tiết |
| :--- | :--- |
| **Description** | Hiển thị bảng danh sách các mã SKU sản phẩm thương mại được đồng bộ từ QLCS (ECP & FCP) kèm thông tin cấu hình Web. Cung cấp bộ lọc theo **Hệ thống (Tất cả / ECP / FCP)**, Loại gói cước (DV, TB, SA), Loại sản phẩm, Trạng thái hiển thị và thanh tìm kiếm. Bảng dữ liệu hiển thị rõ **Cột HỆ THỐNG** với Badge màu trực quan giúp VH nhận biết chính xác nguồn gốc dữ liệu. |
| **Actor** | Admin CMS, Biên tập viên, Viewer. |
| **Trigger** | Người dùng click vào menu Nội dung sản phẩm trên Sidebar. |
| **Pre-condition** | Người dùng đã đăng nhập và được cấp quyền truy cập hệ thống. |
| **Post-condition** | Bảng danh sách SKU hiển thị đúng theo tiêu chí lọc hệ thống ECP/FCP và loại sản phẩm. |

##### b. Diễn giải các bước thực hiện (Step-by-step)
- **Bước 1**: Người dùng click chọn **NỘI DUNG SẢN PHẨM** -> **Nội dung sản phẩm**.
- **Bước 2**: Thanh bộ lọc (Filter Bar) hiển thị các công cụ:
  - Ô nhập từ khóa tìm kiếm (tìm theo Mã SKU, Tên QLCS, Tên Web).
  - Dropdown **Loại sản phẩm** (Tất cả, Internet, Camera, Truyền hình...).
  - Dropdown **Hệ thống** (Tất cả, `ECP`, `FCP`).
- **Bước 3**: Bảng dữ liệu nạp danh sách các mã SKU gồm các cột:
  1. `STT`
  2. `TÊN HIỂN THỊ` (Tên hiển thị Web + Mã SKU gốc bên dưới)
  3. `LOẠI SẢN PHẨM` (Badge loại sản phẩm)
  4. `HỆ THỐNG` (**Cột mới**: Badge `ECP` xanh dương / Badge `FCP` vàng nâu)
  5. `GIÁ MIN` (Giá cước tối thiểu)
  6. `GIÁ MAX` (Giá cước tối đa)
  7. `THỜI GIAN CẬP NHẬT`
  8. `NGƯỜI CẬP NHẬT`
  9. `THAO TÁC NHANH` (Icon Sửa ✏️, Icon Xóa 🗑️)
- **Bước 4**: Người dùng chọn Dropdown "Hệ thống" = `ECP`: Bảng lập tức lọc chỉ hiển thị các sản phẩm có nguồn dữ liệu từ ECP.
- **Bước 5**: Người dùng click vào 1 dòng dữ liệu: Hệ thống mở Right Detail Drawer (Read-only) có chứa thông tin nguồn hệ thống ECP/FCP.
- **Bước 6**: Người dùng click nút icon ✏️ trên dòng: Hệ thống chuyển sang màn hình Full-Page Inline Editor.

---

#### 2. UC-PDH-03: Chỉnh sửa Nội dung SKU Full-Page Inline (Cập nhật V2.1)

##### a. Thuộc tính Use Case

| Thuộc tính | Đặc tả chi tiết |
| :--- | :--- |
| **Description** | Giao diện chỉnh sửa toàn màn hình (Full-Page Inline Editor) thay thế vùng Content Area chính. Tích hợp Sticky Header Bar lưu trữ/hủy, nút Back, hiển thị nhãn **Nguồn Hệ thống (ECP/FCP - Read-only)** và 3 Tab cấu hình chuyên sâu. |
| **Actor** | Admin CMS, Biên tập viên. |
| **Trigger** | Người dùng click nút icon ✏️ Sửa tại danh sách hoặc Detail Drawer. |
| **Pre-condition** | SKU tồn tại trên hệ thống. |
| **Post-condition** | Nội dung SKU được cập nhật thành công ngoài Web. |

##### b. Diễn giải các bước thực hiện (Step-by-step)
- **Bước 1**: Người dùng bấm ✏️ Sửa tại SKU INT-GIGA (Hệ thống ECP).
- **Bước 2**: Hệ thống mở Full-Page Editor với Header cố định (Sticky Top Bar):
  - Bên trái: Nút ← Quay lại, Breadcrumb (`Nội dung sản phẩm` / `INT-GIGA`), Badge **Nguồn: ECP**.
  - Bên phải: Nút Hủy, Nút Lưu thay đổi.
- **Bước 3**: Người dùng điều hướng qua 3 Tab cấu hình:
  - **Tab 1 - Thông tin chung**:
    - Trường QLCS (Read-Only): **Nguồn Hệ thống (ECP/FCP)**, Loại gói cước, Mã SKU gốc, Tên gốc QLCS, Danh mục QLCS, Giá cước niêm yết, Phí hòa mạng.
    - Trường Cấu hình Web: Tên hiển thị Web, Tên ngắn Web, Mã định danh Slug (SEO), Thẻ Tag Nổi bật (Card Badge - chọn từ thư viện badge-tag), Công tắc Bật/Tắt hiển thị Web.
  - **Tab 2 - Gói đính kèm & Quyền lợi**:
    - Với DV: Danh sách Gói đính kèm (sắp xếp drag-drop), Quyền lợi Card (Icon + Tiêu đề + Nội dung) và Ảnh Quyền lợi (tỷ lệ 4:3).
    - Với TB / SA: Bảng 5 cột Thuộc tính kỹ thuật với Checkbox NỔI BẬT ☆ (tối đa 3 thuộc tính).
  - **Tab 3 - Ảnh & Quảng bá**:
    - Với TB / SA: Gallery tối đa 15 ảnh (1:1), Banner giữa trang.
    - Với DV: Ảnh gói cước 4:3, Banner trang chi tiết 3:1.
- **Bước 4**: Bấm nút "Lưu thay đổi". Hệ thống validate và lưu dữ liệu.

---

### II. SUB-MODULE 2: THÔNG TIN CHECKOUT & BANNER/POPUP CHECKOUT (cms-display)

#### 1. UC-CK-02: Multi-select SKU & Phân loại Tab ECP/FCP tại Checkout (Cập nhật V2.1)

##### a. Thuộc tính Use Case

| Thuộc tính | Đặc tả chi tiết |
| :--- | :--- |
| **Description** | Tại dải danh sách sản phẩm bên cột trái màn hình Cấu hình Checkout, giao diện bổ sung **2 Tab chuyển đổi hệ thống nguồn `ECP` và `FCP`** cùng nút **"Chọn tất cả"** theo tab. Cho phép VH dễ dàng lọc, tìm kiếm và tích chọn tập trung các sản phẩm thuộc từng hệ thống nguồn mà không lo bỏ sót hoặc nhầm lẫn giữa gói cước ECP và FCP. |
| **Actor** | Admin CMS, Biên tập viên. |
| **Trigger** | Người dùng truy cập menu *Thông tin checkout* -> Tab *Thiết bị đi kèm & Dịch vụ bổ sung* (hoặc Cấu hình nội dung gói). |
| **Pre-condition** | Người dùng đã chọn Kênh vận hành (Global / fpt.vn / HiFPT / tongdaiwifi). |
| **Post-condition** | Danh sách sản phẩm bên cột trái hiển thị đúng tệp SKU thuộc hệ thống ECP hoặc FCP được chọn. |

##### b. Diễn giải các bước thực hiện (Step-by-step)
- **Bước 1**: Người dùng truy cập **NỘI DUNG SẢN PHẨM** -> **Thông tin checkout**.
- **Bước 2**: Chọn tab nhóm gói (ví dụ: Gói Internet, Camera, Gói SA, Thiết bị khác).
- **Bước 3**: Tại khung **DANH SÁCH SẢN PHẨM** (Cột trái):
  - Phía trên có dải Tab phân loại nguồn: **`[ ECP ]`** | **`[ FCP ]`**.
  - Ngay bên dưới là nút **Công tắc / Radio `Chọn tất cả`**.
  - Ô tìm kiếm từ khóa `Lọc mã/tên SKU...`.
- **Bước 4**: Người dùng click vào Tab **`ECP`**: Danh sách bên dưới chỉ hiển thị các sản phẩm thuộc hệ thống ECP (ví dụ: INT-GIGA, INT-META...).
- **Bước 5**: Người dùng click vào nút **`Chọn tất cả`**: Tất cả sản phẩm đang hiển thị trong tab ECP được tích chọn đồng loạt.
- **Bước 6**: Người dùng chuyển sang Tab **`FCP`**: Bảng tự động nạp danh sách các sản phẩm FCP (ví dụ: INT-SKY, CAM-IQ3...).
- **Bước 7**: Cột bên phải nạp thông tin chi tiết Thiết bị đi kèm / Dịch vụ bổ sung tương ứng của các gói được chọn để VH chỉnh sửa mô tả.
- **Bước 8**: Bấm nút **"Lưu cấu hình"**.

---

#### 2. UC-CK-05: Cấu hình Bundled Content & Thông điệp Truyền thông (Cập nhật V2.1)

##### a. Thuộc tính Use Case

| Thuộc tính | Đặc tả chi tiết |
| :--- | :--- |
| **Description** | Hiển thị danh sách Thiết bị đi kèm (ONT 1 port, Router Wi-Fi 6...) và Dịch vụ bổ sung (Fsafe, Ultra Fast...) được **đồng bộ tự động từ QLCS theo từng gói thuộc hệ thống ECP/FCP**. Cho phép VH xem Read-only các mục đính kèm gốc và chỉnh sửa văn bản mô tả hiển thị Web cho từng mục. |
| **Actor** | Admin CMS, Biên tập viên. |
| **Trigger** | Chọn 1 hoặc nhiều SKU từ danh sách ECP/FCP ở cột trái. |
| **Pre-condition** | Đã chọn ít nhất 1 sản phẩm. |
| **Post-condition** | Văn bản mô tả đính kèm được lưu thành công. |

##### b. Diễn giải các bước thực hiện (Step-by-step)
- **Bước 1**: Chọn gói `INT-GIGA` (Nguồn ECP) từ danh sách trái.
- **Bước 2**: Khung bên phải hiển thị các khối:
  - **Khối Thiết bị đi kèm**: Hiển thị icon 🔒 + Tên thiết bị gốc (ví dụ: *ONT 1 port 1G*, *Thiết bị Wi-Fi 6*). Ô Input bên dưới cho phép VH nhập/sửa mô tả Web (ví dụ: *"Router Wi-Fi 6 tốc độ cao, phủ sóng rộng"*).
  - **Khối Dịch vụ bổ sung**: Hiển thị icon 🔒 + Tên dịch vụ gốc (ví dụ: *Fsafe - Bảo mật*). Ô Input bên dưới cho phép VH nhập mô tả Web (ví dụ: *"Bảo vệ thiết bị khỏi virus & tấn công mạng"*).
- **Bước 3**: Bấm "Lưu cấu hình".

---

### III. SUB-MODULE 3: PHƯƠNG THỨC THANH TOÁN (payment-methods)

#### 1. UC-PM-01: Quản lý Phương thức Thanh toán

##### a. Thuộc tính Use Case
| Thuộc tính | Đặc tả chi tiết |
| :--- | :--- |
| **Description** | Quản lý việc cấu hình trạng thái Bật/Tắt, Khoảng thời gian áp dụng, và Mô tả ưu đãi kèm theo cho từng phương thức thanh toán (VietQR, Ví MoMo, Ví ZaloPay, Foxpay...) đính kèm với từng gói cước (SKU) trên 2 Tab chức năng (`Cấu hình Ưu đãi & Mô tả` và `Danh sách cấu hình PTTT`). Đồng thời theo dõi toàn bộ Nhật ký lưu vết lịch sử tác động cấu hình PTTT trong hệ thống. |
| **Actor** | Admin CMS, Super Admin |
| **Trigger** | Người dùng chọn menu `NỘI DUNG SẢN PHẨM` -> `Phương thức Thanh toán` |
| **Pre-condition** | Tài khoản có quyền Admin hệ thống / Vận hành CMS |
| **Post-condition** | Trạng thái PTTT, khoảng thời gian áp dụng và các dòng ưu đãi đính kèm được lưu và cập nhật realtime trên luồng đặt hàng Checkout |

##### b. Diễn giải các bước thực hiện (Step-by-step)
- **TAB 1: Cấu hình Ưu đãi & Mô tả**:
  - Chọn Kênh (Global scope / Kênh con), chọn Tab Nguồn ECP / FCP, tìm kiếm SKU hoặc lọc theo Danh mục.
  - Tick chọn gói cước từ danh sách sản phẩm cột trái (hoặc tích công tắc *"Chọn tất cả"*).
  - Khung bên phải: Bật/Tắt công tắc PTTT, chọn Khoảng thời gian áp dụng (`DateRangePicker`), nhập Mô tả ưu đãi kèm theo (`+ Thêm dòng` / 🗑️).
  - Bấm *"Lưu cấu hình"*.
- **TAB 2: Danh sách cấu hình PTTT**:
  - Hệ thống hiển thị Bảng Nhật ký lưu vết thay đổi cấu hình PTTT.
  - Cho phép Tìm kiếm từ khóa, Lọc loại PTTT, Sắp xếp (Sort ⇅) danh sách nhật ký theo **THỜI GIAN** hoặc **NGƯỜI THỰC HIỆN** *(Không sắp xếp thứ tự PTTT)*.
  - Bấm `✏️ Sửa` để điều chỉnh nhanh hoặc `🗑️ Xóa` để gỡ bỏ bản ghi cấu hình.

---

### IV. SUB-MODULE 4: THƯ VIỆN QUẢN LÝ BADGE/TAG (badge-tag)

#### 1. UC-TAG-01: Quản lý Thư viện Badge/Tag dùng chung
- *(Giữ nguyên theo bản V1.0: Định nghĩa Tên tag, Mã màu nền, Mã màu chữ, Phân loại nơi sử dụng card/detail/checkout, Live Preview realtime)*.

---

### V. QUY TẮC NGHIỆP VỤ HỆ THỐNG (BUSINESS RULES)

| Mã Rule | Tên Quy tắc | Nội dung Chi tiết |
| :--- | :--- | :--- |
| **BR-PDH-01** | **Bảo tồn dữ liệu QLCS** | - Các trường cước gốc (Mã SKU, Tên QLCS, Danh mục QLCS, Giá min/max, Phí hòa mạng, Thiết bị/Dịch vụ đi kèm gốc) từ QLCS là Read-Only, không cho phép sửa trên CMS.<br>- CMS chỉ lưu các thuộc tính hiển thị Web (Tên Web, Slug, Tooltip, Gallery, Banner). |
| **BR-PDH-02** | **Phân loại Gói cước** | - **Gói Dịch vụ (DV)**: Khóa trường QLCS, ẩn thuộc tính nổi bật ☆, ẩn gallery 1:1, cấu hình Quyền lợi Card (Icon+Text) + Ảnh 4:3.<br>- **Gói Thiết bị (TB)**: 5 cột thuộc tính với Checkbox NỔI BẬT ☆ (tối đa 3 thuộc tính nổi bật), Gallery max 15 ảnh (1:1), Banner giữa trang.<br>- **Gói SA**: Tương tự TB, dùng Ảnh Card 5:4. |
| **BR-PDH-03** | **Phân định Nguồn Hệ thống ECP / FCP** *(Mới)* | - **Mọi mã SKU / sản phẩm đồng bộ về CMS bắt buộc phải mang nhãn nguồn hệ thống `ECP` hoặc `FCP`** được xác định từ hệ thống Core Billing gốc.<br>- Dữ liệu nguồn hệ thống là Read-Only.<br>- Bộ lọc và bảng danh sách sản phẩm phải luôn hiển thị trực quan Badge `ECP` (màu xanh) hoặc `FCP` (màu vàng) để nhân viên Vận hành nhận biết chính xác khi thao tác. |
| **BR-CK-01** | **Nguyên tắc Kế thừa Kênh** | - Kênh Global là kênh gốc mặc định.<br>- Kênh con (fpt.vn, HiFPT, tongdaiwifi) ở trạng thái Kế thừa (isInherit = true) sẽ dùng dữ liệu của Global.<br>- Khi Kênh con bấm Lưu cấu hình riêng, hệ thống tự động ngắt kế thừa (isInherit = false). |
| **BR-CK-02** | **Khóa Chu kỳ Cước Trả Sau** | - Gói cước hình thức Trả sau bắt buộc bị khóa cố định ở chu kỳ 1 tháng.<br>- Gói cước Trả trước cho phép cấu hình chu kỳ từ 1 đến 36 tháng. |
| **BR-CK-03** | **Ràng buộc Tagline & Badge** | - Tất cả nhãn Tagline / Card Badge hiển thị trên thẻ gói cước và Checkout bắt buộc chọn từ Thư viện Badge/Tag (badge-tag). Nghiêm cấm nhập text tự do. |
| **BR-CK-04** | **Ghi đè Multi-select SKU** | - Khi chọn đồng thời N gói cước để cấu hình, nếu có ≥ 2 gói đã có dữ liệu riêng trước đó, hệ thống bắt buộc hiển thị Warning Alert màu vàng cảnh báo ghi đè dữ liệu. |
| **BR-CK-05** | **Ưu tiên Banner/Popup (Priority)** | - Khi một gói cước thỏa mãn nhiều Quy tắc Banner/Popup cùng lúc, quy tắc có Priority cao hơn (từ 1 đến 100) sẽ được ưu tiên hiển thị trước. |
| **BR-CK-06** | **Phân loại Tab Sản phẩm Checkout theo ECP/FCP** *(Mới)* | - Danh sách sản phẩm bên cột trái tại màn hình Cấu hình Checkout bắt buộc được phân chia thành **2 Tab `ECP` và `FCP`**.<br>- Khi chọn Tab nào, danh sách chỉ hiển thị các sản phẩm thuộc hệ thống đó.<br>- Nút **`Chọn tất cả`** chỉ tác động và tích chọn toàn bộ các sản phẩm thuộc Tab hệ thống nguồn đang mở. |
| **BR-PM-01** | **Phân chia 2 Tab Chức năng PTTT** *(Mới)* | - Module Phương thức thanh toán được chia làm 2 Tab rõ ràng:<br>1. *Cấu hình Ưu đãi & Mô tả*: Cấu hình Bật/Tắt PTTT, khoảng thời gian áp dụng và mô tả ưu đãi theo gói cước (SKU).<br>2. *Danh sách cấu hình PTTT*: Nhật ký ghi nhận các thay đổi cấu hình PTTT đã áp dụng trong hệ thống, nhóm theo phương thức và gói cước liên quan. |
| **BR-PM-02** | **Không hỗ trợ Sắp xếp Thứ tự PTTT (Fixed Order Rule)** *(Mới)* | - Danh sách các Phương thức Thanh toán (VietQR, Ví MoMo, Ví ZaloPay, Foxpay...) được tích hợp cố định từ Payment Hub backend.<br>- **Hệ thống KHÔNG có tính năng sắp xếp thứ tự hiển thị PTTT** (không cho phép kéo thả hay nhập số thứ tự cho PTTT). Thứ tự cổng thanh toán hiển thị trên Checkout được quy định mặc định bởi Payment Hub.<br>- Tính năng Sắp xếp (Sort ⇅) duy nhất trong module này là **sắp xếp danh sách Nhật ký tại Tab 2** theo *Thời gian* hoặc *Người thực hiện*. |
| **BR-PM-03** | **Ràng buộc Trạng thái PTTT, Thời gian & Ưu đãi** *(Mới)* | - Khi Switch PTTT ở trạng thái `Bật`: Cho phép cấu hình Khoảng thời gian áp dụng (`DateRangePicker`) và nhập nhiều dòng Mô tả ưu đãi kèm theo (`+ Thêm dòng` / 🗑️).<br>- Khi Switch PTTT ở trạng thái `Tắt`: Ẩn/Khóa chọn thời gian và mô tả ưu đãi. Gói cước bị tắt tất cả PTTT sẽ hiển thị Badge `Tắt PTTT` màu đỏ ở danh sách cột trái.<br>- Đính kèm thông tin Nguồn hiển thị (ví dụ: `Nguồn: Payment Hub`). |
| **BR-PM-04** | **Lưu vết Nhật ký & Tra cứu Audit Log PTTT** *(Mới)* | - Mọi thao tác Thêm mới / Chỉnh sửa / Xóa cấu hình PTTT phải được tự động ghi vết vào Tab 2 ("Danh sách cấu hình PTTT").<br>- Thông tin nhật ký gồm: PTTT tác động, Thời gian thực hiện (dạng `DD/MM/YYYY HH:mm:ss`), Danh sách Gói cước SKU áp dụng (gom hiển thị Badge +N nếu > 5 SKU), Người thực hiện và Nút hành động (`✏️ Sửa`, `🗑️ Xóa`).<br>- Cho phép Tìm kiếm từ khóa đa năng, Lọc loại PTTT và Sắp xếp (Sort ⇅) theo *Thời gian* hoặc *Người thực hiện*. |

---

### VI. MÔ TẢ MÀN HÌNH (SCREEN DESCRIPTIONS)

#### Bảng 1: Màn hình Danh sách Nội dung sản phẩm (`pdh-sku`) (Cập nhật V2.1)

| Tên Field / Component | Kiểu Component | Ràng buộc / Validation | Business Rule | Hành vi Hệ thống khi User Tương tác |
| :--- | :--- | :--- | :--- | :--- |
| **Search Input** | Input Text | Max 100 ký tự | - | Tìm kiếm theo Tên hiển thị, Tên QLCS, Mã SKU. |
| **Select Loại sản phẩm** | Custom Select | Tất cả, Internet, Camera, Truyền hình... | - | Lọc danh sách theo nhóm sản phẩm. |
| **Select Hệ thống** *(Mới)* | Custom Select | **Tất cả, ECP, FCP** | BR-PDH-03 | Lọc danh sách theo nguồn hệ thống backend `ECP` hoặc `FCP`. |
| **Cột HỆ THỐNG** *(Mới)* | Table Column / Badge | Read-Only | BR-PDH-03 | Hiển thị Badge `ECP` (màu xanh dương) hoặc `FCP` (màu vàng nâu) trên từng dòng dữ liệu. |
| **Nút Sync** | Button Icon | - | - | Kích hoạt gọi API đồng bộ dữ liệu SKU mới nhất từ QLCS (ECP/FCP). |
| **Action Icon ✏️ Sửa** | IconButton | - | - | Ngăn bubble click dòng (`e.stopPropagation()`), mở Full-Page Inline Editor. |
| **Click Row** | Row Table | - | - | Trượt mở Right Detail Drawer (Read-only) xem thông tin SKU & Nguồn ECP/FCP. |

---

#### Bảng 2: Màn hình Cấu hình Checkout đa kênh (`cms-display`) (Cập nhật V2.1)

| Tên Field / Component | Kiểu Component | Ràng buộc / Validation | Business Rule | Hành vi Hệ thống khi User Tương tác |
| :--- | :--- | :--- | :--- | :--- |
| **Select Kênh Vận Hành** | Tabs / Select | Global, fpt.vn, HiFPT, tongdaiwifi | BR-CK-01 | Chuyển đổi ngữ cảnh kênh cấu hình. |
| **Tab Nguồn Hệ thống** *(Mới)* | Segmented Tabs | **`ECP`**, **`FCP`** | BR-CK-06 | Đặt ở đầu cột trái danh sách sản phẩm. Click Tab `ECP` chỉ hiển thị tệp SKU ECP; Click Tab `FCP` chỉ hiển thị tệp SKU FCP. |
| **Công tắc "Chọn tất cả"** *(Mới)* | Switch / Checkbox | Toggle | BR-CK-06 | Đặt ngay dưới Tab ECP/FCP. Tích chọn đồng loạt tất cả các sản phẩm đang hiển thị trong Tab hệ thống đang mở. |
| **Input Tìm kiếm SKU** | Input Text | Max 50 ký tự | - | Lọc từ khóa SKU trong phạm vi Tab hệ thống (ECP hoặc FCP) đang chọn. |
| **Khối Thiết bị đi kèm** | List Items | Read-only tên QLCS | BR-PDH-01 | Hiển thị icon 🔒 + Tên thiết bị gốc từ ECP/FCP. Ô Input cho phép VH sửa mô tả Web. |
| **Khối Dịch vụ bổ sung** | List Items | Read-only tên QLCS | BR-PDH-01 | Hiển thị icon 🔒 + Tên dịch vụ gốc từ ECP/FCP. Ô Input cho phép VH sửa mô tả Web. |
| **Select Tagline / Badge** | Custom Select | Chọn từ thư viện badge-tag | BR-CK-03 | Chọn nhãn ưu đãi hiển thị trong khối chu kỳ cước. |

---

### VII. CÁC TRƯỜNG HỢP LỖI & THÔNG BÁO (ERROR MESSAGES)

| Tình huống Lỗi | Thông báo hiển thị | Hành vi UI & Xử lý Hệ thống |
| :--- | :--- | :--- |
| **Không tìm thấy sản phẩm theo hệ thống ECP/FCP** | *"Không có sản phẩm nào thuộc hệ thống [ECP/FCP] thỏa mãn điều kiện tìm kiếm."* | Hiển thị Empty State với icon box rỗng và gợi ý đổi bộ lọc. |
| **Tích chọn quá 3 thuộc tính nổi bật ☆** | *"Chỉ được chọn tối đa 3 thuộc tính nổi bật hiển thị dưới Gallery."* | Toast warning vàng, tự động bỏ check ô vừa chọn. |
| **Gõ text tự do vào ô Tag Nổi bật** | *"Vui lòng chọn Tag từ Thư viện Badge/Tag."* | Không cho phép nhập tay, bắt buộc chọn từ Dropdown. |
| **Chưa chọn SKU nào ở cột trái Checkout** | *"Vui lòng chọn ít nhất một gói cước ở danh sách bên trái để cấu hình nội dung."* | Alert cảnh báo đỏ ở cột phải, ngăn nút Lưu. |
| **Chọn nhiều gói có ưu đãi riêng** | *"Đang chọn X gói, trong đó Y gói đã có nội dung ưu đãi. Mọi thay đổi bên dưới sẽ áp dụng đồng loạt và ghi đè."* | Alert màu vàng tại đầu khối cấu hình bên phải. |
| **Trả sau nhập chu kỳ khác 1 tháng** | *"Hình thức cước Trả sau chỉ áp dụng cho chu kỳ 1 tháng."* | Tự động đặt lại chu kỳ về "1 tháng" và khóa ô nhập. |

---

## D. CÁC YÊU CẦU PHI CHỨC NĂNG

### 1. Hiệu năng & Tải (Performance)
- **Tốc độ phản hồi API**: Thời gian lưu và nạp dữ liệu cấu hình danh sách sản phẩm ECP/FCP < 500ms.
- **Tốc độ đồng bộ Kênh bán**: Dữ liệu cấu hình mới được cache và đồng bộ realtime sang Website fpt.vn / App HiFPT trong vòng < 2 giây.

### 2. Bảo mật (Security)
- **Kiểm soát truy cập (RBAC)**: Bắt buộc kiểm tra token xác thực và phân quyền tài khoản trước khi thực thi các tác vụ Sửa/Lưu/Xóa.
- **Audit Log**: Ghi log chi tiết lịch sử thay đổi thông tin sản phẩm ECP/FCP, cấu hình Checkout và thư viện Tag (User ID, Thời gian, Dữ liệu Trước/Sau, Nguồn Hệ thống ECP/FCP).

### 3. Trải nghiệm người dùng (UI/UX)
- **Chuẩn FPT Design System (Light Mode)**: Primary Hex `#f36523` (FPT Orange), Secondary Hex `#1565C0`, Neutral Hex `#1E293B`, Font Inter/SF Pro Display.
- **Nhận diện Nguồn Hệ thống Rõ ràng**:
  - Badge **ECP**: Màu xanh dương (`#1d4ed8` / `info`).
  - Badge **FCP**: Màu vàng nâu (`#ca8a04` / `warning`).

---

## E. PHỤ LỤC
- Tài liệu quy chuẩn FPT Design System V4.0.
- Tài liệu tích hợp API QLCS Product Hub (ECP / FCP Integration Specs).
