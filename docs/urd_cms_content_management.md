| ![FPT Logo](https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo.svg) | FPT.VN URD – User requirements document |
| --- | --- |
| **Mã hiệu:** URD-CMS-01                       **Phiên bản:** 1.0                       **Ngày:** 25/05/2026 |



## REVISION HISTORY





| Date | Version | Author | Reviewer | Approver | Change Description |
| --- | --- | --- | --- | --- | --- |
| 25/05/2026 | 1.0 | BA Team | QA Team | PM | [A] Khởi tạo tài liệu URD mới cho phân hệ Quản lý Nội dung (CMS) theo định dạng FPT. |
| 26/05/2026 | 1.1 | BA Team | QA Team | PM | [U] Cập nhật thiết kế Cấu hình Thông tin hay (Tag Mapping) gộp vào module Tin tức dạng Tab và đổi giao diện cấu hình sang cơ chế Slide-over Drawer. |



---



# MỤC LỤC



    * **I. GIỚI THIỆU**
    * **II. TỔNG QUAN**
    * **III. ĐẶC TẢ CHI TIẾT 11 CHỨC NĂNG**
    * **IV. CÁC YÊU CẦU PHI CHỨC NĂNG**
    * **V. PHỤ LỤC**




---



# I. GIỚI THIỆU



### 1. Mục đích tài liệu









### 2. Thông tin chung


| STT | HẠNG MỤC | MÔ TẢ |
| --- | --- | --- |
| 1 | Giới thiệu tổng quan | Xây dựng phân hệ Quản lý nội dung (CMS) cho phép cấu hình động giao diện (Pages, Sections, Blocks, Menu) và các chiến dịch (Banner, Popup, Tin tức, FAQ, Tag Mapping). |
| 2 | Hiện trạng | Hệ thống cũ quản trị thủ công, các cấu hình trang Checkout bị gắn cứng (hard-code). Chưa hỗ trợ tùy chỉnh độc lập cho từng kênh bán phụ (như hifpt, tdw). |
| 3 | Mục tiêu kỳ vọng | Số hóa 100% việc cấu hình giao diện và luồng checkout. Cho phép tùy chỉnh độc lập hoặc kế thừa cấu hình Global chỉ qua 1 click. |



### 3. Thuật ngữ, từ ngữ viết tắt


| STT | THUẬT NGỮ | MÔ TẢ |
| --- | --- | --- |
| 1 | PO | Product owner |
| 2 | ĐVYC | Đơn vị yêu cầu |
| 3 | PM | Project manager |
| 4 | BA | Business analyst |
| 5 | UC | Use case |
| 6 | SKU | Stock Keeping Unit (Mã sản phẩm từ Product Hub) |



---



# II. TỔNG QUAN


### 1. Danh sách các chức năng


| STT | CHỨC NĂNG/MÀN HÌNH | VERSION | LOẠI | MÔ TẢ TÓM TẮT |
| --- | --- | --- | --- | --- |
| 1 | Quản lý cấu trúc các Trang (Pages) | 1.0 | New | Định nghĩa cấu trúc trang và liên kết Sections hiển thị. |
| 2 | Quản lý Sections | 1.0 | New | Quản lý các vùng layout lớn và liên kết kéo thả các Blocks. |
| 3 | Quản lý Blocks | 1.0 | New | Tạo lập khối nội dung con (gán sản phẩm, FAQ, hình ảnh, CTA). |
| 4 | Landing Page (LDP) | 1.0 | New | Tạo trang đích khuyến mãi độc lập với giao diện HTML tùy biến. |
| 5 | Quản lý Menu | 1.0 | New | Thiết lập thanh điều hướng đa cấp, kéo thả cha-con. |
| 6 | Quản lý Banner | 1.0 | New | Đăng tải banner, đặt lịch hiển thị và gắn link chuyển hướng. |
| 7 | Quản lý Popup | 1.0 | New | Tạo Popup quảng cáo/thông báo nổi, cấu hình tần suất hiển thị. |
| 8 | Quản lý Tin tức | 1.0 | New | Soạn thảo tin tức bài viết, phân loại chuyên mục và xuất bản. |
| 9 | Quản lý FAQ | 1.0 | New | Quản lý ngân hàng câu hỏi & câu trả lời thường gặp theo chủ đề. |
| 10 | Cấu hình Thông tin hay (Tag Mapping) | 1.1 | Update | Ánh xạ từ khóa bài viết đến sản phẩm. Thiết kế mới tích hợp dạng Tab trong Quản lý Tin tức và sử dụng Slide-over Drawer để cấu hình. |
| 11 | Cài đặt hiển thị (Checkout Config) | 1.0 | Update | Cấu hình chi tiết luồng Checkout đa kênh (SKUs, Chu kỳ, Thiết bị). |



