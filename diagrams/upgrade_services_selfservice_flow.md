# Sơ đồ Sequence Diagram: Quy trình nâng cấp dịch vụ tự phục vụ (Self-service) ISC

Dưới đây là sơ đồ trực quan luồng nâng cấp dịch vụ tự phục vụ cho 5 nhóm dịch vụ chính (Internet, FPT Play, Camera, Combo, Ultra Fast).

```mermaid
sequenceDiagram
    autonumber
    actor Customer as "Khách hàng"
    participant Channel as "Kênh Khách hàng (HiFPT / Web Portal)"
    participant Billing as "Billing Hub"
    participant SR as "SR System (System)"
    participant Tech as "TIN/PNC (Kỹ thuật)"

    Note over Customer, Channel: Bước 1: Nhận diện & Xác thực
    Customer->>+Channel: "Truy cập trang nâng cấp & nhập SĐT"
    Channel->>+Billing: "API GetContractInfo (Lấy thông tin hợp đồng theo SĐT)"
    Billing-->>-Channel: "Trả về thông tin HĐ hiện tại"
    alt Không tìm thấy HĐ hoạt động bình thường
        Channel->>SR: "API CreateLead (Đẩy lead đứt gãy sang SR)"
        Channel-->>Customer: "Hiển thị thông báo hỗ trợ & Kết thúc"
    else Tìm thấy HĐ hợp lệ
        Channel->>+Billing: "API ValidateContractEligibility (Kiểm tra điều kiện nâng cấp)"
        Billing-->>-Channel: "Trả về kết quả kiểm tra"
        alt Hợp đồng không đủ điều kiện (nợ cước, tạm khóa...)
            Channel-->>Customer: "Hiển thị Popup 'Không đủ điều kiện' & Nút Đóng (Hotline 19006600)"
        else Hợp đồng đủ điều kiện
            Channel-->>Customer: "Hiển thị danh sách HĐ & Dịch vụ đang dùng"
        end
    end
    deactivate Channel

    Note over Customer, Channel: Bước 2: Chọn dịch vụ & Xem gợi ý
    Customer->>+Channel: "Chọn HĐ & Chọn Tab dịch vụ muốn nâng cấp"
    Channel->>+Billing: "API GetUpgradePolicy (Lấy chính sách gợi ý & thiết bị)"
    Billing-->>-Channel: "Trả về danh sách gói cước gợi ý nâng cấp"
    alt Không tìm thấy chính sách phù hợp
        Channel-->>Customer: "Hiển thị Popup 'Không tìm thấy chính sách phù hợp' [Đóng] / [Tư vấn thêm]"
        opt Khách hàng bấm [Tư vấn thêm]
            Customer->>Channel: "Bấm 'Tư vấn thêm'"
            Channel->>SR: "API CreateLead (Đẩy lead KHTN sang SR)"
            SR-->>Channel: "Xác nhận tạo lead thành công"
            Channel-->>Customer: "Thông báo ghi nhận yêu cầu tư vấn thành công"
        end
    else Tìm thấy chính sách phù hợp
        Channel-->>Customer: "Hiển thị gói cước gợi ý, so sánh gói cũ/mới"
    end
    deactivate Channel

    Note over Customer, Channel: Bước 3: Xem chi tiết & Chốt cước
    Customer->>+Channel: "Chọn gói cước mới & Bấm 'Tiến hành nâng cấp'"
    Channel->>+Billing: "API CalculateBillingDiff (Tính cước chênh lệch & khấu trừ)"
    Note over Billing: Tính cước theo các TH Trả trước/Trả sau & Chu kỳ sử dụng
    Billing-->>-Channel: "Trả về chi tiết cước cần thanh toán ngay"
    Channel-->>Customer: "Hiển thị trang thanh toán & chi tiết chốt cước"
    deactivate Channel

    Note over Customer, Channel: Bước 4: Thanh toán & Xử lý hậu kỳ
    Customer->>+Channel: "Chọn cổng thanh toán Online & Xác nhận thanh toán"
    Channel->>Channel: "Xử lý giao dịch thanh toán qua cổng"
    alt Thanh toán thành công
        Channel->>+Billing: "API ConfirmUpgradePayment (Xác nhận thanh toán đơn hàng)"
        Billing->>+SR: "API CreateServiceChangeSR (Tạo SR Chuyển dịch vụ)"
        SR-->>-Billing: "Phản hồi kết quả tạo SR thành công"
        
        alt Ký PLHĐ - Không chính chủ (SĐT đăng nhập != SĐT chủ HĐ)
            Billing->>Customer: "Gửi SMS chứa OTP/Shortlink để ký PLHĐ điện tử"
            Customer->>Billing: "Nhập OTP / Xác nhận ký PLHĐ qua Shortlink"
        else Ký PLHĐ - Chính chủ (Trùng SĐT)
            Billing->>Customer: "Hệ thống tự động ký PLHĐ & Gửi SMS thông báo"
        end

        opt Gói cước mới có đi kèm Thiết bị (Modem Wi-Fi 6 / AP mua thêm)
            Billing->>Tech: "Tự động tạo Phiếu thi công (PTC) bàn giao thiết bị"
            Tech->>Customer: "Liên hệ hẹn lịch & Triển khai lắp đặt tại nhà"
        end

        Billing-->>-Channel: "Phản hồi hoàn tất quy trình nâng cấp"
        Channel-->>-Customer: "Hiển thị màn hình thành công & Kích hoạt gói mới"
    else Thanh toán thất bại
        Channel->>SR: "API CreateLead (Đẩy lead đứt gãy sang SR)"
        Channel-->>Customer: "Thông báo lỗi thanh toán & Cần hỗ trợ"
    end
```

