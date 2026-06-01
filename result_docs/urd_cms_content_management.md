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
| Post-condition | Câu hỏi FAQ được lưu thành công vào thư viện dùng chung, sẵn sàng để gán hiển thị lên các trang hoặc blocks.                                       |

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
| Post-condition | Thông tin cá nhân hoặc mật khẩu được lưu cập nhật thành công; hoặc người dùng đăng xuất thành công khỏi phiên làm việc (hiển thị thông báo).                                                      |

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

## 1. Template: LDP Camera AI (9 Sections)

* **Mục tiêu:** Giới thiệu và thúc đẩy đăng ký/chọn mua thiết bị FPT Camera AI cùng các gói lưu trữ Cloud đi kèm.
* **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS |
| :--- | :--- | :--- | :--- |
| 1 | Hero Banner + Nút CTA | `cam-hero` | - Ảnh nền (Background Image) (Desktop & Mobile)<br>- Headline (Tiêu đề chính) và Subheadline (Tiêu đề phụ)<br>- Text trên nút CTA (ví dụ: "Đăng ký ngay")<br>- Link điều hướng của nút CTA<br>- Ảnh sản phẩm nổi bật (Camera) |
| 2 | Tính năng nổi bật (USP) | `cam-usp` | - Headline Section (ví dụ: "Công nghệ thông minh vượt trội")<br>- Danh sách 3-4 tính năng nổi bật. Mỗi tính năng gồm: Icon, Tiêu đề tính năng, Nội dung mô tả chi tiết |
| 3 | Chi tiết FPT Camera AI | `cam-detail` | - Headline Section<br>- Tabs thông tin sản phẩm (Camera IQ3, Camera SE, Camera Play)<br>- Với mỗi dòng sản phẩm: Ảnh sản phẩm, Tên dòng, Giá bán lẻ, Mô tả chi tiết specs (Độ phân giải, Hồng ngoại, Đàm thoại, Kháng nước...) |
| 4 | Danh mục & Chọn mua | `cam-select` | - Headline Section<br>- Danh sách các dòng Camera để tick chọn bán lẻ<br>- Danh sách gói Cloud lưu trữ (1 ngày, 3 ngày, 7 ngày) kèm đơn giá tháng/năm<br>- Cấu hình logic tính tổng tiền ước tính (Tự động cộng tiền Camera + Cloud) |
| 5 | Ứng dụng FPT Camera | `cam-app` | - Headline Section & Subtitle<br>- Ảnh mockup màn hình App điện thoại<br>- Danh sách tính năng của App (Xem trực tiếp, Phân quyền chia sẻ, Cảnh báo thông minh...)<br>- Link tải App Store và Google Play |
| 6 | Lợi thế công nghệ | `cam-value` | - Headline Section<br>- 3 khối giá trị cốt lõi: Độ trễ thấp (khắc phục mạng yếu), Lưu trữ Cloud bảo mật tại Việt Nam, Dịch vụ hỗ trợ 24/7 của FPT |
| 7 | Thương hiệu & Giải thưởng | `cam-awards` | - Tiêu đề Section<br>- Danh sách ảnh các cúp/logo giải thưởng (Sao Khuê, Sản phẩm tiêu biểu...) kèm text mô tả giải thưởng |
| 8 | FAQ Accordion | `cam-faq` | - Headline Section<br>- Danh sách các câu hỏi thường gặp (Q&A) hỗ trợ đóng/mở (Collapse/Expand) |
| 9 | Sticky Bottom Bar | `cam-sticky` | - Text thông báo khuyến mãi rút gọn<br>- Text nút CTA trên thanh bar<br>- SĐT Hotline tư vấn nhanh |

---

## 2. Template: LDP Campaign Wi-Fi 7 (9 Sections)