---



# III. ĐẶC TẢ CHI TIẾT 11 CHỨC NĂNG




## 1. Quản lý cấu trúc các Trang (Pages)


| Description | Chức năng cho phép người dùng tạo mới, chỉnh sửa thông tin cấu trúc, thiết lập URL định tuyến, SEO Metadata và gán các khối Sections hiển thị tương ứng của từng trang. |
| --- | --- |
| Actor | Quản trị viên hệ thống (Super Admin, Admin CMS). |
| Trigger | Người dùng chọn menu "Quản lý Trang" và click tạo mới hoặc sửa một trang. |
| Pre-condition | Người dùng đã đăng nhập thành công vào trang quản trị và có quyền truy cập module Trang. |
| Post-condition | Cấu trúc trang được lưu thành công, URL hoạt động chính xác và giao diện hiển thị đúng các Sections đã được gán. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Trang".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo trang mới" hoặc chọn "Sửa" một trang có sẵn trên danh sách.
    * **Bước 3:** Hệ thống hiển thị Form cấu trúc trang (Tên trang, URL path, SEO Title, SEO Description).
    * **Bước 4:** Người dùng nhập các thông tin: Tên trang (slug tự sinh), URL path, Tiêu đề SEO, Mô tả SEO.
    * **Bước 5:** Người dùng thực hiện kéo thả gán các sections nội dung từ danh sách khả dụng sang danh sách áp dụng trên trang và sắp xếp thứ tự hiển thị.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin trang vào database và cập nhật hiển thị ngoài website.








    * URL path của trang phải là duy nhất trên toàn hệ thống (Unique constraint), không được trùng lặp.
    * Không cho phép người dùng xóa các trang hệ thống cốt lõi (như Trang chủ /, Trang lỗi /404).
    * Tên trang và URL path là hai trường bắt buộc nhập, không được để trống khi lưu.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tên trang | Y | Text | Tên trang dùng nội bộ trong CMS. |
| 2 | URL path | Y | Text | Đường dẫn truy cập trang (VD: /tin-khuyen-mai). |
| 3 | SEO Title | N | Text | Tiêu đề hiển thị trên tab trình duyệt (tối đa 70 ký tự). |
| 4 | SEO Description | N | Textarea | Mô tả tóm tắt của trang trên công cụ tìm kiếm (tối đa 160 ký tự). |
| 5 | Trạng thái | Y | Select | Lựa chọn trạng thái hiển thị: Active hoặc Draft. |



---




## 2. Quản lý Sections


| Description | Chức năng cho phép người dùng thiết kế và quản lý các vùng layout lớn của trang (như Header, Footer, Banner Hero, Body), hỗ trợ tái sử dụng một Section trên nhiều trang khác nhau. |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Quản lý Sections" và click tạo mới hoặc sửa Section. |
| Pre-condition | Người dùng đã đăng nhập thành công vào hệ thống quản trị. |
| Post-condition | Section được cập nhật thành công và tự động thay đổi hiển thị trên tất cả các Trang (Pages) có gán Section này. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Sections".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo Section mới" hoặc chọn "Sửa" một section có sẵn.
    * **Bước 3:** Hệ thống hiển thị Form chi tiết cấu hình Section.
    * **Bước 4:** Người dùng nhập thông tin: Tên section, chọn mẫu thiết kế layout hiển thị.
    * **Bước 5:** Người dùng kéo thả và gán các khối Blocks nội dung con khả dụng vào bên trong Section.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống cập nhật cấu trúc section vào database và tự động đồng bộ sang tất cả các trang đang gán section này.








    * Một Section là component dùng chung. Khi thay đổi cấu trúc/khối Block bên trong Section, các trang đang sử dụng Section đó sẽ được cập nhật đồng thời.
    * Mỗi Section bắt buộc phải chọn 1 mẫu layout định sẵn của hệ thống.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tên Section | Y | Text | Tên phân biệt Section dùng nội bộ (VD: Section Gói Cước). |
