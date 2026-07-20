| ![FPT Logo](https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo.svg) | FPT.VN URD – User requirements document |
| ----------------------------------------------------------------------------- | --------------------------------------- |
| **Mã hiệu:** URD-CMS-01 **Phiên bản:** 1.3 **Ngày:** 27/05/2026               |

## REVISION HISTORY

| Date       | Version | Author  | Reviewer | Approver | Change Description                                                                                                                                  |
| ---------- | ------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25/05/2026 | 1.0     | BA Team | QA Team  | PM       | [A] Khởi tạo tài liệu URD mới cho phân hệ Quản lý Nội dung (CMS) theo định dạng FPT.                                                                |
| 26/05/2026 | 1.1     | BA Team | QA Team  | PM       | [U] Cập nhật thiết kế Cấu hình Thông tin hay (Tag Mapping) gộp vào module Tin tức dạng Tab và đổi giao diện cấu hình sang cơ chế Slide-over Drawer. |
| 27/05/2026 | 1.2     | BA Team | QA Team  | PM       | [U] Tách biệt Cấu hình Thông tin hay thành 2 Tab trong Tin tức: Tab Quản lý Tags (CRUD tag) và Tab Tags Mapping (Thiết lập mapping qua Drawer bằng cách chọn Tag có sẵn từ dropdown). |
| 27/05/2026 | 1.3     | BA Team | QA Team  | PM       | [A] Bổ sung Phụ lục VI đặc tả cấu trúc & sections chi tiết cho 5 LDP template tiêu chuẩn (Camera AI, Campaign Wi-Fi 7, Internet, SA, Thu Lead) và cơ chế tìm kiếm/phân loại. |

---

# MỤC LỤC

    * **I. GIỚI THIỆU**
    * **II. TỔNG QUAN**
    * **III. ĐẶC TẢ CHI TIẾT 12 CHỨC NĂNG**
    * **IV. CÁC YÊU CẦU PHI CHỨC NĂNG**
    * **V. PHỤ LỤC**

---

# I. GIỚI THIỆU

### 1. Mục đích tài liệu

### 2. Thông tin chung

| STT | HẠNG MỤC             | MÔ TẢ                                                                                                                                                                  |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Giới thiệu tổng quan | Xây dựng phân hệ Quản lý nội dung (CMS) cho phép cấu hình động giao diện (Pages, Sections, Blocks, Menu) và các chiến dịch (Banner, Popup, Tin tức, FAQ, Tag Mapping). |
| 2   | Hiện trạng           | Hệ thống cũ quản trị thủ công, các cấu hình trang Checkout bị gắn cứng (hard-code). Chưa hỗ trợ tùy chỉnh độc lập cho từng kênh bán phụ (như hifpt, tdw).              |
| 3   | Mục tiêu kỳ vọng     | Số hóa 100% việc cấu hình giao diện và luồng checkout. Cho phép tùy chỉnh độc lập hoặc kế thừa cấu hình Global chỉ qua 1 click.                                        |

### 3. Thuật ngữ, từ ngữ viết tắt

| STT | THUẬT NGỮ | MÔ TẢ                                           |
| --- | --------- | ----------------------------------------------- |
| 1   | PO        | Product owner                                   |
| 2   | ĐVYC      | Đơn vị yêu cầu                                  |
| 3   | PM        | Project manager                                 |
| 4   | BA        | Business analyst                                |
| 5   | UC        | Use case                                        |
| 6   | SKU       | Stock Keeping Unit (Mã sản phẩm từ Product Hub) |

---

# II. TỔNG QUAN

### 1. Danh sách các chức năng

| STT | CHỨC NĂNG/MÀN HÌNH                   | VERSION | LOẠI   | MÔ TẢ TÓM TẮT                                                                                                                        |
| --- | ------------------------------------ | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Quản lý cấu trúc các Trang (Pages)   | 1.0     | New    | Định nghĩa cấu trúc trang và liên kết Sections hiển thị.                                                                             |
| 2   | Quản lý Sections                     | 1.0     | New    | Quản lý các vùng layout lớn và liên kết kéo thả các Blocks.                                                                          |
| 3   | Quản lý Blocks                       | 1.0     | New    | Tạo lập khối nội dung con (gán sản phẩm, FAQ, hình ảnh, CTA).                                                                        |
| 4   | Landing Page (LDP)                   | 1.0     | New    | Tạo trang đích khuyến mãi độc lập với giao diện HTML tùy biến.                                                                       |
| 5   | Quản lý Menu                         | 1.0     | New    | Thiết lập thanh điều hướng đa cấp, kéo thả cha-con.                                                                                  |
| 6   | Quản lý Banner                       | 1.0     | New    | Đăng tải banner, đặt lịch hiển thị và gắn link chuyển hướng.                                                                         |
| 7   | Quản lý Popup                        | 1.0     | New    | Tạo Popup quảng cáo/thông báo nổi, cấu hình tần suất hiển thị.                                                                       |
| 8   | Quản lý Tin tức                      | 1.0     | New    | Soạn thảo tin tức bài viết, phân loại chuyên mục và xuất bản.                                                                        |
| 9   | Quản lý FAQ                          | 1.0     | New    | Quản lý ngân hàng câu hỏi & câu trả lời thường gặp theo chủ đề.                                                                      |
| 10  | Cấu hình Thông tin hay (Tag Mapping) | 1.1     | Update | Ánh xạ từ khóa bài viết đến sản phẩm. Thiết kế mới tích hợp dạng Tab trong Quản lý Tin tức và sử dụng Slide-over Drawer để cấu hình. |
| 11  | Cài đặt hiển thị (Checkout Config)   | 1.0     | Update | Cấu hình chi tiết luồng Checkout đa kênh (SKUs, Chu kỳ, Thiết bị). **(Chuyển sang Phân hệ Quản lý sản phẩm)** |
| 12  | Quản lý tài khoản cá nhân & Đăng xuất | 1.0   | New    | Hỗ trợ người dùng tự chỉnh sửa thông tin cá nhân (họ tên, email), đổi mật khẩu, cập nhật ảnh đại diện và đăng xuất tài khoản. |

---

# III. ĐẶC TẢ CHI TIẾT 12 CHỨC NĂNG

## 1. Quản lý cấu trúc các Trang (Pages)

| Description    | Chức năng cho phép người dùng tạo mới, chỉnh sửa thông tin cấu trúc, thiết lập URL định tuyến, SEO Metadata và gán các khối Sections hiển thị tương ứng của từng trang. |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống (Super Admin, Admin CMS).                                                                                                                        |
| Trigger        | Người dùng chọn menu "Quản lý Trang" và click tạo mới hoặc sửa một trang.                                                                                               |
| Pre-condition  | Người dùng đã đăng nhập thành công vào trang quản trị và có quyền truy cập module Trang.                                                                                |
| Post-condition | Cấu trúc trang được lưu thành công, URL hoạt động chính xác và giao diện hiển thị đúng các Sections đã được gán.                                                        |

    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Trang".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo trang mới" hoặc chọn "Sửa" một trang có sẵn trên danh sách.
    * **Bước 3:** Hệ thống hiển thị Form cấu trúc trang (Tên trang, URL path, SEO Title, SEO Description).
    * **Bước 4:** Người dùng nhập các thông tin: Tên trang (slug tự sinh), URL path, Tiêu đề SEO, Mô tả SEO.
    * **Bước 5:** Người dùng thực hiện kéo thả gán các sections nội dung từ danh sách khả dụng sang danh sách áp dụng trên trang và sắp xếp thứ tự hiển thị.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin trang vào database và cập nhật hiển thị ngoài website.








    * Mã code (Slug) của trang phải là duy nhất trên toàn hệ thống (Unique constraint), không được trùng lặp.
    * Không cho phép người dùng xóa các trang hệ thống cốt lõi (như Trang chủ, Trang lỗi 404).
    * Tên trang, Mã code (Slug), và Tiêu đề (H1) là ba trường bắt buộc nhập, không được để trống khi lưu.

| STT | Tên trường      | Bắt buộc? (Y/N) | Format   | Mô tả                                                             |
| --- | --------------- | --------------- | -------- | ----------------------------------------------------------------- |
| 1   | Tên trang       | Y               | Text     | Tên trang dùng nội bộ trong CMS.                                  |
| 2   | Mã code (Slug)  | Y               | Text     | Đường dẫn URL truy cập trang (VD: home, km-internet-t5).          |
| 3   | Tiêu đề (H1)     | Y               | Text     | Tiêu đề chính hiển thị trên giao diện trang.                       |
| 4   | Tag tin tức     | N               | Text     | Tag để phân loại tin tức liên quan.                               |
| 5   | Meta tiêu đề    | N               | Text     | Tiêu đề hiển thị trên tab trình duyệt và kết quả tìm kiếm Google. |
| 6   | Meta từ khóa    | N               | Text     | Từ khóa phục vụ SEO, ngăn cách bằng dấu phẩy.                     |
| 7   | Trạng thái      | Y               | Select   | Lựa chọn trạng thái hiển thị: Active hoặc Draft.                  |

---

## 2. Quản lý Sections

| Description    | Chức năng cho phép người dùng thiết kế và quản lý các vùng layout lớn của trang (như Header, Footer, Banner Hero, Body), hỗ trợ tái sử dụng một Section trên nhiều trang khác nhau. |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                              |
| Trigger        | Người dùng chọn menu "Quản lý Sections" và click tạo mới hoặc sửa Section.                                                                                                          |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống quản trị.                                                                                                                           |
| Post-condition | Section được cập nhật thành công và tự động thay đổi hiển thị trên tất cả các Trang (Pages) có gán Section này.                                                                     |

    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Sections".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo Section mới" hoặc chọn "Sửa" một section có sẵn.
    * **Bước 3:** Hệ thống hiển thị Form chi tiết cấu hình Section.
    * **Bước 4:** Người dùng nhập thông tin: Tên section, chọn mẫu thiết kế layout hiển thị.
    * **Bước 5:** Người dùng kéo thả và gán các khối Blocks nội dung con khả dụng vào bên trong Section.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống cập nhật cấu trúc section vào database và tự động đồng bộ sang tất cả các trang đang gán section này.








    * Một Section là component dùng chung. Khi thay đổi cấu trúc/khối Block bên trong Section, các trang đang sử dụng Section đó sẽ được cập nhật đồng thời.
    * Tên Section (Quản trị), Tiêu đề Section, Mã Section, Loại Section, và Thứ tự hiển thị là các trường bắt buộc nhập.
    * Mã Section phải là duy nhất, không trùng lặp và được viết dưới dạng snake-case hoặc kebab-case.

| STT | Tên trường       | Bắt buộc? (Y/N) | Format   | Mô tả                                                          |
| --- | ---------------- | --------------- | -------- | -------------------------------------------------------------- |
| 1   | Chọn trang       | Y               | Select   | Chọn trang chứa Section này (VD: Trang chủ, Khuyến mãi Tháng 5)|
| 2   | Tên Section      | Y               | Text     | Tên nhận diện Section dùng cho mục đích quản trị nội bộ.       |
| 3   | Tiêu đề Section  | Y               | Text     | Tiêu đề hiển thị trực tiếp cho khách hàng trên giao diện UI.   |
| 4   | Mã Section       | Y               | Text     | Mã định danh kỹ thuật duy nhất dùng trong code (VD: sec-hero). |
| 5   | Loại Section     | Y               | Select   | Loại bố cục/layout (VD: Hero Banner, Product List, Features).  |
| 6   | Thứ tự hiển thị  | Y               | Number   | Thứ tự sắp xếp hiển thị của Section trên trang.                |
| 7   | Mô tả ngắn       | N               | Textarea | Ghi chú thêm về vai trò, mục đích của Section.                 |

---

## 3. Quản lý Blocks

| Description    | Chức năng cho phép người dùng định nghĩa nội dung các khối thông tin nhỏ (như gán sản phẩm từ Product Hub, chọn câu hỏi FAQ hiển thị, tải ảnh banner dọc hay thiết lập nút CTA). |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                           |
| Trigger        | Người dùng chọn menu "Quản lý Blocks" và click tạo mới hoặc chỉnh sửa Block.                                                                                                     |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống.                                                                                                                                 |
| Post-condition | Khối Block được lưu thông tin thành công và sẵn sàng để kéo thả vào các Section tương ứng.                                                                                       |

    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Blocks".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo Block mới" hoặc chọn "Sửa" một block có sẵn.
    * **Bước 3:** Hệ thống hiển thị Form cấu hình tương ứng với loại Block.
    * **Bước 4:** Người dùng nhập các thông tin: Tên block, chọn loại phân loại block (Package / FAQ / Banner Dọc / CTA).
    * **Bước 5:** Người dùng gán nội dung thực tế (Tìm chọn Package từ Product Hub hoặc tìm chọn câu hỏi FAQ).
    * **Bước 6:** Người dùng nhập text nút CTA và link chuyển hướng URL đích.
    * **Bước 7:** Người dùng nhấn nút "Lưu".
    * **Bước 8:** Hệ thống lưu thông tin block vào kho dữ liệu dùng chung và cập nhật hiển thị.








    * Block loại Sản phẩm chỉ hiển thị các Package đang hoạt động (Active) được lấy từ Product Hub.
    * Block Banner dọc yêu cầu tải lên đủ 2 định dạng kích thước: Desktop (1920px) và Mobile (768px).
    * Tên Block, Mã Block, Tên rút gọn, và Loại Block là các trường bắt buộc nhập, không được để trống.
    * Mã Block phải là duy nhất, không trùng lặp và dùng để định danh trong code.

| STT | Tên trường    | Bắt buộc? (Y/N) | Format        | Mô tả                                                      |
| --- | ------------- | --------------- | ------------- | ---------------------------------------------------------- |
| 1   | Tên Block     | Y               | Text          | Tên nhận diện Block (VD: Internet cá nhân trang danh mục).  |
| 2   | Mã Block      | Y               | Text          | Mã định danh kỹ thuật duy nhất (VD: internet-ca-nhan).     |
| 3   | Tên rút gọn   | Y               | Text          | Tên rút gọn hiển thị nội bộ (VD: Card Chuẩn).              |
| 4   | Loại Block    | Y               | Select        | Bố cục hiển thị (VD: Slider, Grid, Accordion, Row, List).  |
| 5   | Gán Gói cước  | N               | Select/Search | Chọn gói cước từ Product Hub nếu block thuộc loại Package. |
| 6   | Đường dẫn nút | N               | Text          | Đường dẫn URL chuyển hướng của nút Xem Thêm/Mua Ngay.      |

---

## 4. Landing Page (LDP)

