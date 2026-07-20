# PRODUCT BACKLOG TỔNG HỢP - CMS & LDP BUILDER (FPT TELECOM)

Tài liệu này định nghĩa danh sách Product Backlog tổng hợp duy nhất cho toàn bộ dự án, bao gồm các tính năng của Sprint hiện tại (Vận hành & Sản phẩm) và Phase 2 (Nâng cấp Self-Service). Tài liệu được cấu trúc theo chuẩn của **Product Owner (PO)**.

---

## 1. BẢNG TỔNG QUAN PRODUCT BACKLOG

| ID | Tiêu đề / User Story | Phân hệ (Module) | Độ ưu tiên (Priority) | Trạng thái (Status) | Story Points | Sprint | Acceptance Criteria (AC) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **US-001** | **Nội dung hiển thị sản phẩm (Sản phẩm đơn lẻ):** Biên tập mô tả marketing, đặc quyền cho SKU đơn lẻ đồng bộ từ QLCS. | Quản lý sản phẩm | **Must** | Ready for Dev | 5 | Sprint 1 | 3 Scenarios (Happy path, Tabs edit, Toggle status) |
| **US-002** | **Đồng bộ Đặc tính Sản phẩm từ QLCS:** Hệ thống tự động đồng bộ danh sách đặc tính từ QLCS về CMS, cho phép biên tập viên chỉnh sửa nội dung hiển thị marketing thay vì quản lý ngân hàng đặc tính trên CMS. | Quản lý sản phẩm | **Must** | Ready for Dev | 3 | Sprint 1 | 3 Scenarios (Auto-sync attributes, Marketing label edit, Read-only structural sync) |
| **US-003** | **Nội dung hiển thị gói bán (Gói bán/Combo):** Biên tập thông tin marketing cho Gói bán (gộp nhiều SKU) được đồng bộ từ QLCS. | Quản lý sản phẩm | **Must** | Ready for Dev | 5 | Sprint 1 | 3 Scenarios (Sync Combo list, Edit marketing, Inherited specs) |
| **US-004** | **Cấu hình hiển thị checkout:** Cấu hình chu kỳ cước, ưu đãi, phí lắp đặt theo kênh bán kế thừa. | Quản lý sản phẩm | **Must** | Ready for Dev | 5 | Sprint 1 | 3 Scenarios (Global config, Inheritance flow, Override flow) |
| **US-005** | **Phương thức Thanh toán:** Quản lý bật/tắt và cấu hình ưu đãi cho PTTT áp dụng theo từng kênh. | Quản lý sản phẩm | **Should** | Ready for Dev | 5 | Sprint 2 | 2 Scenarios (PTTT sorting & details, Inheritance flow) |
| **US-006** | **Gán Banner động vào nội dung (Shortcode):** Gán mã ID banner vào nội dung bài viết, tự động hiển thị và đồng bộ từ kho Banner. | Quản lý tin tức | **Must** | Ready for Dev | 3 | Sprint 2 | 3 Scenarios (Insert banner shortcode, Dynamic frontend render, Single source of truth sync) |
| **US-007** | **Quản lý Tác giả bài viết:** Tạo mới, chỉnh sửa thông tin tác giả và gán tác giả viết bài khi soạn thảo tin tức. | Quản lý tin tức | **Should** | Ready for Dev | 3 | Sprint 2 | 3 Scenarios (CRUD authors, Assign author, Frontend E-E-A-T display) |
| **US-008** | **Nâng cấp Wi-Fi 6 (Swap thiết bị):** Đổi modem cũ sang modem Wi-Fi 6 riêng lẻ (không đổi gói cước) ở Phase 2. | Self-Service (P2) | **Must** | Backlog | 5 | Sprint 3 | 3 Scenarios (Happy path, Eligibility fail, Booking schedule) |
| **US-009** | **Mua thêm bộ phát Wi-Fi (AP):** Mua thêm thiết bị Access Point phụ độc lập cho hợp đồng hiện hữu ở Phase 2. | Self-Service (P2) | **Must** | Backlog | 5 | Sprint 3 | 3 Scenarios (Happy path, Max limit validation, Payment failure recovery) |
| **US-010** | **Tối ưu hóa đơn hàng 0đ:** Tự động xác nhận và kích hoạt đơn hàng 0đ không qua cổng thanh toán ở Phase 2. | Self-Service (P2) | **Should** | Backlog | 3 | Sprint 4 | 3 Scenarios (Happy path - chính chủ, Happy path - không chính chủ, API error handling) |

---

## 2. CHI TIẾT USER STORIES & ACCEPTANCE CRITERIA