| 2 | Mẫu Layout | Y | Select | Chọn kiểu layout hiển thị (Grid 3 cột, Slider, FAQ List). |
| 3 | Mô tả | N | Textarea | Ghi chú ngắn về mục đích của Section. |



---




## 3. Quản lý Blocks


| Description | Chức năng cho phép người dùng định nghĩa nội dung các khối thông tin nhỏ (như gán sản phẩm từ Product Hub, chọn câu hỏi FAQ hiển thị, tải ảnh banner dọc hay thiết lập nút CTA). |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Quản lý Blocks" và click tạo mới hoặc chỉnh sửa Block. |
| Pre-condition | Người dùng đã đăng nhập thành công vào hệ thống. |
| Post-condition | Khối Block được lưu thông tin thành công và sẵn sàng để kéo thả vào các Section tương ứng. |










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







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tên Block | Y | Text | Tên nhận diện Block. |
| 2 | Loại Block | Y | Select | Phân loại block (Package, FAQ, Banner Dọc, CTA). |
| 3 | Gán Gói cước | N | Select/Search | Chọn gói cước từ Product Hub nếu block thuộc loại Package. |
| 4 | Đường dẫn nút | N | Text | Đường dẫn URL chuyển hướng của nút Xem Thêm/Mua Ngay. |



---




## 4. Landing Page (LDP)


| Description | Chức năng cho phép người dùng xây dựng, chỉnh sửa giao diện và cấu hình các trang chiến dịch marketing độc lập bằng cách upload file HTML tùy biến hoặc dựng trang qua kéo thả sections. |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Landing Page (LDP)" và click tạo mới hoặc sửa LDP. |
| Pre-condition | Người dùng đã đăng nhập thành công và có sẵn hình ảnh hoặc sections dựng trang. |
| Post-condition | Trang Landing Page được lưu và xuất bản thành công theo đúng URL định tuyến riêng biệt. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Landing Page (LDP)".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo LDP mới" hoặc chọn "Sửa" một chiến dịch LDP trên danh sách.
    * **Bước 3:** Hệ thống hiển thị Form thông tin LDP.
    * **Bước 4:** Người dùng nhập các thông tin: Tên LDP, đường dẫn URL đích riêng, chọn phương thức dựng giao diện (HTML custom hoặc gán Sections).
    * **Bước 5:** Người dùng thiết lập trạng thái hoạt động (Lưu nháp / Xuất bản).
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống ghi nhận, tạo đường dẫn route độc lập và lưu trữ thông tin chiến dịch.








    * Landing Page có cấu trúc định tuyến (route) riêng biệt, bỏ qua cấu trúc header/footer mặc định của trang chủ nếu được cấu hình dạng "Full-blank".







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tên LDP | Y | Text | Tên chiến dịch Landing Page. |
| 2 | URL path LDP | Y | Text | URL đích truy cập (VD: /khuyen-mai-he-2026). |
| 3 | Mã HTML tùy chọn | N | Textarea | Nhập code HTML/CSS tùy biến (nếu chọn loại Upload HTML). |



---




## 5. Quản lý Menu


| Description | Chức năng cho phép người dùng chỉnh sửa cấu trúc thanh điều hướng điều hướng đa cấp (Header/Footer), kéo thả sắp xếp vị trí hoặc phân cấp menu cha-con. |
| --- | --- |
| Actor | Quản trị viên hệ thống. |
| Trigger | Người dùng chọn menu "Quản lý Menu" và chọn vùng menu cần sửa. |
| Pre-condition | Người dùng đã đăng nhập thành công và có quyền hạn Admin. |
| Post-condition | Thanh điều hướng ngoài trang chủ cập nhật cấu trúc menu mới ngay lập tức sau khi lưu. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Menu".
    * **Bước 2:** Người dùng chọn phân vùng menu cần sửa (Header / Footer).
    * **Bước 3:** Hệ thống hiển thị giao diện sơ đồ cây menu hiện hữu.
    * **Bước 4:** Người dùng nhấn nút "+ Thêm Menu Item" hoặc chọn sửa menu có sẵn để cập nhật Tên hiển thị và liên kết URL đích.
    * **Bước 5:** Người dùng thực hiện kéo thả di chuyển vị trí các item lên/xuống, hoặc kéo lùi sang phải dưới một menu cha để phân cấp menu con.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống cập nhật sơ đồ định tuyến menu ngoài website.








    * Hỗ trợ tối đa 3 cấp menu (Menu cha -> Menu con cấp 1 -> Menu con cấp 2) để đảm bảo hiển thị tối ưu trên giao diện.
    * Mỗi menu item bắt buộc phải điền đầy đủ nhãn hiển thị và URL liên kết.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Vị trí Menu | Y | Select | Header Menu hoặc Footer Menu. |