| Description    | Chức năng cho phép người dùng xây dựng, chỉnh sửa giao diện và cấu hình các trang chiến dịch marketing độc lập bằng cách upload file HTML tùy biến hoặc dựng trang qua kéo thả sections. |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                                   |
| Trigger        | Người dùng chọn menu "Landing Page (LDP)" và click tạo mới hoặc sửa LDP.                                                                                                                 |
| Pre-condition  | Người dùng đã đăng nhập thành công và có sẵn hình ảnh hoặc sections dựng trang.                                                                                                          |
| Post-condition | Trang Landing Page được lưu và xuất bản thành công theo đúng URL định tuyến riêng biệt.                                                                                                  |

    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Landing Page (LDP)".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo LDP mới" hoặc chọn "Sửa" một chiến dịch LDP trên danh sách.
    * **Bước 3:** Hệ thống hiển thị Form thông tin LDP.
    * **Bước 4:** Người dùng nhập các thông tin: Tên LDP, đường dẫn URL đích riêng, chọn phương thức dựng giao diện (HTML custom hoặc gán Sections).
    * **Bước 5:** Người dùng thiết lập trạng thái hoạt động (Lưu nháp / Xuất bản).
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống ghi nhận, tạo đường dẫn route độc lập và lưu trữ thông tin chiến dịch.








    * Landing Page có cấu trúc định tuyến (route) riêng biệt, bỏ qua cấu trúc header/footer mặc định của trang chủ nếu được cấu hình dạng "Full-blank".

| STT | Tên trường       | Bắt buộc? (Y/N) | Format   | Mô tả                                                    |
| --- | ---------------- | --------------- | -------- | -------------------------------------------------------- |
| 1   | Tên LDP          | Y               | Text     | Tên chiến dịch Landing Page.                             |
| 2   | URL path LDP     | Y               | Text     | URL đích truy cập (VD: /khuyen-mai-he-2026).             |
| 3   | Mã HTML tùy chọn | N               | Textarea | Nhập code HTML/CSS tùy biến (nếu chọn loại Upload HTML). |

---

## 5. Quản lý Menu

| Description    | Chức năng cho phép người dùng cấu hình chi tiết thanh điều hướng đa cấp (Header / Footer / Sidebar), kéo thả sắp xếp thứ tự hiển thị và thiết lập phân cấp menu cha-con lên tới 3 cấp. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống (Super Admin, Admin CMS).                                                                                                                                      |
| Trigger        | Người dùng chọn menu "Quản lý Menu" và nhấp chọn "+ Tạo menu link" hoặc chọn "Sửa" một menu item trong danh sách sơ đồ cây.                                                           |
| Pre-condition  | Người dùng đã đăng nhập thành công vào trang quản trị và có quyền truy cập module Menu.                                                                                               |
| Post-condition | Cấu trúc thanh điều hướng được lưu trữ thành công và cập nhật tức thì trên giao diện website tương ứng với vị trí đã cấu hình.                                                        |

*   **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Menu".
*   **Bước 2:** Hệ thống hiển thị bảng danh sách Menu dưới dạng sơ đồ cây, cho phép tìm kiếm theo Tên menu và phân trang.
*   **Bước 3:** Người dùng nhấn nút "+ Tạo menu link" hoặc chọn "Sửa" trên một dòng menu.
*   **Bước 4:** Hệ thống hiển thị Form thông tin menu gồm các trường cấu hình chi tiết.
*   **Bước 5:** Người dùng nhập các thông tin: Tên menu, Menu cha (nếu có), Thứ tự hiển thị, Loại (Page/Category/Link), Vị trí, Kiểu hiển thị, Ngôn ngữ, Target và upload Icon.
*   **Bước 6:** Người dùng nhấn nút "Lưu".
*   **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào database và đồng bộ thanh điều hướng ngoài website.

### Quy tắc nghiệp vụ (Business Rules)
*   Hỗ trợ cấu trúc phân cấp tối đa 3 cấp menu (Menu cha -> Menu con cấp 1 -> Menu con cấp 2) để đảm bảo giao diện hiển thị tối ưu (UX).
*   Tên menu, Thứ tự hiển thị, Loại, Vị trí, Target là các trường bắt buộc nhập, không được để trống.
*   Trường **Đường dẫn URL** (Link URL) sẽ bắt buộc nhập đối với menu có loại là **Link** để đảm bảo chuyển hướng chính xác. Với loại **Page** hoặc **Category**, hệ thống sẽ tự động liên kết tới trang hoặc chuyên mục được cấu hình.
*   Hỗ trợ tải lên Icon menu với các định dạng JPG, PNG, GIF, WEBP, SVG và dung lượng tối đa 10MB.

### Bảng mô tả trường thông tin (Screen Description)

| STT | Tên trường      | Bắt buộc? (Y/N) | Format | Mô tả                                                                                                        |
| --- | --------------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| 1   | Tên menu        | Y               | Text   | Nhãn hiển thị trực tiếp của menu item trên giao diện (VD: "Sản phẩm", "Khuyến mãi").                         |
| 2   | Menu cha        | N               | Select | Chọn menu cấp cha từ danh sách cây phân cấp hiện có (để trống nếu là menu gốc).                              |
| 3   | Thứ tự          | Y               | Number | Thứ tự sắp xếp hiển thị của menu item trong cùng cấp (giá trị >= 0, mặc định 0).                             |
| 4   | Loại            | Y               | Select | Chọn phân loại nguồn: **Page** (Trang liên kết), **Category** (Chuyên mục bài viết), hoặc **Link** (URL tự do). |
| 5   | Vị trí          | Y               | Select | Chọn khu vực hiển thị menu: **Header** (Đầu trang), **Footer** (Chân trang), hoặc **Sidebar** (Cột bên).     |
| 6   | Kiểu hiển thị   | N               | Select | Chọn kiểu bố cục khi rê chuột: **Mặc định**, **Mega Menu**, hoặc **Dropdown**.                               |
| 7   | Ngôn ngữ        | N               | Select | Lựa chọn ngôn ngữ hiển thị: Tiếng Việt hoặc English.                                                         |
| 8   | Target          | Y               | Select | Chọn cơ chế mở liên kết: **_self** (Mở ở tab hiện tại) hoặc **_blank** (Mở ở tab mới).                      |
| 9   | Icon            | N               | File   | Tải lên file ảnh icon (JPG, PNG, GIF, WEBP, SVG, tối đa 10MB) đi kèm nhãn hiển thị menu.                     |
| 10  | Đường dẫn URL   | Y (loại Link)   | Text   | URL liên kết đích khi người dùng click (chỉ bắt buộc khi chọn Loại là Link).                                 |

---

## 6. Quản lý Banner

| Description    | Chức năng cho phép người dùng đăng tải hình ảnh banner (Desktop và Mobile), thiết lập thứ tự hiển thị, cấu hình trang áp dụng hiển thị, link chuyển hướng và hẹn giờ hiển thị banner. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                               |
| Trigger        | Người dùng chọn menu "Quản lý Banner" và nhấp chọn "+ Tạo Banner mới" hoặc nút "Sửa" trên danh sách banner.                                                                           |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống quản trị.                                                                                                                            |
| Post-condition | Banner được lưu trữ thành công và tự động hiển thị trong Slider ngoài website theo đúng lịch và trang đã cài đặt.                                                                    |

*   **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Banner".
*   **Bước 2:** Hệ thống hiển thị danh sách các Banner hiện có kèm bộ lọc Tìm theo tên, Trạng thái (Đang chạy, Hết hạn) và bảng dữ liệu.
*   **Bước 3:** Người dùng nhấn nút "+ Tạo Banner mới" hoặc chọn "Sửa" một banner.
*   **Bước 4:** Hệ thống ẩn danh sách và hiển thị Form tạo/chỉnh sửa Banner.
*   **Bước 5:** Người dùng nhập các thông tin: Tên banner, Thứ tự hiển thị, tải lên ảnh Desktop, tải lên ảnh Mobile, nhập Link URL đích, chọn Target, chọn Trang áp dụng và cấu hình Khoảng thời gian hiển thị.
*   **Bước 6:** Người dùng nhấn nút "Lưu Banner" (hoặc chọn "Hủy" để quay lại).
*   **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào database và cập nhật slider ngoài website.

### Quy tắc nghiệp vụ (Business Rules)
*   Để đảm bảo hiển thị tối ưu trên đa thiết bị (Responsive), hệ thống **bắt buộc người dùng tải lên cả 2 phiên bản hình ảnh**: Ảnh Desktop (1920xauto) và Ảnh Mobile (768xauto).
*   Tên Banner, Thứ tự hiển thị, Ảnh Desktop, Ảnh Mobile, Trang áp dụng là các trường bắt buộc nhập.
*   Banner chỉ hiển thị ngoài website khi thời gian hiện tại nằm trong khoảng "Thời gian hiển thị" được cấu hình (nếu có cài đặt lịch) và trạng thái là hoạt động.

### Bảng mô tả trường thông tin (Screen Description)

| STT | Tên trường         | Bắt buộc? (Y/N) | Format         | Mô tả                                                                                                  |
| --- | ------------------ | --------------- | -------------- | ------------------------------------------------------------------------------------------------------ |
| 1   | Tên Banner         | Y               | Text           | Tên banner dùng để quản lý nội bộ trong CMS (VD: "Banner Hero Trang Chủ T5").                          |
| 2   | Thứ tự hiển thị    | Y               | Number         | Thứ tự hiển thị trong slider chạy ảnh (giá trị >= 1, mặc định 1).                                      |
| 3   | Ảnh Desktop        | Y               | File           | Upload file ảnh banner (PNG/JPG/WebP) cho giao diện máy tính (kích thước khuyến nghị 1920px).           |
| 4   | Ảnh Mobile         | Y               | File           | Upload file ảnh banner (PNG/JPG/WebP) cho giao diện điện thoại (kích thước khuyến nghị 768px).           |
| 5   | Link URL Đích      | N               | Text           | Đường dẫn điều hướng khi người dùng nhấp vào banner (VD: /khuyen-mai-thang-5).                         |
| 6   | Target             | N               | Select         | Cơ chế mở link điều hướng: **_self** (Mở ở tab hiện tại) hoặc **_blank** (Mở ở tab mới).               |
| 7   | Trang áp dụng      | Y               | Multi-select   | Chọn một hoặc nhiều trang sẽ hiển thị banner này (VD: Trang chủ, Trang khuyến mãi).                    |
| 8   | Thời gian hiển thị | N               | DateTime Range | Thiết lập ngày/giờ bắt đầu và kết thúc hiển thị banner (để trống nếu muốn chạy liên tục không hẹn giờ).|

---

## 7. Quản lý Popup

| Description    | Chức năng cho phép người dùng thiết lập và cấu hình các Popup quảng cáo nổi (Modal popup), cài đặt thời gian chạy, kênh bán áp dụng, tải ảnh và cấu hình link điều hướng kèm UTM Tracking. |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                             |
| Trigger        | Người dùng chọn menu "Quản lý Popup" và chọn "+ Tạo Popup mới" hoặc nút "Sửa" trên danh sách popup.                                                                                 |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống.                                                                                                                                   |
| Post-condition | Cấu hình popup được lưu thành công, tự động hiển thị ngoài website đúng kênh bán và thời gian chỉ định.                                                                            |

*   **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Popup".
*   **Bước 2:** Hệ thống hiển thị danh sách Popup (Tên popup, Vị trí hiển thị, Kênh áp dụng, Thời gian chạy, Trạng thái) kèm bộ lọc và phân trang.
*   **Bước 3:** Người dùng nhấn nút "+ Tạo Popup mới" hoặc chọn "Sửa" một popup.
*   **Bước 4:** Hệ thống hiển thị Form cấu hình Popup, góc trên bên phải có nút Toggle để Bật/Tắt trạng thái hoạt động nhanh.
*   **Bước 5:** Người dùng nhập các thông tin: Tên popup, Vị trí hiển thị, Thời gian bắt đầu, Thời gian kết thúc, chọn các Kênh áp dụng (Checkboxes), tải lên Ảnh Desktop, tải lên Ảnh Mobile, nhập URL đích khi click, nhập các tham số UTM (Source, Medium, Campaign).
*   **Bước 6:** Hệ thống hiển thị trực quan liên kết URL cuối cùng có chứa các tham số UTM tracking (Live Preview URL).
*   **Bước 7:** Người dùng nhấn nút "Lưu Popup".
*   **Bước 8:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào database và cập nhật hiển thị.

### Quy tắc nghiệp vụ (Business Rules)
*   **Trải nghiệm người dùng (UX)**: Tại một thời điểm, trên một trang chỉ cho phép kích hoạt tối đa **01 Popup hoạt động** để tránh gây phiền hà cho khách hàng.
*   Tên Popup, Vị trí hiển thị, Thời gian bắt đầu/kết thúc, Kênh áp dụng, Ảnh Desktop, Ảnh Mobile, URL đích là bắt buộc nhập.
*   Hệ thống tự động ghép các tham số UTM (Source, Medium, Campaign) vào URL đích để tạo liên kết tracking đồng bộ khi người dùng click vào popup.
*   Hình ảnh Desktop bắt buộc tỷ lệ 16:9 (tối đa 1MB), hình ảnh Mobile bắt buộc tỷ lệ 1:1 hoặc dạng đứng (tối đa 1MB).

### Bảng mô tả trường thông tin (Screen Description)

| STT | Tên trường        | Bắt buộc? (Y/N) | Format         | Mô tả                                                                                                        |
| --- | ----------------- | --------------- | -------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | Trạng thái        | Y               | Toggle Switch  | Bật/Tắt trạng thái hoạt động của popup (Bật/Tắt).                                                            |
| 2   | Tên Popup         | Y               | Text           | Tên popup dùng quản trị nội bộ (VD: "Flash Sale T5").                                                        |
| 3   | Vị trí hiển thị   | Y               | Select         | Nơi hiển thị popup: **Trang chủ**, **Theo URL chỉ định**, **Theo Gói bán cụ thể (Trang Checkout)**, **Global**. |
| 4   | Thời gian bắt đầu | Y               | DateTime       | Ngày và giờ bắt đầu cho phép popup xuất hiện ngoài website.                                                 |
| 5   | Thời gian kết thúc| Y               | DateTime       | Ngày và giờ kết thúc chương trình popup.                                                                     |
| 6   | Kênh áp dụng      | Y               | Checkbox List  | Tick chọn các kênh bán áp dụng (VD: tongdaiwifi, hifpt, fpt.vn, fptshop).                                    |
| 7   | Ảnh Desktop       | Y               | File           | Tải lên ảnh popup định dạng JPG/PNG cho máy tính (tỷ lệ 16:9, tối đa 1MB).                                    |
| 8   | Ảnh Mobile        | Y               | File           | Tải lên ảnh popup định dạng JPG/PNG cho điện thoại/bottom sheet (tỷ lệ 1:1 hoặc dọc, tối đa 1MB).            |
| 9   | URL đích          | Y               | Text           | Đường dẫn chuyển hướng khi khách hàng nhấp vào popup.                                                        |
| 10  | UTM Source        | N               | Text           | Tham số nguồn quảng cáo (VD: popup_banner).                                                                   |
| 11  | UTM Medium        | N               | Text           | Tham số phương tiện quảng cáo (VD: homepage).                                                                |
| 12  | UTM Campaign      | N               | Text           | Tham số tên chiến dịch quảng cáo (VD: flashsale_t5).                                                          |

---

## 8. Quản lý Tin tức (News & Articles)

