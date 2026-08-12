+:--------------------------------------------------:+:-----------------------------------------------------:+
| ![](scratch/media/media/image4.png){width="1.15in" | **[FPT.VN URD -- USER REQUIREMENTS                    |
| height="0.37697069116360454in"}                    | DOCUMENT]{.smallcaps}**                               |
|                                                    +-------------------------------------------------------+
|                                                    | **Mã hiệu: URD-CMS-01          Phiên bản: 1.0         |
|                                                    |          Ngày: 05/06/2026**                           |
+----------------------------------------------------+-------------------------------------------------------+

## REVISION HISTORY

*\[A\]: Add -- Thêm mới \| \[U\]: Update -- Cập nhật, thay đổi \| \[D\]:
Delete - Xóa*

  -----------------------------------------------------------------------------------------
  **Date**   **Version**   **Author**   **Reviewer**   **Approver**   **Change
                                                                      Description**
  ---------- ------------- ------------ -------------- -------------- ---------------------
                                                                      

                                                                      
  -----------------------------------------------------------------------------------------

# 

# MỤC LỤC

> [REVISION HISTORY 1](#revision-history)

[MỤC LỤC 1](#mục-lục)

[I. GIỚI THIỆU 2](#i.-giới-thiệu)

> [1. Mục đích tài liệu 3](#mục-đích-tài-liệu)
>
> [2. Thông tin chung 3](#thông-tin-chung)

[II. TỔNG QUAN HỆ THỐNG 3](#ii.-tổng-quan-hệ-thống)

> [1. Danh sách các chức năng 3](#danh-sách-các-chức-năng)

[III. ĐẶC TẢ CHI TIẾT CÁC CHỨC NĂNG
4](#iii.-đặc-tả-chi-tiết-các-chức-năng)

> [1. Quản lý cấu trúc các Trang (Pages)
> 4](#quản-lý-cấu-trúc-các-trang-pages)
>
> [2. Sections 6](#sections)
>
> [3. Blocks 9](#blocks)
>
> [4. Menu 11](#menu)
>
> [5. Banner 14](#banner)
>
> [6. FAQ 20](#faq)

[IV. CÁC YÊU CẦU PHI CHỨC NĂNG 23](#iv.-các-yêu-cầu-phi-chức-năng)

[V. PHỤ LỤC THAM CHIẾU 24](#v.-phụ-lục-tham-chiếu)

# 

# 

# 

# 

# 

# I. GIỚI THIỆU

### 1. Mục đích tài liệu

Tài liệu này mô tả và làm rõ yêu cầu xây dựng phân hệ Quản lý nội dung
(CMS) phục vụ cho việc quản trị, cấu hình và tùy chỉnh nội dung, giao
diện và luồng checkout trên chuỗi các website bán hàng của FPT.VN (bao
gồm website chính fpt.vn và các kênh phụ như tongdaiwifi, hifpt, v.v.).
Hệ thống giúp các đơn vị nghiệp vụ chủ động thay đổi giao diện trang bán
hàng, gán sản phẩm, thay đổi phương thức thanh toán, phân quyền tài
khoản vận hành mà không cần can thiệp mã nguồn kỹ thuật.

### 2. Thông tin chung

Hệ thống được thiết kế theo cấu trúc mô-đun hóa, đồng bộ thời gian thực
các thuộc tính sản phẩm từ hệ thống QLCS tập trung (Product Hub) và áp
dụng cơ chế kế thừa thông minh giữa các kênh dữ liệu Global và Kênh con.

\-\--

# II. TỔNG QUAN HỆ THỐNG

### 1. Danh sách các chức năng 

  ---------------------------------------------------------------------------------
  **STT**   **CHỨC         **VERSION**   **LOẠI**   **MÔ TẢ TÓM TẮT**
            NĂNG/MÀN                                
            HÌNH**                                  
  --------- -------------- ------------- ---------- -------------------------------
  4         Quản lý cấu    1.0           Old        Định nghĩa cấu trúc trang, SEO
            trúc các Trang                          metadata và liên kết Sections
            (Pages)                                 hiển thị.

  5         Sections       1.0           Old        Thiết kế các vùng layout lớn và
                                                    liên kết kéo thả các Blocks con
                                                    bên trong.

  6         Blocks         1.0           Old        Tạo lập khối nội dung con (gán
                                                    sản phẩm, FAQ, hình ảnh, nút
                                                    CTA).

  8         Menu           1.0           Old        Thiết lập thanh điều hướng đa
                                                    cấp (Header/Footer/Sidebar),
                                                    kéo thả phân cấp cha-con.

  9         Banner         1.0           Old        Đăng tải banner (Desktop &
                                                    Mobile), đặt lịch hiển thị và
                                                    liên kết điều hướng.

  12        FAQ            1.0           Old        Quản lý ngân hàng câu hỏi & câu
                                                    trả lời thường gặp theo chủ đề
                                                    dùng chung.
  ---------------------------------------------------------------------------------

# III. ĐẶC TẢ CHI TIẾT CÁC CHỨC NĂNG

### 1. Quản lý cấu trúc các Trang (Pages)

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng tạo mới, chỉnh sửa
                       thông tin cấu trúc, thiết lập URL định tuyến, SEO
                       Metadata và gán các khối Sections hiển thị tương ứng
                       của từng trang.

  **Actor**            Quản trị viên hệ thống (Super Admin).

  **Trigger**          Người dùng chọn menu **\"Danh sách trang\"** và click
                       tạo mới hoặc sửa một trang.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào trang quản trị
                       và có quyền truy cập module Trang.

  **Post-condition**   Cấu trúc trang được lưu thành công, URL hoạt động
                       chính xác và giao diện hiển thị đúng các Sections đã
                       được gán.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu \"Danh sách trang\".

- **Bước 2:** Người dùng nhấn nút \"+ Tạo trang mới\" hoặc chọn \"Sửa\"
  một trang có sẵn trên danh sách.

- **Bước 3:** Hệ thống hiển thị Form cấu trúc trang (Tên trang, URL
  path, SEO Title, SEO Description).

- **Bước 4:** Người dùng nhập các thông tin: Tên trang (slug tự sinh),
  URL path, Tiêu đề SEO, Mô tả SEO.

- **Bước 5:** Người dùng thực hiện kéo thả gán các sections nội dung từ
  danh sách khả dụng sang danh sách áp dụng trên trang và sắp xếp thứ tự
  hiển thị.

- **Bước 6:** Người dùng nhấn nút \"Lưu\".

- **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin trang
  vào database và cập nhật hiển thị ngoài website.

**b. Quy tắc nghiệp vụ (Business Rules):**

- Mã code (Slug) của trang phải là duy nhất trên toàn hệ thống (Unique
  constraint), không được trùng lặp.

- Không cho phép người dùng xóa các trang hệ thống cốt lõi (như Trang
  chủ, Trang lỗi 404).

- Các trường đánh dấu \* đỏ là các trường bắt buộc nhập, nếu để trống sẽ
  không cho nhấn vào nút Lưu.

**c. Bảng mô tả trường thông tin (Screen Description):**

![](scratch/media/media/image7.png){width="6.5in" height="3.125in"}

  -------------------------------------------------------------------------------
  **STT**   **Tên       **Bắt buộc? **Format**   **Mô tả**
            trường**    (Y/N)**                  
  --------- ----------- ----------- ------------ --------------------------------
  1         Tên trang   Y           Text         Tên trang dùng nội bộ trong CMS.

  2         Mã code     Y           Text         Đường dẫn URL truy cập trang
            (Slug)                               (VD: home, km-internet-t5).

  3         Tiêu đề     Y           Text         Tiêu đề chính hiển thị trên giao
            (H1)                                 diện trang.

  4         Tag tin tức Y           Text         Tag để phân loại tin tức liên
                                                 quan.

  5         Meta tiêu   Y           Text         Tiêu đề hiển thị trên tab trình
            đề                                   duyệt và kết quả tìm kiếm
                                                 Google.

  6         Meta từ     Y           Text         Từ khóa phục vụ SEO, ngăn cách
            khóa                                 bằng dấu phẩy.

  7         Trạng thái  Y           Select       Lựa chọn trạng thái hiển thị:
                                                 Active hoặc Draft.
  -------------------------------------------------------------------------------

\-\--

### 2. Sections

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng thiết kế và quản lý các
                       vùng layout lớn của trang (như Header, Footer, Banner
                       Hero, Body), hỗ trợ tái sử dụng một Section trên
                       nhiều trang khác nhau.

  **Actor**            Quản trị viên hệ thống (Super admin), Biên tập viên.

  **Trigger**          Người dùng chọn menu \"**Sections**\" và click tạo
                       mới hoặc sửa Section.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào hệ thống quản
                       trị.

  **Post-condition**   Section được cập nhật thành công và tự động thay đổi
                       hiển thị trên tất cả các Trang (Pages) có gán Section
                       này.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu **\"Sections\"**.

- **Bước 2:** Người dùng nhấn nút \"+ Tạo Section mới\" hoặc chọn
  \"Sửa\" một section có sẵn.

- **Bước 3:** Hệ thống hiển thị Form chi tiết cấu hình Section.

- **Bước 4:** Người dùng nhập thông tin: Tên section, Tên trang, tiêu
  đề,\...

- **Bước 5:** Người dùng chọn và gán các khối Blocks nội dung con khả
  dụng vào bên trong Section.

- **Bước 6:** Người dùng nhấn nút \"Lưu\".

- **Bước 7:** Hệ thống cập nhật cấu trúc section vào database và tự động
  đồng bộ sang tất cả các trang đang gán section này.

**b. Quy tắc nghiệp vụ (Business Rules):**

- Một Section là component dùng chung. Khi thay đổi cấu trúc/khối Block
  bên trong Section, các trang đang sử dụng Section đó sẽ được cập nhật
  đồng thời.

- Tên Section (Quản trị), Tiêu đề Section, Mã Section, Loại Section, và
  Tên trang là các trường bắt buộc nhập (đánh dấu \* đỏ).

- Mã Section phải là duy nhất, không trùng lặp và được viết dưới dạng
  snake-case hoặc kebab-case.

**c. Bảng mô tả trường thông tin (Screen Description):**

![](scratch/media/media/image2.png){width="6.5in" height="5.0625in"}

  --------------------------------------------------------------------------------
  **STT**   **Tên      **Bắt buộc? **Format**   **Mô tả**
            trường**   (Y/N)**                  
  --------- ---------- ----------- ------------ ----------------------------------
  1         Chọn trang Y           Select       Chọn trang chứa Section này (VD:
                                                Trang chủ, Khuyến mãi Tháng 5)

  2         Tên        Y           Text         Tên nhận diện Section dùng cho mục
            Section                             đích quản trị nội bộ.

  3         Tiêu đề    Y           Text         Tiêu đề hiển thị trực tiếp cho
            Section                             khách hàng trên giao diện UI.

  4         Mã Section Y           Text         Mã định danh kỹ thuật duy nhất
                                                dùng trong code (VD: sec-hero).

  5         Loại       Y           Select       Loại bố cục/layout (VD: Hero
            Section                             Banner, Product List, Features).

  6         Thứ tự     N           Number       Thứ tự sắp xếp hiển thị của
            hiển thị                            Section trên trang.

  7         Mô tả ngắn N           Textarea     Ghi chú thêm về vai trò, mục đích
                                                của Section.

  8         Text xem   N           Text         Chỉnh sửa text nút xem thêm
            thêm                                

  9         Link xem   N           URL          Gắn link nút xem thêm điều hướng
            thêm                                về link đích mong muốn

  10        Chọn block N           Select       Chon gói block khả dụng được tạo
                                                sẵn ở menu block

  11        Hình ảnh   N           Image        Upload hình anh theo thiết bị
  --------------------------------------------------------------------------------

\-\--

### 3. Blocks

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng định nghĩa nội dung các
                       khối thông tin nhỏ (như gán sản phẩm từ Product Hub,
                       chọn câu hỏi FAQ hiển thị, tải ảnh banner dọc hay
                       thiết lập nút CTA).

  **Actor**            Quản trị viên hệ thống, Biên tập viên.

  **Trigger**          Người dùng chọn menu \"Blocks\" và click tạo mới hoặc
                       chỉnh sửa Block.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào hệ thống.

  **Post-condition**   Khối Block được lưu thông tin thành công và sẵn sàng
                       để kéo thả vào các Section tương ứng.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu \"Blocks\".

- **Bước 2:** Người dùng nhấn nút \"+ Tạo Block mới\" hoặc chọn \"Sửa\"
  một block có sẵn.

- **Bước 3:** Hệ thống hiển thị Form cấu hình tương ứng với loại Block.

- **Bước 4:** Người dùng nhập các thông tin: Tên block, Mã block, Tên
  rút gọn, chọn loại block,\....

- **Bước 5:** Người dùng chọn loại dữ liệu (dịch vụ, tin tức, câu hỏi)
  (Tìm chọn Package từ API hoặc tìm chọn câu hỏi FAQ, hoặc tìm Tin tức
  phù hợp).

- **Bước 6:** Người dùng nhập text nút CTA và link chuyển hướng URL
  đích.

- **Bước 7:** Người dùng nhấn nút \"Lưu\".

- **Bước 8:** Hệ thống lưu thông tin block vào kho dữ liệu dùng chung và
  cập nhật hiển thị.

**b. Quy tắc nghiệp vụ (Business Rules):**

- Block loại Sản phẩm chỉ hiển thị các Package đang hoạt động (Active)
  được lấy từ Product Hub.

- Tên Block, Mã Block, Loại Block, Loại dữ liệu là các trường bắt buộc
  nhập, không được để trống.

- Mã Block phải là duy nhất, không trùng lặp và dùng để định danh trong
  code.

**c. Bảng mô tả trường thông tin (Screen Description):**

![](scratch/media/media/image5.png){width="6.5in"
height="3.2395833333333335in"}

  --------------------------------------------------------------------------------
  **STT**   **Tên      **Bắt     **Format**      **Mô tả**
            trường**   buộc?                     
                       (Y/N)**                   
  --------- ---------- --------- --------------- ---------------------------------
  1         Tên Block  Y         Text            Tên nhận diện Block (VD: Internet
                                                 cá nhân trang danh mục).

  2         Mã Block   Y         Text            Mã định danh kỹ thuật duy nhất
                                                 (VD: internet-ca-nhan).

  3         Tên rút    N         Text            Tên rút gọn hiển thị nội bộ (VD:
            gọn                                  Card Chuẩn).

  4         Loại Block Y         Select          Bố cục hiển thị (VD: Slider,
                                                 Grid, Accordion, Row, List).

  5         Loại dữ    Y         Select/Search   Chọn item được load theo từng
            liệu                                 loại dữ liệu đang chọn (Tin tức,
                                                 Dịch vụ, Câu hỏi)

  6         Text xem   N         Text            Chỉnh sửa text cho nút
            thêm                                 

  7         Đường dẫn  N         URL             Đường dẫn URL chuyển hướng của
            nút                                  nút Xem Thêm/Mua Ngay.

  8         Thứ tự     N         Numer           Sắp xếp thự tự cho block
  --------------------------------------------------------------------------------

\-\--

### 4. Menu

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng cấu hình chi tiết thanh
                       điều hướng đa cấp (Header / Footer / Sidebar), sắp
                       xếp thứ tự hiển thị và thiết lập phân cấp menu
                       cha-con lên tới 3 cấp.

  **Actor**            Quản trị viên hệ thống (Super Admin).

  **Trigger**          Người dùng chọn menu \"Menu\" và nhấp chọn \"+ Tạo
                       menu link\" hoặc chọn \"Sửa\" một menu item trong
                       danh sách sơ đồ cây.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào trang quản trị
                       và có quyền truy cập module Menu.

  **Post-condition**   Cấu trúc thanh điều hướng được lưu trữ thành công và
                       cập nhật tức thì trên giao diện website tương ứng với
                       vị trí đã cấu hình.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu **\"Menu\"**.

- **Bước 2:** Hệ thống hiển thị bảng danh sách Menu dưới dạng sơ đồ cây,
  cho phép tìm kiếm theo Tên menu và phân trang.

- **Bước 3:** Người dùng nhấn nút \"+ Tạo menu link\" hoặc chọn \"Sửa\"
  trên một dòng menu.

- **Bước 4:** Hệ thống hiển thị Form thông tin menu gồm các trường cấu
  hình chi tiết.

- **Bước 5:** Người dùng nhập các thông tin: Tên menu, Menu cha (nếu
  có), Thứ tự hiển thị, Loại (Page/Category/Link), Vị trí, Kiểu hiển
  thị, Ngôn ngữ, Target và upload Icon.

- **Bước 6:** Người dùng nhấn nút \"Lưu\".

- **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào
  database và đồng bộ thanh điều hướng ngoài website.

**b. Quy tắc nghiệp vụ (Business Rules):**

  -----------------------------------------------------------------------
  **Rule**    **Mô tả**
  ----------- -----------------------------------------------------------
  **BR01**    Hỗ trợ cấu trúc phân cấp tối đa 3 cấp menu (Menu cha -\>
              Menu con cấp 1 -\> Menu con cấp 2) để đảm bảo giao diện
              hiển thị tối ưu (UX).

  **BR02**    Tên menu, Thứ tự hiển thị, Loại, Vị trí, Target là các
              trường bắt buộc nhập, không được để trống.

  **BR03**    Trường \*\*Đường dẫn URL\*\* (Link URL) sẽ bắt buộc nhập
              đối với menu có loại là \*\*Link\*\* để đảm bảo chuyển
              hướng chính xác. Với loại \*\*Page\*\* hoặc
              \*\*Category\*\*, hệ thống sẽ tự động liên kết tới trang
              hoặc chuyên mục được cấu hình.

  **BR04**    Hỗ trợ tải lên Icon menu với các định dạng JPG, PNG, GIF,
              WEBP, SVG và dung lượng tối đa 10MB.
  -----------------------------------------------------------------------

**c. Bảng mô tả trường thông tin (Screen Description):**\
![](scratch/media/media/image8.png){width="6.5in" height="3.3125in"}

  ----------------------------------------------------------------------------------
  **STT**   **Tên      **Bắt     **Format**   **Mô tả**
            trường**   buộc?                  
                       (Y/N)**                
  --------- ---------- --------- ------------ --------------------------------------
  1         Tên menu   Y         Text         Nhãn hiển thị trực tiếp của menu item
                                              trên giao diện (VD: \"Sản phẩm\",
                                              \"Khuyến mãi\").

  2         Menu cha   N         Select       Chọn menu cấp cha từ danh sách cây
                                              phân cấp hiện có (để trống nếu là menu
                                              gốc).

  3         Thứ tự     Y         Number       Thứ tự sắp xếp hiển thị của menu item
                                              trong cùng cấp (giá trị \>= 0, mặc
                                              định 0).

  4         Loại       Y         Select       Chọn phân loại nguồn: \*\*Page\*\*
                                              (Trang liên kết), \*\*Category\*\*
                                              (Chuyên mục bài viết), hoặc
                                              \*\*Link\*\* (URL tự do).

  5         Vị trí     Y         Select       Chọn khu vực hiển thị menu:
                                              \*\*Header\*\* (Đầu trang),
                                              \*\*Footer\*\* (Chân trang), hoặc
                                              \*\*Sidebar\*\* (Cột bên).

  6         Kiểu hiển  N         Select       Chọn kiểu bố cục khi rê chuột: \*\*Mặc
            thị                               định\*\*, \*\*Mega Menu\*\*, hoặc
                                              \*\*Dropdown\*\*.

  7         Ngôn ngữ   N         Select       Lựa chọn ngôn ngữ hiển thị: Tiếng Việt
                                              hoặc English.

  8         Target     Y         Select       Chọn cơ chế mở liên kết:
                                              \*\*\_self\*\* (Mở ở tab hiện tại)
                                              hoặc \*\*\_blank\*\* (Mở ở tab mới).

  9         Icon       N         File         Tải lên file ảnh icon (JPG, PNG, GIF,
                                              WEBP, SVG, tối đa 10MB) đi kèm nhãn
                                              hiển thị menu.

  10        Đường dẫn  N (loại   Text         URL liên kết đích khi người dùng click
            URL        Link)                  (chỉ bắt buộc khi chọn Loại là Link).
  ----------------------------------------------------------------------------------

### 5. Banner

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng đăng tải hình ảnh
                       banner (Desktop và Mobile), thiết lập thứ tự hiển
                       thị, cấu hình trang áp dụng hiển thị, link chuyển
                       hướng và hẹn giờ hiển thị banner.

  **Actor**            Quản trị viên hệ thống, Biên tập viên.

  **Trigger**          Người dùng chọn menu \"Banner\" và nhấp chọn \"+ Tạo
                       Banner mới\" hoặc nút \"Sửa\" trên danh sách banner.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào hệ thống quản
                       trị.

  **Post-condition**   Banner được lưu trữ thành công và tự động hiển thị
                       trong Slider ngoài website theo đúng lịch và trang đã
                       cài đặt.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu \"Banner\".

- **Bước 2:** Hệ thống hiển thị danh sách các Banner hiện có kèm bộ lọc
  Tìm theo tên, Trạng thái (Đang chạy, Hết hạn) và bảng dữ liệu.

- **Bước 3:** Người dùng nhấn nút \"+ Tạo Banner mới\" hoặc chọn \"Sửa\"
  một banner.

- **Bước 4:** Hệ thống ẩn danh sách và hiển thị Form tạo/chỉnh sửa
  Banner.

- **Bước 5:** Người dùng nhập các thông tin: Tên banner, Thứ tự hiển
  thị, tải lên ảnh Desktop, tải lên ảnh Mobile, nhập Link URL đích, chọn
  Target, chọn Trang áp dụng và cấu hình Khoảng thời gian hiển thị.

- **Bước 6:** Người dùng nhấn nút \"Lưu Banner\" (hoặc chọn \"Hủy\" để
  quay lại).

- **Bước 7:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào
  database và cập nhật slider ngoài website.

**b. Quy tắc nghiệp vụ (Business Rules):**

  -----------------------------------------------------------------------
  **Rule**    **Mô tả**
  ----------- -----------------------------------------------------------
  **BR01**    Để đảm bảo hiển thị tối ưu trên đa thiết bị (Responsive),
              hệ thống **bắt buộc người dùng tải lên cả 2 phiên bản
              hình ảnh** (Desktop và Mobile). Kích thước khuyến nghị
              tự động thay đổi linh hoạt theo **Trang áp dụng**:
              - **Trang chủ / Khuyến mãi**: Ảnh Desktop (1920xauto) và Ảnh Mobile (768xauto).
              - **Trang Checkout (Đăng ký & Thanh toán)**: Ảnh Desktop Checkout (1200×160 hoặc 1200×300px) và Ảnh Mobile Checkout (768×200 hoặc 768×400px). Banner tạo tại đây sẽ tự động đồng bộ (sync) sang màn *Cấu hình Quy tắc Checkout* để phân bổ vị trí Header Banner hoặc Footer Banner theo từng gói cước.

  **BR02**    Tên Banner, Thứ tự hiển thị, Target là các trường bắt buộc
              nhập.

  **BR03**    Banner chỉ hiển thị ngoài website khi thời gian hiện tại
              nằm trong khoảng "Thời gian hiển thị" được cấu hình (nếu
              có cài đặt lịch) và trạng thái là hoạt động.

  **BR04**    **Kiểm tra trùng số Thứ tự hiển thị (Check trùng thứ tự)**:
              Khi nhập/chỉnh sửa trường `Thứ tự hiển thị` (áp dụng cho cả Banner và Blocks), hệ thống sẽ tự động kiểm tra (validate) trùng lặp với các bản ghi đang ở trạng thái Hoạt động trong cùng trang/khu vực áp dụng. Nếu phát hiện số thứ tự bị trùng, hệ thống hiển thị thông báo cảnh báo trùng thứ tự hoặc hỗ trợ tự động đẩy thứ tự các bản ghi phía sau lùi xuống 1 đơn vị.
  -----------------------------------------------------------------------

**c. Bảng mô tả trường thông tin (Screen Description):**

![](scratch/media/media/image6.png){width="6.5in"
height="3.4270833333333335in"}

  ---------------------------------------------------------------------------------
  **STT**   **Tên      **Bắt     **Format**     **Mô tả**
            trường**   buộc?                    
                       (Y/N)**                  
  --------- ---------- --------- -------------- -----------------------------------
  1         Tên Banner Y         Text           Tên banner dùng để quản lý nội bộ
                                                trong CMS (VD: "Banner Hero Trang
                                                Chủ T5").

  2         Thứ tự     Y         Number         Thứ tự hiển thị trong slider/danh sách
            hiển thị                            (giá trị >= 1, mặc định 1). Hệ thống
                                                tự động check trùng số thứ tự.

  3         Ảnh        Y         File           Upload file ảnh banner (PNG/JPG/WebP)
            Desktop                             cho máy tính. Kích thước tự động thay
                                                đổi theo Trang áp dụng: Trang chủ/Khuyến mãi
                                                (1920xauto), Trang Checkout (1200×160
                                                hoặc 1200×300px).

  4         Ảnh Mobile Y         File           Upload file ảnh banner (PNG/JPG/WebP)
                                                cho điện thoại. Kích thước tự động thay
                                                đổi theo Trang áp dụng: Trang chủ/Khuyến mãi
                                                (768xauto), Trang Checkout (768×200
                                                hoặc 768×400px).

  5         Link URL   N         Text           Đường dẫn điều hướng khi người dùng
            Đích                                nhấp vào banner (VD:
                                                /khuyen-mai-thang-5).

  6         Target     Y         Select         Cơ chế mở link điều hướng:
                                                **_self** (Mở ở tab hiện tại)
                                                hoặc **_blank** (Mở ở tab
                                                mới).

  7         Trang áp   N         Multi-select   Chọn một hoặc nhiều trang sẽ hiển
            dụng                                thị banner này (VD: Trang chủ,
                                                Trang khuyến mãi, Trang Checkout).

  8         Thời gian  N         DateTime Range Thiết lập ngày/giờ bắt đầu và kết
            hiển thị                            thúc hiển thị banner (để trống nếu
                                                muốn chạy liên tục không hẹn giờ).
  ---------------------------------------------------------------------------------

\-\--

### 6. Popup

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng thiết lập và cấu hình
                       các Popup quảng cáo nổi (Modal popup), cài đặt thời
                       gian chạy, kênh bán áp dụng, tải ảnh và cấu hình link
                       điều hướng kèm UTM Tracking.

  **Actor**            Quản trị viên hệ thống, Biên tập viên.

  **Trigger**          Người dùng chọn menu \"Quản lý Popup\" và chọn \"+
                       Tạo Popup mới\" hoặc nút \"Sửa\" trên danh sách
                       popup.

  **Pre-condition**    Người dùng đã đăng nhập thành công vào hệ thống.

  **Post-condition**   Cấu hình popup được lưu thành công, tự động hiển thị
                       ngoài website đúng kênh bán và thời gian chỉ định.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

- **Bước 1:** Người dùng truy cập CMS -\> chọn menu \"Quản lý Popup\".

- **Bước 2:** Hệ thống hiển thị danh sách Popup (Tên popup, Vị trí hiển
  thị, Kênh áp dụng, Thời gian chạy, Trạng thái) kèm bộ lọc và phân
  trang.

- **Bước 3:** Người dùng nhấn nút \"+ Tạo Popup mới\" hoặc chọn \"Sửa\"
  một popup.

- **Bước 4:** Hệ thống hiển thị Form cấu hình Popup, góc trên bên phải
  có nút Toggle để Bật/Tắt trạng thái hoạt động nhanh.

- **Bước 5:** Người dùng nhập các thông tin: Tên popup, Vị trí hiển thị,
  Thời gian bắt đầu, Thời gian kết thúc, chọn các Kênh áp dụng
  (Checkboxes), tải lên Ảnh Desktop, tải lên Ảnh Mobile, nhập URL đích
  khi click, nhập các tham số UTM (Source, Medium, Campaign).

- **Bước 6:** Hệ thống hiển thị trực quan liên kết URL cuối cùng có chứa
  các tham số UTM tracking (Live Preview URL).

- **Bước 7:** Người dùng nhấn nút \"Lưu Popup\".

- **Bước 8:** Hệ thống thực hiện validate dữ liệu, lưu thông tin vào
  database và cập nhật hiển thị.

**b. Quy tắc nghiệp vụ (Business Rules):**

  -----------------------------------------------------------------------
  **Rule**    **Mô tả**
  ----------- -----------------------------------------------------------
  **BR01**    **Trải nghiệm người dùng (UX):** Tại một thời điểm, trên
              một trang chỉ cho phép kích hoạt tối đa \*\*01 Popup hoạt
              động\*\* để tránh gây phiền hà cho khách hàng.

  **BR02**    Tên Popup, Vị trí hiển thị, Thời gian bắt đầu/kết thúc,
              Kênh áp dụng, Ảnh Desktop, Ảnh Mobile, URL đích là bắt buộc
              nhập.

  **BR03**    Hệ thống tự động ghép các tham số UTM (Source, Medium,
              Campaign) vào URL đích để tạo liên kết tracking đồng bộ khi
              người dùng click vào popup.

  **BR04**    Hình ảnh Desktop bắt buộc tỷ lệ 16:9 (tối đa 1MB), hình ảnh
              Mobile bắt buộc tỷ lệ 1:1 hoặc dạng đứng (tối đa 1MB).
  -----------------------------------------------------------------------

**c. Bảng mô tả trường thông tin (Screen Description):**

  --------------------------------------------------------------------------------
  **STT**   **Tên       **Bắt     **Format**   **Mô tả**
            trường**    buộc?                  
                        (Y/N)**                
  --------- ----------- --------- ------------ -----------------------------------
  1         Trạng thái  Y         Toggle       Bật/Tắt trạng thái hoạt động của
                                  Switch       popup (Bật/Tắt).

  2         Tên Popup   Y         Text         Tên popup dùng quản trị nội bộ (VD:
                                               \"Flash Sale T5\").

  3         Vị trí hiển Y         Select       Nơi hiển thị popup: \*\*Trang
            thị                                chủ\*\*, \*\*Theo URL chỉ định\*\*,
                                               \*\*Theo Gói bán cụ thể (Trang
                                               Checkout)\*\*, \*\*Global\*\*.

  4         Thời gian   Y         DateTime     Ngày và giờ bắt đầu cho phép popup
            bắt đầu                            xuất hiện ngoài website.

  5         Thời gian   Y         DateTime     Ngày và giờ kết thúc chương trình
            kết thúc                           popup.

  6         Kênh áp     Y         Checkbox     Tick chọn các kênh bán áp dụng (VD:
            dụng                  List         tongdaiwifi, hifpt, fpt.vn,
                                               fptshop).

  7         Ảnh Desktop Y         File         Tải lên ảnh popup định dạng JPG/PNG
                                               cho máy tính (tỷ lệ 16:9, tối đa
                                               1MB).

  8         Ảnh Mobile  Y         File         Tải lên ảnh popup định dạng JPG/PNG
                                               cho điện thoại/bottom sheet (tỷ lệ
                                               1:1 hoặc dọc, tối đa 1MB).

  9         URL đích    Y         Text         Đường dẫn chuyển hướng khi khách
                                               hàng nhấp vào popup.

  10        UTM Source  N         Text         Tham số nguồn quảng cáo (VD:
                                               popup_banner).

  11        UTM Medium  N         Text         Tham số phương tiện quảng cáo (VD:
                                               homepage).

  12        UTM         N         Text         Tham số tên chiến dịch quảng cáo
            Campaign                           (VD: flashsale_t5).
  --------------------------------------------------------------------------------

\-\--

### 7. FAQ

  -------------------- -----------------------------------------------------
  **Description**      Chức năng cho phép người dùng thiết lập ngân hàng các
                       câu hỏi thường gặp (FAQ) và phân loại theo từng danh
                       mục hỗ trợ cước phí, kỹ thuật, thủ tục.

  **Actor**            Biên tập viên, Người duyệt, Admin.

  **Trigger**          Người dùng chọn menu \"FAQ\" và click \"+ Tạo Câu hỏi
                       (FAQ)\" hoặc \"+ Tạo Danh Mục\".

  **Pre-condition**    Người dùng đã đăng nhập thành công vào hệ thống.

  **Post-condition**   Câu hỏi FAQ được lưu thành công vào thư viện dùng
                       chung, sẵn sàng để gán hiển thị lên các trang hoặc
                       blocks.
  -------------------- -----------------------------------------------------

**a. Workflow & Diễn giải các bước thực hiện:**

Module FAQ gồm **2 Tab chức năng chính**: 1. Câu hỏi (FAQ), 2. Danh mục
(Categories).

- **Tạo mới/Chỉnh sửa Danh mục FAQ:**

  - Người dùng truy cập tab \"Danh mục\", nhấn \"+ Thêm Danh Mục\" hoặc
    \"Sửa\".

  - Nhập các trường: Tên danh mục (\*), Thứ tự hiển thị, Ngôn ngữ,
    Checkbox trạng thái hoạt động.

  - Nhấn \"Lưu Danh mục\".

- **Tạo mới/Chỉnh sửa Câu hỏi FAQ:**

  - Người dùng truy cập tab \"Danh sách Câu hỏi\", nhấn \"+ Thêm Câu hỏi
    (FAQ)\" hoặc \"Sửa\".

  - Nhập các thông tin: Chọn Danh mục (\*), Ngôn ngữ, Câu hỏi (\*), Câu
    trả lời (Rich Text) (\*), Thứ tự hiển thị, Checkbox trạng thái hoạt
    động.

  - Nhấn \"Lưu Câu hỏi\".

**b. Quy tắc nghiệp vụ (Business Rules):**

- Danh mục, Câu hỏi và Câu trả lời là các trường bắt buộc nhập, không
  được để trống khi thực hiện lưu.

- Hệ thống hỗ trợ tìm kiếm nhanh theo câu hỏi hoặc danh mục để biên tập
  viên dễ dàng tra cứu, tránh tạo câu hỏi trùng lặp trong thư viện dùng
  chung.

**c.1 Bảng mô tả trường thông tin Câu hỏi (FAQ Form):**

![](scratch/media/media/image1.png){width="6.5in"
height="3.1145833333333335in"}

  --------------------------------------------------------------------------------
  **STT**   **Tên       **Bắt     **Format**   **Mô tả**
            trường**    buộc?                  
                        (Y/N)**                
  --------- ----------- --------- ------------ -----------------------------------
  1         Danh mục    Y         Select       Chọn chủ đề liên quan để phân nhóm
                                               FAQ (Thanh toán cước, Khắc phục sự
                                               cố, Chính sách & Thủ tục\...).

  2         Ngôn ngữ    N         Select       Ngôn ngữ hiển thị câu hỏi: Tiếng
                                               Việt hoặc English.

  3         Câu hỏi     Y         Text         Nội dung câu hỏi thường gặp (VD:
                                               \"Làm thế nào để thanh toán cước
                                               trực tuyến?\").

  4         Câu trả lời N         Rich Text    Nội dung hướng dẫn giải quyết chi
                                               tiết, hỗ trợ định dạng văn bản và
                                               chèn link.

  5         Thứ tự hiển N         Number       Thứ tự sắp xếp câu hỏi khi hiển thị
            thị                                trên giao diện (mặc định 0).

  6         Trạng thái  N         Checkbox     Tick chọn để cho phép câu hỏi được
            hoạt động                          hiển thị và hoạt động ngoài
                                               website.
  --------------------------------------------------------------------------------

**c.2 Bảng mô tả trường thông tin Danh mục (Category):**

![](scratch/media/media/image3.png){width="6.5in"
height="3.1145833333333335in"}

  --------- ----------- --------- ------------ -----------------------------------
  **STT**   **Tên       **Bắt     **Format**   **Mô tả**
            trường**    buộc?                  
                        (Y/N)**                

  1         Tên Danh    Y         Select       Nhập tên danh mục chủ đề.
            mục                                

  2         Ngôn ngữ    N         Select       Ngôn ngữ hiển thị câu hỏi: Tiếng
                                               Việt hoặc English.

  3         Thứ tự      N         Number       Thứ tự sắp xếp câu hỏi khi hiển thị
                                               trên giao diện (mặc định 0).

  4         Trạtg thái  N         Checkbox     Tick chọn để cho phép danh mục được
            hoạt động                          hiển thị và hoạt động ngoài
                                               website.
  --------- ----------- --------- ------------ -----------------------------------

\-\--

# IV. CÁC YÊU CẦU PHI CHỨC NĂNG

# V. PHỤ LỤC THAM CHIẾU

- **Link figma tham chiếu:** NA

- **Tài liệu tham khảo hệ thống:** NA