## Bảng ký hiệu sử dụng trong sơ đồ

| Ký hiệu | Ý nghĩa |
|----------|---------|
| `participant` | Thành phần hệ thống (hộp chữ nhật) |
| `actor` | Người dùng bên ngoài (hình người) |
| `──▶` (`->>`) | Gọi đồng bộ (chờ phản hồi) |
| `╌╌▶` (`-->>`) | Phản hồi / Return |
| `──▷` (`-)`) | Gọi bất đồng bộ |
| `↻` (`A->>A`) | Tự gọi nội bộ |
| `▮ activate/deactivate` | Hộp kích hoạt (đang xử lý) |
| `alt/else/end` | Rẽ nhánh điều kiện |
| `opt/end` | Xử lý tùy chọn |
| `Note over` | Dải phân cảnh / Ghi chú |

## Giải thích luồng nghiệp vụ chi tiết

### 1. Phân đoạn 1: Xác thực & Lấy thông tin
*   **Bước 1 - 3**: Khách hàng cung cấp SĐT để hệ thống kiểm tra danh sách hợp đồng Billing đang liên kết. Billing Hub trả về thông tin hợp đồng cùng gói cước hiện tại.
*   **Bước 4 - 6**: Nếu không có HĐ hoạt động bình thường, hệ thống tự động lưu thông tin lead đứt gãy sang SR để nhân viên kinh doanh liên hệ hỗ trợ thủ công.
*   **Bước 7 - 10 (Edge Case từ HiFPT 9.5)**: Nếu tìm thấy HĐ hợp lệ, gọi API kiểm tra điều kiện nâng cấp. Trường hợp hợp đồng không đủ điều kiện (nợ cước, tạm khóa...), hiển thị popup cảnh báo là không đủ điều kiện nâng cấp.

### 2. Phân đoạn 2: Chọn dịch vụ & Gợi ý chính sách
*   **Bước 11 - 14**: Khách hàng lựa chọn hợp đồng và tab dịch vụ muốn nâng cấp. Billing Hub trả về danh sách chính sách gợi ý phù hợp dựa trên thuật toán gợi ý (gói cước đề xuất, thiết bị đi kèm).
*   **Bước 15 - 22**: Nếu không tìm thấy chính sách phù hợp, hệ thống hiển thị popup cho phép gửi yêu cầu tư vấn thêm (tạo lead sang SR). Nếu tìm thấy, hiển thị danh sách so sánh gói mới và gói cũ.

### 3. Phân đoạn 3: Chốt cước & Khấu trừ
*   **Bước 23 - 26**: Khi khách hàng đồng ý nâng cấp, Billing Hub thực hiện chốt cước tạm tính và tính toán chênh lệch. Số tiền chênh lệch sẽ được khấu trừ vào tài khoản trả trước hoặc tính dồn vào bill cuối tháng tùy thuộc vào hình thức thanh toán (Trả trước/Trả sau) của hợp đồng.

### 4. Phân đoạn 4: Thanh toán & Ký PLHĐ
*   **Bước 27 - 38**: Khách hàng thanh toán trực tuyến số tiền chốt cước (nếu có). Sau khi thành công, Billing Hub tạo SR chuyển dịch vụ để hệ thống kích hoạt tự động. Phụ lục hợp đồng được ký điện tử (tự động với chính chủ, qua SMS OTP/Shortlink với không chính chủ). Đối với các gói đi kèm Modem Wi-Fi 6 hoặc bộ phát AP, hệ thống tự động tạo phiếu thi công để kỹ thuật TIN/PNC bàn giao tại nhà.