| Description    | Chức năng cho phép soạn thảo bài viết bằng Rich Text, phân loại chuyên mục đa cấp, quản lý danh sách Tags, và thiết lập cấu hình mapping bài viết theo Tags đến các SKU sản phẩm. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Biên tập viên, Người duyệt (Xuất bản), Admin.                                                                                                                                   |
| Trigger        | Người dùng chọn menu "Quản lý Tin tức" và click chọn các Tab tương ứng, rồi nhấn các nút Thêm mới hoặc Sửa.                                                                     |
| Pre-condition  | Người dùng đã đăng nhập thành công và có quyền hạn biên tập hoặc quản trị tin tức.                                                                                              |
| Post-condition | Bài viết, chuyên mục, tags và cấu hình mapping được lưu thành công, cập nhật giao diện ngoài website.                                                                           |

Phân hệ Quản lý Tin tức gồm **4 Tab chức năng chính**:
1.  **Danh sách Bài viết:** Soạn thảo, sửa đổi và xuất bản tin tức.
2.  **Chuyên mục (Categories):** Thiết lập cấu trúc danh mục bài đăng.
3.  **Quản lý Tags:** Quản trị thư viện thẻ từ khóa dùng chung.
4.  **Cấu hình Thông tin hay (Tags Mapping):** Thiết lập liên kết tự động bài viết với gói cước SKU (Chi tiết tại Mục 10).

### Luồng nghiệp vụ soạn thảo Bài viết
*   **Bước 1:** Người dùng chọn tab "Danh sách Bài viết", nhấn "+ Thêm Bài Viết" hoặc chọn "Sửa" một bài viết.
*   **Bước 2:** Hệ thống hiển thị Form soạn thảo bài viết.
*   **Bước 3:** Người dùng nhập: Tiêu đề bài viết (hệ thống tự sinh slug), URL Slug, Mô tả ngắn/Sa-po, soạn thảo nội dung chi tiết qua WYSIWYG Editor, nhập danh sách Tags (ngăn cách bằng dấu phẩy), chọn Chuyên mục, chọn Tác giả, Trạng thái (Active/Draft) và tải lên/nhập link ảnh đại diện (Thumbnail).
*   **Bước 4:** Người dùng mở rộng mục "TỐI ƯU HÓA SEO" để cấu hình thêm SEO Title, Meta Description và Meta Keywords.
*   **Bước 5:** Người dùng nhấn nút "Lưu Bài viết".
*   **Bước 6:** Hệ thống validate thông tin, lưu trữ bài viết và cập nhật ngoài site.

### Luồng nghiệp vụ quản lý Chuyên mục (Categories)
*   **Bước 1:** Người dùng chọn tab "Chuyên mục (Categories)", nhấn "+ Thêm Chuyên Mục" hoặc chọn "Sửa".
*   **Bước 2:** Hệ thống hiển thị Form chi tiết Chuyên mục với bố cục 2 cột (Cột trái: Thông tin chính; Cột phải: Cấu hình phụ).
*   **Bước 3:** Người dùng nhập các trường thông tin chính (Tên chuyên mục, slug, mô tả, nội dung chi tiết) và các cấu hình phụ (Chuyên mục cha, kiểu giao diện layout, ngôn ngữ, vị trí hiển thị, thứ tự sắp xếp, màu sắc nhận diện, toggle trạng thái).
*   **Bước 4:** Người dùng tải lên các file hình ảnh (Icon, Icon hover, Logo chuyên mục, Hình đại diện) và nhập các thuộc tính SEO Metadata.
*   **Bước 5:** Người dùng nhấn "Lưu Chuyên mục".

### Luồng nghiệp vụ quản lý Tags
*   **Bước 1:** Người dùng chọn tab "Quản lý Tags", nhấn "+ Thêm Tag" hoặc chọn "Sửa".
*   **Bước 2:** Hệ thống hiển thị Form tạo mới/chỉnh sửa Tag tin tức.
*   **Bước 3:** Người dùng nhập Tên Tag, URL Slug, chọn Trạng thái hoạt động (Active/Draft).
*   **Bước 4:** Người dùng nhấn "Lưu Tag" để lưu vào cơ sở dữ liệu.

### Quy tắc nghiệp vụ (Business Rules)
*   Tiêu đề bài viết, URL Slug, Mô tả ngắn/Sa-po, Nội dung chi tiết, Chuyên mục là các trường bắt buộc nhập đối với Bài viết.
*   Tên chuyên mục, Biệt danh (slug) là các trường bắt buộc đối với Chuyên mục.
*   Tên Tag, URL Slug, Trạng thái là các trường bắt buộc đối với Tag.
*   Ảnh đại diện bài viết khuyến nghị tỷ lệ 3:2 để đảm bảo hiển thị đồng bộ trên danh sách tin. Hệ thống tự động ghi nhận lịch sử biên tập bài viết (Version History) và tài khoản thực hiện sửa đổi gần nhất.

### Bảng mô tả trường thông tin Bài viết (Screen Description - Article Form)

| STT | Tên trường        | Bắt buộc? (Y/N) | Format    | Mô tả                                                                                                  |
| --- | ----------------- | --------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| 1   | Tiêu đề bài viết  | Y               | Text      | Tiêu đề chính hiển thị trên website (hệ thống tự động gợi ý URL slug không dấu).                       |
| 2   | URL Slug          | Y               | Text      | Đường dẫn truy cập bài viết (VD: /tin-tuc/lap-mang-fpt-he-2026).                                       |
| 3   | Mô tả ngắn / Sa-po| Y               | Textarea  | Đoạn văn bản ngắn dẫn dắt tin tức, tóm tắt nội dung chính (2-3 câu).                                   |
| 4   | Nội dung chi tiết | Y               | Rich Text | Trình soạn thảo WYSIWYG cho phép chèn định dạng văn bản, chèn link, chèn ảnh trực tiếp vào nội dung.    |
| 5   | Thẻ / Tags        | N               | Text      | Danh sách thẻ từ khóa liên quan, ngăn cách bằng dấu phẩy (dùng để liên kết tự động bài viết với SKU).  |
| 6   | Chuyên mục        | Y               | Select    | Chọn chuyên mục phân loại bài viết (Tin khuyến mãi, Tin công nghệ, Thông báo, Sự kiện).                |
| 7   | Tác giả           | N               | Text      | Tên tác giả bài đăng (mặc định lấy tên tài khoản đăng nhập, VD: "Admin").                              |
| 8   | Trạng thái        | Y               | Select    | Trạng thái xuất bản của bài viết: **Active** (Hoạt động/Công khai) hoặc **Draft** (Lưu nháp).          |
| 9   | Ảnh đại diện      | N               | File/Text | Upload file ảnh hoặc dán link ảnh đại diện (Thumbnail), khuyến nghị tỷ lệ 3:2.                          |
| 10  | SEO Title         | N               | Text      | Tiêu đề tối ưu hóa hiển thị trên Google (tối đa 70 ký tự).                                             |
| 11  | Meta Description  | N               | Textarea  | Mô tả ngắn hiển thị trên kết quả tìm kiếm Google (tối đa 160 ký tự).                                    |
| 12  | Meta Keywords     | N               | Text      | Các từ khóa phục vụ SEO, ngăn cách bằng dấu phẩy.                                                      |

---

## 9. Quản lý FAQ

| Description    | Chức năng cho phép người dùng thiết lập ngân hàng các câu hỏi thường gặp (FAQ) và phân loại theo từng danh mục hỗ trợ cước phí, kỹ thuật, thủ tục. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Biên tập viên, Người duyệt, Admin.                                                                                                               |
| Trigger        | Người dùng chọn menu "Quản lý FAQ" và click "+ Thêm Câu hỏi (FAQ)" hoặc "+ Thêm Danh Mục".                                                         |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống.                                                                                                  |
| Post-condition | Câu hỏi FAQ được lưu thành công vào thư viện dùng chung, sẵn sàng để gán hiển thị lên các trang hoặc blocks.                                      |

Module FAQ gồm **2 Tab chức năng chính**:
1.  **Danh sách Câu hỏi (FAQ):** Quản trị danh sách câu hỏi và câu trả lời.
2.  **Danh mục (Categories):** Phân loại chủ đề câu hỏi.

*   **Tạo mới/Chỉnh sửa Danh mục FAQ:**
    *   Người dùng truy cập tab "Danh mục", nhấn "+ Thêm Danh Mục" hoặc "Sửa".
    *   Nhập các trường: Tên danh mục (*), Thứ tự hiển thị, Ngôn ngữ, Checkbox trạng thái hoạt động.
    *   Nhấn "Lưu Danh mục".
*   **Tạo mới/Chỉnh sửa Câu hỏi FAQ:**
    *   Người dùng truy cập tab "Danh sách Câu hỏi", nhấn "+ Thêm Câu hỏi (FAQ)" hoặc "Sửa".
    *   Nhập các thông tin: Chọn Danh mục (*), Ngôn ngữ, Câu hỏi (*), Câu trả lời (Rich Text) (*), Thứ tự hiển thị, Checkbox trạng thái hoạt động.
    *   Nhấn "Lưu Câu hỏi".

### Quy tắc nghiệp vụ (Business Rules)
*   Danh mục, Câu hỏi và Câu trả lời là các trường bắt buộc nhập, không được để trống khi thực hiện lưu.
*   Hệ thống hỗ trợ tìm kiếm nhanh theo câu hỏi hoặc danh mục để biên tập viên dễ dàng tra cứu, tránh tạo câu hỏi trùng lặp trong thư viện dùng chung.

### Bảng mô tả trường thông tin Câu hỏi (Screen Description - FAQ Form)

| STT | Tên trường        | Bắt buộc? (Y/N) | Format    | Mô tả                                                                                               |
| --- | ----------------- | --------------- | --------- | --------------------------------------------------------------------------------------------------- |
| 1   | Danh mục          | Y               | Select    | Chọn chủ đề liên quan để phân nhóm FAQ (Thanh toán cước, Khắc phục sự cố, Chính sách & Thủ tục...). |
| 2   | Ngôn ngữ          | N               | Select    | Ngôn ngữ hiển thị câu hỏi: Tiếng Việt hoặc English.                                                 |
| 3   | Câu hỏi           | Y               | Text      | Nội dung câu hỏi thường gặp (VD: "Làm thế nào để thanh toán cước trực tuyến?").                     |
| 4   | Câu trả lời       | Y               | Rich Text | Nội dung hướng dẫn giải quyết chi tiết, hỗ trợ định dạng văn bản và chèn link.                      |
| 5   | Thứ tự hiển thị   | N               | Number    | Thứ tự sắp xếp câu hỏi khi hiển thị trên giao diện (mặc định 1).                                    |
| 6   | Trạng thái hoạt động| N             | Checkbox  | Tick chọn để cho phép câu hỏi được hiển thị và hoạt động ngoài website.                             |

---

## 10. Cấu hình Thông tin hay (Tag Mapping)

| Description    | Chức năng cho phép ánh xạ (map) tự động các tin tức, bài viết hoặc câu hỏi FAQ đến các sản phẩm/gói cước tương ứng thông qua các Tag từ khóa. Chức năng được thiết lập dưới dạng một Tab chức năng trong module Quản lý Tin tức. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống, Biên tập viên.                                                                                                                                                                                          |
| Trigger        | Người dùng chọn menu "Quản lý Tin tức", chọn tab "Cấu hình Thông tin hay (Tags Mapping)", chọn "Cấu hình" (⚙️) tại dòng Tag tương ứng hoặc chọn "+ Thêm Thông tin hay mới".                                                       |
| Pre-condition  | Người dùng đã đăng nhập thành công và truy cập tab Tags Mapping.                                                                                                                                                                |
| Post-condition | Cấu hình ánh xạ được lưu thành công, hệ thống tự động hiển thị các bài viết tin tức/FAQ liên quan ở chân trang chi tiết của sản phẩm (SKU) tương ứng ngoài website.                                                              |

*   **Bước 1:** Người dùng chọn tab "Cấu hình Thông tin hay (Tags Mapping)".
*   **Bước 2:** Người dùng nhấn nút "+ Thêm Thông tin hay mới" -> Hệ thống hiển thị Modal nhỏ yêu cầu chọn một Tag có sẵn từ dropdown -> Nhấn "Xác nhận".
*   **Bước 3:** Hệ thống mở **Panel cấu hình trượt từ bên phải qua (Slide-over Drawer)** chiếm 60% chiều rộng màn hình.
*   **Bước 4:** Giao diện panel chia làm 2 cột:
    *   **Cột Trái (Cấu hình):** Hiển thị danh sách các SKU đang liên kết (người dùng nhấn "Quản lý SKUs" để mở modal bộ chọn SKU nâng cao); Toggle Bật/Tắt Quy tắc Fallback khi không khớp.
    *   **Cột Phải (Live Preview):** Hiển thị trực quan khối "Thông tin hay" mô phỏng thực tế trên trang sản phẩm để người dùng kiểm tra nhanh các bài viết khớp Tag.
*   **Bước 5:** Trong modal chọn SKU nâng cao, người dùng tìm kiếm theo mã/tên SKU, lọc theo loại dịch vụ (Internet, Truyền hình, Camera, Thiết bị), chọn nhanh hoặc tick chọn thủ công các SKU áp dụng -> Nhấn "Xác nhận chọn".
*   **Bước 6:** Người dùng kiểm tra Live Preview và nhấn nút "Lưu cấu hình" trong Drawer.
*   **Bước 7:** Hệ thống validate dữ liệu (bắt buộc chọn ít nhất 1 SKU), lưu cấu hình, hiển thị thông báo thành công và trượt đóng Drawer về bên phải.

### Quy tắc nghiệp vụ (Business Rules)
*   **Quy tắc giao diện (UI/UX):** Panel cấu hình chi tiết sử dụng cơ chế Slide-over (trượt từ phải sang trái) chiếm 60% chiều rộng màn hình, giúp biên tập viên thao tác nhanh mà không bị mất ngữ cảnh của danh sách bên dưới.
*   Tên Tag và Danh sách SKUs liên kết là các trường bắt buộc (phải chọn ít nhất 1 SKU để lưu cấu hình).
*   **Quy tắc Fallback:** Khi bật toggle Quy tắc Fallback (ON), nếu tag đó tạm thời chưa có bài viết tin tức/FAQ nào được xuất bản, hệ thống sẽ tự động lấy các Bài viết Khuyến mãi Hot mặc định của hệ thống để hiển thị ngoài website, tránh để trống giao diện chân trang.

### Bảng mô tả trường thông tin (Screen Description - Tag Mapping Drawer)

| STT | Tên trường      | Bắt buộc? (Y/N) | Format        | Mô tả                                                                                                        |
| --- | --------------- | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | Tên Tag         | Y               | Text (Readonly)| Tên Tag từ khóa đang cấu hình (đã được chọn sẵn từ danh sách).                                               |
| 2   | SKUs liên kết   | Y               | Checkbox List | Danh sách các gói cước (SKU) sẽ áp dụng hiển thị các bài viết có tag này (bắt buộc chọn tối thiểu 1 SKU).    |
| 3   | Quy tắc Fallback| N               | Toggle Switch  | Bật/Tắt chế độ tự động hiển thị tin khuyến mãi mặc định khi không tìm thấy bài viết nào khớp với tag (Bật/Tắt).|

---

## 11. Cài đặt hiển thị (Cấu hình Checkout đa kênh) - Thuộc Phân hệ Quản lý sản phẩm