* **Mục tiêu:** Quảng bá chiến dịch công nghệ Wi-Fi 7 thế hệ mới, thu thập thông tin đăng ký tư vấn/lắp đặt gói Lux/Ultra Fast Wi-Fi 7.
* **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS |
| :--- | :--- | :--- | :--- |
| 1 | Hero Wi-Fi 7 (Countdown) | `camp-hero` | - Ảnh/Video nền (Background)<br>- Headline chiến dịch (ví dụ: "Khai phá sức mạnh Wi-Fi 7")<br>- Thời gian kết thúc đếm ngược (Countdown DateTime)<br>- Form liên hệ nhanh (Tiêu đề form, placeholders, nút submit) |
| 2 | Thanh biểu ngữ thương hiệu | `camp-branding` | - Danh sách ảnh logo đối tác/công nghệ chạy ngang (Marquee)<br>- Text chạy chữ khẩu hiệu của chiến dịch |
| 3 | USP Công nghệ Wi-Fi 7 | `camp-usp` | - Headline Section<br>- 4 đặc tính vượt trội: Tốc độ (Gbps), Độ trễ (Latency), Kết nối thiết bị đồng thời, Công nghệ MLO (Multi-Link Operation). Cấu hình gồm: Icon, Chỉ số số liệu, Tên thông số, Mô tả ngắn |
| 4 | Các gói cước Wi-Fi 7 | `camp-products` | - Headline Section<br>- Danh sách các gói cước trang bị Wi-Fi 7 (Lux 500, Lux 800, Ultra Fast)<br>- Cấu hình mỗi card gói cước: Tên gói, Băng thông, Thiết bị đi kèm, Giá bán, Nút đăng ký (link hoặc anchor cuộn xuống form) |
| 5 | Bảng so sánh thế hệ Wi-Fi | `camp-compare` | - Headline Section<br>- Bảng so sánh thông số (băng tần, tốc độ tối đa lý thuyết, độ trễ) giữa Wi-Fi 5, Wi-Fi 6 và Wi-Fi 7 để làm nổi bật giá trị nâng cấp |
| 6 | Đối tượng mục tiêu | `camp-targets` | - Headline Section<br>- 4 khối đối tượng (Doanh nghiệp, Gamer/Streamer, Nhà thông minh, Gia đình đông người). Cấu hình gồm: Ảnh minh họa, Tên đối tượng, Giải pháp Wi-Fi khuyến nghị tương ứng |
| 7 | Video Review thực tế | `camp-videos` | - Headline Section<br>- Danh sách các video trải nghiệm thực tế (Thumbnail, Link nhúng YouTube/TikTok) |
| 8 | Form đăng ký tư vấn | `camp-form` | - Ảnh nền/Màu nền khối Form<br>- Headline Form & Mô tả ngắn<br>- Danh sách trường nhập liệu (Họ tên, SĐT, Địa chỉ, Gói cước quan tâm)<br>- Lời cảm ơn sau khi gửi (Thank-you Message) |
| 9 | FAQ Accordion | `camp-faq` | - Headline Section<br>- Danh sách câu hỏi thường gặp về thiết bị Wi-Fi 7, phí nâng cấp và cách hòa mạng |

---

## 3. Template: LDP Internet (6 Sections)

* **Mục tiêu:** Giới thiệu các gói cước cáp quang cá nhân/gia đình của FPT Telecom và thu thập Lead đăng ký.
* **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS |
| :--- | :--- | :--- | :--- |
| 1 | Hero Banner + Form đăng ký | `inet-hero` | - Ảnh nền (Desktop & Mobile)<br>- Headline (Tiêu đề chính) và Subheadline<br>- Form đăng ký nhanh đi kèm (Tiêu đề form, Danh sách trường: Họ tên, SĐT, Nút gửi) |
| 2 | Thanh số liệu nổi bật | `inet-stats` | - 6 chỉ số tiêu biểu (ví dụ: 100% Cáp quang, Hỗ trợ 24/7, Phủ sóng 63 tỉnh thành...). Mỗi chỉ số gồm: Icon/Số liệu và Nhãn mô tả ngắn bên dưới |
| 3 | Danh sách gói Internet | `inet-products` | - Headline Section<br>- Danh sách các gói cước gia đình (Giga, Sky, Meta)<br>- Cấu hình mỗi gói: Tên gói, Băng thông, Thiết bị Modem kèm theo, Giá cước tháng, Giá trả trước, Nút CTA đăng ký |
| 4 | Video Review | `inet-review` | - Headline Section & Subtitle<br>- Danh sách link video đánh giá dịch vụ (Thumbnail, Link YouTube) |
| 5 | Đánh giá khách hàng | `inet-testimonials` | - Headline Section<br>- Danh sách các feedback của khách hàng: Ảnh chân dung/Avatar, Họ tên, Đánh giá xếp hạng sao (Rating), Nội dung nhận xét thực tế |
| 6 | Form đăng ký (cuối trang) | `inet-form` | - Headline Form & Mô tả quy trình tư vấn<br>- Nút Gửi thông tin (Submit)<br>- Lời chúc/Lời cảm ơn sau khi đăng ký thành công |