| 2 | Nhãn hiển thị | Y | Text | Tên hiển thị trên thanh menu (VD: "Trang chủ"). |
| 3 | URL liên kết | Y | Text | Đường dẫn khi nhấp chuột (VD: /tin-tuc). |



---




## 6. Quản lý Banner


| Description | Chức năng cho phép người dùng đăng tải hình ảnh quảng cáo (Desktop/Mobile), thiết lập độ ưu tiên hiển thị, link liên kết đích và hẹn giờ tự động chạy slide trên các trang cụ thể. |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Quản lý Banner" và click tạo mới hoặc sửa banner. |
| Pre-condition | Người dùng đã đăng nhập thành công và có sẵn hình ảnh banner thiết kế. |
| Post-condition | Banner được hiển thị trên Slide ngoài trang chủ/trang chỉ định đúng khung giờ cài đặt. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Banner".
    * **Bước 2:** Người dùng nhấn nút "+ Tạo Banner mới" hoặc chọn "Sửa" một banner hiện tại.
    * **Bước 3:** Hệ thống hiển thị Form đăng tải thông tin Banner.
    * **Bước 4:** Người dùng nhập các thông tin: Tên banner, thứ tự hiển thị, liên kết URL đích, chọn cách mở trang (_self / _blank).
    * **Bước 5:** Người dùng tải lên ảnh Banner Desktop, tải lên ảnh Banner Mobile, chọn các Trang áp dụng hiển thị và cấu hình lịch thời gian chạy.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống ghi nhận dữ liệu, thực hiện kiểm tra thời gian hiển thị và cập nhật slider ngoài website.








    * Phải tải lên tối thiểu hình ảnh bản Desktop. Nếu không tải ảnh Mobile, hệ thống tự động co giãn ảnh Desktop theo tỉ lệ màn hình.
    * Banner chỉ hiển thị ngoài website nếu trạng thái là Active và thời gian hiện tại nằm trong khoảng thời gian cấu hình hiển thị.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Ảnh Desktop | Y | File | Upload file ảnh định dạng PNG/JPG/WebP cho màn hình máy tính. |
| 2 | Ảnh Mobile | N | File | Upload file ảnh định dạng PNG/JPG/WebP cho màn hình điện thoại. |
| 3 | Thời gian bắt đầu | N | DateTime | Thời gian bắt đầu hiển thị banner trên site. |
| 4 | Thời gian kết thúc | N | DateTime | Thời gian kết thúc hiển thị banner trên site. |



---




## 7. Quản lý Popup


| Description | Chức năng cho phép người dùng tạo lập và cấu hình các hộp thoại nổi (Modal popup) hiển thị ngoài website để thu thập thông tin khách hàng, quảng bá voucher hoặc gửi thông báo. |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Quản lý Popup" và chọn tạo mới/sửa Popup. |
| Pre-condition | Người dùng đã đăng nhập thành công vào trang quản trị. |
| Post-condition | Popup hiển thị đúng điều kiện cài đặt (trang áp dụng, tần suất, thời gian trễ) trên trình duyệt khách hàng. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Popup".
    * **Bước 2:** Người dùng nhấn nút tạo mới hoặc chọn "Sửa" một popup trong danh sách.
    * **Bước 3:** Hệ thống hiển thị Form chi tiết cấu hình Popup.
    * **Bước 4:** Người dùng nhập các thông tin: Tên popup, chọn loại nội dung (Ảnh/HTML), tải lên ảnh hoặc nhập code HTML.
    * **Bước 5:** Người dùng cấu hình điều kiện: Tần suất hiển thị, thời gian trễ hiển thị (số giây chờ) và đa chọn Trang áp dụng.
    * **Bước 6:** Người dùng nhấn nút "Lưu".
    * **Bước 7:** Hệ thống ghi nhận cấu hình, lưu trữ thông tin và tự động hiển thị popup ngoài website.








    * Mỗi trang tại một thời điểm chỉ cho phép kích hoạt tối đa 01 Popup để tránh gây phiền nhiễu cho trải nghiệm của khách hàng (UX).
    * Tần suất hiển thị mặc định: 1 lần mỗi phiên làm việc của người dùng nếu không có cấu hình khác.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Nội dung Popup | Y | File/Text | Nội dung hiển thị (tải lên file ảnh hoặc mã HTML tùy biến). |