| Description    | Chức năng cho phép người dùng cấu hình chi tiết các thông tin hiển thị trên trang Checkout (SKUs áp dụng, chu kỳ thanh toán, mô tả khuyến mãi, thiết bị đi kèm, dịch vụ bổ sung, phương thức thanh toán và phí lắp đặt) độc lập cho từng kênh bán (Global vs tdw, hifpt, fptvn). |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Quản trị viên hệ thống (Super Admin, Admin CMS).                                                                                                                                                                                   |
| Trigger        | Người dùng chọn menu "Cài đặt Hiển thị", tab "Cấu hình Checkout" và nhấp mở rộng vùng cấu hình của kênh tương ứng.                                                                                                                 |
| Pre-condition  | Người dùng đã đăng nhập thành công và có quyền hạn Admin.                                                                                                                                                                          |
| Post-condition | Cấu hình trang Checkout của kênh bán được cập nhật thành công, thay đổi luồng thanh toán ngoài website tương ứng ngay lập tức.                                                                                                     |

*   **Bước 1:** Người dùng truy cập menu "Cài đặt Hiển thị", hệ thống hiển thị danh sách cấu hình Checkout được phân chia theo dạng Accordion của từng Kênh bán.
*   **Bước 2:** Trạng thái cấu hình của từng kênh con được ghi nhận trực quan bằng Badge màu sắc: **🌐 Dùng Global** (Kế thừa mặc định từ Global) hoặc **✏️ Tùy chỉnh riêng** (Có cấu hình ghi đè riêng).
*   **Bước 3:** Người dùng click vào tiêu đề Accordion để mở rộng vùng cấu hình của kênh bán:
    *   **Đối với Kênh Global (Cấu hình gốc):** Người dùng tìm kiếm và chọn các mã SKU gói cước áp dụng từ danh sách cuộn dọc, điền Ghi chú thanh toán, Thêm/Sửa/Xóa các Chu kỳ thanh toán và nhập mô tả khuyến mãi tương ứng, tick chọn Thiết bị đi kèm & Dịch vụ bổ sung mặc định, thêm mới và upload logo các Phương thức thanh toán, nhập Chú thích phí lắp đặt.
    *   **Đối với Kênh con (tdw, hifpt, fptvn):** Mặc định khi chưa chỉnh sửa, giao diện sẽ ở chế độ kế thừa (🌐 Dùng Global), toàn bộ form bị mờ đi và vô hiệu hóa chỉnh sửa. Khi người dùng thực hiện bất kỳ thao tác chỉnh sửa nào, hệ thống tự động chuyển sang trạng thái Custom (nhân bản dữ liệu Global hiện tại sang kênh con để chỉnh sửa độc lập, badge chuyển thành ✏️ Tùy chỉnh riêng).
*   **Bước 4:** Người dùng nhấn nút "Lưu cấu hình" của kênh tương ứng để hoàn tất.

### Quy tắc nghiệp vụ (Business Rules)
*   **Cơ chế kế thừa (Inheritance):** Kênh con để trống sẽ kế thừa hoàn toàn cấu hình Global. Khi có tùy chỉnh riêng, hệ thống sẽ ghi đè và ưu tiên cấu hình riêng của kênh con đó.
*   **Ràng buộc SKU:** Đối với cấu hình Global, bắt buộc người dùng chọn ít nhất 1 SKU gói cước để kích hoạt hiển thị các cấu hình chi tiết bên dưới. Nếu bỏ chọn toàn bộ SKU, hệ thống hiển thị cảnh báo yêu cầu chọn SKU và khóa form bên dưới.
*   **Danh sách SKU hiển thị:** Sử dụng khung cuộn dọc giới hạn chiều cao tối đa 160px để tối ưu giao diện (UX), tích hợp ô tìm nhanh real-time theo mã/tên SKU.
*   **Chu kỳ thanh toán:** Hỗ trợ cấu hình động: loại chu kỳ (1T, 3T, 6T, 12T...), tên hiển thị, mô tả khuyến mãi (VD: "Tặng 1 tháng cước"), phí lắp đặt tương ứng và trạng thái hoạt động.

### Bảng mô tả trường thông tin (Screen Description - Checkout Config Form)

| STT | Tên trường         | Bắt buộc? (Y/N) | Format        | Mô tả                                                                                                        |
| --- | ------------------ | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | Tìm nhanh SKU      | N               | Text          | Ô tìm kiếm nhanh mã hoặc tên gói cước trong danh sách SKU.                                                    |
| 2   | Chọn mã SKU        | Y (ở Global)    | Checkbox List | Tick chọn các gói cước áp dụng cho trang Checkout (Global bắt buộc chọn tối thiểu 1 SKU).                    |
| 3   | Ghi chú thanh toán | N               | Textarea      | Dòng text ghi chú nhỏ hiển thị dưới phần tóm tắt thanh toán (tối đa 250 ký tự).                              |
| 4   | Chu kỳ thanh toán  | Y               | List          | Danh sách chu kỳ thanh toán áp dụng, bao gồm: Loại chu kỳ, Tên hiển thị, Khuyến mãi, Phí lắp đặt, Trạng thái. |
| 5   | Thiết bị đi kèm    | N               | Checkbox List | Các thiết bị modem/camera trang bị mặc định đi kèm gói cước (VD: ONT 1 port, Wi-Fi 6, IQ3).                    |
| 6   | Dịch vụ bổ sung    | N               | Checkbox List | Các dịch vụ giá trị gia tăng mua kèm (VD: Fsafe, Ultra Fast, FPT Play VIP).                                  |
| 7   | Phương thức thanh toán| N            | List          | Cấu hình danh sách cổng thanh toán (Tên, Ảnh logo, Mô tả ngắn, Hoạt động).                                   |
| 8   | Chú thích phí lắp đặt| N             | Text          | Dòng chữ chú thích nhỏ hiển thị dưới mục Phí lắp đặt ở trang Checkout.                                       |

---

## 12. Quản lý tài khoản cá nhân & Đăng xuất

| Description    | Chức năng cho phép người dùng tự cập nhật thông tin cá nhân (họ tên, email, ảnh đại diện), thay đổi mật khẩu tài khoản cá nhân trực tiếp trên giao diện CMS, và thực hiện đăng xuất khỏi hệ thống. |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | Tất cả người dùng hệ thống (Admin, BTV, Duyệt bài, nhân sự vận hành...).                                                                                                                          |
| Trigger        | Người dùng click chọn mục "Thông tin tài khoản", "Đổi mật khẩu" hoặc "Đăng xuất" từ dropdown cá nhân ở góc phải trên của Header.                                                                   |
| Pre-condition  | Người dùng đã đăng nhập thành công vào hệ thống.                                                                                                                                                  |
| Post-condition | Submited... |

*   **Workflow Cập nhật Thông tin tài khoản:**
    *   **Bước 1:** Người dùng click vào Tên/Avatar cá nhân ở góc phải trên Header, hệ thống hiển thị Dropdown menu.
    *   **Bước 2:** Người dùng chọn "Thông tin tài khoản", hệ thống chuyển hướng và hiển thị trang **Thông tin tài khoản cá nhân** trong vùng nội dung chính.
    *   **Bước 3:** Người dùng thay đổi Họ và tên mới, Email mới, hoặc nhập URL ảnh đại diện / Click chọn tải ảnh mới lên máy tính (giao diện hiển thị Live Preview tức thời).
    *   **Bước 4:** Người dùng nhấn nút "Lưu thay đổi".
    *   **Bước 5:** Hệ thống validate dữ liệu, cập nhật thông tin mới vào database và cập nhật avatar cùng tên hiển thị của người dùng ở góc phải trên Header đồng bộ.

*   **Workflow Đổi mật khẩu:**
    *   **Bước 1:** Người dùng click vào Tên/Avatar cá nhân ở góc phải trên Header, hệ thống hiển thị Dropdown menu.
    *   **Bước 2:** Người dùng chọn "Đổi mật khẩu", hệ thống chuyển hướng và hiển thị trang **Thay đổi mật khẩu** trong vùng nội dung chính.
    *   **Bước 3:** Người dùng nhập Mật khẩu hiện tại, Mật khẩu mới (tối thiểu 6 ký tự) và Xác nhận mật khẩu mới.
    *   **Bước 4:** Người dùng nhấn nút "Cập nhật mật khẩu".
    *   **Bước 5:** Hệ thống kiểm tra tính chính xác của mật khẩu hiện tại, tính trùng khớp của mật khẩu mới, cập nhật vào database và hiển thị Toast thông báo thành công.

*   **Workflow Đăng xuất:**
    *   **Bước 1:** Người dùng click vào Tên/Avatar cá nhân ở góc phải trên Header, hệ thống hiển thị Dropdown menu.
    *   **Bước 2:** Người dùng click chọn tùy chọn "Đăng xuất".
    *   **Bước 3:** Hệ thống ghi nhận yêu cầu, đóng menu dropdown, và hiển thị thông báo Toast: *"Đăng xuất tài khoản thành công! (Hệ thống Demo)"* để xác nhận hoàn tất phiên làm việc.

### Quy tắc nghiệp vụ (Business Rules)
*   **Xác thực mật khẩu:** Khi đổi mật khẩu, bắt buộc người dùng nhập đúng mật khẩu hiện tại đang sử dụng. Mật khẩu mới phải có tối thiểu 6 ký tự và trường xác nhận mật khẩu mới phải khớp 100% với mật khẩu mới.
*   **Thông tin bắt buộc:** Họ tên và Email là các trường bắt buộc nhập, không được để trống khi lưu cập nhật thông tin cá nhân.
*   **Trạng thái Kênh & Vai trò:** Các trường Kênh vận hành và Vai trò hệ thống chỉ hiển thị dạng đọc (Read-only), người dùng cá nhân không được phép tự ý thay đổi (chỉ có Admin hệ thống mới có quyền cấp phát thông qua phân quyền tài khoản).
*   **Avatar preview:** Khi người dùng thay đổi URL ảnh hoặc upload file ảnh lên, vùng xem trước avatar (preview) phải hiển thị chính xác ảnh mới. Nếu không có ảnh, hệ thống hiển thị hai chữ cái đầu viết hoa của tên người dùng làm ký tự đại diện.

### Bảng mô tả trường thông tin Profile & Mật khẩu (Screen Description - Profile Form)

| STT | Tên trường         | Bắt buộc? (Y/N) | Format   | Mô tả                                                                                   |
| --- | ------------------ | --------------- | -------- | --------------------------------------------------------------------------------------- |
| 1   | Ảnh đại diện (URL) | N               | Text/File| Đường dẫn URL ảnh đại diện hoặc upload file trực tiếp để cập nhật avatar.                |
| 2   | Họ và tên          | Y               | Text     | Họ và tên đầy đủ hiển thị trên hệ thống.                                                 |
| 3   | Email              | Y               | Text     | Địa chỉ email liên hệ.                                                                  |
| 4   | Kênh vận hành      | Y               | Readonly | Kênh bán người dùng đang trực tiếp quản lý/vận hành dữ liệu (VD: FPT Telecom, FPT Play). |
| 5   | Vai trò            | Y               | Readonly | Nhóm quyền hạn của tài khoản trên CMS.                                                   |
| 6   | Mật khẩu cũ        | Y (khi đổi pass)| Password | Nhập mật khẩu hiện tại của tài khoản để xác thực.                                       |
| 7   | Mật khẩu mới       | Y (khi đổi pass)| Password | Mật khẩu mới mong muốn thay đổi (tối thiểu 6 ký tự).                                    |
| 8   | Xác nhận mật khẩu  | Y (khi đổi pass)| Password | Xác nhận lại mật khẩu mới vừa nhập.                                                     |

---

# IV. CÁC YÊU CẦU PHI CHỨC NĂNG

    * **Hiệu năng:** Tốc độ tải dữ liệu danh sách SKU và cập nhật cấu hình checkout phải dưới 1 giây. Việc render kéo thả không gây trễ hoặc đơ trình duyệt.
    * **Bảo mật:** Kiểm tra token xác thực người dùng và quyền hạn (RBAC) trên Server trước khi cho phép lưu cấu hình hoặc cập nhật thông tin trang.
    * **Trải nghiệm (UI/UX):** Giao diện CMS được xây dựng theo chuẩn Dark Mode mượt mà, phân tách các kênh con rõ ràng, trạng thái kế thừa/tùy chỉnh riêng trực quan bằng màu sắc tương phản.

---

# V. PHỤ LỤC

    * **Link Wireframe tham chiếu:** wireframe_module_1_cms.html
    * **Tài liệu tham khảo hệ thống:** Thiết kế hệ thống Product Hub (PDH) - FPT Telecom.

---

# VI. PHỤ LỤC VI: ĐẶC TẢ CẤU TRÚC & CÁC SECTIONS CỦA 5 LDP TEMPLATE TIÊU CHUẨN

## 1. Nguyên tắc thiết kế giao diện chung cho LDP (Layout, Mobile & Background)

Để đảm bảo tính đồng bộ hệ thống và tối ưu hóa trải nghiệm người dùng (UX) trên đa nền tảng, tất cả 5 template LDP tiêu chuẩn đều phải tuân thủ các nguyên tắc thiết kế chung sau:

### a. Cấu hình Ảnh nền / Màu nền toàn trang (Page Background Config)

- Hệ thống CMS cung cấp tính năng cấu hình nền chung cho toàn bộ Landing Page (Page-wide Background) tại phần thiết lập LDP Builder.
- **Trường cấu hình:** Vận hành có thể upload tệp ảnh trực tiếp tại trường `Ảnh nền toàn trang (Page Background Image)` (không hỗ trợ dán URL ảnh thủ công) và chọn mã màu tại trường `Màu nền toàn trang (Page Background Color)`.
- **Hiệu ứng hiển thị:**
  - Ảnh nền toàn trang sẽ trải dài liên tục trên toàn bộ phần thân (Body) của Landing Page, không bao phủ hay ảnh hưởng đến Header và Footer. Thuộc tính CSS mặc định: `background-size: cover; background-attachment: fixed; background-position: center;`.
  - Nếu không upload ảnh nền, hệ thống sẽ sử dụng màu nền được cấu hình.
  - Nếu cả hai trường đều để trống, hệ thống sẽ tự động áp dụng màu nền mặc định theo từng loại Template:
    - **LDP SA - FPT Play:** Mặc định sử dụng màu tím sẫm (Deep Purple `#1a0933` hoặc dải gradient tím/đen) làm màu nền trải dài liên tục trên phần thân (Body) kết hợp ảnh pattern thể thao chìm. Giao diện phần thân luôn đảm bảo tính liền mạch, không bị đứt đoạn màu nền giữa các section.
    - **LDP Wi-Fi 7:** Mặc định sử dụng màu xám tối / đen sang trọng (`#111111`).
    - **LDP Camera, Internet, Thu Lead:** Mặc định sử dụng màu trắng sáng (`#ffffff`) hoặc xám nhạt (`#f8f9fa`).

### b. Đặc tả hiển thị trên Thiết bị di động (Mobile Responsive Layouts)