---

## 4. Template: LDP SA - FPT Play (5 Sections)

* **Mục tiêu:** Quảng bá và đăng ký thuê bao gói dịch vụ truyền hình giải trí FPT Play (Sự kiện thể thao, Phim độc quyền).
* **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS |
| :--- | :--- | :--- | :--- |
| 1 | Hero Banner khuyến mãi | `sa-hero` | - Ảnh nền Fullscreen cuốn hút<br>- Nhãn Badge khuyến mãi (ví dụ: "MUA 6 THÁNG TẶNG 2 THÁNG")<br>- Headline quảng bá nội dung hot<br>- Giá gói cước chỉ từ...<br>- Nút CTA & Ảnh thiết bị FPT Play Box |
| 2 | Highlight tính năng | `sa-features` | - Headline Section<br>- Mô tả danh sách tính năng (Xem cùng lúc trên nhiều thiết bị, Đa nền tảng, Giao diện thân thiện, Chất lượng 4K...) |
| 3 | Danh mục nội dung giải trí | `sa-categories` | - Headline Section<br>- Các tab phân loại nội dung (Thể thao, Phim truyện, Thiếu nhi, Shows)<br>- Mỗi tab cấu hình: Grid ảnh các bộ phim/trận đấu nổi bật kèm mô tả ngắn |
| 4 | Bảng giá & Đăng ký | `sa-pricing` | - Headline Section & Bảng giá so sánh các gói FPT Play (gói SMax, gói SVip)<br>- Các quyền lợi của từng gói (Quyền lợi thể thao, Số thiết bị xem đồng thời, Quảng cáo...) |
| 5 | Footer CTA | `sa-footer` | - Ảnh nền Footer<br>- Headline kêu gọi hành động cuối trang<br>- Nút đăng ký nhanh |

---

## 5. Template: LDP Thu Lead (7 Sections)

* **Mục tiêu:** Tối ưu hóa chuyển đổi thu thập thông tin khách hàng tiềm năng thông qua các chương trình khuyến mãi/quà tặng đặc biệt.
* **Danh sách các Sections và các trường thông tin cấu hình:**

| STT | Tên Section | Mã Section (ID) | Các trường thông tin cấu hình trong CMS |
| :--- | :--- | :--- | :--- |
| 1 | Hero + Form thu Lead | `lead-hero` | - Ảnh nền bắt mắt kích thích thị giác<br>- Headline giật tít ưu đãi độc quyền (ví dụ: "Nhận voucher 500k khi lắp mạng")<br>- Khung Form thu Lead trực diện: Họ tên, Số điện thoại, Địa chỉ, Nút đăng ký nhận quà |
| 2 | Social Proof chạy chữ | `lead-proof` | - Dải thông báo chạy liên tục (Marquee) hiển thị danh sách người dùng vừa đăng ký thành công (ví dụ: "Trần Văn B - 096*** vừa đăng ký thành công 1 phút trước") |
| 3 | Bảng giá & So sánh gói | `lead-pricing` | - Headline Section<br>- Bảng giá so sánh 2-3 gói cước kèm nhấn mạnh ưu đãi đặc biệt nhất của từng gói (như miễn phí lắp đặt, tặng modem) |
| 4 | Lợi ích & Quy trình | `lead-steps` | - Headline Section<br>- Quy trình 3 bước nhận ưu đãi: Bước 1: Để lại thông tin -> Bước 2: Tổng đài gọi lại tư vấn sau 5 phút -> Bước 3: Lắp đặt siêu tốc trong 12h |
| 5 | Đánh giá khách hàng | `lead-reviews` | - Headline Section<br>- Grid nhận xét xếp hạng sao (Rating) kèm ảnh chụp thực nghiệm lắp đặt thiết bị tại nhà khách hàng |
| 6 | FAQ Accordion | `lead-faq` | - Headline Section<br>- Danh sách câu hỏi ngắn giải đáp thắc mắc về thời gian nhận ưu đãi, cam kết và thủ tục |
| 7 | Sticky Bottom Bar | `lead-sticky` | - Thanh bar thu gọn dính chân trang trên Mobile, chứa Hotline bấm gọi ngay và nút nhận ưu đãi nhanh |