| 2 | Tần suất hiển thị | Y | Select | Lựa chọn: Mọi lúc / 1 lần mỗi Session / 1 lần mỗi ngày. |
| 3 | Thời gian trễ | Y | Number | Số giây chờ trước khi popup hiển thị (VD: 3 giây). |



---




## 8. Quản lý Tin tức (News & Articles)


| Description | Chức năng cho phép soạn thảo nội dung tin tức, bài viết khuyến mãi bằng Rich Text Editor, phân loại bài viết theo chuyên mục bài đăng và điều phối trạng thái xuất bản bài viết. |
| --- | --- |
| Actor | Biên tập viên (Tạo/Sửa nháp), Người duyệt (Xuất bản), Admin. |
| Trigger | Người dùng chọn menu "Quản lý Tin tức" và click thêm mới hoặc sửa bài viết. |
| Pre-condition | Người dùng đã đăng nhập thành công và có quyền hạn biên tập/duyệt bài. |
| Post-condition | Bài viết được lưu nháp hoặc cập nhật hiển thị lên trang tin tức website tương ứng với trạng thái xuất bản. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Tin tức".
    * **Bước 2:** Người dùng nhấn nút "+ Thêm Bài Viết" hoặc chọn chỉnh sửa một bài viết hiện có.
    * **Bước 3:** Hệ thống hiển thị Form soạn thảo tin tức bài viết.
    * **Bước 4:** Người dùng nhập các thông tin: Tiêu đề (slug tự sinh), chọn chuyên mục bài đăng, upload ảnh Thumbnail đại diện và soạn thảo nội dung bài đăng qua Rich Text Editor.
    * **Bước 5:** Người dùng cấu hình SEO Metadata cho bài viết.
    * **Bước 6:** Người dùng nhấn nút "Lưu nháp" hoặc "Xuất bản" (tùy quyền hạn).
    * **Bước 7:** Hệ thống ghi nhận trạng thái bài viết, cập nhật bảng danh sách bài viết quản trị và thay đổi thông tin ngoài trang tin tức website.








    * Ảnh đại diện bài viết (Thumbnail) bắt buộc tải lên và có định dạng tỉ lệ 3:2 hoặc 16:9 để hiển thị đồng bộ trên danh sách tin.
    * Hệ thống tự động lưu lịch sử biên tập (Version History) và ghi nhận tên tài khoản thực hiện chỉnh sửa gần nhất.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tiêu đề bài viết | Y | Text | Tiêu đề bài viết (tự động gợi ý URL slug). |
| 2 | Chuyên mục | Y | Select | Lọc phân loại bài viết (Tin khuyến mãi, Tin công nghệ, Thông báo). |
| 3 | Nội dung bài viết | Y | Rich Text | Trình soạn thảo WYSIWYG nhập nội dung bài viết. |



---




## 9. Quản lý FAQ


| Description | Chức năng cho phép người dùng thiết lập ngân hàng các câu hỏi thường gặp và câu trả lời tương ứng theo từng danh mục hỗ trợ kỹ thuật, cước phí. |
| --- | --- |
| Actor | Biên tập viên, Người duyệt, Admin. |
| Trigger | Người dùng chọn menu "Quản lý FAQ" và click thêm mới/sửa câu hỏi. |
| Pre-condition | Người dùng đã đăng nhập thành công vào hệ thống. |
| Post-condition | Câu hỏi FAQ được lưu thành công vào thư viện dùng chung và sẵn sàng để gán hiển thị lên các trang. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý FAQ".
    * **Bước 2:** Người dùng nhấn nút "+ Thêm Câu hỏi" hoặc chọn "Sửa" câu hỏi hiện hữu.
    * **Bước 3:** Hệ thống hiển thị Form chi tiết FAQ.
    * **Bước 4:** Người dùng nhập các thông tin: Nội dung Câu hỏi, chọn danh mục chủ đề phân loại, soạn thảo nội dung câu trả lời.
    * **Bước 5:** Người dùng nhấn nút "Lưu".
    * **Bước 6:** Hệ thống lưu thông tin câu hỏi vào thư viện dùng chung để có thể gán nhanh vào các blocks.








    * Hỗ trợ tìm kiếm nhanh câu hỏi theo từ khóa trong thư viện FAQ để phục vụ gán nhanh vào Block mà không cần tạo mới trùng lặp.
    * Cả câu hỏi và câu trả lời đều không được để trống khi thực hiện lưu.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Câu hỏi | Y | Text | Nội dung câu hỏi thường gặp (VD: Làm thế nào đổi mật khẩu Wifi?). |