- **Tự động chuyển đổi bố cục (Grid-to-Slider/Single-column):**
  - Các Section hiển thị dạng lưới (Grid) từ 3-4 cột trên Desktop (như USP, Tính năng, Giải thưởng, Feedback, và đặc biệt là danh sách gói cước) khi chuyển sang giao diện Mobile sẽ tự động chuyển đổi sang dạng **Single Column** (1 cột cuộn dọc) hoặc **Swipeable Carousel** (Slider cuộn ngang hỗ trợ vuốt tay, kèm dấu chấm tròn chỉ số trang ở dưới) để tránh làm giao diện bị bóp nhỏ hoặc kéo dài trang quá mức.
- **Tách biệt hình ảnh Banner Hero:**
  - Đối với các Section Hero banner đầu trang, bắt buộc Vận hành phải tải lên 2 phiên bản ảnh: `Ảnh nền Desktop` (tối ưu kích thước 1920x800px) và `Ảnh nền Mobile` (tối ưu kích thước 768x800px) để đảm bảo hình ảnh không bị méo, text trên banner mobile rõ ràng, dễ đọc.
- **Tối ưu hóa các dải Countdown và Sticky Bar:**
  - Trên giao diện Mobile, dải countdown hẹn giờ và sticky bottom bar sẽ tự động thu gọn các khoảng đệm (padding) và cỡ chữ, ẩn bớt các mô tả phụ không cần thiết, chỉ hiển thị tiêu đề chính, bộ đếm ngược và nút CTA hành động để tiết kiệm diện tích màn hình.
- **Bảng so sánh (Compare Table):**
  - Các bảng so sánh thông số (như bảng so sánh Wi-Fi, bảng giá FPT Play) trên Mobile sẽ tự động kích hoạt thanh cuộn ngang (Horizontal scroll table) hoặc chuyển thành dạng slide chọn 1-1 giữa các đối tượng để người dùng dễ so khớp.

### c. Quy định giới hạn số lượng ảnh tải lên & hiển thị (Image Upload & Display Limits)

Để tối ưu hóa tốc độ tải trang (Page Load Speed/Lighthouse SEO), đảm bảo tính ổn định của hệ thống và tránh lỗi tràn vỡ bố cục giao diện, CMS áp dụng quy tắc giới hạn nghiêm ngặt số lượng ảnh tải lên và hiển thị đối với từng khối component như sau:

| STT | Khối Component / Section | Số lượng ảnh tối đa cho phép tải lên | Bố cục hiển thị ngoài trang (Desktop) | Bố cục hiển thị ngoài trang (Mobile) |
| --- | --- | --- | --- | --- |
| 1 | **Banner Hero - Khối**<br/>(`banner-cam-hero`...) | - 1 ảnh nền Desktop (1920x800px)<br/>- 1 ảnh nền Mobile (768x800px) | Phủ kín toàn chiều rộng khối đầu trang (100% width). | Phủ kín toàn chiều rộng khối đầu trang (100% width). |
| 2 | **Đặc tính nổi bật / Ưu đãi - Khối**<br/>(`info-cam-usp`...) | Tối đa **4 ảnh/icon** (mỗi đặc tính 1 ảnh/icon, chỉ hỗ trợ upload tệp trực tiếp). | Dạng lưới Grid ngang 4 cột. | Dạng Slider cuộn ngang (Swipeable) hoặc xếp dọc 1 cột. |
| 3 | **Quy trình / Các bước thực hiện - Khối**<br/>(`procedure-lead`...) | Cố định **3 ảnh/icon** (mỗi bước 1 ảnh/icon). | Xếp ngang 3 cột tương ứng 3 bước. | Xếp dọc 1 cột từ bước 1 đến bước 3. |
| 4 | **Khối Chi tiết FPT Camera AI**<br/>(`cam-detail`) | Tối đa **4 ảnh** tính năng phụ cho mỗi dòng sản phẩm. | Dạng Grid lưới cố định 2x2 ở bên phải ảnh sản phẩm chính. | Dạng Slider cuộn ngang hỗ trợ vuốt tay. |
| 5 | **Card combo thiết bị - Khối**<br/>(`combo-cam` / `combo-cam`) | Tối đa **6 ảnh combo** (mỗi combo 1 ảnh sản phẩm). | Dạng lưới Grid ngang 3 cột. | Dạng Slider cuộn ngang (Swipeable). |
| 6 | **Giải thưởng - Khối**<br/>(`awards-cam` / `awards-cam`) | Tối đa **10 ảnh giải thưởng** (mỗi giải thưởng 1 ảnh cúp/chứng nhận). | Dạng lưới Grid ngang 4 cột. | Dạng Slider cuộn ngang. |
| 7 | **Bộ sưu tập Video - Khối**<br/>(`reviews-lead` / `reviews-lead`) | Tối đa **10 ảnh Thumbnail** (tương ứng tối đa 10 video review). | Dạng lưới Grid hoặc hàng ngang có thể scroll ngang. | Dạng Slider cuộn ngang. |
| 8 | **Danh sách ưu đãi (Slider) - Khối**<br/>(`promo-inet` / `promo-inet`) | Tối đa **12 ảnh banner** khuyến mãi. | Dạng Slider (Carousel) trượt ngang tự động. | Dạng Slider trượt ngang tự động, hiển thị duy nhất 1 banner. |
| 9 | **Slide trượt đánh giá khách hàng - Khối**<br/>(`feedback-lead` / `feedback-lead`) | Tối đa **10 ảnh đại diện (avatar)** khách hàng. | Dạng Slider hiển thị 3 nhận xét cùng lúc. | Dạng Slider hiển thị duy nhất 1 nhận xét, vuốt ngang. |
| 10 | **Đối tượng - Khối**<br/>(`targets-camp` / `targets-camp`) | Tối đa **4 ảnh đối tượng** (mỗi nhóm đối tượng 1 ảnh). | Dạng lưới Grid ngang 4 cột. | Dạng Slider cuộn ngang. |
| 11 | **Khối Danh mục nội dung giải trí**<br/>(`categories-sa`) | - Tối đa **3 ảnh Banner tab**<br/>- Tối đa **12 ảnh Poster phim** cho mỗi tab. | - Banner tab hiển thị dạng dải lớn đầu tab.<br/>- Poster phim xếp dạng lưới Grid 4-6 cột. | - Banner tab hiển thị dạng dải nhỏ.<br/>- Poster phim chuyển thành Slider cuộn ngang nhiều hàng. |
| 12 | **Khối Thể thao trực tiếp**<br/>(`sports-sa`) | Tối đa **6 ảnh/logo giải đấu**. | Dạng lưới Grid 3 cột x 2 hàng. | Dạng Slider cuộn ngang. |
| 13 | **Khối Dàn bình luận viên**<br/>(`commentators-sa`) | Tối đa **8 ảnh đại diện** bình luận viên. | Dạng lưới Grid 4 cột x 2 hàng. | Dạng Slider cuộn ngang. |

### d. Ràng buộc độ dài các trường dữ liệu và hành vi hệ thống (Data Length Restrictions & System Behavior)

Để đảm bảo tính toàn vẹn dữ liệu, tránh lỗi vỡ layout trên các thiết bị và tối ưu hóa SEO, CMS áp dụng các quy định ràng buộc độ dài đầu vào trên giao diện quản trị (UI) như sau:

*   **Tất cả các trường văn bản đầu vào trên CMS phải có thuộc tính `maxlength` tương ứng để chặn cứng hành vi nhập vượt quá giới hạn trên UI.**
*   **Ngoại lệ đối với Trình soạn thảo văn bản (Text Editor):** Đối với các trường sử dụng Trình soạn thảo văn bản Rich Text (Rich Text Editor / WYSIWYG) để soạn thảo văn bản định dạng (như Nội dung chi tiết bài viết, Câu trả lời FAQ...), hệ thống **sẽ không áp dụng giới hạn số lượng ký tự nhập vào** để đảm bảo tính linh hoạt khi định cấu hình.

#### Quy định chung về giới hạn ký tự (LDP Sections & Components):
*   **Nhãn ngắn / Badge:** Tối đa **20 ký tự** (Chặn cứng khi nhập).
*   **Tiêu đề ngắn:** Tên gói cước, tiêu đề đặc tính, tên combo, tiêu đề video... Tối đa **50 ký tự** (Chặn cứng khi nhập).
*   **Tiêu đề chính / Headline / H1:** Tiêu đề section lớn. Tối đa **80 ký tự** (Chặn cứng khi nhập).
*   **Mô tả ngắn:** Mô tả phụ dưới tiêu đề, mô tả gói cước, mô tả bước... Tối đa **150 ký tự** (Hiển thị bộ đếm ngược và chặn cứng khi nhập).
*   **Mô tả chi tiết:** Nội dung feedback khách hàng, đoạn văn bản mô tả. Tối đa **300 ký tự** (Hiển thị bộ đếm ngược ký tự).

#### SEO Metadata (Cấu hình SEO cho Landing Page):
*   **Meta Title:** Khuyến nghị dưới **60 ký tự** (Hiển thị cảnh báo màu vàng khi vượt quá và chặn cứng tại **100 ký tự**).
*   **Meta Description:** Khuyến nghị độ dài tối ưu từ **150 - 160 ký tự** (Hiển thị bộ đếm ký tự thời gian thực và chặn cứng tại **200 ký tự**).

## 2. Thư viện Khối Component Tái sử dụng (Shared Component Library)

Để tối ưu hóa việc phát triển và cho phép Vận hành tái cấu hình, tái sử dụng linh hoạt các phần tử giao diện trên bất kỳ Landing Page nào, toàn bộ hệ thống LDP Builder được xây dựng dựa trên **16 khối component độc lập** sau:

