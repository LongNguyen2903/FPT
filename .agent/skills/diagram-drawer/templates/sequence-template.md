# Sơ đồ Sequence Diagram: {{TÊN_SƠ_ĐỒ}}

{{MÔ_TẢ_NGẮN_GỌN_LUỒNG_HOẠT_ĐỘNG}}

![Sơ đồ Sequence Diagram](./{{tên-sơ-đồ}}.png)

## Mã nguồn Mermaid (Dùng để render ảnh)
```mermaid
%%{init: { 'theme': 'dark' } }%%
sequenceDiagram
    autonumber
    participant [Thực thể 1] as "[Tên hiển thị 1]"
    participant [Thực thể 2] as "[Tên hiển thị 2]"

    Note over [Thực thể 1], [Thực thể 2]: [TÊN PHÂN CẢNH]
    [Thực thể 1]->>[Thực thể 2]: "1. [Mô tả hành động]"
    [Thực thể 2]-->>[Thực thể 1]: "2. [Mô tả phản hồi]"
```

## Giải thích luồng nghiệp vụ chi tiết

### 1. {{Phân đoạn nghiệp vụ 1}}
*   **Bước 1 - 2:** {{Giải thích chi tiết hoạt động của các bước trong phân đoạn 1}}
*   **Bước 3 - 4:** {{Giải thích chi tiết hoạt động tiếp theo}}

### 2. {{Phân đoạn nghiệp vụ 2}}
*   **Bước 5 - 6:** {{Giải thích chi tiết hoạt động của các bước trong phân đoạn 2}}
*   **Bước 7 - 8:** {{Giải thích chi tiết hoạt động tiếp theo}}