| 2 | Chủ đề / Danh mục | Y | Select | Chủ đề liên quan (Hỗ trợ kỹ thuật, Đóng cước, Khuyến mãi). |
| 3 | Câu trả lời | Y | Textarea | Nội dung hướng dẫn giải quyết chi tiết cho khách hàng. |



---




## 10. Cấu hình Thông tin hay (Tag Mapping)


| Description | Chức năng cho phép người dùng tạo các Tag từ khóa và liên kết (map) các tin tức, bài viết hướng dẫn hoặc FAQ liên quan đến Tag đó cho các sản phẩm/gói cước tương ứng. Tính năng này được tích hợp trực tiếp dưới dạng một tab chức năng trong module Quản lý Tin tức. |
| --- | --- |
| Actor | Quản trị viên hệ thống, Biên tập viên. |
| Trigger | Người dùng chọn menu "Quản lý Tin tức", chọn tab "Cấu hình Thông tin hay (Tags Mapping)" và nhấp chọn nút "Cấu hình" (⚙️) tại dòng Tag tương ứng. |
| Pre-condition | Người dùng đã đăng nhập thành công vào CMS và truy cập module Quản lý Tin tức. |
| Post-condition | Ngoài website, các bài viết tin tức/FAQ liên quan tự động hiển thị ở chân trang chi tiết của sản phẩm tương ứng. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Quản lý Tin tức" -> chọn tab "Cấu hình Thông tin hay (Tags Mapping)".
    * **Bước 2:** Người dùng nhấp chọn nút "Cấu hình" (⚙️) tại dòng Tag cần chỉnh sửa hoặc nhấn "Thêm Tag Mới".
    * **Bước 3:** Hệ thống mở **Panel cấu hình trượt từ bên phải qua (Slide-over Drawer)**, hiển thị Form cấu hình chi tiết (Tên Tag, bật/tắt Fallback, danh sách SKU liên kết, live preview bài viết liên quan).
    * **Bước 4:** Người dùng cập nhật các thông tin liên kết: tìm kiếm và chọn các SKU sản phẩm liên quan đến Tag này.
    * **Bước 5:** Người dùng nhấn nút "Lưu cấu hình".
    * **Bước 6:** Hệ thống thực hiện validate dữ liệu, lưu cấu hình vào database, trượt đóng panel về bên phải, hiển thị thông báo thành công và cập nhật liên kết ngoài website.








    * Một bài viết hoặc FAQ có thể được gán vào nhiều Tag khác nhau. Một dòng sản phẩm cũng có thể ánh xạ đến nhiều Tag.
    * Tag phải viết dưới dạng không dấu, ngăn cách bằng dấu gạch ngang (VD: uu-dai-wifi-giga).
    * **Quy tắc giao diện (UI/UX)**: Form cấu hình chi tiết của Tag sử dụng cơ chế Slide-over panel (trượt từ phải qua) chiếm 60% chiều rộng màn hình, cho phép thao tác nhanh mà không che khuất hoàn toàn ngữ cảnh danh sách bên dưới, mang lại trải nghiệm đồng bộ với màn hình cấu hình chi tiết SKU sản phẩm.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tên Tag | Y | Text | Mã tag nhận diện không dấu (VD: wifi-sky-family). |
| 2 | Gán bài viết | N | Multi-select | Chọn một hoặc nhiều bài viết tin tức liên quan. |
| 3 | Ánh xạ gói cước | Y | Multi-select | Chọn các gói cước (SKU) sẽ áp dụng hiển thị các bài viết này. |



---




## 11. Cài đặt hiển thị (Cấu hình Checkout đa kênh)