### [US-001] Nội dung hiển thị sản phẩm (Sản phẩm đơn lẻ)

#### 1. Description (Mô tả)
*   **As a** Chuyên viên Vận hành nội dung (Editor),
*   **I want to** biên tập các thông tin mô tả marketing, đặc quyền nổi bật và media cho từng SKU sản phẩm đơn lẻ,
*   **So that** thông tin sản phẩm hiển thị trên website bán hàng và ứng dụng HiFPT luôn đầy đủ, hấp dẫn và kích thích khách hàng chọn mua.

#### 2. Business Value & Priority
*   **Business Value**: High (Minh bạch thông số gói cước và thiết bị, tăng tỷ lệ tự phục vụ của khách hàng, giảm tải việc nhập liệu trùng lặp nhờ cơ chế đồng bộ).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 8/10 | Impact: 7/10 | Confidence: 9/10 | Effort: 5 SB = **10.08**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Đồng bộ và xem danh sách SKU (Happy Path)**
    *   **Given** Dữ liệu danh mục và mã SKU gốc được đồng bộ tự động từ hệ thống QLCS trung tâm,
    *   **When** Admin truy cập vào menu "Nội dung hiển thị sản phẩm" (`pdh-sku`),
    *   **Then** Hệ thống hiển thị danh sách SKU dưới dạng bảng gồm các trường: Mã SKU, Tên hiển thị, Dịch vụ (Internet/Camera/Truyền hình), Loại sản phẩm (Dịch vụ/Thiết bị), Giá tối thiểu, Trạng thái (Hoạt động/Ngừng hoạt động) và Người cập nhật cuối cùng,
    *   **And** Cung cấp các bộ lọc: Tìm kiếm theo từ khóa tên/mã, Lọc theo Loại sản phẩm, Lọc theo Nhóm dịch vụ, Lọc theo Trạng thái.
*   **Scenario 2: Biên tập thông tin chi tiết SKU theo cấu trúc 3 Tab (Tabbed Form)**
    *   **Given** Admin nhấn nút chỉnh sửa (✏️) hoặc mã SKU trong bảng danh sách,
    *   **When** Form thông tin SKU được hiển thị chi tiết,
    *   **Then** Giao diện tổ chức dạng 3 tab ngang mượt mà:
        1.  *Tab 1 - Thông tin chung (Read-only)*: Hiển thị các thông tin gốc đồng bộ từ QLCS (Mã SKU, Tên gốc, Loại hình, Phân loại).
        2.  *Tab 2 - Đặc tính sản phẩm*: Cho phép biên tập Tag line (nhãn nổi bật/ưu đãi như 'Nổi bật', 'ƯU ĐÃI 50% GÓI 12 THÁNG ✨' hiển thị ở góc trên card sản phẩm), các đặc tính kỹ thuật động tùy chọn theo loại SKU (Tốc độ Download/Upload, Thiết bị đi kèm, Vùng phủ sóng...), và quản lý danh sách Đặc quyền.
        3.  *Tab 3 - Nội dung truyền thông (Media)*: Cho phép upload hình ảnh đại diện, album ảnh sản phẩm, và nhập mô tả marketing chuẩn SEO.
*   **Scenario 3: Kích hoạt/Tắt hiển thị nhanh (Quick Toggle Status)**
    *   **Given** Admin đang ở màn hình danh sách SKU,
    *   **When** Admin click vào nút chuyển đổi trạng thái (Toggle Switch) của SKU trên cột "Thao tác nhanh",
    *   **Then** Hệ thống lập tức cập nhật trạng thái hiển thị của SKU trên cổng bán hàng (Active/Inactive), hiển thị Toast thông báo thành công và ghi nhận nhật ký cập nhật (Người cập nhật, Thời gian cập nhật).

#### 4. Technical Notes & Wireframe Reference
*   **Technical Notes**: 
    *   Tích hợp modal preview nhanh (Drawer trượt từ bên phải) trước khi mở trang chi tiết sản phẩm.
    *   Lưu thông tin biên tập marketing vào DB CMS riêng, dữ liệu master của SKU ở QLCS không bị sửa đổi.