| STT | Tên Khối Component | Mã Component | Khả năng Tái sử dụng & Phạm vi áp dụng | Mô tả & Các trường cấu hình chính có thể chỉnh sửa (Kèm giới hạn ký tự) |
| --- | --- | --- | --- | --- |
| 1 | **Banner Hero - Khối**<br/>(`banner-cam-hero`...) | banner-cam-hero | **Tái sử dụng chung** cho tất cả các Landing Page. | Khối biểu ngữ lớn đầu trang. Cấu hình: Ảnh nền (Background Image) (1920×800px - Chỉ hỗ trợ upload), Ảnh nền Mobile (768x800px - Chỉ hỗ trợ upload), URL ảnh nền (Desktop & Mobile), Text Nút CTA chính (Tối đa 30 ký tự), URL Nút CTA chính (Tối đa 255 ký tự), Text Nút CTA phụ (Tối đa 30 ký tự), URL Nút CTA phụ (Tối đa 255 ký tự - cho phép bật/tắt 2 nút). |
| 2 | **Đặc tính nổi bật / Ưu đãi - Khối**<br/>(`info-cam-usp`...) | info-cam-usp | **Tái sử dụng chung** cho tất cả các LDP để tối ưu code. | Khối đặc tính nổi bật/ ưu đãi dạng lưới (Grid) 4 cột. Cấu hình: Tiêu đề khối (Tối đa 80 ký tự), Icon/Ảnh cho từng lợi ích, Tiêu đề ngắn (Tối đa 50 ký tự), Mô tả chi tiết (Tối đa 200 ký tự), Màu nền, Ảnh bg. |
| 3 | **Card gói cước tiêu chuẩn (Internet) - Khối**<br/>(`products-inet` / `products-inet`...) | products-inet | **Tái sử dụng chung** cho LDP Internet, Wi-Fi 7 và LDP Thu Lead. | Khối card gói cước hiển thị được lấy data từ PDH (giới hạn 100 gói), gồm:<br/>- Tiêu đề khối (Tối đa 80 ký tự)<br/>- Danh sách gói cước trong mỗi gói gồm: Ảnh banner gói, Tên gói (Tối đa 50 ký tự), Giá (VNĐ/tháng) (những trường này không cho chỉnh sửa), Tốc độ Download, Tốc độ Upload, Icon Tốc độ, Tính năng (textarea - tối đa 150 ký tự/dòng), CTA phụ - Text (Tối đa 30 ký tự), CTA phụ - URL (Tối đa 255 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Hỗ trợ thêm/xóa gói<br/>- Hỗ trợ cấu hình phân Tab: có tên tab có thể chỉnh sửa (Cá nhân, Gia đình, Combo,... - Tối đa 30 ký tự)<br/>- Màu nền, Ảnh bg.<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 4 | **Card gói cước tiêu chuẩn (SA) - Khối**<br/>(`products-sa` / `products-sa`...) | products-sa | **Đặc thù** cho FPT Play. | Khối card gói cước hiển thị được lấy data từ PDH (giới hạn 100 gói), gồm:<br/>- Tiêu đề khối (Tối đa 80 ký tự)<br/>- Danh sách gói cước trong mỗi gói gồm: Ảnh banner gói, Tên gói (Tối đa 50 ký tự), Giá (VNĐ/tháng) (những trường này không cho chỉnh sửa), Tính năng (textarea - tối đa 150 ký tự/dòng), CTA phụ - Text (Tối đa 30 ký tự), CTA phụ - URL (Tối đa 255 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Hỗ trợ thêm/xóa gói<br/>- Hỗ trợ cấu hình phân Tab: có tên tab có thể chỉnh sửa (Cá nhân, Gia đình, Combo,... - Tối đa 30 ký tự)<br/>- Màu nền, Ảnh bg.<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 5 | **Card combo thiết bị - Khối**<br/>(`combo-cam`...) | combo-cam | **Tái sử dụng** cho các trang bán thiết bị kèm gói dịch vụ (như LDP Camera AI). | Khối sản phẩm bán thiết bị vật lý kết hợp dịch vụ đi kèm (giới hạn 100). Cấu hình:<br/>- Danh sách Combo sản phẩm hiển thị đồng bộ từ PDH (không cho phép thêm gói/combo trống thủ công, chỉ hỗ trợ đồng bộ dữ liệu sản phẩm từ PDH). Mỗi combo gồm: Tên combo (không chỉnh sửa), Badge nhãn (vd: COMBO - Tối đa 20 ký tự), Ảnh minh họa (không chỉnh sửa), Giá khuyến mãi (không chỉnh sửa), Giá gốc (gạch ngang), Phần trăm giảm, Badge ưu đãi phụ (không chỉnh sửa - Tối đa 30 ký tự), Nút CTA - Text (Tối đa 30 ký tự), Nút CTA - URL (Tối đa 255 ký tự), Mô tả ngắn (Tối đa 150 ký tự), Checkbox Hiển thị/Ẩn, Hỗ trợ thêm/xóa combo. |
| 6 | **Bộ đếm ngược - Khối**<br/>(`timer-camp-countdown`...) | timer-camp-countdown | **Tái sử dụng chung** cho các trang có thời hạn chiến dịch/sự kiện. | Khối đồng hồ đếm ngược. Hỗ trợ 2 chế độ hiển thị: Dính liền chân Hero Banner (Case 1) hoặc Dải countdown độc lập giữa trang (Case 2). Cấu hình:<br/>- Bật dải Countdown hẹn giờ độc lập (Checkbox)<br/>- Ảnh / Icon quà tặng / Thiết bị<br/>- Tiêu đề dải Countdown / Nhãn Countdown ưu đãi (Tối đa 80 ký tự)<br/>- Thời gian Countdown kết thúc (datetime-local)<br/>- Nút CTA Countdown — Text (Tối đa 30 ký tự)<br/>- Nút CTA Countdown — URL (Tối đa 255 ký tự)<br/>- Màu nền, Ảnh bg. |
| 7 | **Form popup thu thập Lead - Khối**<br/>(`form-lead-popup`...) | form-lead-popup | **Tái sử dụng chung** cho tất cả các hành động thu lead của LDP. | Modal popup thu thập thông tin đăng ký. Cấu hình: Tiêu đề popup (Tối đa 80 ký tự), mô tả phụ (Tối đa 150 ký tự), text nút Submit (Tối đa 30 ký tự), Màu nền, Ảnh bg. |
| 8 | **Bộ sưu tập Video - Khối**<br/>(`reviews-lead`...) | reviews-lead | **Tái sử dụng chung** cho các trang cần chèn review của KOLs/khách hàng. | Khối hiển thị video dạng Grid (tối đa 10 video). Cấu hình mỗi video gồm: Ảnh thumbnail, Tiêu đề section video (Tối đa 80 ký tự), URL Video (Tối đa 255 ký tự), có thể scroll ngang được, Màu nền, Ảnh bg. |
| 9 | **Slide trượt đánh giá khách hàng - Khối**<br/>(`feedback-lead`...) | feedback-lead | **Tái sử dụng chung** cho nhận xét của khách hàng. | Khối slider nhận xét của khách hàng (tối đa 10 đánh giá). Cấu hình: Tiêu đề khối (Tối đa 80 ký tự), Avatar, Tên khách hàng (Tối đa 50 ký tự), Tiêu đề nhận xét (Tối đa 50 ký tự), Nội dung nhận xét (Tối đa 300 ký tự), Đánh giá số sao (1-5 sao), Khu vực / Phụ đề (Tối đa 50 ký tự), Màu nền, Ảnh bg. |
| 10 | **Accordion câu hỏi thường gặp (FAQ) - Khối**<br/>(`faq-cam`...) | faq-cam | **Tái sử dụng chung** cho các trang cần giải đáp thắc mắc khách hàng. | Khối câu hỏi thường gặp dạng đóng/mở (tối đa 6 câu). Cấu hình: Tiêu đề khối (Tối đa 80 ký tự), Dropdown (Danh mục) liên kết trực tiếp theo ID từ kho FAQ chung của hệ thống (không nhập text trực tiếp ngoài CMS), Upload bg bên phải (Desktop & Mobile - Tối đa 255 ký tự) + Link URL (Tối đa 255 ký tự), Màu nền, Ảnh bg. |
| 11 | **Thanh thông báo neo chân trang (Sticky Bar) - Khối**<br/>(`sticky-cam`...) | sticky-cam | **Tái sử dụng chung** để neo giữ nút đăng ký ở chân trang. | Thanh neo dưới cùng màn hình. Cấu hình: Ảnh nền banner (cuối trang) (tối đa 1MB), Link URL (Tối đa 255 ký tự). |
| 12 | **Quy trình / Các bước thực hiện - Khối**<br/>(`procedure-lead`...) | procedure-lead | **Tái sử dụng** cho các LDP cần mô tả quy trình mua/lắp đặt. | Khối hiển thị quy trình (mặc định 3 bước). Cấu hình:<br/>- Tiêu đề khối (Tối đa 80 ký tự)<br/>- Mỗi bước gồm: Icon bước, Tiêu đề bước (Tối đa 50 ký tự), Mô tả (Tối đa 150 ký tự)<br/>- Cấu hình Nút chính (Màu cam): Text nút (Tối đa 30 ký tự), Link URL (Tối đa 255 ký tự)<br/>- Cấu hình Nút phụ (Màu xanh): Text nút (Tối đa 30 ký tự), Số điện thoại / Link (Tối đa 255 ký tự)<br/>- Màu nền, Ảnh bg. |
| 13 | **Dải chữ chạy ngang đăng ký thành công - Khối**<br/>(`runner-lead-proof`...) | runner-lead-proof | **Tái sử dụng chung** để tạo hiệu ứng kích thích mua hàng (Social Proof). | Dải chữ chạy ngang vô tận (marquee style) hiển thị thông báo đăng ký thành công ảo (ví dụ: "Nguyễn Văn A - vừa đăng ký gói Lux..."). Cấu hình: Danh sách Tên khách hàng, Khu vực, nội dung, tốc độ chạy, Màu nền, Ảnh bg. |
| 14 | **Danh sách ưu đãi (Slider) - Khối**<br/>(`promo-inet`...) | promo-inet | **Tái sử dụng chung** cho các banner quảng cáo khuyến mãi phụ. | Khối slider banner trượt (tối đa 12). Cấu hình: Tiêu đề section (Tối đa 80 ký tự), ảnh banner (chỉ hỗ trợ upload), URL liên kết khi click (Tối đa 255 ký tự), Màu nền, Ảnh bg. |
| 15 | **Đối tượng - Khối**<br/>(`targets-camp`...) | targets-camp | **Tái sử dụng** cho các LDP cần phân loại đối tượng khách hàng. | Khối đối tượng gồm 4 card: Tiêu đề mục tiêu (Headline - Tối đa 80 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Danh sách nhóm đối tượng. Mỗi nhóm gồm: Ảnh đối tượng, Tiêu đề (Tối đa 50 ký tự), Mô tả (Tối đa 150 ký tự), Màu nền, Ảnh bg. |
| 16 | **Giải thưởng - Khối**<br/>(`awards-cam`...) | awards-cam | **Tái sử dụng** cho các LDP cần vinh danh chất lượng thương hiệu. | Tiêu đề Section giải thưởng (Tối đa 80 ký tự), Danh sách giải thưởng vinh danh (Tối đa 10 giải). Mỗi giải gồm: Nhãn giải thưởng (Label - Tối đa 50 ký tự), Tên giải thưởng / Danh hiệu (Tối đa 100 ký tự), Ảnh cúp / Chứng nhận, Mô tả ngắn ở chân card (Tối đa 150 ký tự), Hỗ trợ thêm/xóa giải thưởng, Màu nền, Ảnh bg. |

## 3. Đặc tả cấu trúc chi tiết theo từng Template

### a. Template: LDP Camera AI (8 Sections)

- **Mục tiêu:** Giới thiệu và thúc đẩy đăng ký/chọn mua thiết bị FPT Camera AI cùng các gói lưu trữ Cloud đi kèm.
- **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự) |
| --- | --- | --- | --- |
| 1 | Banner hero - Camera AI | `banner-cam-hero` | - Ảnh nền (Background Image) (1920×800px)<br/>- Ảnh nền Mobile (768x800px)<br/>- URL ảnh nền (Desktop & Mobile - Tối đa 255 ký tự)<br/>- Text Nút CTA chính (Tối đa 30 ký tự)<br/>- URL Nút CTA chính (Tối đa 255 ký tự)<br/>- Text Nút CTA phụ (Tối đa 30 ký tự)<br/>- URL Nút CTA phụ (Tối đa 255 ký tự) |
| 2 | Info - Đặc tính nổi bật | `info-cam-usp` | - Tiêu đề chính Section (Tối đa 80 ký tự)<br/>- Mô tả phụ Section (Tối đa 150 ký tự)<br/>- Cấu hình 4 công nghệ nổi bật. Với mỗi công nghệ: Tiêu đề (Tối đa 50 ký tự), Mô tả ngắn (Tối đa 150 ký tự), Icon / Ảnh minh họa (Chỉ hỗ trợ upload) |
| 3 | Detail - Chi tiết Camera | `cam-detail` | - Tiêu đề Section (Tối đa 80 ký tự)<br/>- Cấu hình chi tiết 2 dòng sản phẩm Camera chính (Trong nhà & Ngoài trời). Với mỗi dòng: Tên sản phẩm (Tối đa 50 ký tự), Mô tả phụ (Subtitle - Tối đa 150 ký tự), Ảnh sản phẩm chính, Giá bán lẻ thiết bị, Nhãn ưu đãi (Badge - Tối đa 20 ký tự), Text nút CTA (Tối đa 30 ký tự), URL nút CTA (Tối đa 255 ký tự), danh sách ảnh tính năng phụ (cho phép upload tối đa 4 ảnh; hiển thị dạng Grid cố định 2x2 trên Desktop, hiển thị dạng Slider cuộn ngang trên Mobile) |
| 4 | Combo - Chọn mua Camera | `combo-cam` | - Tiêu đề Section chọn camera (Headline - Tối đa 80 ký tự)<br/>- Giá bắt đầu (text mô tả phụ - Tối đa 100 ký tự)<br/>- Danh sách Combo sản phẩm hiển thị đồng bộ từ PDH (không cho phép thêm gói/combo trống thủ công, chỉ hỗ trợ đồng bộ dữ liệu sản phẩm từ PDH). Mỗi combo gồm: Tên combo (Tối đa 50 ký tự), Badge nhãn (vd: COMBO - Tối đa 20 ký tự), Ảnh minh họa URL, Giá khuyến mãi, Giá gốc (gạch ngang), Phần trăm giảm, Badge ưu đãi phụ (Tối đa 30 ký tự), Nút CTA - Text (Tối đa 30 ký tự), Nút CTA - URL (Tối đa 255 ký tự), Mô tả ngắn (Tối đa 150 ký tự), Checkbox Hiển thị/Ẩn, Hỗ trợ thêm/xóa combo |
| 5 | Detail - Ứng dụng FPT Camera | `app-cam` | - Tiêu đề giới thiệu App (Tối đa 80 ký tự)<br/>- Ảnh Mockup điện thoại<br/>- Link App Store (Tối đa 255 ký tự)<br/>- Link Google Play (Tối đa 255 ký tự)<br/>- Danh sách tính năng App (Textarea nhập nhiều dòng, mỗi dòng tối đa 150 ký tự) |
| 6 | Awards - Giải thưởng & Thương hiệu | `awards-cam` | - Tiêu đề Section giải thưởng (Tối đa 80 ký tự)<br/>- Danh sách giải thưởng vinh danh (Tối đa 4 giải). Mỗi giải gồm: Nhãn giải thưởng (Label - Tối đa 50 ký tự), Tên giải thưởng / Danh hiệu (Tối đa 100 ký tự), Ảnh cúp / Chứng nhận, Mô tả ngắn ở chân card (Tối đa 150 ký tự), Hỗ trợ thêm/xóa giải thưởng |
| 7 | FAQ - Câu hỏi thường gặp | `faq-cam` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách các câu hỏi thường gặp. Mỗi câu hỏi thu gọn thành 1 dòng duy nhất gồm: Dropdown đồng bộ từ kho FAQ chung, nút Xóa dòng. Nội dung Câu hỏi & Trả lời tự động liên kết hiển thị từ kho FAQ theo ID đã chọn mà không hiển thị trường nhập liệu trên CMS |
| 8 | Sticky - Thanh đăng ký nhanh | `sticky-cam` | - Duy nhất 1 background tĩnh (màu nền hoặc 1 ảnh nền, không hỗ trợ slide)<br/>- Tiêu đề thông báo ưu đãi (Tối đa 50 ký tự)<br/>- Giá/Thông tin ưu đãi (Tối đa 100 ký tự)<br/>- Nút CTA - Text (Tối đa 30 ký tự)<br/>- Nút CTA - URL (Tối đa 255 ký tự) |

### b. Template: LDP Campaign Wi-Fi 7 (9 Sections)

- **Mục tiêu:** Quảng bá chiến dịch công nghệ Wi-Fi 7 thế hệ mới, thu thập thông tin đăng ký tư vấn/lắp đặt gói Lux/Ultra Fast Wi-Fi 7.
- **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự) |
| --- | --- | --- | --- |
| 1 | Banner hero - Wi-Fi 7 | `banner-cam-hero` | - Ảnh nền (Background Image) (1920×800px)<br/>- Ảnh nền Mobile (768x800px)<br/>- URL ảnh nền (Desktop & Mobile - Tối đa 255 ký tự)<br/>- Ảnh sản phẩm nổi bật (nếu có)<br/>- Text Nút CTA chính (Tối đa 30 ký tự)<br/>- URL Nút CTA chính (Tối đa 255 ký tự)<br/>- Text Nút CTA phụ (Tối đa 30 ký tự)<br/>- URL Nút CTA phụ (Tối đa 255 ký tự)<br/>- Dải Countdown hẹn giờ (Chỉ hiển thị dính liền chân Hero banner — Case 1): Checkbox bật, Ảnh / Icon quà tặng / Thiết bị, Tiêu đề dải (Tối đa 80 ký tự), Thời gian kết thúc, Nút CTA Countdown - Text (Tối đa 30 ký tự), Nút CTA Countdown - URL (Tối đa 255 ký tự) |
| 2 | Timer - Countdown độc lập | `timer-camp-countdown` | - Bật dải Countdown hẹn giờ độc lập (Checkbox)<br/>- Ảnh / Icon quà tặng / Thiết bị<br/>- Tiêu đề dải Countdown / Nhãn Countdown ưu đãi (Tối đa 80 ký tự)<br/>- Thời gian Countdown kết thúc (datetime-local)<br/>- Nút CTA Countdown — Text (Tối đa 30 ký tự)<br/>- Nút CTA Countdown — URL (Tối đa 255 ký tự)<br/><br/>*Lưu ý thiết kế:* Section này hiển thị độc lập hoàn toàn (Case 2), CSS padding top/bottom sẽ cách ra giống như các section khác. |
| 3 | Info - Công nghệ nổi bật | `info-cam-usp` | - Headline Section (Tối đa 80 ký tự)<br/>- Mô tả phụ Section (Tối đa 150 ký tự)<br/>- Cấu hình 4 đặc tính vượt trội. Với mỗi đặc tính: Tiêu đề (Tối đa 50 ký tự), Mô tả ngắn (Tối đa 150 ký tự), Icon / Ảnh minh họa (Chỉ hỗ trợ upload) |
| 4 | Products - Gói cước Wi-Fi 7 | `products-inet` | - Tiêu đề Section gói Wi-Fi 7 (Headline - Tối đa 80 ký tự)<br/>- Danh sách gói cước hiển thị đồng bộ từ PDH (không cho phép thêm gói cước trống thủ công, chỉ hỗ trợ đồng bộ dữ liệu sản phẩm từ PDH). Mỗi gói gồm: Checkbox Nổi bật, Ảnh banner gói, Tên gói (Tối đa 50 ký tự), Giá (VNĐ/tháng), Tốc độ Download, Tốc độ Upload, Tính năng (textarea - tối đa 150 ký tự/dòng), CTA phụ - Text (Tối đa 30 ký tự), CTA phụ - URL (Tối đa 255 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Hỗ trợ thêm/xóa gói<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 5 | Compare - Bảng so sánh thế hệ Wi-Fi | `compare-camp` | - Tiêu đề Section bảng so sánh (Tối đa 80 ký tự)<br/>- Mô tả phụ (Tối đa 150 ký tự)<br/>- Nút CTA chính - Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự)<br/>- Nút CTA phụ - Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự)<br/>- Danh sách tiêu chí so sánh dạng bảng. Mỗi hàng gồm: Tính năng/Tiêu chí (Tối đa 50 ký tự), Wi-Fi 7 (Tối đa 50 ký tự), Wi-Fi 6E (Tối đa 50 ký tự), Wi-Fi 6 (Tối đa 50 ký tự), Wi-Fi 5 (Tối đa 50 ký tự) |
| 6 | Targets - Đối tượng mục tiêu | `targets-camp` | - Tiêu đề mục tiêu (Headline - Tối đa 80 ký tự)<br/>- CTA chính - Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự)<br/>- Danh sách nhóm đối tượng (Tối đa 4 đối tượng; hiển thị Grid ngang 4 cột trên Desktop, Slider trên Mobile). Mỗi nhóm gồm: Ảnh đối tượng (Chỉ hỗ trợ upload), Tiêu đề (Tối đa 50 ký tự), Mô tả (Tối đa 150 ký tự) |
| 7 | Video - Video Review | `reviews-lead` | - Tiêu đề Section video (Tối đa 80 ký tự)<br/>- Danh sách Video Review. Mỗi video gồm: Ảnh thumbnail, Tiêu đề video (Tối đa 100 ký tự), URL Video (Tối đa 255 ký tự), Hỗ trợ thêm/xóa video |
| 8 | Sticky - Thanh đăng ký nhanh | `sticky-cam` | - Duy nhất 1 background tĩnh (màu nền hoặc 1 ảnh nền, không hỗ trợ slide)<br/>- Tiêu đề sticky (Tối đa 50 ký tự)<br/>- Mô tả phụ (Tối đa 100 ký tự)<br/>- Nút CTA - Text (Tối đa 30 ký tự)<br/>- Nút CTA - URL (Tối đa 255 ký tự) |
| 9 | FAQ - Câu hỏi thường gặp | `faq-cam` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách các câu hỏi thường gặp. Mỗi câu hỏi thu gọn thành 1 dòng duy nhất gồm: Dropdown đồng bộ từ kho FAQ chung, nút Xóa dòng. Nội dung Câu hỏi & Trả lời tự động liên kết hiển thị từ kho FAQ theo ID đã chọn mà không hiển thị trường nhập liệu trên CMS |