| Description | Chức năng cho phép người dùng cấu hình chi tiết trang Checkout (chọn sản phẩm áp dụng, chu kỳ thanh toán, thiết bị đi kèm, phí lắp đặt) độc lập cho từng kênh bán (Global vs tdw, hifpt, fptvn). |
| --- | --- |
| Actor | Quản trị viên hệ thống (Super Admin, Admin CMS). |
| Trigger | Người dùng chọn menu "Cài đặt Hiển thị" và click chỉnh sửa trên tab Cấu hình Checkout. |
| Pre-condition | Người dùng đã đăng nhập thành công và có quyền hạn Admin. |
| Post-condition | Cấu hình Checkout của kênh bán được cập nhật, hiển thị đúng luồng thanh toán ngoài website tương ứng. |










    * **Bước 1:** Người dùng truy cập CMS -> chọn menu "Cài đặt Hiển thị", tab "Cấu hình Checkout".
    * **Bước 2:** Người dùng chọn Kênh bán cần cấu hình (Global hoặc các kênh con tdw, hifpt, fptvn).
    * **Bước 3:** Người dùng chọn các mã SKU gói cước áp dụng từ danh sách cuộn dọc (danh sách này hỗ trợ tìm kiếm thời gian thực).
    * **Bước 4:** Người dùng điền thông tin chi tiết: Thêm/Sửa/Bật/Tắt chu kỳ thanh toán, tích chọn thiết bị/dịch vụ đi kèm, điền ghi chú thanh toán và phí lắp đặt.
    * **Bước 5:** Người dùng nhấn nút "Lưu".
    * **Bước 6:** Hệ thống validate dữ liệu, ghi đè (nếu là tùy chỉnh riêng) hoặc đồng bộ dữ liệu thanh toán lên database và cập nhật giao diện ngoài website.








    * Bắt buộc chọn ít nhất 1 SKU gói cước áp dụng tại cấu hình Global để kích hoạt hiển thị cấu hình chi tiết bên dưới. Nếu không có SKU nào, hiển thị cảnh báo yêu cầu chọn SKU.
    * Danh sách SKU hiển thị dưới dạng list cuộn dọc giới hạn chiều cao tối đa 160px để tránh kéo giãn màn hình. Tích hợp thanh tìm kiếm thời gian thực theo mã và tên SKU.
    * Kênh con khi ở chế độ kế thừa (🌐 Dùng Global) sẽ bị vô hiệu hóa chỉnh sửa, các thông tin hiển thị mờ và ghi nhãn *(Kế thừa Global)*.
    * Khi có bất kỳ hành động chỉnh sửa nào trên kênh con, hệ thống tự động gọi hàm switchToCustom để nhân bản dữ liệu Global hiện tại sang và chuyển giao diện sang trạng thái Tùy chỉnh.







| STT | Tên trường | Bắt buộc? (Y/N) | Format | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Tìm kiếm SKU | N | Text | Ô tìm nhanh mã hoặc tên gói cước để chọn. |
| 2 | Chọn mã SKU | Y | Checkbox | Tick chọn các gói cước áp dụng cho trang Checkout của kênh. |
| 3 | Ghi chú thanh toán | N | Textarea | Dòng text ghi chú dưới phần thanh toán (tối đa 250 ký tự). |
| 4 | Chu kỳ thanh toán | Y | List | Thêm mới, sửa hoặc bật/tắt các chu kỳ (1T, 3T, 6T, 12T) áp dụng. |
| 5 | Thiết bị đi kèm | N | Checkbox List | Chọn các thiết bị (Modem WiFi, FPT Play Box) đi kèm mặc định. |



---



# IV. CÁC YÊU CẦU PHI CHỨC NĂNG



    * **Hiệu năng:** Tốc độ tải dữ liệu danh sách SKU và cập nhật cấu hình checkout phải dưới 1 giây. Việc render kéo thả không gây trễ hoặc đơ trình duyệt.
    * **Bảo mật:** Kiểm tra token xác thực người dùng và quyền hạn (RBAC) trên Server trước khi cho phép lưu cấu hình hoặc cập nhật thông tin trang.
    * **Trải nghiệm (UI/UX):** Giao diện CMS được xây dựng theo chuẩn Dark Mode mượt mà, phân tách các kênh con rõ ràng, trạng thái kế thừa/tùy chỉnh riêng trực quan bằng màu sắc tương phản.




---



# V. PHỤ LỤC



    * **Link Wireframe tham chiếu:** wireframe_module_1_cms.html
    * **Tài liệu tham khảo hệ thống:** Thiết kế hệ thống Product Hub (PDH) - FPT Telecom.