*   **Wireframe**: Xem chi tiết UI/UX tại [mod-pdh-sku](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/wireframe_module_1_cms.html#L2539).

---

### [US-002] Đồng bộ Đặc tính Sản phẩm từ QLCS (Product Attributes Synchronization)

#### 1. Description (Mô tả)
*   **As a** Chuyên viên Vận hành nội dung (Editor),
*   **I want to** xem danh sách các đặc tính kỹ thuật đã được đồng bộ tự động từ hệ thống QLCS (không quản lý ngân hàng đặc tính trên CMS), và được phép chỉnh sửa tên hiển thị/giá trị marketing của các đặc tính này trên từng SKU,
*   **So that** tôi không phải tạo đặc tính thủ công, đảm bảo tính nhất quán dữ liệu gốc từ QLCS đồng thời vẫn linh hoạt điều chỉnh nội dung marketing hiển thị trên website.

#### 2. Business Value & Priority
*   **Business Value**: High (Đảm bảo single-source-of-truth cho thông số kỹ thuật của sản phẩm, giảm ma sát nghiệp vụ nhập liệu và loại bỏ hoàn toàn việc vận hành thủ công ngân hàng đặc tính trên CMS).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 8/10 | Impact: 7/10 | Confidence: 9/10 | Effort: 3 SB = **16.80**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Tự động đồng bộ cấu trúc đặc tính theo SKU (Auto-sync Attributes)**
    *   **Given** Hệ thống QLCS cập nhật đặc tính kỹ thuật cho một SKU (ví dụ: thêm đặc tính "Tầm nhìn ban đêm: 10m" cho SKU Camera SE),
    *   **When** Dữ liệu được sync về CMS,
    *   **Then** Tab "Đặc tính sản phẩm" trong chi tiết SKU tự động hiển thị đặc tính mới này mà không cần admin tạo thủ công ở CMS.
*   **Scenario 2: Chỉ chỉnh sửa nội dung hiển thị marketing (Marketing Label & Value Edit)**
    *   **Given** Biên tập viên đang ở Tab "Đặc tính sản phẩm" của một SKU,
    *   **When** Biên tập viên chỉnh sửa Tên hiển thị marketing (ví dụ: từ "Góc nhìn ngang" sang "Góc quan sát siêu rộng") hoặc Giá trị marketing (ví dụ: từ "110 độ" sang "110° góc rộng"),
    *   **Then** Hệ thống cho phép lưu các thông tin chỉnh sửa hiển thị này để render ra website,
    *   **And** Dữ liệu cấu hình gốc (mã đặc tính, phân loại) vẫn được giữ nguyên dạng Read-only và hiển thị biểu tượng khóa 🔒 (không cho phép xóa thuộc tính, không cho phép thêm thuộc tính ngoài danh sách đồng bộ).
*   **Scenario 3: Ràng buộc tính năng (Structural Integrity Enforcement)**
    *   **Given** Giao diện Tab "Đặc tính sản phẩm" của SKU,
    *   **When** Biên tập viên mở tab này lên,
    *   **Then** Hệ thống ẩn toàn bộ các nút liên quan đến quản lý cấu hình như: Áp dụng Template, Sao chép đặc tính, Import Excel đặc tính, Tải file mẫu đặc tính và nút "Thêm dòng thuộc tính mới",
    *   **And** Hiển thị cảnh báo: *"🔒 Đặc tính được đồng bộ tự động từ hệ thống QLCS. Vận hành chỉ chỉnh sửa nội dung hiển thị marketing."*

#### 4. Technical Notes & Wireframe Reference
*   **Technical Notes**: 
    *   Cấu trúc bảng đặc tính `sku_attributes` kế thừa trực tiếp từ API đồng bộ QLCS. Thêm trường `marketing_name` và `marketing_value` để lưu nội dung ghi đè hiển thị trên CMS.
*   **Wireframe**: Xem chi tiết UI tại Tab 2 [sku-tab-dactinh](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/wireframe_module_1_cms.html#L2980).

---

### [US-003] Nội dung hiển thị gói bán (Gói bán/Combo)

#### 1. Description (Mô tả)
*   **As a** Chuyên viên Vận hành nội dung (Editor),
*   **I want to** biên tập thông tin marketing (Tên hiển thị marketing, Banner, Slogan, Đặc quyền Combo, SEO) cho các Gói bán được đồng bộ từ QLCS,
*   **So that** Gói bán hiển thị hấp dẫn và đầy đủ thông tin ưu đãi trên Website fpt.vn và ứng dụng HiFPT.

#### 2. Business Value & Priority
*   **Business Value**: High (Thúc đẩy tỷ lệ chuyển đổi mua Combo Internet + Truyền hình/Camera nhờ thiết kế hiển thị nổi bật các lợi ích và giá trị tiết kiệm của Gói bán).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 8/10 | Impact: 8/10 | Confidence: 9/10 | Effort: 5 SB = **11.52**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Đồng bộ Gói bán và xem danh sách (Happy Path)**
    *   **Given** Danh sách Gói bán và liên kết các SKU con thành phần được đồng bộ tự động từ QLCS,
    *   **When** Admin truy cập vào menu "Quản lý Gói bán" (Combo cước),
    *   **Then** Hệ thống hiển thị danh sách các Gói bán gồm: Mã gói, Tên gốc, Danh sách SKU con bắt buộc/tùy chọn (ví dụ: `INT-SKY` + `PLAY-SMAX`), Trạng thái và Người cập nhật cuối cùng.
*   **Scenario 2: Biên tập thông tin marketing cho Gói bán (Package Marketing Edit)**
    *   **When** Admin bấm chỉnh sửa một Gói bán trong danh sách,
    *   **Then** Form biên tập Gói bán hiển thị cho phép nhập: Tên hiển thị marketing, Banner cước, Slogan cước, Các đặc quyền Combo (dạng bullet points) và cấu hình SEO Metadata,
    *   **And** Các thông tin marketing này được lưu lại vào DB CMS riêng biệt mà không ghi đè dữ liệu gốc của Gói bán từ QLCS.
*   **Scenario 3: Kế thừa hiển thị đặc tính từ các SKU con (Inherited Specs)**
    *   **Given** Gói bán Combo Sky-SMAX chứa hai SKU con là `INT-SKY` và `PLAY-SMAX`,
    *   **When** Khách hàng xem trang chi tiết Combo Sky-SMAX trên Web,
    *   **Then** Hệ thống tự động load và hiển thị các đặc tính kỹ thuật chính của các SKU con (như tốc độ 1Gbps từ `INT-SKY` và 3 thiết bị đồng thời từ `PLAY-SMAX`) để khách hàng so sánh trực quan.

#### 4. Technical Notes & Wireframe Reference
*   **Technical Notes**: 
    *   Gói bán được đồng bộ tự động mối quan hệ SKU con từ QLCS. CMS không tự gộp SKU thủ công để tránh sai lệch dữ liệu Billing Hub.
*   **Wireframe**: Được quản lý ở một menu con riêng biệt thuộc nhóm Quản lý sản phẩm.

---

### [US-004] Cấu hình hiển thị checkout (Checkout Display Config)

#### 1. Description (Mô tả)
*   **As a** Quản trị viên Vận hành Kênh bán (Operator),
*   **I want to** cấu hình các thông điệp truyền thông, chu kỳ thanh toán, mô tả ưu đãi cước và phí lắp đặt cho từng kênh bán hàng cụ thể,
*   **So that** tôi có thể chạy các chương trình marketing khác nhau cho từng đối tượng khách hàng (web fpt.vn vs app HiFPT) mà không cần cấu hình thủ công cho toàn bộ hệ thống.

#### 2. Business Value & Priority
*   **Business Value**: High (Hỗ trợ chiến dịch bán hàng đa kênh linh hoạt, tối ưu hóa hiển thị giỏ hàng trên trang checkout để tăng tỷ lệ hoàn tất thanh toán).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 8/10 | Impact: 8/10 | Confidence: 9/10 | Effort: 5 SB = **11.52**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Cấu hình mặc định toàn hệ thống (Global Configuration)**
    *   **Given** Admin mở module "Cài đặt Hiển thị & Checkout" (`cms-display`),
    *   **When** Admin mở Accordion "Mặc định (Global)" -> Chọn danh sách các SKU áp dụng -> Nhập thông điệp truyền thông, cấu hình chu kỳ thanh toán -> Nhập phí lắp đặt -> Nhấn "Lưu cấu hình Global",
    *   **Then** Hệ thống áp dụng cấu hình này làm cấu hình mặc định cho tất cả kênh bán con chưa cấu hình riêng.
*   **Scenario 2: Kế thừa cấu hình từ Global (Smart Inheritance)**
    *   **Given** Admin mở Accordion của một kênh con (VD: `tongdaiwifi`),
    *   **And** Checkbox "Kế thừa từ Global" đang ở trạng thái tích chọn (Checked),
    *   **When** Hệ thống hiển thị badge `🌐 Dùng Global`,
    *   **Then** Toàn bộ các trường cấu hình của kênh con bị khóa (Disabled) và hiển thị dữ liệu giống hệt với cấu hình Global hiện tại.
*   **Scenario 3: Tùy chỉnh riêng ghi đè cấu hình Global (Override Config)**
    *   **Given** Admin mở Accordion của kênh con và bỏ chọn checkbox "Kế thừa từ Global",
    *   **When** Hệ thống chuyển trạng thái hiển thị sang badge `✏️ Tùy chỉnh riêng`,
    *   **Then** Hệ thống mở khóa (Enable) toàn bộ các trường nhập liệu của kênh con,
    *   **And** Cho phép Admin tự chọn danh sách SKU áp dụng riêng cho kênh này, chỉnh sửa chu kỳ thanh toán, ưu đãi và phí lắp đặt riêng.

#### 4. Technical Notes & Wireframe Reference
*   **Wireframe**: Xem chi tiết UI/UX tại [mod-cms-display](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/wireframe_module_1_cms.html#L10974).

---

### [US-005] Cấu hình Phương thức Thanh toán & Ưu đãi (Payment Methods & Promotions)

#### 1. Description (Mô tả)
*   **As a** Quản trị viên Chiến dịch (Campaign Manager),
*   **I want to** cấu hình các phương thức thanh toán hiển thị và các ưu đãi chiết khấu đi kèm cho từng kênh bán hàng,
*   **So that** tôi có thể khuyến khích khách hàng sử dụng các phương thức thanh toán không tiền mặt.

#### 2. Business Value & Priority
*   **Business Value**: Medium (Giảm chi phí giao dịch tiền mặt, thúc đẩy thanh toán trực tuyến qua các đối tác ví điện tử chiến lược).
*   **Priority**: **Should**
*   **RICE Score**: Reach: 7/10 | Impact: 6/10 | Confidence: 9/10 | Effort: 5 SB = **7.56**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Quản lý bật/tắt và sắp xếp thứ tự PTTT (Payment Configuration)**
    *   **Given** Admin đang ở module "Phương thức Thanh toán & Ưu đãi" (`cms-payment`),
    *   **When** Admin chọn cấu hình một phương thức thanh toán (Ví dụ: Momo) -> Tích chọn kích hoạt -> Điền tiêu đề hiển thị, mô tả ngắn, mô tả ưu đãi, upload biểu tượng -> Nhập độ ưu tiên hiển thị -> Lưu cấu hình,
    *   **Then** Trên giao diện checkout của khách hàng, phương thức Momo sẽ hiển thị với đúng tên, icon, mô tả ưu đãi đã cấu hình.
*   **Scenario 2: Đồng bộ cấu hình PTTT đa kênh theo mô hình Kế thừa (Multi-channel Inheritance)**
    *   **Given** Kênh bán con `hifpt` đang có cấu hình PTTT tích chọn "Kế thừa từ Global",
    *   **When** Admin sửa đổi hoặc thêm mới một PTTT ở cấu hình Global,
    *   **Then** Hệ thống tự động đồng bộ PTTT mới đó sang kênh `hifpt`.

#### 4. Technical Notes & Wireframe Reference
*   **Wireframe**: Xem chi tiết UI/UX tại [mod-cms-payment](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/wireframe_module_1_cms.html#L12530).

---

### [US-006] Gán Banner động vào nội dung bài viết (Dynamic Banner Shortcode Injection)

#### 1. Description (Mô tả)
*   **As a** Biên tập viên Tin tức (Content Creator),
*   **I want to** gán (tag) mã ID của một Banner (ví dụ: `[banner-id:001]`) trực tiếp vào nội dung bài viết đang soạn thảo,
*   **So that** Banner tương ứng (gồm hình ảnh và link liên kết) sẽ tự động hiển thị trực quan tại vị trí đó khi khách hàng đọc bài viết, và tự động cập nhật nội dung hiển thị khi banner nguồn được sửa đổi ở Menu Banner.

#### 2. Business Value & Priority
*   **Business Value**: High (Tiết kiệm thời gian cập nhật hình ảnh/khuyến mãi trong hàng loạt bài viết, đảm bảo thông tin khuyến mãi trên banner hiển thị trong nội dung bài viết luôn là mới nhất và đồng bộ từ một nguồn duy nhất - Single Source of Truth).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 7/10 | Impact: 8/10 | Confidence: 9/10 | Effort: 3 SB = **16.80**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Soạn thảo bài viết và chèn mã ID Banner (Shortcode Tagging)**
    *   **Given** Admin đang trong giao diện soạn thảo nội dung bài viết Tin tức (sử dụng Rich Text Editor),
    *   **When** Admin nhập tag mã ID của banner theo cú pháp quy định (ví dụ: `[banner-id:001]`),
    *   **Or** Admin nhấn nút "Chèn Banner" trên thanh công cụ của Editor để mở Modal Picker -> chọn Banner ID `001` -> chèn tag `[banner-id:001]` vào vị trí con trỏ chuột,
    *   **Then** Trình soạn thảo hiển thị tag banner dưới dạng một block preview trực quan trong editor.
*   **Scenario 2: Hiển thị banner động ở giao diện khách hàng (Dynamic Frontend Render)**
    *   **Given** Bài viết tin tức có chứa chuỗi tag banner `[banner-id:001]` trong nội dung,
    *   **When** Khách hàng truy cập đọc chi tiết bài viết này trên Website FPT.vn hoặc App HiFPT,
    *   **Then** Hệ thống frontend tự động phân tích cú pháp (parse) tag `[banner-id:001]`, và thay thế tag đó bằng thẻ HTML hiển thị hình ảnh thực tế và link liên kết của Banner `001`.
*   **Scenario 3: Tự động cập nhật hiển thị khi sửa đổi banner gốc (Real-time Sync)**
    *   **Given** Bài viết tin tức A đang chèn tag banner `[banner-id:001]`,
    *   **When** Quản trị viên thay đổi hình ảnh thiết kế hoặc link liên kết của Banner `001` tại module "Quản lý Banner",
    *   **Then** Khách hàng xem bài viết tin tức A sẽ thấy hình ảnh và link liên kết mới của Banner `001` ngay lập tức.

#### 4. Technical Notes & Wireframe Reference
*   **Wireframe**: Xem chi tiết UI/UX form bài viết tại [news_cms.js](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/news_cms.js) và hình ảnh banner đính kèm trong nội dung.

---

### [US-007] Quản lý Tác giả bài viết (News Author Management)

#### 1. Description (Mô tả)
*   **As a** Biên tập viên Tin tức (Content Creator),
*   **I want to** quản lý thông tin của các tác giả (Tên, Email, SĐT, Avatar, Bio tiểu sử, Link MXH) và lựa chọn gán tác giả cho từng bài viết tin tức,
*   **So that** bài viết hiển thị chuyên nghiệp hơn, giúp độc giả biết rõ người viết bài, tăng tính minh bạch và uy tín cho nội dung (đáp ứng tiêu chí E-E-A-T của SEO).

#### 2. Business Value & Priority
*   **Business Value**: Medium (Góp phần tối ưu SEO On-page thông qua việc xác thực tác giả uy tín, chuyên nghiệp hóa hệ thống tin tức của FPT).
*   **Priority**: **Should**
*   **RICE Score**: Reach: 6/10 | Impact: 6/10 | Confidence: 9/10 | Effort: 3 SB = **10.80**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Quản lý thông tin Tác giả (CRUD Author Profiles)**
    *   **Given** Admin đang ở phân hệ Tin tức và chọn tab "Quản lý Tác giả",
    *   **When** Admin nhấn "Tạo mới Tác giả" -> nhập các thông tin: Họ tên, Email, SĐT, link Avatar, Bio tiểu sử ngắn, link mạng xã hội (Facebook/Linkedin) -> chọn trạng thái Hoạt động -> Lưu,
    *   **Then** Hệ thống lưu trữ thông tin tác giả, tự động tạo URL slug theo tên tác giả và hiển thị trên bảng danh sách.
*   **Scenario 2: Gán tác giả viết bài khi soạn thảo tin tức (Assign Author to Article)**
    *   **Given** Admin đang ở giao diện soạn thảo hoặc chỉnh sửa một bài viết Tin tức,
    *   **When** Admin click vào dropdown chọn "Tác giả bài viết",
    *   **Then** Hệ thống hiển thị danh sách các tác giả đang ở trạng thái Hoạt động (Active) để lựa chọn gán vào bài viết.
*   **Scenario 3: Hiển thị thông tin tác giả trên trang bài viết chi tiết (Frontend Author Profile)**
    *   **Given** Khách hàng đang đọc bài viết tin tức có liên kết với tác giả A,
    *   **When** Trang chi tiết bài viết hiển thị đầy đủ,
    *   **Then** Ở cuối nội dung bài viết, hệ thống hiển thị một khung thông tin tác giả (Author Box) chứa: Avatar hình tròn, Họ tên tác giả, dòng tiểu sử (bio) ngắn và các icon liên kết Facebook, Linkedin.

#### 4. Technical Notes & Wireframe Reference
*   **Wireframe**: Xem chi tiết UI/UX danh sách tác giả tại [wireframe_module_1_cms.js](file:///c:/Users/Admin/OneDrive/Desktop/FPT/analyst_docs/wireframe_module_1_cms.js#L751).

---

### [US-008] Nâng cấp Wi-Fi 6 (Swap modem riêng lẻ - Phase 2)

#### 1. Description (Mô tả)
*   **As a** Khách hàng đang sử dụng Internet FPT có modem thế hệ cũ,
*   **I want to** thực hiện đăng ký đổi thiết bị modem đang dùng sang modem Wi-Fi 6 thế hệ mới trực tuyến,
*   **So that** tôi có thể cải thiện chất lượng sóng Wi-Fi tại nhà mà không cần phải đổi gói cước cao hơn.

#### 2. Business Value & Priority
*   **Business Value**: High (Thúc đẩy tỷ lệ thiết bị Wi-Fi 6 trong tệp khách hàng để giảm tải số ca bảo trì kỹ thuật, nâng cao trải nghiệm người dùng).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 8/10 | Impact: 7/10 | Confidence: 9/10 | Effort: 5 SB = **10.08**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Đăng ký swap modem Wi-Fi 6 thành công (Happy Path)**
    *   **Given** Khách hàng đã đăng nhập thành công và được xác thực là chủ Hợp đồng (chính chủ),
    *   **And** Hợp đồng đang hoạt động bình thường, không nợ cước và đang sử dụng modem Wi-Fi 5 trở xuống,
    *   **When** Khách hàng chọn "Modem Wi-Fi 6" -> chọn khung giờ lắp đặt -> thực hiện thanh toán phí đổi thiết bị thành công (nếu có) -> xác nhận ký Phụ lục Hợp đồng điện tử,
    *   **Then** Hệ thống hiển thị màn hình "Thanh toán thành công và hoàn tất đăng ký",
    *   **And** Hệ thống tự động tạo mã đơn hàng swap thiết bị trên Billing Hub và đẩy lịch hẹn sang TIN/PNC.
*   **Scenario 2: Hợp đồng không đủ điều kiện nâng cấp thiết bị (Validation Edge Case)**
    *   **Given** Khách hàng đang chọn thiết bị swap trên hệ thống,
    *   **And** Hợp đồng của khách hàng đang bị khóa do nợ cước HOẶC đang sử dụng gói cước đặc thù không hỗ trợ swap thiết bị trực tuyến,
    *   **When** Khách hàng click vào tính năng swap thiết bị hoặc nhấn "Nâng cấp Wi-Fi 6",
    *   **Then** Hệ thống chặn không cho đi tiếp và hiển thị Popup thông báo: *"Hợp đồng [Mã HĐ] không đủ điều kiện đổi thiết bị trực tuyến. Vui lòng thanh toán cước còn nợ hoặc liên hệ hotline 19006600 để được hỗ trợ."*
*   **Scenario 3: Đặt lịch hẹn kỹ thuật thi công tại nhà (Flow Constraints)**
    *   **Given** Khách hàng đang ở bước đặt lịch hẹn kỹ thuật thi công lắp đặt,
    *   **When** Khách hàng chọn Ngày thi công và Khung giờ thi công,
    *   **Then** Hệ thống chỉ hiển thị các ngày còn trống lịch trong vòng 7 ngày tiếp theo và tự động khóa các khung giờ đã bị quá tải lượng phiếu thi công.

---

### [US-009] Mua thêm bộ phát Wi-Fi (Access Point - AP) độc lập (Phase 2)

#### 1. Description (Mô tả)
*   **As a** Khách hàng có nhà nhiều tầng hoặc căn hộ diện tích lớn đang dùng Internet FPT,
*   **I want to** đặt mua thêm từ 1 đến nhiều thiết bị phát sóng phụ Access Point (AP) Wi-Fi 5 / Wi-Fi 6 trực tiếp trên hợp đồng đang chạy,
*   **So that** tôi có thể mở rộng vùng phủ sóng Wi-Fi trong nhà mà không cần phải thay đổi gói cước chính.

#### 2. Business Value & Priority
*   **Business Value**: High (Tăng trưởng doanh thu phụ kiện Add-on - ARPU, cải thiện chất lượng phủ sóng).
*   **Priority**: **Must**
*   **RICE Score**: Reach: 7/10 | Impact: 6/10 | Confidence: 9/10 | Effort: 5 SB = **7.56**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Mua thêm thiết bị Access Point thành công (Happy Path)**
    *   **Given** Khách hàng đang ở màn hình cấu hình thiết bị bán thêm (Add-on),
    *   **When** Khách hàng chọn loại thiết bị AP -> chọn số lượng mua (ví dụ: 2 thiết bị) -> chọn hình thức thanh toán trực tuyến -> hoàn tất thanh toán,
    *   **Then** Hệ thống ghi nhận đơn mua thêm phụ kiện, tính toán cước phát sinh và đẩy lệnh tạo phiếu sang TIN/PNC.
*   **Scenario 2: Ràng buộc số lượng thiết bị mua tối đa (Max Limit Validation)**
    *   **Given** Khách hàng đang cấu hình số lượng thiết bị AP cần mua thêm,
    *   **And** Quy định giới hạn mỗi hợp đồng chỉ được mua tối đa 3 thiết bị AP add-on trực tuyến,
    *   **When** Khách hàng nhấn nút tăng số lượng vượt quá 3 thiết bị,
    *   **Then** Hệ thống khóa nút tăng số lượng và hiển thị cảnh báo: *"Mỗi hợp đồng chỉ hỗ trợ đăng ký mua tối đa 3 thiết bị Access Point trực tuyến. Vui lòng liên hệ tổng đài 19006600 để được phục vụ."*
*   **Scenario 3: Phục hồi đứt gãy luồng thanh toán (Payment Failure Recovery)**
    *   **Given** Khách hàng đã tạo đơn mua thêm AP thành công nhưng bị thất bại ở bước thanh toán,
    *   **When** Đơn hàng rơi vào trạng thái "Chờ thanh toán" (thời gian hiệu lực 15 phút),
    *   **Then** Hệ thống gửi 1 tin nhắn thông báo sau 5 phút chứa link điều hướng trực tiếp khách hàng quay lại màn hình thanh toán để tiếp tục đơn hàng.

---

### [US-010] Tối ưu hóa xử lý đơn hàng 0đ (Silent Auto-Confirm Backend - Phase 2)

#### 1. Description (Mô tả)
*   **As a** Khách hàng thực hiện nâng cấp dịch vụ nhưng có cước phí chênh lệch bằng 0đ (do cấn trừ ngày sử dụng còn lại của gói cũ đủ bù cho gói mới),
*   **I want to** hoàn tất giao dịch nâng cấp ngay lập tức mà không phải thực hiện các bước xác thực thanh toán online phiền hà,
*   **So that** gói dịch vụ mới của tôi được kích hoạt nhanh nhất có thể.

#### 2. Business Value & Priority
*   **Business Value**: High (Loại bỏ 100% tỷ lệ đứt gãy do ma sát thanh toán ở các đơn hàng không phát sinh chi phí ngay).
*   **Priority**: **Should**
*   **RICE Score**: Reach: 6/10 | Impact: 8/10 | Confidence: 9/10 | Effort: 3 SB = **14.40**

#### 3. Acceptance Criteria (Tiêu chí nghiệm thu)
*   **Scenario 1: Đơn hàng 0đ của chính chủ hợp đồng (Happy Path)**
    *   **Given** Số tiền cước chênh lệch tạm tính của đơn hàng nâng cấp = 0đ,
    *   **And** Số điện thoại đăng nhập của khách hàng trùng khớp với số điện thoại đăng ký chủ hợp đồng (chính chủ),
    *   **When** Khách hàng nhấn nút "Xác nhận nâng cấp",
    *   **Then** Hệ thống tự động bỏ qua (bypass) bước chuyển hướng sang Cổng thanh toán,
    *   **And** Hệ thống backend gọi API `ConfirmUpgrade(amount=0)` để kích hoạt gói mới ngay trên Billing Hub và tự động ký Phụ lục Hợp đồng.
*   **Scenario 2: Đơn hàng 0đ của người không chính chủ hợp đồng (Signature Verification)**
    *   **Given** Số tiền cước chênh lệch tạm tính = 0đ,
    *   **And** Số điện thoại đăng nhập của khách hàng khác với số điện thoại đăng ký chủ hợp đồng (không chính chủ),
    *   **When** Khách hàng nhấn nút "Xác nhận nâng cấp",
    *   **Then** Hệ thống hiển thị màn hình yêu cầu ký Phụ lục Hợp đồng điện tử và gửi tin nhắn chứa mã OTP về số điện thoại của chủ hợp đồng để xác nhận.
*   **Scenario 3: Xử lý lỗi API hệ thống khi thực hiện kích hoạt 0đ (Exception Handling)**
    *   **Given** Hệ thống backend đang thực hiện kích hoạt đơn hàng 0đ,
    *   **When** API của Billing Hub trả về lỗi kết nối hoặc lỗi dữ liệu,
    *   **Then** Hệ thống tự động lưu đơn hàng vào trạng thái "Chờ xử lý" (Pending) và hiển thị thông báo lỗi thân thiện cho khách hàng: *"Yêu cầu của bạn đang được hệ thống xử lý. Chúng tôi sẽ thông báo kết quả qua tin nhắn trong vòng 5 phút."*