- **Cấu hình Popup Form đăng ký tư vấn chung (Toàn trang):**
  - **Mã hiệu (ID):** `form-lead-popup` (Được thiết kế hiển thị dạng modal popup đè trên màn hình khi click các nút CTA trên trang trỏ liên kết về `#register-form`).
  - **Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự):**
    - Tiêu đề trên Form (Headline): Ví dụ "Đăng ký lắp đặt Wi-Fi 7 ngay hôm nay" (Tối đa 80 ký tự)
    - Mô tả phụ (Subheadline): Ví dụ "Điền đầy đủ thông tin, kỹ thuật viên sẽ liên hệ lắp đặt nhanh chóng." (Tối đa 150 ký tự)
    - Nút gửi (Submit text): Ví dụ "Đăng ký ngay" (Tối đa 30 ký tự)
    - Đường dẫn chuyển hướng sau submit (Redirect URL) / Trỏ về Lead: Ô nhập link trang cảm ơn (Thank You page) hoặc URL API thu thập Lead (Tối đa 255 ký tự) để phục vụ đo lường chuyển đổi và đồng bộ Lead.

### c. Template: LDP Internet (10 Sections)

- **Mục tiêu:** Giới thiệu các gói cước cáp quang cá nhân/gia đình của FPT Telecom và thu thập Lead đăng ký.
- **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự) |
| --- | --- | --- | --- |
| 1 | Banner hero - Internet | `banner-cam-hero` | - Ảnh nền (Background Image) (1920×800px)<br/>- Ảnh nền Mobile (768x800px)<br/>- URL ảnh nền (Desktop & Mobile - Tối đa 255 ký tự)<br/>- Text Nút CTA chính (Tối đa 30 ký tự)<br/>- URL Nút CTA chính (Tối đa 255 ký tự)<br/>- Text Nút CTA phụ (Tối đa 30 ký tự)<br/>- URL Nút CTA phụ (Tối đa 255 ký tự)<br/>- Dải Countdown hẹn giờ (Chỉ hiển thị dính liền chân Hero banner — Case 1): Checkbox bật, Ảnh / Icon quà tặng / Thiết bị, Tiêu đề dải (Tối đa 80 ký tự), Thời gian kết thúc, Nút CTA Countdown - Text (Tối đa 30 ký tự), Nút CTA Countdown - URL (Tối đa 255 ký tự) |
| 2 | Timer - Countdown độc lập | `timer-camp-countdown` | - Bật dải Countdown hẹn giờ độc lập (Checkbox)<br/>- Ảnh / Icon quà tặng / Thiết bị<br/>- Tiêu đề dải Countdown / Nhãn Countdown ưu đãi (Tối đa 80 ký tự)<br/>- Thời gian Countdown kết thúc (datetime-local)<br/>- Nút CTA Countdown — Text (Tối đa 30 ký tự)<br/>- Nút CTA Countdown — URL (Tối đa 255 ký tự)<br/><br/>*Lưu ý thiết kế:* Section này hiển thị độc lập hoàn toàn (Case 2), CSS padding top/bottom sẽ cách ra giống như các section khác. |
| 3 | Stats - Thanh số liệu nổi bật | `stats-inet` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Từ khóa highlight (in đậm - Tối đa 30 ký tự)<br/>- Cấu hình 4 chỉ số nổi bật. Mỗi chỉ số gồm: Icon (Ảnh), Số / Tiêu đề (in đậm - Tối đa 50 ký tự), Mô tả (Tối đa 100 ký tự) |
| 4 | Products - Gói cước Internet | `products-inet` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Cấu hình danh sách các Tab (ví dụ: Cá nhân, Gia đình, Combo). Mỗi tab có: Tên tab (Tối đa 30 ký tự), Slug (Tối đa 50 ký tự), Checkbox Mặc định, nút Thêm/Xóa tab.<br/>- Danh sách gói cước trong mỗi tab. Mỗi gói gồm: Checkbox Nổi bật, Ảnh banner gói, Tên gói (Tối đa 50 ký tự), Giá (VNĐ/tháng), Tốc độ Download, Tốc độ Upload, Badge text (Tối đa 20 ký tự), Tính năng (textarea - tối đa 150 ký tự/dòng), CTA phụ - Text (Tối đa 30 ký tự), CTA phụ - URL (Tối đa 255 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Hỗ trợ thêm/xóa gói<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 5 | Detail - Chi tiết FPT Play Box | `playbox-inet` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả ngắn (Tối đa 150 ký tự)<br/>- Ảnh sản phẩm Play Box<br/>- 4 tính năng nổi bật. Mỗi tính năng gồm: Tiêu đề (Tối đa 50 ký tự), Mô tả (Tối đa 100 ký tự)<br/>- Cấu hình Nút CTA - Đăng ký: Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự)<br/>- Cấu hình Nút CTA - Tư vấn: Text (Tối đa 30 ký tự), Số điện thoại/Link (Tối đa 255 ký tự) |
| 6 | Video - Video Review | `reviews-lead` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách video. Mỗi video gồm: Thumbnail, Link YouTube (Tối đa 255 ký tự), Mô tả ngắn (Tối đa 100 ký tự), Hỗ trợ thêm/xóa video |
| 7 | Procedure - Hướng dẫn thủ tục | `procedure-lead` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách các bước thủ tục. Mỗi bước gồm: Tiêu đề bước (Tối đa 50 ký tự), Mô tả (Tối đa 150 ký tự), Icon bước<br/>- Cấu hình Nút chính (Màu cam): Text nút (Tối đa 30 ký tự), Link URL (Tối đa 255 ký tự)<br/>- Cấu hình Nút phụ (Màu xanh): Text nút (Tối đa 30 ký tự), Số điện thoại / Link (Tối đa 255 ký tự) |
| 8 | Promo - Danh sách ưu đãi | `promo-inet` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách khuyến mãi dạng Slider (tối đa 8 ảnh banner khuyến mãi, tự động slide sau 5 giây, hiển thị đồng thời 1 banner trên Mobile và tối đa 3 banner trên Desktop). Mỗi khuyến mãi gồm: Tiêu đề khuyến mãi (Tối đa 100 ký tự), Ảnh banner khuyến mãi, Link URL khuyến mãi (Tối đa 255 ký tự), Hỗ trợ thêm/xóa khuyến mãi |
| 9 | FAQ - Câu hỏi thường gặp | `faq-cam` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách câu hỏi thường gặp. Mỗi câu hỏi thu gọn thành 1 dòng duy nhất gồm: Dropdown đồng bộ từ kho FAQ chung, nút Xóa dòng. Nội dung Câu hỏi & Trả lời tự động liên kết hiển thị từ kho FAQ theo ID đã chọn mà không hiển thị trường nhập liệu trên CMS |
| 10 | Form - Đăng ký tư vấn | `form-inet` | - Ảnh nền banner (cuối trang)<br/>- Icon minh họa (Hộp quà)<br/>- Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả ngắn (Tối đa 150 ký tự)<br/>- Text nút hành động (CTA) (Tối đa 30 ký tự)<br/>- Link URL nút (Tối đa 255 ký tự) |

- **Cấu hình Popup Form đăng ký tư vấn chung (Toàn trang):**
  - **Mã hiệu (ID):** `form-lead-popup` (Được hiển thị dạng modal popup khi click các nút CTA trên trang trỏ liên kết về `#register-form`).
  - **Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự):**
    - Tiêu đề trên Popup (Headline): Ví dụ "NHẬN TƯ VẤN MIỄN PHÍ" (Tối đa 80 ký tự)
    - Mô tả phụ (Subheadline): Ví dụ "Nhận ưu đãi tốt nhất hôm nay" (Tối đa 150 ký tự)
    - Nút gửi (Submit text): Ví dụ "Đăng ký tư vấn" (Tối đa 30 ký tự)
    - Checkbox Hiển thị Chọn dịch vụ (Bật/Tắt hiển thị danh sách checkbox các gói dịch vụ)
    - Danh sách dịch vụ đính kèm: Cho phép check chọn các dịch vụ muốn hiển thị lựa chọn (Internet, Truyền hình, Camera, Combo Net-Play, Combo Net-Cam...) với nhãn dịch vụ tối đa 50 ký tự.

### d. Template: LDP SA - FPT Play (9 Sections)

- **Mục tiêu:** Quảng bá và đăng ký thuê bao gói dịch vụ truyền hình giải trí FPT Play (Sự kiện thể thao, Phim độc quyền).
- **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự) |
| --- | --- | --- | --- |
| 1 | Banner hero - FPT Play | `banner-cam-hero` | - Ảnh nền (Background Image) (1920×800px)<br/>- Ảnh nền Mobile (768x800px)<br/>- URL ảnh nền (Desktop & Mobile - Tối đa 255 ký tự)<br/>- Text Nút CTA chính (Tối đa 30 ký tự)<br/>- URL Nút CTA chính (Tối đa 255 ký tự)<br/>- Text Nút CTA phụ (Tối đa 30 ký tự)<br/>- URL Nút CTA phụ (Tối đa 255 ký tự)<br/>- Dải Countdown hẹn giờ (Chỉ hiển thị dính liền chân Hero banner — Case 1): Checkbox bật, Tiêu đề ưu đãi (Tối đa 80 ký tự), Mô tả ngắn (Tối đa 100 ký tự), Ảnh banner giữa dải countdown, Thời gian kết thúc, Nút CTA - Text (Tối đa 30 ký tự), Nút CTA - URL (Tối đa 255 ký tự) |
| 2 | Experience - Trải nghiệm giải trí | `experience-sa` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả phụ (Tối đa 150 ký tự)<br/>- Ảnh minh họa bên phải (hỗ trợ upload)<br/>- Danh sách 4 đặc điểm giải trí. Mỗi đặc điểm gồm: Icon/Emoji, Tiêu đề đặc điểm (Tối đa 50 ký tự), Mô tả ngắn (Tối đa 150 ký tự) |
| 3 | Categories - Danh mục nội dung | `categories-sa` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả section (Tối đa 150 ký tự)<br/>- Nút Đăng ký ngay - Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự)<br/>- Danh sách các tab danh mục (3 tab mặc định). Mỗi tab gồm: Tiêu đề tab (Tối đa 30 ký tự), Ảnh Banner tab, Danh sách phim (Mỗi phim có: Tên phim - Tối đa 50 ký tự, Poster phim, URL Phim / Đăng ký - Tối đa 255 ký tự, hỗ trợ thêm/xóa phim)<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 4 | Products - Bảng giá gói cước | `products-sa` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả section (Tối đa 150 ký tự)<br/>- Danh sách tiêu chí so sánh (textarea dùng chung để định nghĩa nhãn, tối đa 50 ký tự/tiêu chí)<br/>- Danh sách gói cước (Basic, Premium, VIP, có kéo thả sắp xếp vị trí). Mỗi gói gồm: Tên gói (Tối đa 30 ký tự), Badge nhãn (Tối đa 20 ký tự), Giá hiển thị (Tối đa 20 ký tự), Chu kỳ (Tối đa 20 ký tự), Thứ tự vị trí, Giá trị tương ứng theo từng tiêu chí so sánh (động - Tối đa 50 ký tự), Tính năng nổi bật (textarea - tối đa 150 ký tự/dòng), Nút CTA - Text (Tối đa 30 ký tự), URL (Tối đa 255 ký tự), Checkbox Hiển thị gói cước |
| 5 | Timer - Countdown độc lập | `timer-camp-countdown` | - Tiêu đề ưu đãi (Tối đa 80 ký tự)<br/>- Mô tả ngắn (Tối đa 100 ký tự)<br/>- Ảnh banner giữa dải countdown<br/>- Thời gian kết thúc (datetime-local)<br/>- Nút CTA - Text (Tối đa 30 ký tự)<br/>- Nút CTA - URL (Tối đa 255 ký tự) |
| 6 | Sports - Thể thao trực tiếp | `sports-sa` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả phụ (Tối đa 150 ký tự)<br/>- Danh sách giải đấu/quyền lợi. Mỗi giải đấu gồm: Tên giải đấu (Tối đa 50 ký tự), Ảnh/Logo card, Gạch đầu dòng quyền lợi (textarea - tối đa 100 ký tự/dòng), Hỗ trợ thêm/xóa giải đấu |
| 7 | Commentators - Dàn bình luận viên | `commentators-sa` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Mô tả phụ (Tối đa 150 ký tự)<br/>- Danh sách bình luận viên. Mỗi BLV gồm: Tên BLV (Tối đa 50 ký tự), Ảnh đại diện BLV, Mô tả BLV (textarea - tối đa 150 ký tự), Hỗ trợ thêm/xóa bình luận viên |
| 8 | FAQ - Câu hỏi thường gặp | `faq-cam` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách câu hỏi. Mỗi câu hỏi thu gọn thành 1 dòng duy nhất gồm: Dropdown đồng bộ từ kho FAQ chung, nút Xóa dòng. Nội dung Câu hỏi & Trả lời tự động liên kết hiển thị từ kho FAQ theo ID đã chọn mà không hiển thị trường nhập liệu trên CMS |
| 9 | Sticky - Thanh đăng ký nhanh | `sticky-cam` | - Duy nhất 1 background tĩnh (màu nền hoặc 1 ảnh nền, không hỗ trợ slide)<br/>- Icon sticky (Hộp quà/Emoji) (Chỉ hỗ trợ upload ảnh, không dán URL)<br/>- Tiêu đề sticky (Tối đa 50 ký tự)<br/>- Mô tả phụ (Tối đa 100 ký tự)<br/>- Nút CTA - Text (Tối đa 30 ký tự)<br/>- Nút CTA - URL (Tối đa 255 ký tự) |

- **Cấu hình Popup Form đăng ký tư vấn chung (Toàn trang):**
  - **Mã hiệu (ID):** `form-lead-popup` (Được hiển thị dạng modal popup khi click các nút CTA trên trang trỏ liên kết về `#register-form`).
  - **Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự):**
    - Tiêu đề trên Popup (Headline): Ví dụ "NHẬN TƯ VẤN MIỄN PHÍ" (Tối đa 80 ký tự)
    - Mô tả phụ (Subheadline): Ví dụ "Nhận thông tin ưu đãi FPT Play mới nhất" (Tối đa 150 ký tự)
    - Nút gửi (Submit text): Ví dụ "Gửi thông tin" (Tối đa 30 ký tự)
    - Đường dẫn chuyển hướng sau submit (Redirect URL) / Trỏ về Lead: Ô nhập link trang cảm ơn (Thank You page) hoặc URL API thu thập Lead (Tối đa 255 ký tự).

### e. Template: LDP Thu Lead (9 Sections)

- **Mục tiêu:** Tối ưu hóa chuyển đổi thu thập thông tin khách hàng tiềm năng thông qua các chương trình khuyến mãi/quà tặng đặc biệt.
- **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự) |
| --- | --- | --- | --- |
| 1 | Banner hero - Thu Lead | `banner-cam-hero` | - Ảnh nền (Background Image) (1920×800px)<br/>- Ảnh nền Mobile (768x800px)<br/>- URL ảnh nền (Desktop & Mobile - Tối đa 255 ký tự)<br/>- Text nút CTA chính (Tối đa 30 ký tự)<br/>- URL nút CTA chính (Tối đa 255 ký tự)<br/>- Text nút CTA phụ (Tối đa 30 ký tự)<br/>- URL nút CTA phụ (Tối đa 255 ký tự) |
| 2 | Runner - Social Proof chạy chữ | `runner-lead-proof` | - Danh sách khách hàng đăng ký ảo (chạy chữ ngang, cách nhau bởi dấu phẩy, hỗ trợ chạy vòng lặp liên tục ngoài trang, tối đa 100 ký tự/dòng thông báo) |
| 3 | Products - Bảng giá & So sánh | `pricing-lead` | - Tiêu đề bảng giá (Tối đa 80 ký tự)<br/>- Cấu hình danh sách các Tab (ví dụ: Internet gia đình, Combo Internet truyền hình, Internet doanh nghiệp). Mỗi tab có: Tên tab (Tối đa 30 ký tự), Slug (Tối đa 50 ký tự), Checkbox Mặc định, nút Thêm/Xóa tab.<br/>- Danh sách gói cước trong mỗi tab. Mỗi gói gồm: Tên gói (Tối đa 50 ký tự), Giá bán (đ/tháng), Tốc độ Download, Tốc độ Upload, Badge text (Tối đa 20 ký tự), Tính năng (textarea - tối đa 150 ký tự/dòng), CTA phụ - Text (Tối đa 30 ký tự), CTA phụ - URL (Tối đa 255 ký tự), CTA chính - Text (Tối đa 30 ký tự), CTA chính - URL (Tối đa 255 ký tự), Hỗ trợ thêm/xóa gói<br/>*Quy tắc hiển thị Tab trên UI:* Khi cấu hình từ 2 tab trở lên (n >= 2), giao diện Landing Page hiển thị Menu Tab ở phía trên để người dùng click chuyển đổi qua lại. Khi chỉ cấu hình 1 tab duy nhất (n = 1), hệ thống sẽ ẩn hoàn toàn thanh Menu Tab này trên giao diện và tự động hiển thị trực tiếp danh sách các gói cước/sản phẩm lẻ thuộc tab đó ra màn hình. |
| 4 | Info - Lợi ích nổi bật | `info-cam-usp` | - Tiêu đề Section Lợi ích (Tối đa 80 ký tự)<br/>- Cấu hình 6 mục Lợi ích nổi bật. Mỗi mục gồm: Icon Lợi ích, Tiêu đề lợi ích (Tối đa 50 ký tự), Mô tả chi tiết (Tối đa 150 ký tự) |
| 5 | Procedure - Hướng dẫn thủ tục | `procedure-lead` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách các bước thủ tục (3 bước mặc định). Mỗi bước gồm: Tiêu đề bước (Tối đa 50 ký tự), Mô tả (Tối đa 150 ký tự), Icon bước<br/>- Cấu hình Nút chính (Màu cam): Text nút (Tối đa 30 ký tự), Link URL (Tối đa 255 ký tự)<br/>- Cấu hình Nút phụ (Màu xanh): Text nút (Tối đa 30 ký tự), Số điện thoại / Link (Tối đa 255 ký tự) |
| 6 | Video - Video Review | `reviews-lead` | - Tiêu đề Section video (Tối đa 80 ký tự)<br/>- Danh sách Video Review. Mỗi video gồm: Ảnh thumbnail, Tiêu đề video (Tối đa 100 ký tự), URL Video (Tối đa 255 ký tự), Hỗ trợ thêm/xóa video |
| 7 | Feedback - Đánh giá khách hàng | `feedback-lead` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách đánh giá dạng Slider (tối đa 10 đánh giá, hiển thị đồng thời 1 đánh giá trên Mobile và tối đa 3 đánh giá trên Desktop). Mỗi đánh giá gồm: Avatar, Tên khách hàng (Tối đa 50 ký tự), Khu vực / Phụ đề (Tối đa 50 ký tự), Tiêu đề nhận xét (Tối đa 50 ký tự), Rating (1-5 ⭐), Nội dung nhận xét (Tối đa 300 ký tự), Hỗ trợ thêm/xóa đánh giá |
| 8 | FAQ - Câu hỏi thường gặp | `faq-cam` | - Tiêu đề section (Tối đa 80 ký tự)<br/>- Danh sách các câu hỏi thường gặp. Mỗi câu hỏi thu gọn thành 1 dòng duy nhất gồm: Dropdown đồng bộ từ kho FAQ chung, nút Xóa dòng. Nội dung Câu hỏi & Trả lời tự động liên kết hiển thị từ kho FAQ theo ID đã chọn mà không hiển thị trường nhập liệu trên CMS |
| 9 | Sticky - Thanh đăng ký nhanh | `sticky-cam` | - Duy nhất 1 background tĩnh (màu nền hoặc 1 ảnh nền, không hỗ trợ slide)<br/>- Icon / Ảnh đại diện (3D Gift/Emoji) (Chỉ hỗ trợ upload ảnh, không dán URL)<br/>- Tiêu đề sticky (Tối đa 50 ký tự)<br/>- Mô tả phụ (Tối đa 100 ký tự)<br/>- Text nút CTA Đăng ký (Tối đa 30 ký tự)<br/>- URL nút CTA Đăng ký (Tối đa 255 ký tự) |

- **Cấu hình Popup Form đăng ký tư vấn chung (Toàn trang):**
  - **Mã hiệu (ID):** `form-lead-popup` (Được hiển thị dạng modal popup khi click các nút CTA trên trang trỏ liên kết về `#register-form`).
  - **Các trường thông tin cấu hình trong CMS (Kèm giới hạn ký tự):**
    - Tiêu đề trên Popup (Headline): Ví dụ "Đăng ký nhận quà tặng ngay hôm nay" (Tối đa 80 ký tự)
    - Mô tả phụ (Subheadline): Ví dụ "Điền đầy đủ thông tin để nhận quà tặng miễn phí." (Tối đa 150 ký tự)
    - Nút gửi (Submit text): Ví dụ "Đăng ký ngay" (Tối đa 30 ký tự)
    - Đường dẫn chuyển hướng sau submit (Redirect URL) / Trỏ về Lead: Ô nhập link trang cảm ơn (Thank You page) hoặc URL API thu thập Lead (Tối đa 255 ký tự).

### f. Tính năng Custom LDP mới (Lắp ghép tự do từ thư viện mẫu)

- **Mục tiêu:** Cho phép người dùng tự do thiết kế Landing Page (LDP) tùy chỉnh dựa trên việc chọn lọc, kéo thả và sắp xếp các section mẫu có sẵn từ thư viện tổng hợp của 5 LDP mẫu (Internet, Camera AI, Wi-Fi 7, FPT Play, Thu Lead), gia tăng tính linh hoạt và tối ưu hóa thời gian triển khai chiến dịch Marketing.
- **Quy trình tạo Custom LDP (3 bước phụ):**
  - **Bước 1 - Chọn Template:** Chọn card "Custom LDP mới" nổi bật nằm ngang ở ngay đầu danh sách template mẫu.
  - **Bước 2 - Thông tin trang:** Nhập các thông tin cơ bản của LDP (Tên chiến dịch, URL Slug, Mục tiêu trang, SEO Metadata, OG Image).
  - **Bước 3 - Nội dung sections:** Lắp ghép các section từ thư viện mẫu và tiến hành biên tập nội dung, sắp xếp thứ tự hiển thị.
- **Đặc tả Giao diện Step 3 (LDP Builder - Giao diện 2 cột):**
  - **Cột trái (32%) - Thư viện Sections:**
    - Ô tìm kiếm: Nhập từ khóa để lọc nhanh tên section (ví dụ: Hero, Countdown...).
    - Tab phân loại: Bộ lọc section theo nguồn gốc LDP mẫu gồm *"Tất cả"*, *"Internet"*, *"Camera AI"*, *"Wi-Fi 7"*, *"FPT Play"*, *"Thu Lead"*.
    - Danh sách Card section mẫu: Mỗi card hiển thị biểu tượng đại diện (Icon), Tên section, Mô tả ngắn chi tiết các trường cấu hình bên trong, Badge màu phân loại (ví dụ: `Hero · Internet`, `Countdown · Wi-Fi 7`) và nút thêm nhanh `+` màu cam.
  - **Cột phải (68%) - Canvas cấu trúc LDP:**
    - Bộ đếm số lượng: Hiển thị chỉ số trực quan dạng `X sections đã chọn` ở góc trên cùng.
    - Trạng thái trống (Empty state): Khi LDP chưa có section nào được chọn, hiển thị một khung lớn nét đứt, ở giữa có biểu tượng `+` lớn và dòng chữ *"Chưa có section nào. Kéo sections từ thư viện bên trái vào đây, hoặc nhấn + trên từng section."* để hướng dẫn người dùng.
    - Danh sách section đã chọn: Hiển thị các section được kéo thả hoặc chèn từ thư viện theo dạng hàng ngang (Section Row). Mỗi hàng hỗ trợ:
      - Nút kéo thả di chuyển thứ tự (Drag Handle `☰` hoặc nút di chuyển nhanh `▲`/`▼`).
      - Checkbox hiển thị/ẩn trên trang.
      - Nút **"✏ Sửa"** mở Slide-over Drawer cấu hình chi tiết nội dung của section đó.
      - Badge trạng thái: Mặc định hiển thị badge **"Thư viện"** màu tím. Khi người dùng click nút **"Tách"**, section sẽ chuyển thành badge **"Tự do (Độc lập)"** (chỉnh sửa độc lập mà không ảnh hưởng đến template chung).
      - Nút **"🗑 Xóa"** để gỡ section khỏi LDP hiện tại.
    - Khối cấu hình Popup Form chung: Nằm cố định ở chân Canvas, cho phép cấu hình Modal đăng ký tư vấn chung toàn trang (Headline, Subheadline, Submit text, Redirect URL) được kích hoạt thông qua mã anchor link `#register-form`.
  - **Business Rules (BR):**
    - **BR01 (Giới hạn sections):** Mỗi Landing Page Custom cho phép lắp ghép tối đa 20 sections để đảm bảo tốc độ tải trang tối ưu cho thiết bị di động.
    - **BR02 (Cơ chế Tách liên kết - Detach Block):** Khi chèn từ thư viện, section kế thừa cấu hình mẫu. Khi người dùng click **"Tách"**, hệ thống sẽ clone cấu hình và lưu thành một bản ghi độc lập cho trang LDP này, cho phép chỉnh sửa nội dung riêng biệt mà không làm thay đổi dữ liệu của khối mẫu ban đầu.

## 4. Đặc tả tính năng đồng bộ dữ liệu sản phẩm từ Product Data Hub (PDH)

Để tối ưu hóa quy trình cấu hình các gói cước trên Landing Page và đảm bảo tính nhất quán dữ liệu sản phẩm trên toàn hệ thống FPT Telecom, CMS tích hợp công cụ đồng bộ nhanh từ kho dữ liệu **Product Data Hub (PDH)**.

### a. Phạm vi áp dụng

- **Template LDP Campaign Wi-Fi 7:** Section Gói cước Wi-Fi 7 (`products-inet`).
- **Template LDP Internet:** Gói cước trong các Tab của Section Danh sách gói Internet (`products-inet`).

### b. Cơ chế hoạt động & Trải nghiệm Người dùng (UX)

- **Dropdown Sync PDH:** Khi người dùng nhấn nút "Sync PDH ▾", một menu thả xuống sẽ hiển thị danh sách toàn bộ các gói cước có sẵn trong kho PDH (hơn 220 gói cước của FPT Telecom).
- **Bộ lọc Tìm kiếm Nhanh (Search Filter):**
  - Tích hợp ô nhập liệu tìm kiếm ở đầu Dropdown.
  - Hỗ trợ tìm kiếm thời gian thực (real-time filtering) không phân biệt chữ hoa/chữ thường.
  - Phạm vi tìm kiếm: Khớp một phần theo **Mã gói cước (Product Code)** hoặc **Tên gói cước (Product Name)**.
- **Cơ chế Phân trang Dropdown (Pagination):**
  - Do danh sách gói cước PDH rất lớn (trên 220 gói), danh sách được phân thành các trang nhỏ để tránh tràn màn hình và cải thiện hiệu năng.
  - Số lượng gói cước hiển thị tối đa trên một trang: **10 gói cước / trang**.
  - Cung cấp thanh điều hướng phân trang ở cuối Dropdown (nút mũi tên ◀ / ▶ và chỉ số trang hiện tại, ví dụ: "Trang 1/23").
  - Tự động vô hiệu hóa (disabled) nút chuyển trang khi người dùng đang ở trang đầu hoặc trang cuối cùng.
- **Tự động đặt lại trạng thái (Auto Reset):**
  - Mỗi khi người dùng đóng Dropdown và mở lại, ô nhập liệu tìm kiếm sẽ được tự động xóa rỗng (clear).
  - Bộ phân trang tự động quay về trang 1 để đảm bảo giao diện luôn hiển thị các gói cước phổ biến nhất từ đầu.
- **Đồng bộ Dữ liệu (Data Binding):** Khi người dùng click chọn một gói cước bất kỳ từ danh sách Dropdown PDH, hệ thống sẽ tự động map và điền đầy đủ các thông tin của gói cước đó vào form chỉnh sửa chi tiết (bao gồm: Tên gói, Giá cước, Tốc độ Download, Tốc độ Upload, các Tính năng/USP đi kèm) giúp giảm thiểu sai sót khi nhập liệu thủ công.
