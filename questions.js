// Ngân hàng 10 đề thi thử Giữa kỳ IT3011 - Cấu trúc dữ liệu & Thuật toán (330 câu hỏi có lời giải)
const EXAMS_DATA = [
  {
    "id": 1,
    "title": "Đề số 01 — Tổng hợp Chuẩn cấu trúc Giữa kỳ IT3011",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 8, 3, 5, 11, 4, 2. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return 0;\n    return h.next.key + eval(h.next.next);\n}",
        "options": [
          "12",
          "16",
          "21",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí chẵn (tính từ 1): 3 + 11 + 2 = 16."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int s = 0;\n    for (int i = 1; i <= n; i++)\n        s += i * i;\n    return s;\n}",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Vòng lặp chạy n lần từ 1 đến n, mỗi bước tốn O(1) nên độ phức tạp là O(n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "Q là một hàng đợi ban đầu rỗng với hai thao tác Q.PUSH(x) và Q.POP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // Q là hàng đợi (FIFO) ban đầu rỗng\n    for (int i = 1; i <= 8; i++) Q.PUSH(i * 2);\n    for (int j = 1; j <= 3; j++) Q.POP();\n    Q.PUSH(99);\n    int res = Q.POP();\n    print(res);\n}",
        "options": [
          "6",
          "8",
          "99",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Ban đầu Q chứa [2, 4, 6, 8, 10, 12, 14, 16]. Sau 3 lần POP đầu hàng đợi, phần tử đầu tiếp theo là 8. Lệnh PUSH(99) đưa 99 vào cuối hàng đợi nên POP tiếp theo lấy ra 8."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự trước (Preorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "2, 3, 4, 5, 7, 9, 10, 12, 15, 18, 20, 25",
          "10, 4, 2, 3, 7, 5, 9, 15, 12, 20, 18, 25",
          "3, 2, 5, 9, 7, 4, 12, 18, 25, 20, 15, 10",
          "25, 18, 20, 12, 15, 9, 5, 7, 3, 2, 4, 10"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự trước (Preorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 10, ta thu được dãy: 10, 4, 2, 3, 7, 5, 9, 15, 12, 20, 18, 25."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 3, 7, 1, 9, 4, 6. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "3, 7, 1, 9, 4, 6",
          "6, 4, 9, 1, 7, 3",
          "7, 1, 9, 4, 6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 6, 4, 9, 1, 7, 3."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Mức (hay độ sâu) của mỗi nút trên cây nhị phân được định nghĩa bằng độ dài đường đi từ gốc đến nút đó cộng 1 (mức của nút gốc bằng 1). Hỏi trên một cây nhị phân có thể có tối đa bao nhiêu nút ở độ sâu bằng 3?",
        "code": "",
        "options": [
          "2",
          "4",
          "5",
          "8"
        ],
        "answer": 1,
        "explanation": "Với mức gốc là 1, số nút tối đa ở mức d là 2^(d-1). Tại d = 3, số nút tối đa là 2^(3-1) = 4."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Độ phức tạp thời gian của thuật toán Quy hoạch động giải bài toán Dãy con chung dài nhất (LCS) của hai xâu độ dài n và m là bao nhiêu?",
        "code": "",
        "options": [
          "O(n + m)",
          "O(n · m)",
          "O(2^(n+m))",
          "O(n · m · log(n+m))"
        ],
        "answer": 1,
        "explanation": "Bảng quy hoạch động S(i, j) có kích thước (n+1) × (m+1), mỗi ô tính trong O(1) => độ phức tạp O(n · m) (Slide tuần 6)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 3, 1, 2. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "14",
          "16",
          "18",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 16."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [12, 25, 8, 19, 30] (chỉ số từ 0 đến 4). Hỏi lời gọi hàm cal(a, 0, 4) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "82",
          "64",
          "94",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[4]: 12 + 25 + 8 + 19 + 30 = 94."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "120",
          "130",
          "140",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 2 + 4 + 7 + 10 + 15 + 20 = 130."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Trong sơ đồ thuật toán Nhánh và cận (Branch and Bound) giải bài toán tìm cực tiểu (min) với f* là kỷ lục tốt nhất hiện tại và g là cận dưới của nhánh đang xét, điều kiện để cắt tỉa (không phát triển tiếp nhánh đó) là gì?",
        "code": "",
        "options": [
          "g < f*",
          "g ≥ f*",
          "g == 0",
          "g ≤ f* / 2"
        ],
        "answer": 1,
        "explanation": "Với bài toán tìm min, nếu cận dưới g ≥ f* thì mọi phương án mở rộng từ nhánh này đều không thể tốt hơn f*, nên ta cắt bỏ (Slide tuần 4)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 3 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "7",
          "8",
          "5"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 3, số bước là 2^3 - 1 = 7."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nHỏi lời gọi hàm cal(20, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (10) có d = 1. Đi theo đường đi từ gốc xuống nút 20 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int s = 0, i = 1;\n    while (s <= n) {\n        s += i;\n        i++;\n    }\n    return i;\n}",
        "options": [
          "O(log n)",
          "O(√n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 1,
        "explanation": "Sau k bước, s = 1 + 2 + ... + k = k(k+1)/2. Điều kiện dừng k(k+1)/2 > n ⇔ k ≈ √(2n) => O(√n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 4 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "17",
          "30",
          "21",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 4. Tổng các lá trong cây con này bằng 17."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 8 nút với dãy khóa: 2, 4, 6, 8, 10, 12, 14, 16. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "8",
          "10",
          "12",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 10."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(18, 12) trả về giá trị nào?",
        "code": "int F(int a, int b) {\n    if (a == b) return a;\n    if (a > b) return F(a - b, b);\n    else return F(a, b - a);\n}",
        "options": [
          "1",
          "6",
          "6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Thuật toán Euclid bằng phép trừ tìm ước chung lớn nhất ƯCLN(18, 12) = 6."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [12, 25, 8, 19, 30] (chỉ số 0 đến 4). Hỏi lời gọi hàm F(a, 0, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return -1000000;\n    if (i == j) return a[i];\n    int m = (i + j) / 2;\n    int t1 = F(a, i, m);\n    int t2 = F(a, m + 1, j);\n    return (t1 > t2) ? t1 : t2;\n}",
        "options": [
          "8",
          "30",
          "8",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia đôi mảng thành [i..m] và [m+1..j] rồi lấy giá trị lớn hơn giữa hai nửa => tìm phần tử lớn nhất của mảng là 30."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nHỏi lời gọi hàm cal(3, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k == d) return r.key;\n    return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "38",
          "41",
          "45",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút nằm ở đúng mức d = 3 (tính gốc mức 1). Tổng bằng 41."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 1, 5, 8, 12 và h2 trỏ đến đầu danh sách có khóa: 2, 6, 10, 15. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "1, 5, 8, 12, 2, 6, 10, 15",
          "1, 2, 5, 6, 8, 10, 12, 15",
          "15, 12, 10, 8, 6, 5, 2, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 2, 5, 6, 8, 10, 12, 15."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Trong cài đặt hàng đợi bằng danh sách liên kết đơn (Slide tuần 8) chỉ dùng con trỏ head, trong đó enqueue chèn vào đầu danh sách và dequeue xóa ở cuối danh sách, độ phức tạp của dequeue là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Để xóa phần tử cuối cùng của danh sách liên kết đơn, hàm dequeue phải dùng vòng lặp while (p->next->next != NULL) duyệt qua n-1 phần tử => O(n)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-5, 4, -2, 6, -1, 3, -4]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "10",
          "13",
          "13"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-5, 4, 2, 8, 7, 10, 6]. Giá trị lớn nhất trong mảng S là 10."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[1,4], [3,5], [0,6], [5,7], [3,9], [5,9], [6,10], [8,11]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "8"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 3 đoạn: [1,4], [5,7], [8,11]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi sử dụng thuật toán đệ quy quay lui liệt kê tất cả các xâu nhị phân độ dài n = 4 theo thứ tự từ điển (thử v từ 0 đến 1), xâu nhị phân thứ 5 được sinh ra (tính từ 1) là xâu nào?",
        "code": "",
        "options": [
          "0011",
          "0100",
          "0101",
          "0010"
        ],
        "answer": 1,
        "explanation": "Xâu thứ k trong thứ tự từ điển (tính từ 1) tương ứng biểu diễn nhị phân 4 bit của (k - 1) = 4 => 0100."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"([{}])([])\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"([{}])([])\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 4, 5, 2, 6, 7, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 4, 2, 5, 1, 6, 3, 7. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 3."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = n; i > 0; i /= 2)\n        for (int j = 0; j < i; j++)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Tổng số lần lặp là n + n/2 + n/4 + ... + 1 < 2n => độ phức tạp tuyến tính O(n) (không phải O(n log n))."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 5 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 3 thành phố (1 → u₂ → ... → u_3) với tổng chi phí là σ = 14. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 3. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "20",
          "23",
          "26",
          "23"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 5 - 3 + 1 = 3 chặng nữa, mỗi chặng tối thiểu c_min = 3. Vậy g = σ + (n - k + 1)·c_min = 14 + 3×3 = 23."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm tính lũy thừa nhanh Pow(x, n) bằng phương pháp chia để trị:\nHỏi khi thực hiện lời gọi Pow(2, 10), hàm Pow được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int Pow(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 != 0) return x * Pow(x, n - 1);\n    int res = Pow(x, n / 2);\n    return res * res;\n}",
        "options": [
          "5",
          "6",
          "7",
          "10"
        ],
        "answer": 1,
        "explanation": "Theo dõi chuỗi tham số n giảm dần đến 0: mỗi bước lẻ trừ 1, mỗi bước chẵn chia đôi. Tổng số lần gọi hàm Pow là 6."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nKý hiệu r là con trỏ trỏ đến nút 15 trên cây T. Hỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    int h1 = cal(r.leftChild);\n    int h2 = cal(r.rightChild);\n    return max(h1, h2) + 1;\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính chiều cao (số nút trên đường đi dài nhất tới lá) của cây con gốc 15, kết quả bằng 3."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 10\n• Nút 10 có con trái là 4 và con phải là 15\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 15 có con trái là 12 và con phải là 20\n• Nút 2 có con phải là 3\n• Nút 7 có con trái là 5 và con phải là 9\n• Nút 20 có con trái là 18 và con phải là 25\nXét hàm cal bên dưới. Hãy điền giá trị số nguyên chính xác mà lời gọi hàm cal(3, r, 1) trả về:",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k <= d)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    else\n        return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "answer": "101",
        "accepted": [
          "101"
        ],
        "explanation": "Hàm cộng khóa của tất cả các nút có mức d ≥ 3 (tính nút gốc mức 1). Tổng khóa các nút ở mức 3 và mức 4 trên cây T là 101."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Khó",
        "text": "Áp dụng thuật toán Quy hoạch động tìm độ dài dãy con chung dài nhất (LCS - Slide tuần 6) cho hai xâu ký tự X = \"abcb\" và Y = \"bdcab\". Hãy điền độ dài của dãy con chung dài nhất (một số nguyên):",
        "code": "",
        "answer": "3",
        "accepted": [
          "3"
        ],
        "explanation": "Lập bảng quy hoạch động S(i, j) cho X = \"abcb\" và Y = \"bdcab\", độ dài dãy con chung dài nhất thu được là 3."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Cho đoạn mã C sau đây. Hãy điền giá trị số nguyên chính xác của biến đếm/biến kết quả sau khi đoạn mã thực thi xong:",
        "code": "int cnt = 0;\nfor (int i = 1; i <= 10; i++)\n    for (int j = i; j <= 10; j++)\n        cnt++;",
        "answer": "55",
        "accepted": [
          "55"
        ],
        "explanation": "Tổng 10 + 9 + ... + 1 = 10 × 11 / 2 = 55."
      }
    ]
  },
  {
    "id": 2,
    "title": "Đề số 02 — Trọng tâm Đệ quy, Cây nhị phân & Độ phức tạp",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 7, 4, 9, 2, 6, 10, 3. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return h.key;\n    return h.key + eval(h.next.next);\n}",
        "options": [
          "21",
          "25",
          "30",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí lẻ (tính từ 1): 7 + 9 + 6 + 3 = 25."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int c = 0;\n    for (int i = n; i >= 1; i /= 2)\n        c++;\n    return c;\n}",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 1,
        "explanation": "Biến i giảm đi một nửa sau mỗi bước (n, n/2, n/4, ..., 1), vòng lặp thực hiện ⌊log₂n⌋ + 1 lần => O(log n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "S là một ngăn xếp ban đầu rỗng với các thao tác S.PUSH(x), S.POP() và S.TOP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // S là ngăn xếp (LIFO) ban đầu rỗng\n    for (int i = 1; i <= 7; i++) S.PUSH(i * 3);\n    for (int j = 1; j <= 4; j++) S.POP();\n    print(S.TOP());\n}",
        "options": [
          "9",
          "12",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Ngăn xếp S nhận vào [3, 6, 9, 12, 15, 18, 21] (đỉnh là 21). Sau 4 lần POP từ đỉnh, phần tử ở đỉnh ngăn xếp hiện tại là 9."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự giữa (Inorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "8, 3, 1, 6, 4, 7, 14, 11, 9, 19, 16, 22",
          "1, 3, 4, 6, 7, 8, 9, 11, 14, 16, 19, 22",
          "1, 4, 7, 6, 3, 9, 11, 16, 22, 19, 14, 8",
          "22, 19, 16, 14, 11, 9, 8, 7, 6, 4, 3, 1"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự giữa (Inorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 8, ta thu được dãy: 1, 3, 4, 6, 7, 8, 9, 11, 14, 16, 19, 22."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 5, 2, 8, 4, 10, 1. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "5, 2, 8, 4, 10, 1",
          "1, 10, 4, 8, 2, 5",
          "2, 8, 4, 10, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 1, 10, 4, 8, 2, 5."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Một cây nhị phân đầy đủ (Full Binary Tree) có chiều cao bằng 4 (nút gốc có mức 1, mọi nút lá đều ở mức 4) thì có tổng cộng bao nhiêu nút?",
        "code": "",
        "options": [
          "7",
          "15",
          "16",
          "30"
        ],
        "answer": 1,
        "explanation": "Tổng số nút của cây nhị phân đầy đủ chiều cao h là 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1 = 2^4 - 1 = 15."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tìm đoạn con liên tiếp có tổng lớn nhất của dãy n số nguyên, thuật toán Quy hoạch động (Kadane) có độ phức tạp thời gian là bao nhiêu?",
        "code": "",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Quy hoạch động tính S_i = max(a_i, S_{i-1} + a_i) trong một lần duyệt mảng => O(n), tốt hơn Chia để trị O(n log n) và vét cạn O(n²) (Slide tuần 6)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 1, 2, 3. Hỏi lời gọi hàm F(h, 3) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "15",
          "18",
          "21",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 3: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 18."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [14, 7, 22, 9, 18, 5] (chỉ số từ 0 đến 5). Hỏi lời gọi hàm cal(a, 0, 5) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "61",
          "70",
          "75",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[5]: 14 + 7 + 22 + 9 + 18 + 5 = 75."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "112",
          "120",
          "130",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 3 + 6 + 8 + 11 + 14 + 19 = 120."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Trong bài toán Người du lịch (TSP) giải bằng Nhánh và cận, giả sử hành trình bộ phận (1, u₂, ..., u_k) đã đi qua k thành phố với tổng chi phí là σ, và c_min là chi phí nhỏ nhất giữa hai thành phố phân biệt. Công thức tính cận dưới g là gì?",
        "code": "",
        "options": [
          "g = σ + (n - k) · c_min",
          "g = σ + (n - k + 1) · c_min",
          "g = σ + (n - 1) · c_min",
          "g = σ + k · c_min"
        ],
        "answer": 1,
        "explanation": "Từ u_k cần đi qua n - k thành phố còn lại rồi quay về 1, tức còn đúng n - k + 1 chặng đường nữa => g = σ + (n - k + 1)·c_min (Slide tuần 4)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 4 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "15",
          "16",
          "7"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 4, số bước là 2^4 - 1 = 15."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nHỏi lời gọi hàm cal(19, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (8) có d = 1. Đi theo đường đi từ gốc xuống nút 19 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= n; j *= 2)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log^2 n)"
        ],
        "answer": 1,
        "explanation": "Vòng ngoài chạy n lần, mỗi lần vòng trong chạy ⌊log₂n⌋ + 1 lần => tổng cộng O(n log n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 14 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "47",
          "91",
          "61",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 14. Tổng các lá trong cây con này bằng 47."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 9 nút với dãy khóa: 5, 10, 15, 20, 25, 30, 35, 40, 45. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "25",
          "30",
          "35",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 30."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(24, 9) trả về giá trị nào (tổng số lần gọi hàm F)?",
        "code": "int F(int a, int b) {\n    if (a == b) return 1;\n    if (a > b) return 1 + F(a - b, b);\n    else return 1 + F(a, b - a);\n}",
        "options": [
          "4",
          "5",
          "6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm đếm số lần gọi đệ quy cho đến khi a == b. Quá trình giảm (24, 9) thực hiện đúng 5 lời gọi hàm."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [14, 7, 22, 9, 18, 5] (chỉ số 0 đến 5). Hỏi lời gọi hàm F(a, 0, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return 0;\n    if (i == j) return (a[i] > 14) ? 1 : 0;\n    int m = (i + j) / 2;\n    return F(a, i, m) + F(a, m + 1, j);\n}",
        "options": [
          "1",
          "2",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia để trị đếm số lượng phần tử trong mảng lớn hơn 14. Có 2 phần tử thỏa mãn."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nHỏi lời gọi hàm cal(2, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (d <= k)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    return 0;\n}",
        "options": [
          "22",
          "25",
          "29",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút có độ sâu d ≤ 2 (gốc ở mức 1 và các con trực tiếp ở mức 2). Tổng bằng 25."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 3, 7, 11, 19 và h2 trỏ đến đầu danh sách có khóa: 2, 4, 9, 14. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "3, 7, 11, 19, 2, 4, 9, 14",
          "2, 3, 4, 7, 9, 11, 14, 19",
          "19, 14, 11, 9, 7, 4, 3, 2",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 2, 3, 4, 7, 9, 11, 14, 19."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Khi biểu diễn cây tổng quát bằng mảng cha A[1..n] (A[i] lưu chỉ số nút cha của i), độ phức tạp thời gian để tìm cha của một nút i bất kỳ là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(h) với h là chiều cao cây"
        ],
        "answer": 0,
        "explanation": "Chỉ cần truy cập trực tiếp phần tử mảng A[i] nên tốn thời gian hằng số O(1) (Slide tuần 9)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-8, 3, 5, -2, 4, -7, 2]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "10",
          "14",
          "13"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-8, 3, 8, 6, 10, 3, 5]. Giá trị lớn nhất trong mảng S là 10."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[0,3], [2,5], [4,6], [1,7], [6,8], [5,9], [8,10]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [0,3], [4,6], [6,8], [8,10]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi liệt kê tất cả các hoán vị của (1, 2, 3, 4) theo thứ tự từ điển bằng thuật toán quay lui, hoán vị thứ 3 được in ra (tính từ 1) là hoán vị nào?",
        "code": "",
        "options": [
          "(1, 2, 4, 3)",
          "(1, 3, 2, 4)",
          "(1, 3, 4, 2)",
          "(4, 2, 3, 1)"
        ],
        "answer": 1,
        "explanation": "Liệt kê theo thứ tự từ điển từ (1, 2, 3, 4), hoán vị ở vị trí thứ 3 là (1, 3, 2, 4)."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"(([]{})[])\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"(([]{})[])\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 40, 20, 70, 50, 60, 30, 10 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 40, 20, 10, 50, 70, 30, 60. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (10) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 4."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= n; j += i)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(n)",
          "O(n √n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Với mỗi i, vòng trong chạy n/i lần. Tổng cộng n(1 + 1/2 + 1/3 + ... + 1/n) ≈ n ln(n) => O(n log n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 6 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 3 thành phố (1 → u₂ → ... → u_3) với tổng chi phí là σ = 18. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 4. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "30",
          "34",
          "38",
          "30"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 6 - 3 + 1 = 4 chặng nữa, mỗi chặng tối thiểu c_min = 4. Vậy g = σ + (n - k + 1)·c_min = 18 + 4×4 = 34."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính số Fibonacci F(n):\nKhi thực hiện lời gọi F(6), hàm F(2) được gọi bao nhiêu lần?",
        "code": "int F(int n) {\n    if (n < 2) return n;\n    return F(n - 1) + F(n - 2);\n}",
        "options": [
          "3",
          "5",
          "8",
          "16"
        ],
        "answer": 1,
        "explanation": "Khai triển cây đệ quy của F(6), số lần xuất hiện của nút F(2) là 5."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cấu trúc dữ liệu cây tổng quát biểu diễn bằng con trỏ con cực trái (leftMostChild) và em kế cận phải (rightSibling). Hàm height(Node* p) dưới đây thực hiện chức năng gì?",
        "code": "int height(Node* p) {\n    if (p == NULL) return 0;\n    int maxh = 0;\n    Node* q = p->leftMostChild;\n    while (q != NULL) {\n        int h = height(q);\n        if (h > maxh) maxh = h;\n        q = q->rightSibling;\n    }\n    return maxh + 1;\n}",
        "options": [
          "Độ sâu của nút p tính từ gốc",
          "Chiều cao của cây con gốc p (tính theo số nút trên đường đi dài nhất tới lá)",
          "Tổng số nút con trực tiếp (bậc) của nút p",
          "Tổng số nút lá trong cây con gốc p"
        ],
        "answer": 1,
        "explanation": "Hàm duyệt qua tất cả các con trực tiếp q của p thông qua chuỗi rightSibling, tìm chiều cao lớn nhất maxh của các cây con rồi cộng thêm 1 (Slide tuần 9)."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Danh sách liên kết",
        "difficulty": "Khó",
        "text": "Cho h là con trỏ trỏ đến nút đầu tiên của danh sách liên kết đơn có dãy khóa: 4, 9, 7, 2, 11, 5. Hãy điền giá trị số nguyên mà lời gọi hàm eval(h) trả về:",
        "code": "int eval(Node h) {\n    if (h == NULL || h.next == NULL) return 0;\n    int pick = (h.key > h.next.key) ? h.key : h.next.key;\n    return pick + eval(h.next.next);\n}",
        "answer": "27",
        "accepted": [
          "27"
        ],
        "explanation": "Hàm xét từng cặp nút kề nhau (h, h.next), lấy khóa lớn hơn rồi nhảy cóc 2 nút: max(4, 9) + max(7, 2) + max(11, 5) = 27."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Khó",
        "text": "Trong bài toán Tìm đường đi ngắn nhất thoát khỏi mê cung bằng hàng đợi BFS (Slide tuần 8, 0 là ô trống, 1 là tường, thoát ra ngoài biên ma trận là đích, ghi -1 nếu không thoát được). Với dữ liệu đầu vào (N M r c và ma trận) dưới đây, chương trình xuất ra số nguyên nào?",
        "code": "4 5 2 3\n1 1 0 1 1\n1 0 0 0 1\n1 0 1 0 1\n1 1 1 0 1",
        "answer": "3",
        "accepted": [
          "3"
        ],
        "explanation": "Dùng BFS loang từ ô xuất phát: (2,3) -> (2,4) -> (3,4) -> (4,4) -> thoát ra biên dưới ở bước thứ 3."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 8\n• Nút 8 có con trái là 3 và con phải là 14\n• Nút 3 có con trái là 1 và con phải là 6\n• Nút 14 có con trái là 11 và con phải là 19\n• Nút 6 có con trái là 4 và con phải là 7\n• Nút 11 có con trái là 9\n• Nút 19 có con trái là 16 và con phải là 22\nHãy điền giá trị số nguyên mà lời gọi hàm cal(r) dưới đây trả về:",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "answer": "61",
        "accepted": [
          "61"
        ],
        "explanation": "Hàm bỏ qua các nút lá (trả về 0) và cộng khóa của tất cả các nút trong (nút có ít nhất 1 con). Tổng bằng 61."
      }
    ]
  },
  {
    "id": 3,
    "title": "Đề số 03 — Danh sách liên kết, Ngăn xếp & Chia để trị",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 12, 5, 8, 14, 3, 9. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return 0;\n    return h.next.key + eval(h.next.next);\n}",
        "options": [
          "24",
          "28",
          "33",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí chẵn (tính từ 1): 5 + 14 + 9 = 28."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int a[], int n) {\n    if (n <= 0) return 0;\n    return a[0] + a[n - 1];\n}",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0,
        "explanation": "Hàm chỉ truy cập phần tử đầu và cuối mảng theo chỉ số, không phụ thuộc kích thước n => O(1)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "Q là một hàng đợi ban đầu rỗng với hai thao tác Q.PUSH(x) và Q.POP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // Q là hàng đợi (FIFO) ban đầu rỗng\n    for (int i = 1; i <= 7; i++) Q.PUSH(i * 2);\n    for (int j = 1; j <= 2; j++) Q.POP();\n    Q.PUSH(77);\n    int res = Q.POP();\n    print(res);\n}",
        "options": [
          "4",
          "6",
          "77",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Ban đầu Q chứa [2, 4, 6, 8, 10, 12, 14]. Sau 2 lần POP đầu hàng đợi, phần tử đầu tiếp theo là 6. Lệnh PUSH(77) đưa 77 vào cuối hàng đợi nên POP tiếp theo lấy ra 6."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự sau (Postorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "12, 5, 2, 1, 4, 9, 11, 18, 14, 13, 16, 24",
          "1, 4, 2, 11, 9, 5, 13, 16, 14, 24, 18, 12",
          "1, 2, 4, 5, 9, 11, 12, 13, 14, 16, 18, 24",
          "12, 18, 24, 14, 16, 13, 5, 9, 11, 2, 4, 1"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự sau (Postorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 12, ta thu được dãy: 1, 4, 2, 11, 9, 5, 13, 16, 14, 24, 18, 12."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 9, 4, 12, 6, 2, 8. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "9, 4, 12, 6, 2, 8",
          "8, 2, 6, 12, 4, 9",
          "4, 12, 6, 2, 8",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 8, 2, 6, 12, 4, 9."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Mức (hay độ sâu) của mỗi nút trên cây nhị phân được định nghĩa bằng độ dài đường đi từ gốc đến nút đó cộng 1 (mức của nút gốc bằng 1). Hỏi trên một cây nhị phân có thể có tối đa bao nhiêu nút ở độ sâu bằng 5?",
        "code": "",
        "options": [
          "8",
          "16",
          "17",
          "32"
        ],
        "answer": 1,
        "explanation": "Với mức gốc là 1, số nút tối đa ở mức d là 2^(d-1). Tại d = 5, số nút tối đa là 2^(5-1) = 16."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Độ phức tạp thời gian của thuật toán Chia để trị tính nhanh lũy thừa a^n (với n nguyên dương) bằng cách chia đôi số mũ là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(√n)",
          "O(n)"
        ],
        "answer": 1,
        "explanation": "Mỗi bước đệ quy giảm n đi một nửa (n → n/2) và chỉ giải 1 bài toán con => số phép nhân là O(log n) (Slide tuần 5)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 2, 1, 4. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "12",
          "14",
          "16",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 14."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [31, 15, 42, 8, 27] (chỉ số từ 0 đến 4). Hỏi lời gọi hàm cal(a, 0, 4) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "92",
          "96",
          "123",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[4]: 31 + 15 + 42 + 8 + 27 = 123."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "117",
          "129",
          "139",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 2 + 5 + 9 + 12 + 14 + 18 = 129."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Xét bài toán Chọn tập đoạn thẳng không giao nhau cực đại X = {(a₁, b₁), ..., (a_n, b_n)}. Tiêu chí tham lam select(C) nào sau đây LUÔN cho lời giải tối ưu?",
        "code": "",
        "options": [
          "Chọn đoạn có tọa độ bắt đầu a_i nhỏ nhất",
          "Chọn đoạn có độ dài (b_i - a_i) nhỏ nhất",
          "Chọn đoạn có tọa độ kết thúc b_i nhỏ nhất",
          "Chọn đoạn có tọa độ kết thúc b_i lớn nhất"
        ],
        "answer": 2,
        "explanation": "Chọn đoạn kết thúc sớm nhất (b_i nhỏ nhất) để dành nhiều không gian nhất cho các đoạn phía sau luôn cho lời giải tối ưu (Slide tuần 5)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 5 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "16",
          "31",
          "32",
          "9"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 5, số bước là 2^5 - 1 = 31."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nHỏi lời gọi hàm cal(14, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (12) có d = 1. Đi theo đường đi từ gốc xuống nút 14 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= i; j++)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2,
        "explanation": "Tổng số lần lặp là 1 + 2 + ... + n = n(n+1)/2 => O(n²)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 5 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "16",
          "32",
          "21",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 5. Tổng các lá trong cây con này bằng 16."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 10 nút với dãy khóa: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "9",
          "11",
          "13",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 11."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(15, 25) trả về giá trị nào?",
        "code": "int F(int a, int b) {\n    if (a == b) return a;\n    if (a > b) return F(a - b, b);\n    else return F(a, b - a);\n}",
        "options": [
          "1",
          "5",
          "10",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Thuật toán Euclid bằng phép trừ tìm ước chung lớn nhất ƯCLN(15, 25) = 5."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [31, 15, 42, 8, 27] (chỉ số 0 đến 4). Hỏi lời gọi hàm F(a, 0, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return -1000000;\n    if (i == j) return a[i];\n    int m = (i + j) / 2;\n    int t1 = F(a, i, m);\n    int t2 = F(a, m + 1, j);\n    return (t1 > t2) ? t1 : t2;\n}",
        "options": [
          "8",
          "42",
          "42",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia đôi mảng thành [i..m] và [m+1..j] rồi lấy giá trị lớn hơn giữa hai nửa => tìm phần tử lớn nhất của mảng là 42."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nHỏi lời gọi hàm cal(3, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k == d) return r.key;\n    return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "46",
          "49",
          "53",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút nằm ở đúng mức d = 3 (tính gốc mức 1). Tổng bằng 49."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 1, 4, 9, 16 và h2 trỏ đến đầu danh sách có khóa: 3, 5, 11, 20. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "1, 4, 9, 16, 3, 5, 11, 20",
          "1, 3, 4, 5, 9, 11, 16, 20",
          "20, 16, 11, 9, 5, 4, 3, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 3, 4, 5, 9, 11, 16, 20."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Khi biểu diễn cây tổng quát bằng con trỏ con cực trái và em kế cận phải (leftmost_child, right_sibling) mà KHÔNG lưu con trỏ cha, thao tác tìm cha của một nút có độ phức tạp trường hợp xấu nhất là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Vì không có liên kết ngược lên cha, ta phải duyệt tìm kiếm từ gốc qua tối đa n nút của cây => O(n) (Slide tuần 9)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [2, -6, 4, -1, 5, -2, 1]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "6",
          "8",
          "12",
          "11"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [2, -4, 4, 3, 8, 6, 7]. Giá trị lớn nhất trong mảng S là 8."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[1,3], [2,4], [3,6], [5,7], [4,8], [7,9], [8,12]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 3 đoạn: [1,3], [3,6], [7,9]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi sử dụng thuật toán đệ quy quay lui liệt kê tất cả các xâu nhị phân độ dài n = 4 theo thứ tự từ điển (thử v từ 0 đến 1), xâu nhị phân thứ 6 được sinh ra (tính từ 1) là xâu nào?",
        "code": "",
        "options": [
          "0100",
          "0101",
          "0110",
          "1010"
        ],
        "answer": 1,
        "explanation": "Xâu thứ k trong thứ tự từ điển (tính từ 1) tương ứng biểu diễn nhị phân 4 bit của (k - 1) = 5 => 0101."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"[({}[])()]\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"[({}[])()]\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 5, 7, 6, 4, 2, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 5, 4, 7, 6, 2, 1, 3. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 5."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int s = 0, i = 1, k = 1;\n    while (s <= n) {\n        s += k;\n        k += 2;\n        i++;\n    }\n    return i;\n}",
        "options": [
          "O(log n)",
          "O(√n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 1,
        "explanation": "Tổng k số lẻ đầu tiên: s = 1 + 3 + 5 + ... + (2m-1) = m². Dừng khi m² > n ⇔ m > √n => O(√n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 5 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 2 thành phố (1 → u₂ → ... → u_2) với tổng chi phí là σ = 9. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 5. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "24",
          "29",
          "29",
          "19"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 5 - 2 + 1 = 4 chặng nữa, mỗi chặng tối thiểu c_min = 5. Vậy g = σ + (n - k + 1)·c_min = 9 + 4×5 = 29."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính hệ số nhị thức C(k, n):\nKhi thực hiện lời gọi C(2, 5), hàm C được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int C(int k, int n) {\n    if (k == 0 || k == n) return 1;\n    return C(k - 1, n - 1) + C(k, n - 1);\n}",
        "options": [
          "9",
          "19",
          "21",
          "32"
        ],
        "answer": 1,
        "explanation": "Cây đệ quy nhị phân của C(2, 5) có đúng C(2, 5) nút lá, nên tổng số nút trên cây (tổng số lời gọi hàm) là 2·C(2, 5) - 1 = 19."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nKý hiệu r là con trỏ trỏ đến nút 5 trên cây T. Hỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    int h1 = cal(r.leftChild);\n    int h2 = cal(r.rightChild);\n    return max(h1, h2) + 1;\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính chiều cao (số nút trên đường đi dài nhất tới lá) của cây con gốc 5, kết quả bằng 3."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 12\n• Nút 12 có con trái là 5 và con phải là 18\n• Nút 5 có con trái là 2 và con phải là 9\n• Nút 18 có con trái là 14 và con phải là 24\n• Nút 2 có con trái là 1 và con phải là 4\n• Nút 9 có con phải là 11\n• Nút 14 có con trái là 13 và con phải là 16\nXét hàm cal bên dưới. Hãy điền giá trị số nguyên chính xác mà lời gọi hàm cal(3, r, 1) trả về:",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k <= d)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    else\n        return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "answer": "94",
        "accepted": [
          "94"
        ],
        "explanation": "Hàm cộng khóa của tất cả các nút có mức d ≥ 3 (tính nút gốc mức 1). Tổng khóa các nút ở mức 3 và mức 4 trên cây T là 94."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Khó",
        "text": "Áp dụng thuật toán Quy hoạch động tìm độ dài dãy con chung dài nhất (LCS - Slide tuần 6) cho hai xâu ký tự X = \"abcde\" và Y = \"acebd\". Hãy điền độ dài của dãy con chung dài nhất (một số nguyên):",
        "code": "",
        "answer": "3",
        "accepted": [
          "3"
        ],
        "explanation": "Lập bảng quy hoạch động S(i, j) cho X = \"abcde\" và Y = \"acebd\", độ dài dãy con chung dài nhất thu được là 3."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Cho đoạn mã C sau đây. Hãy điền giá trị số nguyên chính xác của biến đếm/biến kết quả sau khi đoạn mã thực thi xong:",
        "code": "int cnt = 0;\nfor (int i = 1; i <= 64; i *= 2)\n    for (int j = 1; j <= i; j++)\n        cnt++;",
        "answer": "127",
        "accepted": [
          "127"
        ],
        "explanation": "Tổng 1 + 2 + 4 + 8 + 16 + 32 + 64 = 127."
      }
    ]
  },
  {
    "id": 4,
    "title": "Đề số 04 — Phân tích Độ phức tạp & Cấu trúc Cây",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 6, 11, 2, 9, 15, 4, 1. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return h.key;\n    return h.key + eval(h.next.next);\n}",
        "options": [
          "20",
          "24",
          "29",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí lẻ (tính từ 1): 6 + 2 + 15 + 1 = 24."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= n; j++)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2,
        "explanation": "Hai vòng lặp lồng nhau độc lập, mỗi vòng chạy n lần => tổng số phép lặp là n × n = n² => O(n²)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "S là một ngăn xếp ban đầu rỗng với các thao tác S.PUSH(x), S.POP() và S.TOP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // S là ngăn xếp (LIFO) ban đầu rỗng\n    for (int i = 1; i <= 6; i++) S.PUSH(i * 3);\n    for (int j = 1; j <= 2; j++) S.POP();\n    print(S.TOP());\n}",
        "options": [
          "12",
          "15",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Ngăn xếp S nhận vào [3, 6, 9, 12, 15, 18] (đỉnh là 18). Sau 2 lần POP từ đỉnh, phần tử ở đỉnh ngăn xếp hiện tại là 12."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự trước (Preorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "2, 4, 5, 7, 8, 9, 10, 11, 13, 16, 21, 25",
          "9, 4, 2, 7, 5, 8, 16, 11, 10, 13, 21, 25",
          "2, 5, 8, 7, 4, 10, 13, 11, 25, 21, 16, 9",
          "25, 21, 13, 10, 11, 16, 8, 5, 7, 2, 4, 9"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự trước (Preorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 9, ta thu được dãy: 9, 4, 2, 7, 5, 8, 16, 11, 10, 13, 21, 25."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 1, 8, 3, 11, 5, 7. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "1, 8, 3, 11, 5, 7",
          "7, 5, 11, 3, 8, 1",
          "8, 3, 11, 5, 7",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 7, 5, 11, 3, 8, 1."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Một cây nhị phân đầy đủ (Full Binary Tree) có chiều cao bằng 6 (nút gốc có mức 1, mọi nút lá đều ở mức 6) thì có tổng cộng bao nhiêu nút?",
        "code": "",
        "options": [
          "31",
          "63",
          "64",
          "126"
        ],
        "answer": 1,
        "explanation": "Tổng số nút của cây nhị phân đầy đủ chiều cao h là 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1 = 2^6 - 1 = 63."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Độ phức tạp thời gian của thuật toán Tham lam giải bài toán Chọn tập đoạn con không giao nhau cực đại (Activity Selection) gồm n đoạn thẳng là bao nhiêu?",
        "code": "",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1,
        "explanation": "Cần sắp xếp n đoạn thẳng theo tọa độ kết thúc b_i tăng dần mất O(n log n), sau đó duyệt tuyến tính O(n) => O(n log n)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 1, 0, 1, 1. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "9",
          "11",
          "13",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 11."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [9, 24, 16, 35, 11, 20] (chỉ số từ 0 đến 5). Hỏi lời gọi hàm cal(a, 0, 5) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "106",
          "95",
          "115",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[5]: 9 + 24 + 16 + 35 + 11 + 20 = 115."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "122",
          "131",
          "141",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 4 + 7 + 9 + 11 + 16 + 21 = 131."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Điểm khác biệt cốt lõi giữa thuật toán Quy hoạch động (Dynamic Programming) và thuật toán Chia để trị (Divide and Conquer) là gì?",
        "code": "",
        "options": [
          "Quy hoạch động không sử dụng công thức truy hồi",
          "Trong Chia để trị các bài toán con độc lập, còn trong Quy hoạch động các bài toán con gối nhau (chồng chéo)",
          "Chia để trị luôn nhanh hơn Quy hoạch động",
          "Quy hoạch động chỉ áp dụng cho cấu trúc dữ liệu cây"
        ],
        "answer": 1,
        "explanation": "Quy hoạch động giải quyết hiện tượng bài toán con trùng lặp/gối nhau bằng cách lưu trữ lời giải vào bộ nhớ để không giải lại (Slide tuần 6)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 6 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "32",
          "63",
          "64",
          "11"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 6, số bước là 2^6 - 1 = 63."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nHỏi lời gọi hàm cal(21, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (9) có d = 1. Đi theo đường đi từ gốc xuống nút 21 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int s = 0, a = 1;\n    while (s < n) {\n        s += a;\n        a *= 3;\n    }\n    return s;\n}",
        "options": [
          "O(log n)",
          "O(√n)",
          "O(n)",
          "O(3^n)"
        ],
        "answer": 0,
        "explanation": "Sau k bước, s = 1 + 3 + ... + 3^(k-1) = (3^k - 1)/2 ≥ n ⇔ k = O(log₃n) = O(log n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 16 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "48",
          "96",
          "64",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 16. Tổng các lá trong cây con này bằng 48."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 7 nút với dãy khóa: 10, 20, 30, 40, 50, 60, 70. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "40",
          "50",
          "60",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 50."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(28, 16) trả về giá trị nào (tổng số lần gọi hàm F)?",
        "code": "int F(int a, int b) {\n    if (a == b) return 1;\n    if (a > b) return 1 + F(a - b, b);\n    else return 1 + F(a, b - a);\n}",
        "options": [
          "4",
          "5",
          "6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm đếm số lần gọi đệ quy cho đến khi a == b. Quá trình giảm (28, 16) thực hiện đúng 5 lời gọi hàm."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [9, 24, 16, 35, 11, 20] (chỉ số 0 đến 5). Hỏi lời gọi hàm F(a, 0, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return 0;\n    if (i == j) return (a[i] > 20) ? 1 : 0;\n    int m = (i + j) / 2;\n    return F(a, i, m) + F(a, m + 1, j);\n}",
        "options": [
          "1",
          "2",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia để trị đếm số lượng phần tử trong mảng lớn hơn 20. Có 2 phần tử thỏa mãn."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nHỏi lời gọi hàm cal(2, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (d <= k)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    return 0;\n}",
        "options": [
          "26",
          "29",
          "33",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút có độ sâu d ≤ 2 (gốc ở mức 1 và các con trực tiếp ở mức 2). Tổng bằng 29."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 2, 8, 13, 18 và h2 trỏ đến đầu danh sách có khóa: 1, 6, 10, 15. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "2, 8, 13, 18, 1, 6, 10, 15",
          "1, 2, 6, 8, 10, 13, 15, 18",
          "18, 15, 13, 10, 8, 6, 2, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 2, 6, 8, 10, 13, 15, 18."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Độ phức tạp thời gian của thuật toán Chia để trị giải bài toán Tìm đoạn con liên tiếp có tổng lớn nhất của dãy n phần tử là bao nhiêu?",
        "code": "",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1,
        "explanation": "Chia mảng thành 2 nửa (2T(n/2)) và tìm đoạn con vắt qua điểm giữa mid mất O(n) => T(n) = 2T(n/2) + O(n) = O(n log n) (Slide tuần 5)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-4, 7, -3, 2, -5, 6, -1]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "5",
          "7",
          "15",
          "10"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-4, 7, 4, 6, 1, 7, 6]. Giá trị lớn nhất trong mảng S là 7."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[0,2], [1,4], [2,5], [4,7], [5,8], [7,9], [6,10]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 3 đoạn: [0,2], [2,5], [5,8]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi liệt kê tất cả các hoán vị của (1, 2, 3, 4) theo thứ tự từ điển bằng thuật toán quay lui, hoán vị thứ 5 được in ra (tính từ 1) là hoán vị nào?",
        "code": "",
        "options": [
          "(1, 3, 4, 2)",
          "(1, 4, 2, 3)",
          "(1, 4, 3, 2)",
          "(3, 2, 4, 1)"
        ],
        "answer": 1,
        "explanation": "Liệt kê theo thứ tự từ điển từ (1, 2, 3, 4), hoán vị ở vị trí thứ 5 là (1, 4, 2, 3)."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"({[()]}{})\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"({[()]}{})\", độ sâu ngăn xếp cực đại đạt được là 4."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 4, 5, 2, 6, 7, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 4, 2, 5, 1, 6, 3, 7. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 3."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "void f(int n) {\n    if (n <= 1) return;\n    f(n / 2);\n    f(n / 2);\n    for (int i = 1; i <= n; i++) {}\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1,
        "explanation": "T(n) = 2T(n/2) + O(n) (giống Merge Sort). Có log₂n tầng đệ quy, mỗi tầng tốn O(n) => O(n log n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 6 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 4 thành phố (1 → u₂ → ... → u_4) với tổng chi phí là σ = 25. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 3. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "31",
          "34",
          "40",
          "37"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 6 - 4 + 1 = 3 chặng nữa, mỗi chặng tối thiểu c_min = 3. Vậy g = σ + (n - k + 1)·c_min = 25 + 3×3 = 34."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm tính lũy thừa nhanh Pow(x, n) bằng phương pháp chia để trị:\nHỏi khi thực hiện lời gọi Pow(2, 13), hàm Pow được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int Pow(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 != 0) return x * Pow(x, n - 1);\n    int res = Pow(x, n / 2);\n    return res * res;\n}",
        "options": [
          "6",
          "7",
          "8",
          "13"
        ],
        "answer": 1,
        "explanation": "Theo dõi chuỗi tham số n giảm dần đến 0: mỗi bước lẻ trừ 1, mỗi bước chẵn chia đôi. Tổng số lần gọi hàm Pow là 7."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cấu trúc dữ liệu cây tổng quát biểu diễn bằng con trỏ con cực trái (leftMostChild) và em kế cận phải (rightSibling). Hàm height(Node* p) dưới đây thực hiện chức năng gì?",
        "code": "int height(Node* p) {\n    if (p == NULL) return 0;\n    int maxh = 0;\n    Node* q = p->leftMostChild;\n    while (q != NULL) {\n        int h = height(q);\n        if (h > maxh) maxh = h;\n        q = q->rightSibling;\n    }\n    return maxh + 1;\n}",
        "options": [
          "Độ sâu của nút p tính từ gốc",
          "Chiều cao của cây con gốc p (tính theo số nút trên đường đi dài nhất tới lá)",
          "Tổng số nút con trực tiếp (bậc) của nút p",
          "Tổng số nút lá trong cây con gốc p"
        ],
        "answer": 1,
        "explanation": "Hàm duyệt qua tất cả các con trực tiếp q của p thông qua chuỗi rightSibling, tìm chiều cao lớn nhất maxh của các cây con rồi cộng thêm 1 (Slide tuần 9)."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Danh sách liên kết",
        "difficulty": "Khó",
        "text": "Cho h là con trỏ trỏ đến nút đầu tiên của danh sách liên kết đơn có dãy khóa: 8, 3, 6, 12, 1, 9. Hãy điền giá trị số nguyên mà lời gọi hàm eval(h) trả về:",
        "code": "int eval(Node h) {\n    if (h == NULL || h.next == NULL) return 0;\n    int pick = (h.key > h.next.key) ? h.key : h.next.key;\n    return pick + eval(h.next.next);\n}",
        "answer": "29",
        "accepted": [
          "29"
        ],
        "explanation": "Hàm xét từng cặp nút kề nhau (h, h.next), lấy khóa lớn hơn rồi nhảy cóc 2 nút: max(8, 3) + max(6, 12) + max(1, 9) = 29."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Khó",
        "text": "Trong bài toán Tìm đường đi ngắn nhất thoát khỏi mê cung bằng hàng đợi BFS (Slide tuần 8, 0 là ô trống, 1 là tường, thoát ra ngoài biên ma trận là đích, ghi -1 nếu không thoát được). Với dữ liệu đầu vào (N M r c và ma trận) dưới đây, chương trình xuất ra số nguyên nào?",
        "code": "4 5 3 3\n1 1 1 1 1\n1 0 0 0 1\n1 0 0 1 1\n1 1 1 1 1",
        "answer": "-1",
        "accepted": [
          "-1"
        ],
        "explanation": "Dùng BFS loang từ ô xuất phát: Tất cả các ô xung quanh đều bị tường (1) bao kín nên không thể thoát ra ngoài => trả về -1."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 9\n• Nút 9 có con trái là 4 và con phải là 16\n• Nút 4 có con trái là 2 và con phải là 7\n• Nút 16 có con trái là 11 và con phải là 21\n• Nút 7 có con trái là 5 và con phải là 8\n• Nút 11 có con trái là 10 và con phải là 13\n• Nút 21 có con phải là 25\nHãy điền giá trị số nguyên mà lời gọi hàm cal(r) dưới đây trả về:",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "answer": "68",
        "accepted": [
          "68"
        ],
        "explanation": "Hàm bỏ qua các nút lá (trả về 0) và cộng khóa của tất cả các nút trong (nút có ít nhất 1 con). Tổng bằng 68."
      }
    ]
  },
  {
    "id": 5,
    "title": "Đề số 05 — Đệ quy có nhớ, Hàng đợi & Quy hoạch động",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 10, 3, 7, 12, 5, 8. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return 0;\n    return h.next.key + eval(h.next.next);\n}",
        "options": [
          "19",
          "23",
          "28",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí chẵn (tính từ 1): 3 + 12 + 8 = 23."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int p = 1;\n    for (int i = 1; i <= n; i *= 3)\n        p += i;\n    return p;\n}",
        "options": [
          "O(log n)",
          "O(√n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 0,
        "explanation": "Biến i tăng theo lũy thừa của 3 (1, 3, 9, ..., 3^k ≤ n) nên số vòng lặp là O(log₃n) = O(log n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "Q là một hàng đợi ban đầu rỗng với hai thao tác Q.PUSH(x) và Q.POP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // Q là hàng đợi (FIFO) ban đầu rỗng\n    for (int i = 1; i <= 8; i++) Q.PUSH(i * 2);\n    for (int j = 1; j <= 1; j++) Q.POP();\n    Q.PUSH(88);\n    int res = Q.POP();\n    print(res);\n}",
        "options": [
          "2",
          "4",
          "88",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Ban đầu Q chứa [2, 4, 6, 8, 10, 12, 14, 16]. Sau 1 lần POP đầu hàng đợi, phần tử đầu tiếp theo là 4. Lệnh PUSH(88) đưa 88 vào cuối hàng đợi nên POP tiếp theo lấy ra 4."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự giữa (Inorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "15, 7, 3, 1, 5, 11, 9, 23, 18, 28, 25, 30",
          "1, 3, 5, 7, 9, 11, 15, 18, 23, 25, 28, 30",
          "1, 5, 3, 9, 11, 7, 18, 25, 30, 28, 23, 15",
          "30, 28, 25, 23, 18, 15, 11, 9, 7, 5, 3, 1"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự giữa (Inorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 15, ta thu được dãy: 1, 3, 5, 7, 9, 11, 15, 18, 23, 25, 28, 30."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 6, 13, 2, 9, 4, 15. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "6, 13, 2, 9, 4, 15",
          "15, 4, 9, 2, 13, 6",
          "13, 2, 9, 4, 15",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 15, 4, 9, 2, 13, 6."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Mức (hay độ sâu) của mỗi nút trên cây nhị phân được định nghĩa bằng độ dài đường đi từ gốc đến nút đó cộng 1 (mức của nút gốc bằng 1). Hỏi trên một cây nhị phân có thể có tối đa bao nhiêu nút ở độ sâu bằng 3?",
        "code": "",
        "options": [
          "2",
          "4",
          "5",
          "8"
        ],
        "answer": 1,
        "explanation": "Với mức gốc là 1, số nút tối đa ở mức d là 2^(d-1). Tại d = 3, số nút tối đa là 2^(3-1) = 4."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Thuật toán Tháp Hà Nội (HanoiTower) chuyển n đĩa từ cọc a sang cọc c có độ phức tạp thời gian là bao nhiêu?",
        "code": "",
        "options": [
          "O(n^2)",
          "O(n log n)",
          "O(2^n)",
          "O(n!)"
        ],
        "answer": 2,
        "explanation": "Số lần di chuyển đĩa thỏa mãn T(n) = 2T(n-1) + 1 = 2^n - 1 => độ phức tạp hàm mũ O(2^n) (Slide tuần 2)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 2, 3, 1. Hỏi lời gọi hàm F(h, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "41",
          "45",
          "49",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 4: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 45."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [18, 6, 29, 13, 21] (chỉ số từ 0 đến 4). Hỏi lời gọi hàm cal(a, 0, 4) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "69",
          "66",
          "87",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[4]: 18 + 6 + 29 + 13 + 21 = 87."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "160",
          "175",
          "185",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 3 + 7 + 11 + 15 + 23 + 28 = 175."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Trong bài toán điền số Sudoku 9×9 bằng quay lui (hàng và cột đánh số từ 0 đến 8), ô ở hàng r cột c thuộc lưới con 3×3 có chỉ số hàng và cột của lưới con là bao nhiêu?",
        "code": "",
        "options": [
          "(r % 3, c % 3)",
          "(r / 3, c / 3)",
          "(r * 3, c * 3)",
          "((r + 1) / 3, (c + 1) / 3)"
        ],
        "answer": 1,
        "explanation": "Phép chia lấy phần nguyên r / 3 và c / 3 ánh xạ các chỉ số 0..8 về 3 nhóm 0, 1, 2 tương ứng với 9 ô vuông 3×3 (Slide tuần 3)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 7 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "64",
          "127",
          "128",
          "13"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 7, số bước là 2^7 - 1 = 127."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nHỏi lời gọi hàm cal(28, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (15) có d = 1. Đi theo đường đi từ gốc xuống nút 28 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i *= 2)\n        for (int j = 1; j <= n; j *= 2)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(log n)",
          "O(log^2 n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 1,
        "explanation": "Cả vòng ngoài và vòng trong đều chạy O(log n) lần độc lập => O(log n × log n) = O(log²n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 7 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "15",
          "36",
          "22",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 7. Tổng các lá trong cây con này bằng 15."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 11 nút với dãy khóa: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "18",
          "21",
          "24",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 21."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(21, 14) trả về giá trị nào?",
        "code": "int F(int a, int b) {\n    if (a == b) return a;\n    if (a > b) return F(a - b, b);\n    else return F(a, b - a);\n}",
        "options": [
          "1",
          "7",
          "7",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Thuật toán Euclid bằng phép trừ tìm ước chung lớn nhất ƯCLN(21, 14) = 7."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [18, 6, 29, 13, 21] (chỉ số 0 đến 4). Hỏi lời gọi hàm F(a, 0, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return -1000000;\n    if (i == j) return a[i];\n    int m = (i + j) / 2;\n    int t1 = F(a, i, m);\n    int t2 = F(a, m + 1, j);\n    return (t1 > t2) ? t1 : t2;\n}",
        "options": [
          "6",
          "29",
          "29",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia đôi mảng thành [i..m] và [m+1..j] rồi lấy giá trị lớn hơn giữa hai nửa => tìm phần tử lớn nhất của mảng là 29."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nHỏi lời gọi hàm cal(3, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k == d) return r.key;\n    return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "57",
          "60",
          "64",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút nằm ở đúng mức d = 3 (tính gốc mức 1). Tổng bằng 60."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 4, 7, 12, 21 và h2 trỏ đến đầu danh sách có khóa: 2, 5, 9, 17. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "4, 7, 12, 21, 2, 5, 9, 17",
          "2, 4, 5, 7, 9, 12, 17, 21",
          "21, 17, 12, 9, 7, 5, 4, 2",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 2, 4, 5, 7, 9, 12, 17, 21."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Độ phức tạp thời gian của thuật toán vét cạn (so sánh mọi cặp dãy con) cho bài toán Dãy con chung dài nhất (LCS) của hai xâu độ dài n và m là bao nhiêu?",
        "code": "",
        "options": [
          "O(n · m)",
          "O(2^n + 2^m)",
          "O(2^n · 2^m · max(m, n))",
          "O(n! · m!)"
        ],
        "answer": 2,
        "explanation": "Xâu X có 2^n dãy con, xâu Y có 2^m dãy con, mỗi cặp cần O(max(m, n)) để so sánh => O(2^n · 2^m · max(m, n)) (Slide tuần 6)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-10, 5, -2, 3, 4, -8, 2]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "10",
          "14",
          "13"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-10, 5, 3, 6, 10, 2, 4]. Giá trị lớn nhất trong mảng S là 10."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[2,4], [1,5], [4,6], [3,7], [6,8], [5,10], [8,11]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [2,4], [4,6], [6,8], [8,11]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi sử dụng thuật toán đệ quy quay lui liệt kê tất cả các xâu nhị phân độ dài n = 4 theo thứ tự từ điển (thử v từ 0 đến 1), xâu nhị phân thứ 7 được sinh ra (tính từ 1) là xâu nào?",
        "code": "",
        "options": [
          "0101",
          "0110",
          "0111",
          "1110"
        ],
        "answer": 1,
        "explanation": "Xâu thứ k trong thứ tự từ điển (tính từ 1) tương ứng biểu diễn nhị phân 4 bit của (k - 1) = 6 => 0110."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"([][{}])()\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"([][{}])()\", độ sâu ngăn xếp cực đại đạt được là 2."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 1, 4, 3, 10, 12, 9, 6 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 1, 3, 4, 6, 9, 10, 12. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (6) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 4."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = i; j <= n; j++)\n            for (int k = i; k <= j; k++)\n                cnt++;\n    return cnt;\n}",
        "options": [
          "O(n^2)",
          "O(n^2 log n)",
          "O(n^3)",
          "O(2^n)"
        ],
        "answer": 2,
        "explanation": "Tổng số bộ (i, j, k) thỏa mãn 1 ≤ i ≤ k ≤ j ≤ n là C(n+2, 3) = n(n+1)(n+2)/6 => O(n³)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 5 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 3 thành phố (1 → u₂ → ... → u_3) với tổng chi phí là σ = 16. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 4. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "24",
          "28",
          "32",
          "28"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 5 - 3 + 1 = 3 chặng nữa, mỗi chặng tối thiểu c_min = 4. Vậy g = σ + (n - k + 1)·c_min = 16 + 3×4 = 28."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính số Fibonacci F(n):\nKhi thực hiện lời gọi F(7), hàm F(2) được gọi bao nhiêu lần?",
        "code": "int F(int n) {\n    if (n < 2) return n;\n    return F(n - 1) + F(n - 2);\n}",
        "options": [
          "6",
          "8",
          "11",
          "32"
        ],
        "answer": 1,
        "explanation": "Khai triển cây đệ quy của F(7), số lần xuất hiện của nút F(2) là 8."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nKý hiệu r là con trỏ trỏ đến nút 23 trên cây T. Hỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    int h1 = cal(r.leftChild);\n    int h2 = cal(r.rightChild);\n    return max(h1, h2) + 1;\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính chiều cao (số nút trên đường đi dài nhất tới lá) của cây con gốc 23, kết quả bằng 3."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 15\n• Nút 15 có con trái là 7 và con phải là 23\n• Nút 7 có con trái là 3 và con phải là 11\n• Nút 23 có con trái là 18 và con phải là 28\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 11 có con trái là 9\n• Nút 28 có con trái là 25 và con phải là 30\nXét hàm cal bên dưới. Hãy điền giá trị số nguyên chính xác mà lời gọi hàm cal(3, r, 1) trả về:",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k <= d)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    else\n        return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "answer": "130",
        "accepted": [
          "130"
        ],
        "explanation": "Hàm cộng khóa của tất cả các nút có mức d ≥ 3 (tính nút gốc mức 1). Tổng khóa các nút ở mức 3 và mức 4 trên cây T là 130."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Khó",
        "text": "Áp dụng thuật toán Quy hoạch động tìm độ dài dãy con chung dài nhất (LCS - Slide tuần 6) cho hai xâu ký tự X = \"aggtab\" và Y = \"gxtxayb\". Hãy điền độ dài của dãy con chung dài nhất (một số nguyên):",
        "code": "",
        "answer": "4",
        "accepted": [
          "4"
        ],
        "explanation": "Lập bảng quy hoạch động S(i, j) cho X = \"aggtab\" và Y = \"gxtxayb\", độ dài dãy con chung dài nhất thu được là 4."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Cho đoạn mã C sau đây. Hãy điền giá trị số nguyên chính xác của biến đếm/biến kết quả sau khi đoạn mã thực thi xong:",
        "code": "int s = 0, i = 1;\nwhile (s <= 50) {\n    s += i;\n    i++;\n}\n// Giá trị của biến i sau vòng lặp?",
        "answer": "11",
        "accepted": [
          "11"
        ],
        "explanation": "s lần lượt nhận 1, 3, 6, 10, 15, 21, 28, 36, 45 (i=10), 55 (i=11 > 50, dừng) => i = 11."
      }
    ]
  },
  {
    "id": 6,
    "title": "Đề số 06 — Duyệt cây, Quay lui & Nhánh cận TSP",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 4, 9, 13, 2, 7, 6, 11. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return h.key;\n    return h.key + eval(h.next.next);\n}",
        "options": [
          "31",
          "35",
          "40",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí lẻ (tính từ 1): 4 + 13 + 7 + 11 = 35."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n, int m) {\n    int s = 0;\n    for (int i = 1; i <= n; i++) s += i;\n    for (int j = 1; j <= m; j++) s += j;\n    return s;\n}",
        "options": [
          "O(n + m)",
          "O(n · m)",
          "O(max(n, m)²)",
          "O(log(n + m))"
        ],
        "answer": 0,
        "explanation": "Hai vòng lặp nối tiếp nhau chạy lần lượt n và m bước => tổng thời gian O(n + m)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "S là một ngăn xếp ban đầu rỗng với các thao tác S.PUSH(x), S.POP() và S.TOP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // S là ngăn xếp (LIFO) ban đầu rỗng\n    for (int i = 1; i <= 7; i++) S.PUSH(i * 3);\n    for (int j = 1; j <= 2; j++) S.POP();\n    print(S.TOP());\n}",
        "options": [
          "15",
          "18",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Ngăn xếp S nhận vào [3, 6, 9, 12, 15, 18, 21] (đỉnh là 21). Sau 2 lần POP từ đỉnh, phần tử ở đỉnh ngăn xếp hiện tại là 15."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự sau (Postorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "11, 6, 2, 4, 8, 7, 10, 17, 13, 12, 15, 22",
          "4, 2, 7, 10, 8, 6, 12, 15, 13, 22, 17, 11",
          "2, 4, 6, 7, 8, 10, 11, 12, 13, 15, 17, 22",
          "11, 17, 22, 13, 15, 12, 6, 8, 10, 7, 2, 4"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự sau (Postorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 11, ta thu được dãy: 4, 2, 7, 10, 8, 6, 12, 15, 13, 22, 17, 11."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 10, 3, 7, 14, 1, 5. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "10, 3, 7, 14, 1, 5",
          "5, 1, 14, 7, 3, 10",
          "3, 7, 14, 1, 5",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 5, 1, 14, 7, 3, 10."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Một cây nhị phân đầy đủ (Full Binary Tree) có chiều cao bằng 4 (nút gốc có mức 1, mọi nút lá đều ở mức 4) thì có tổng cộng bao nhiêu nút?",
        "code": "",
        "options": [
          "7",
          "15",
          "16",
          "30"
        ],
        "answer": 1,
        "explanation": "Tổng số nút của cây nhị phân đầy đủ chiều cao h là 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1 = 2^4 - 1 = 15."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Nếu sử dụng đệ quy có nhớ (Memoization) để tính số Fibonacci thứ n, độ phức tạp thời gian của thuật toán là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(2^n)"
        ],
        "answer": 2,
        "explanation": "Mỗi bài toán con F(k) với 0 ≤ k ≤ n chỉ được tính đúng 1 lần và lưu vào mảng M[k], các lần sau tra cứu O(1) => O(n) (Slide tuần 2)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 1, 4, 2. Hỏi lời gọi hàm F(h, 3) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "20",
          "23",
          "26",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 3: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 23."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [25, 12, 38, 17, 9, 30] (chỉ số từ 0 đến 5). Hỏi lời gọi hàm cal(a, 0, 5) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "106",
          "101",
          "131",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[5]: 25 + 12 + 38 + 17 + 9 + 30 = 131."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "116",
          "127",
          "137",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 2 + 6 + 8 + 11 + 13 + 17 = 127."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Cây nhị phân hoàn chỉnh (Complete Binary Tree) có độ sâu n (gốc ở độ sâu 1) có số lượng nút nằm trong khoảng nào?",
        "code": "",
        "options": [
          "Từ 2^(n-1) đến 2^n - 1",
          "Từ 2^n đến 2^(n+1) - 1",
          "Từ n đến 2n - 1",
          "Luôn bằng 2^n - 1"
        ],
        "answer": 0,
        "explanation": "Từ độ sâu 1 đến n-1 là cây nhị phân đầy đủ có 2^(n-1) - 1 nút, tầng n có ít nhất 1 nút và nhiều nhất 2^(n-1) nút => tổng từ 2^(n-1) đến 2^n - 1 (Slide tuần 9)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 3 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "7",
          "8",
          "5"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 3, số bước là 2^3 - 1 = 7."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nHỏi lời gọi hàm cal(13, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (11) có d = 1. Đi theo đường đi từ gốc xuống nút 13 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int s = 0;\n    for (int i = 1; i * i <= n; i++)\n        if (n % i == 0) s += i;\n    return s;\n}",
        "options": [
          "O(log n)",
          "O(√n)",
          "O(n)",
          "O(n √n)"
        ],
        "answer": 1,
        "explanation": "Điều kiện dừng i² ≤ n ⇔ i ≤ √n nên vòng lặp chạy ⌊√n⌋ lần => O(√n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 17 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "49",
          "79",
          "66",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 17. Tổng các lá trong cây con này bằng 49."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 8 nút với dãy khóa: 4, 8, 12, 16, 20, 24, 28, 32. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "16",
          "20",
          "24",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 20."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(30, 12) trả về giá trị nào (tổng số lần gọi hàm F)?",
        "code": "int F(int a, int b) {\n    if (a == b) return 1;\n    if (a > b) return 1 + F(a - b, b);\n    else return 1 + F(a, b - a);\n}",
        "options": [
          "3",
          "4",
          "5",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm đếm số lần gọi đệ quy cho đến khi a == b. Quá trình giảm (30, 12) thực hiện đúng 4 lời gọi hàm."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [25, 12, 38, 17, 9, 30] (chỉ số 0 đến 5). Hỏi lời gọi hàm F(a, 0, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return 0;\n    if (i == j) return (a[i] > 25) ? 1 : 0;\n    int m = (i + j) / 2;\n    return F(a, i, m) + F(a, m + 1, j);\n}",
        "options": [
          "1",
          "2",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia để trị đếm số lượng phần tử trong mảng lớn hơn 25. Có 2 phần tử thỏa mãn."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nHỏi lời gọi hàm cal(2, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (d <= k)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    return 0;\n}",
        "options": [
          "31",
          "34",
          "38",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút có độ sâu d ≤ 2 (gốc ở mức 1 và các con trực tiếp ở mức 2). Tổng bằng 34."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 1, 6, 11, 14 và h2 trỏ đến đầu danh sách có khóa: 3, 8, 12, 19. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "1, 6, 11, 14, 3, 8, 12, 19",
          "1, 3, 6, 8, 11, 12, 14, 19",
          "19, 14, 12, 11, 8, 6, 3, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 3, 6, 8, 11, 12, 14, 19."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Trong bài toán Người du lịch (TSP) gồm n thành phố, không gian tìm kiếm của thuật toán duyệt toàn bộ bằng quay lui có kích thước là bao nhiêu?",
        "code": "",
        "options": [
          "O(2^n)",
          "O(n^2)",
          "O((n - 1)!)",
          "O(n^n)"
        ],
        "answer": 2,
        "explanation": "Xuất phát từ thành phố 1, mỗi hành trình tương ứng 1-1 với một hoán vị của n-1 thành phố còn lại => có (n-1)! hành trình (Slide tuần 4)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [3, -5, 6, -2, 1, 4, -9]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "7",
          "9",
          "14",
          "12"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [3, -2, 6, 4, 5, 9, 0]. Giá trị lớn nhất trong mảng S là 9."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[0,4], [2,3], [3,6], [5,7], [6,8], [7,10], [9,11]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [2,3], [3,6], [6,8], [9,11]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi liệt kê tất cả các hoán vị của (1, 2, 3, 4) theo thứ tự từ điển bằng thuật toán quay lui, hoán vị thứ 7 được in ra (tính từ 1) là hoán vị nào?",
        "code": "",
        "options": [
          "(1, 4, 3, 2)",
          "(2, 1, 3, 4)",
          "(2, 1, 4, 3)",
          "(4, 3, 1, 2)"
        ],
        "answer": 1,
        "explanation": "Liệt kê theo thứ tự từ điển từ (1, 2, 3, 4), hoán vị ở vị trí thứ 7 là (2, 1, 3, 4)."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"{[()()]()}\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"{[()()]()}\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 5, 7, 6, 4, 2, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 5, 4, 7, 6, 2, 1, 3. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 5."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "void f(int n) {\n    if (n <= 1) return;\n    for (int i = 0; i < 3; i++) f(n / 3);\n    for (int j = 0; j < n; j++) {}\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(3^n)"
        ],
        "answer": 1,
        "explanation": "T(n) = 3T(n/3) + O(n). Theo định lý thợ (Master Theorem), a=3, b=3, n^(log_3 3) = n => O(n log n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 7 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 4 thành phố (1 → u₂ → ... → u_4) với tổng chi phí là σ = 22. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 5. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "37",
          "42",
          "52",
          "42"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 7 - 4 + 1 = 4 chặng nữa, mỗi chặng tối thiểu c_min = 5. Vậy g = σ + (n - k + 1)·c_min = 22 + 4×5 = 42."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính hệ số nhị thức C(k, n):\nKhi thực hiện lời gọi C(3, 5), hàm C được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int C(int k, int n) {\n    if (k == 0 || k == n) return 1;\n    return C(k - 1, n - 1) + C(k, n - 1);\n}",
        "options": [
          "9",
          "19",
          "21",
          "32"
        ],
        "answer": 1,
        "explanation": "Cây đệ quy nhị phân của C(3, 5) có đúng C(3, 5) nút lá, nên tổng số nút trên cây (tổng số lời gọi hàm) là 2·C(3, 5) - 1 = 19."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cấu trúc dữ liệu cây tổng quát biểu diễn bằng con trỏ con cực trái (leftMostChild) và em kế cận phải (rightSibling). Hàm height(Node* p) dưới đây thực hiện chức năng gì?",
        "code": "int height(Node* p) {\n    if (p == NULL) return 0;\n    int maxh = 0;\n    Node* q = p->leftMostChild;\n    while (q != NULL) {\n        int h = height(q);\n        if (h > maxh) maxh = h;\n        q = q->rightSibling;\n    }\n    return maxh + 1;\n}",
        "options": [
          "Độ sâu của nút p tính từ gốc",
          "Chiều cao của cây con gốc p (tính theo số nút trên đường đi dài nhất tới lá)",
          "Tổng số nút con trực tiếp (bậc) của nút p",
          "Tổng số nút lá trong cây con gốc p"
        ],
        "answer": 1,
        "explanation": "Hàm duyệt qua tất cả các con trực tiếp q của p thông qua chuỗi rightSibling, tìm chiều cao lớn nhất maxh của các cây con rồi cộng thêm 1 (Slide tuần 9)."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Danh sách liên kết",
        "difficulty": "Khó",
        "text": "Cho h là con trỏ trỏ đến nút đầu tiên của danh sách liên kết đơn có dãy khóa: 5, 10, 14, 3, 7, 2. Hãy điền giá trị số nguyên mà lời gọi hàm eval(h) trả về:",
        "code": "int eval(Node h) {\n    if (h == NULL || h.next == NULL) return 0;\n    int pick = (h.key > h.next.key) ? h.key : h.next.key;\n    return pick + eval(h.next.next);\n}",
        "answer": "31",
        "accepted": [
          "31"
        ],
        "explanation": "Hàm xét từng cặp nút kề nhau (h, h.next), lấy khóa lớn hơn rồi nhảy cóc 2 nút: max(5, 10) + max(14, 3) + max(7, 2) = 31."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Khó",
        "text": "Trong bài toán Tìm đường đi ngắn nhất thoát khỏi mê cung bằng hàng đợi BFS (Slide tuần 8, 0 là ô trống, 1 là tường, thoát ra ngoài biên ma trận là đích, ghi -1 nếu không thoát được). Với dữ liệu đầu vào (N M r c và ma trận) dưới đây, chương trình xuất ra số nguyên nào?",
        "code": "4 4 2 2\n1 0 1 1\n1 0 0 1\n1 1 0 1\n1 1 1 1",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "explanation": "Dùng BFS loang từ ô xuất phát: (2,2) -> (1,2) -> thoát ra biên trên ở bước thứ 2."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 11\n• Nút 11 có con trái là 6 và con phải là 17\n• Nút 6 có con trái là 2 và con phải là 8\n• Nút 17 có con trái là 13 và con phải là 22\n• Nút 2 có con phải là 4\n• Nút 8 có con trái là 7 và con phải là 10\n• Nút 13 có con trái là 12 và con phải là 15\nHãy điền giá trị số nguyên mà lời gọi hàm cal(r) dưới đây trả về:",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "answer": "57",
        "accepted": [
          "57"
        ],
        "explanation": "Hàm bỏ qua các nút lá (trả về 0) và cộng khóa của tất cả các nút trong (nút có ít nhất 1 con). Tổng bằng 57."
      }
    ]
  },
  {
    "id": 7,
    "title": "Đề số 07 — Giải thuật Tham lam, Chia để trị & Con trỏ",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 15, 2, 8, 6, 11, 4. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return 0;\n    return h.next.key + eval(h.next.next);\n}",
        "options": [
          "8",
          "12",
          "17",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí chẵn (tính từ 1): 2 + 6 + 4 = 12."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int s = 0;\n    for (int i = 1; i <= 2 * n + 5; i += 2)\n        s++;\n    return s;\n}",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Số bước lặp xấp xỉ (2n + 5)/2 = n + 2.5, bỏ qua hằng số ta được O(n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "Q là một hàng đợi ban đầu rỗng với hai thao tác Q.PUSH(x) và Q.POP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // Q là hàng đợi (FIFO) ban đầu rỗng\n    for (int i = 1; i <= 7; i++) Q.PUSH(i * 2);\n    for (int j = 1; j <= 4; j++) Q.POP();\n    Q.PUSH(33);\n    int res = Q.POP();\n    print(res);\n}",
        "options": [
          "8",
          "10",
          "33",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Ban đầu Q chứa [2, 4, 6, 8, 10, 12, 14]. Sau 4 lần POP đầu hàng đợi, phần tử đầu tiếp theo là 10. Lệnh PUSH(33) đưa 33 vào cuối hàng đợi nên POP tiếp theo lấy ra 10."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự trước (Preorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "1, 3, 4, 6, 8, 10, 12, 14, 17, 20, 23, 26",
          "14, 6, 3, 1, 4, 10, 8, 12, 20, 17, 26, 23",
          "1, 4, 3, 8, 12, 10, 6, 17, 23, 26, 20, 14",
          "23, 26, 17, 20, 12, 8, 10, 4, 1, 3, 6, 14"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự trước (Preorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 14, ta thu được dãy: 14, 6, 3, 1, 4, 10, 8, 12, 20, 17, 26, 23."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 4, 11, 8, 2, 16, 9. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "4, 11, 8, 2, 16, 9",
          "9, 16, 2, 8, 11, 4",
          "11, 8, 2, 16, 9",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 9, 16, 2, 8, 11, 4."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Mức (hay độ sâu) của mỗi nút trên cây nhị phân được định nghĩa bằng độ dài đường đi từ gốc đến nút đó cộng 1 (mức của nút gốc bằng 1). Hỏi trên một cây nhị phân có thể có tối đa bao nhiêu nút ở độ sâu bằng 5?",
        "code": "",
        "options": [
          "8",
          "16",
          "17",
          "32"
        ],
        "answer": 1,
        "explanation": "Với mức gốc là 1, số nút tối đa ở mức d là 2^(d-1). Tại d = 5, số nút tối đa là 2^(5-1) = 16."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Trên danh sách liên kết đơn chỉ lưu con trỏ đầu danh sách (head), thao tác chèn một phần tử mới vào CUỐI danh sách (insertLast) có độ phức tạp là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "Phải duyệt từ head qua toàn bộ n nút để tìm phần tử cuối cùng (findLastNode) trước khi nối nút mới => O(n) (Slide tuần 7)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 3, 2, 1. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "15",
          "17",
          "19",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 17."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [11, 33, 19, 26, 14] (chỉ số từ 0 đến 4). Hỏi lời gọi hàm cal(a, 0, 4) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "92",
          "89",
          "103",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[4]: 11 + 33 + 19 + 26 + 14 = 103."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "130",
          "144",
          "154",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 3 + 6 + 10 + 14 + 20 + 26 = 144."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Khi biểu diễn cây nhị phân hoàn chỉnh bằng mảng 1-based A[1..n] (gốc tại A[1]), nút A[i] (với i > 1) có nút cha và nút con phải nằm ở vị trí nào?",
        "code": "",
        "options": [
          "Cha: A[i/2], Con phải: A[2i + 1]",
          "Cha: A[i-1], Con phải: A[2i]",
          "Cha: A[2i], Con phải: A[i/2]",
          "Cha: A[(i-1)/2], Con phải: A[2i + 2]"
        ],
        "answer": 0,
        "explanation": "Với chỉ số gốc tại 1: con trái là 2i, con phải là 2i+1, nút cha là ⌊i/2⌋ (Slide tuần 9)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 4 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "15",
          "16",
          "7"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 4, số bước là 2^4 - 1 = 15."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nHỏi lời gọi hàm cal(26, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (14) có d = 1. Đi theo đường đi từ gốc xuống nút 26 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i *= 2)\n        for (int j = 1; j <= i; j++)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Tổng số bước lặp là 1 + 2 + 4 + ... + 2^k = 2^(k+1) - 1 ≤ 2n => O(n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 6 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "25",
          "44",
          "31",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 6. Tổng các lá trong cây con này bằng 25."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 9 nút với dãy khóa: 7, 14, 21, 28, 35, 42, 49, 56, 63. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "35",
          "42",
          "49",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 42."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(16, 24) trả về giá trị nào?",
        "code": "int F(int a, int b) {\n    if (a == b) return a;\n    if (a > b) return F(a - b, b);\n    else return F(a, b - a);\n}",
        "options": [
          "1",
          "8",
          "8",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Thuật toán Euclid bằng phép trừ tìm ước chung lớn nhất ƯCLN(16, 24) = 8."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [11, 33, 19, 26, 14] (chỉ số 0 đến 4). Hỏi lời gọi hàm F(a, 0, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return -1000000;\n    if (i == j) return a[i];\n    int m = (i + j) / 2;\n    int t1 = F(a, i, m);\n    int t2 = F(a, m + 1, j);\n    return (t1 > t2) ? t1 : t2;\n}",
        "options": [
          "11",
          "33",
          "19",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia đôi mảng thành [i..m] và [m+1..j] rồi lấy giá trị lớn hơn giữa hai nửa => tìm phần tử lớn nhất của mảng là 33."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nHỏi lời gọi hàm cal(3, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k == d) return r.key;\n    return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "53",
          "56",
          "60",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút nằm ở đúng mức d = 3 (tính gốc mức 1). Tổng bằng 56."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 2, 5, 10, 17 và h2 trỏ đến đầu danh sách có khóa: 1, 7, 13, 22. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "2, 5, 10, 17, 1, 7, 13, 22",
          "1, 2, 5, 7, 10, 13, 17, 22",
          "22, 17, 13, 10, 7, 5, 2, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 2, 5, 7, 10, 13, 17, 22."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Thuật toán liệt kê tất cả các xâu nhị phân độ dài n bằng quay lui thực hiện bao nhiêu lời gọi tới hàm solution()?",
        "code": "",
        "options": [
          "n",
          "n^2",
          "2^n",
          "n!"
        ],
        "answer": 2,
        "explanation": "Có tất cả 2^n xâu nhị phân độ dài n, mỗi xâu hợp lệ tại k = n gọi hàm solution() đúng 1 lần => 2^n lần (Slide tuần 3)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-7, 2, 4, -1, 3, -6, 5]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "6",
          "8",
          "14",
          "11"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-7, 2, 6, 5, 8, 2, 7]. Giá trị lớn nhất trong mảng S là 8."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[1,5], [2,3], [3,4], [4,7], [6,8], [8,9], [7,11]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [2,3], [3,4], [4,7], [8,9]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi sử dụng thuật toán đệ quy quay lui liệt kê tất cả các xâu nhị phân độ dài n = 4 theo thứ tự từ điển (thử v từ 0 đến 1), xâu nhị phân thứ 8 được sinh ra (tính từ 1) là xâu nào?",
        "code": "",
        "options": [
          "0110",
          "0111",
          "1000",
          "1110"
        ],
        "answer": 1,
        "explanation": "Xâu thứ k trong thứ tự từ điển (tính từ 1) tương ứng biểu diễn nhị phân 4 bit của (k - 1) = 7 => 0111."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"((({}))[])\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"((({}))[])\", độ sâu ngăn xếp cực đại đạt được là 4."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 4, 5, 2, 6, 7, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 4, 2, 5, 1, 6, 3, 7. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 3."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 2; i <= n; i = i * i)\n        cnt++;\n    return cnt;\n}",
        "options": [
          "O(log log n)",
          "O(log n)",
          "O(√n)",
          "O(n)"
        ],
        "answer": 0,
        "explanation": "Sau k bước, i = 2^(2^k) ≤ n ⇔ 2^k ≤ log₂n ⇔ k ≤ log₂(log₂n) => O(log log n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 5 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 2 thành phố (1 → u₂ → ... → u_2) với tổng chi phí là σ = 11. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 6. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "29",
          "35",
          "35",
          "23"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 5 - 2 + 1 = 4 chặng nữa, mỗi chặng tối thiểu c_min = 6. Vậy g = σ + (n - k + 1)·c_min = 11 + 4×6 = 35."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm tính lũy thừa nhanh Pow(x, n) bằng phương pháp chia để trị:\nHỏi khi thực hiện lời gọi Pow(2, 19), hàm Pow được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int Pow(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 != 0) return x * Pow(x, n - 1);\n    int res = Pow(x, n / 2);\n    return res * res;\n}",
        "options": [
          "7",
          "8",
          "9",
          "19"
        ],
        "answer": 1,
        "explanation": "Theo dõi chuỗi tham số n giảm dần đến 0: mỗi bước lẻ trừ 1, mỗi bước chẵn chia đôi. Tổng số lần gọi hàm Pow là 8."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nKý hiệu r là con trỏ trỏ đến nút 6 trên cây T. Hỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    int h1 = cal(r.leftChild);\n    int h2 = cal(r.rightChild);\n    return max(h1, h2) + 1;\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính chiều cao (số nút trên đường đi dài nhất tới lá) của cây con gốc 6, kết quả bằng 3."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 14\n• Nút 14 có con trái là 6 và con phải là 20\n• Nút 6 có con trái là 3 và con phải là 10\n• Nút 20 có con trái là 17 và con phải là 26\n• Nút 3 có con trái là 1 và con phải là 4\n• Nút 10 có con trái là 8 và con phải là 12\n• Nút 26 có con trái là 23\nXét hàm cal bên dưới. Hãy điền giá trị số nguyên chính xác mà lời gọi hàm cal(3, r, 1) trả về:",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k <= d)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    else\n        return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "answer": "104",
        "accepted": [
          "104"
        ],
        "explanation": "Hàm cộng khóa của tất cả các nút có mức d ≥ 3 (tính nút gốc mức 1). Tổng khóa các nút ở mức 3 và mức 4 trên cây T là 104."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Khó",
        "text": "Áp dụng thuật toán Quy hoạch động tìm độ dài dãy con chung dài nhất (LCS - Slide tuần 6) cho hai xâu ký tự X = \"bacdb\" và Y = \"bdcb\". Hãy điền độ dài của dãy con chung dài nhất (một số nguyên):",
        "code": "",
        "answer": "3",
        "accepted": [
          "3"
        ],
        "explanation": "Lập bảng quy hoạch động S(i, j) cho X = \"bacdb\" và Y = \"bdcb\", độ dài dãy con chung dài nhất thu được là 3."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Cho đoạn mã C sau đây. Hãy điền giá trị số nguyên chính xác của biến đếm/biến kết quả sau khi đoạn mã thực thi xong:",
        "code": "int cnt = 0;\nfor (int i = 1; i <= 12; i++)\n    for (int j = 1; j <= 12; j += i)\n        cnt++;",
        "answer": "35",
        "accepted": [
          "35"
        ],
        "explanation": "Số ước/bội: 12 + 6 + 4 + 3 + 3 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 35."
      }
    ]
  },
  {
    "id": 8,
    "title": "Đề số 08 — Biểu diễn Cây tổng quát & Thuật toán BFS",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 3, 14, 5, 9, 2, 12, 7. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return h.key;\n    return h.key + eval(h.next.next);\n}",
        "options": [
          "13",
          "17",
          "22",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí lẻ (tính từ 1): 3 + 5 + 2 + 7 = 17."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int s = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= 100; j++)\n            s += i + j;\n    return s;\n}",
        "options": [
          "O(1)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Vòng lặp trong chạy cố định 100 lần (hằng số O(1)), vòng lặp ngoài chạy n lần => O(100n) = O(n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "S là một ngăn xếp ban đầu rỗng với các thao tác S.PUSH(x), S.POP() và S.TOP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // S là ngăn xếp (LIFO) ban đầu rỗng\n    for (int i = 1; i <= 9; i++) S.PUSH(i * 3);\n    for (int j = 1; j <= 3; j++) S.POP();\n    print(S.TOP());\n}",
        "options": [
          "18",
          "21",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Ngăn xếp S nhận vào [3, 6, 9, 12, 15, 18, 21, 24, 27] (đỉnh là 27). Sau 3 lần POP từ đỉnh, phần tử ở đỉnh ngăn xếp hiện tại là 18."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự giữa (Inorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "7, 3, 1, 5, 4, 6, 13, 10, 8, 11, 18, 15, 21",
          "1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 18, 21",
          "1, 4, 6, 5, 3, 8, 11, 10, 15, 21, 18, 13, 7",
          "21, 18, 15, 13, 11, 10, 8, 7, 6, 5, 4, 3, 1"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự giữa (Inorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 7, ta thu được dãy: 1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 18, 21."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 7, 1, 12, 5, 9, 3. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "7, 1, 12, 5, 9, 3",
          "3, 9, 5, 12, 1, 7",
          "1, 12, 5, 9, 3",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 3, 9, 5, 12, 1, 7."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Một cây nhị phân đầy đủ (Full Binary Tree) có chiều cao bằng 6 (nút gốc có mức 1, mọi nút lá đều ở mức 6) thì có tổng cộng bao nhiêu nút?",
        "code": "",
        "options": [
          "31",
          "63",
          "64",
          "126"
        ],
        "answer": 1,
        "explanation": "Tổng số nút của cây nhị phân đầy đủ chiều cao h là 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1 = 2^6 - 1 = 63."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Trên danh sách liên kết đơn chỉ lưu con trỏ đầu danh sách (head), thao tác chèn một phần tử mới vào ĐẦU danh sách (insertFirst) có độ phức tạp là bao nhiêu?",
        "code": "",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 0,
        "explanation": "Chỉ cần tạo nút mới, gán new_node->next = head và cập nhật head = new_node => thực hiện trong thời gian hằng số O(1) (Slide tuần 7)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 1, 1, 0, 1. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "11",
          "13",
          "15",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 13."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [20, 8, 45, 12, 28, 16] (chỉ số từ 0 đến 5). Hỏi lời gọi hàm cal(a, 0, 5) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "109",
          "113",
          "129",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[5]: 20 + 8 + 45 + 12 + 28 + 16 = 129."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "115",
          "122",
          "132",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 3 + 5 + 7 + 10 + 13 + 18 = 122."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Phát biểu nào sau đây về mối quan hệ giữa các loại cây nhị phân là ĐÚNG?",
        "code": "",
        "options": [
          "Mọi cây nhị phân cân đối đều là cây nhị phân hoàn chỉnh",
          "Nếu cây nhị phân là đầy đủ thì nó là hoàn chỉnh, và nếu nó là hoàn chỉnh thì nó là cân đối",
          "Cây nhị phân hoàn chỉnh bắt buộc mọi nút lá phải cùng độ sâu",
          "Cây nhị phân đầy đủ có thể có nút chỉ có 1 con"
        ],
        "answer": 1,
        "explanation": "Theo tính chất: Cây đầy đủ ⊂ Cây hoàn chỉnh ⊂ Cây cân đối (Slide tuần 9)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 5 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "16",
          "31",
          "32",
          "9"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 5, số bước là 2^5 - 1 = 31."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nHỏi lời gọi hàm cal(18, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (7) có d = 1. Đi theo đường đi từ gốc xuống nút 18 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "void f(int n) {\n    if (n <= 1) return;\n    f(n - 1);\n    for (int i = 1; i <= n; i++) printf(\"*\");\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2,
        "explanation": "Công thức truy hồi T(n) = T(n-1) + O(n) = n + (n-1) + ... + 1 = O(n²)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 13 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "55",
          "96",
          "68",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 13. Tổng các lá trong cây con này bằng 55."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 6 nút với dãy khóa: 11, 22, 33, 44, 55, 66. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "33",
          "44",
          "55",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 44."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(27, 18) trả về giá trị nào (tổng số lần gọi hàm F)?",
        "code": "int F(int a, int b) {\n    if (a == b) return 1;\n    if (a > b) return 1 + F(a - b, b);\n    else return 1 + F(a, b - a);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm đếm số lần gọi đệ quy cho đến khi a == b. Quá trình giảm (27, 18) thực hiện đúng 3 lời gọi hàm."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [20, 8, 45, 12, 28, 16] (chỉ số 0 đến 5). Hỏi lời gọi hàm F(a, 0, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return 0;\n    if (i == j) return (a[i] > 20) ? 1 : 0;\n    int m = (i + j) / 2;\n    return F(a, i, m) + F(a, m + 1, j);\n}",
        "options": [
          "1",
          "2",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia để trị đếm số lượng phần tử trong mảng lớn hơn 20. Có 2 phần tử thỏa mãn."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nHỏi lời gọi hàm cal(2, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (d <= k)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    return 0;\n}",
        "options": [
          "20",
          "23",
          "27",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút có độ sâu d ≤ 2 (gốc ở mức 1 và các con trực tiếp ở mức 2). Tổng bằng 23."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 3, 9, 14, 20 và h2 trỏ đến đầu danh sách có khóa: 4, 6, 11, 18. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "3, 9, 14, 20, 4, 6, 11, 18",
          "3, 4, 6, 9, 11, 14, 18, 20",
          "20, 18, 14, 11, 9, 6, 4, 3",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 3, 4, 6, 9, 11, 14, 18, 20."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Trong bài toán liệt kê hoán vị n phần tử bằng quay lui, việc dùng mảng đánh dấu used[v] giúp giảm độ phức tạp của bước kiểm tra check(v, k) từ bao nhiêu xuống O(1)?",
        "code": "",
        "options": [
          "Từ O(n) xuống O(1)",
          "Từ O(log n) xuống O(1)",
          "Từ O(n^2) xuống O(1)",
          "Từ O(2^n) xuống O(1)"
        ],
        "answer": 0,
        "explanation": "Thay vì duyệt vòng lặp for từ 1 đến k-1 mất O(n) để kiểm tra v đã xuất hiện chưa, mảng used[v] kiểm tra trực tiếp trong O(1) (Slide tuần 3)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-3, 8, -4, 1, 2, -5, 3]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "6",
          "8",
          "14",
          "11"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-3, 8, 4, 5, 7, 2, 5]. Giá trị lớn nhất trong mảng S là 8."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[0,3], [1,4], [3,5], [4,6], [6,9], [7,8], [8,10]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [0,3], [3,5], [7,8], [8,10]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi liệt kê tất cả các hoán vị của (1, 2, 3, 4) theo thứ tự từ điển bằng thuật toán quay lui, hoán vị thứ 9 được in ra (tính từ 1) là hoán vị nào?",
        "code": "",
        "options": [
          "(2, 1, 4, 3)",
          "(2, 3, 1, 4)",
          "(2, 3, 4, 1)",
          "(4, 1, 3, 2)"
        ],
        "answer": 1,
        "explanation": "Liệt kê theo thứ tự từ điển từ (1, 2, 3, 4), hoán vị ở vị trí thứ 9 là (2, 3, 1, 4)."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"[()[{}]]()\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"[()[{}]]()\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 3, 7, 8, 6, 15, 18, 12 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 3, 6, 7, 8, 12, 15, 18. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (12) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 4."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= i; j *= 2)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log^2 n)"
        ],
        "answer": 1,
        "explanation": "Tổng ∑_{i=1..n} (⌊log₂i⌋ + 1) = Θ(log(n!)) = Θ(n log n) theo công thức Stirling."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 6 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 3 thành phố (1 → u₂ → ... → u_3) với tổng chi phí là σ = 15. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 5. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "30",
          "35",
          "40",
          "30"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 6 - 3 + 1 = 4 chặng nữa, mỗi chặng tối thiểu c_min = 5. Vậy g = σ + (n - k + 1)·c_min = 15 + 4×5 = 35."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính số Fibonacci F(n):\nKhi thực hiện lời gọi F(6), hàm F(1) được gọi bao nhiêu lần?",
        "code": "int F(int n) {\n    if (n < 2) return n;\n    return F(n - 1) + F(n - 2);\n}",
        "options": [
          "6",
          "8",
          "11",
          "32"
        ],
        "answer": 1,
        "explanation": "Khai triển cây đệ quy của F(6), số lần xuất hiện của nút F(1) là 8."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cấu trúc dữ liệu cây tổng quát biểu diễn bằng con trỏ con cực trái (leftMostChild) và em kế cận phải (rightSibling). Hàm height(Node* p) dưới đây thực hiện chức năng gì?",
        "code": "int height(Node* p) {\n    if (p == NULL) return 0;\n    int maxh = 0;\n    Node* q = p->leftMostChild;\n    while (q != NULL) {\n        int h = height(q);\n        if (h > maxh) maxh = h;\n        q = q->rightSibling;\n    }\n    return maxh + 1;\n}",
        "options": [
          "Độ sâu của nút p tính từ gốc",
          "Chiều cao của cây con gốc p (tính theo số nút trên đường đi dài nhất tới lá)",
          "Tổng số nút con trực tiếp (bậc) của nút p",
          "Tổng số nút lá trong cây con gốc p"
        ],
        "answer": 1,
        "explanation": "Hàm duyệt qua tất cả các con trực tiếp q của p thông qua chuỗi rightSibling, tìm chiều cao lớn nhất maxh của các cây con rồi cộng thêm 1 (Slide tuần 9)."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Danh sách liên kết",
        "difficulty": "Khó",
        "text": "Cho h là con trỏ trỏ đến nút đầu tiên của danh sách liên kết đơn có dãy khóa: 9, 4, 2, 8, 13, 6. Hãy điền giá trị số nguyên mà lời gọi hàm eval(h) trả về:",
        "code": "int eval(Node h) {\n    if (h == NULL || h.next == NULL) return 0;\n    int pick = (h.key > h.next.key) ? h.key : h.next.key;\n    return pick + eval(h.next.next);\n}",
        "answer": "30",
        "accepted": [
          "30"
        ],
        "explanation": "Hàm xét từng cặp nút kề nhau (h, h.next), lấy khóa lớn hơn rồi nhảy cóc 2 nút: max(9, 4) + max(2, 8) + max(13, 6) = 30."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Khó",
        "text": "Trong bài toán Tìm đường đi ngắn nhất thoát khỏi mê cung bằng hàng đợi BFS (Slide tuần 8, 0 là ô trống, 1 là tường, thoát ra ngoài biên ma trận là đích, ghi -1 nếu không thoát được). Với dữ liệu đầu vào (N M r c và ma trận) dưới đây, chương trình xuất ra số nguyên nào?",
        "code": "5 5 3 3\n1 1 1 1 1\n1 0 0 0 1\n1 0 0 0 1\n1 1 1 0 1\n1 1 1 0 1",
        "answer": "4",
        "accepted": [
          "4"
        ],
        "explanation": "Dùng BFS loang từ ô xuất phát: (3,3) -> (3,4) -> (4,4) -> (5,4) -> thoát ra biên dưới ở bước thứ 4."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 7\n• Nút 7 có con trái là 3 và con phải là 13\n• Nút 3 có con trái là 1 và con phải là 5\n• Nút 13 có con trái là 10 và con phải là 18\n• Nút 5 có con trái là 4 và con phải là 6\n• Nút 10 có con trái là 8 và con phải là 11\n• Nút 18 có con trái là 15 và con phải là 21\nHãy điền giá trị số nguyên mà lời gọi hàm cal(r) dưới đây trả về:",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "answer": "56",
        "accepted": [
          "56"
        ],
        "explanation": "Hàm bỏ qua các nút lá (trả về 0) và cộng khóa của tất cả các nút trong (nút có ít nhất 1 con). Tổng bằng 56."
      }
    ]
  },
  {
    "id": 9,
    "title": "Đề số 09 — Tổng hợp Nâng cao Độ phức tạp & Cây nhị phân",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 11, 6, 4, 13, 9, 2. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return 0;\n    return h.next.key + eval(h.next.next);\n}",
        "options": [
          "17",
          "21",
          "26",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí chẵn (tính từ 1): 6 + 13 + 2 = 21."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int x = 1;\n    while (x < n)\n        x = x << 1;\n    return x;\n}",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Toán tử dịch trái x << 1 tương đương nhân đôi x (x = 2x), do đó vòng lặp chạy ⌈log₂n⌉ lần => O(log n)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "Q là một hàng đợi ban đầu rỗng với hai thao tác Q.PUSH(x) và Q.POP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // Q là hàng đợi (FIFO) ban đầu rỗng\n    for (int i = 1; i <= 8; i++) Q.PUSH(i * 2);\n    for (int j = 1; j <= 5; j++) Q.POP();\n    Q.PUSH(22);\n    int res = Q.POP();\n    print(res);\n}",
        "options": [
          "10",
          "12",
          "22",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Ban đầu Q chứa [2, 4, 6, 8, 10, 12, 14, 16]. Sau 5 lần POP đầu hàng đợi, phần tử đầu tiếp theo là 12. Lệnh PUSH(22) đưa 22 vào cuối hàng đợi nên POP tiếp theo lấy ra 12."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự sau (Postorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "13, 5, 2, 1, 8, 6, 10, 19, 15, 14, 17, 24",
          "1, 2, 6, 10, 8, 5, 14, 17, 15, 24, 19, 13",
          "1, 2, 5, 6, 8, 10, 13, 14, 15, 17, 19, 24",
          "13, 19, 24, 15, 17, 14, 5, 8, 10, 6, 2, 1"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự sau (Postorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 13, ta thu được dãy: 1, 2, 6, 10, 8, 5, 14, 17, 15, 24, 19, 13."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 2, 9, 15, 4, 8, 11. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "2, 9, 15, 4, 8, 11",
          "11, 8, 4, 15, 9, 2",
          "9, 15, 4, 8, 11",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 11, 8, 4, 15, 9, 2."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Mức (hay độ sâu) của mỗi nút trên cây nhị phân được định nghĩa bằng độ dài đường đi từ gốc đến nút đó cộng 1 (mức của nút gốc bằng 1). Hỏi trên một cây nhị phân có thể có tối đa bao nhiêu nút ở độ sâu bằng 3?",
        "code": "",
        "options": [
          "2",
          "4",
          "5",
          "8"
        ],
        "answer": 1,
        "explanation": "Với mức gốc là 1, số nút tối đa ở mức d là 2^(d-1). Tại d = 3, số nút tối đa là 2^(3-1) = 4."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Thuật toán tìm kiếm theo chiều rộng (BFS) tìm đường đi ngắn nhất thoát khỏi mê cung kích thước N × M có độ phức tạp thời gian là bao nhiêu?",
        "code": "",
        "options": [
          "O(N + M)",
          "O(N · M)",
          "O((N · M)²)",
          "O(2^(N+M))"
        ],
        "answer": 1,
        "explanation": "Mỗi ô (i, j) trong ma trận N × M được đưa vào hàng đợi và thăm tối đa 1 lần nhờ mảng visited[i][j] => O(N · M) (Slide tuần 8)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 2, 0, 3. Hỏi lời gọi hàm F(h, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "48",
          "53",
          "58",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 5: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 53."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [15, 27, 9, 34, 22] (chỉ số từ 0 đến 4). Hỏi lời gọi hàm cal(a, 0, 4) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "92",
          "85",
          "107",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[4]: 15 + 27 + 9 + 34 + 22 = 107."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "121",
          "134",
          "144",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 2 + 5 + 8 + 13 + 15 + 19 = 134."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Trong thuật toán kiểm tra tính cân xứng của dãy ngoặc bằng ngăn xếp S, trường hợp nào sau đây kết luận dãy ngoặc KHÔNG cân xứng ngay trong quá trình duyệt?",
        "code": "",
        "options": [
          "Gặp ngoặc mở khi ngăn xếp S đang rỗng",
          "Gặp ngoặc đóng khi ngăn xếp S đang rỗng",
          "Ngăn xếp S có nhiều hơn 2 ngoặc mở liên tiếp",
          "Gặp cặp ngoặc () lồng bên trong []"
        ],
        "answer": 1,
        "explanation": "Khi gặp ngoặc đóng mà ngăn xếp S rỗng nghĩa là thiếu ngoặc mở tương ứng phía trước => không cân xứng (Slide tuần 8)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 6 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "32",
          "63",
          "64",
          "11"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 6, số bước là 2^6 - 1 = 63."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nHỏi lời gọi hàm cal(15, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (13) có d = 1. Đi theo đường đi từ gốc xuống nút 15 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    if (n <= 1) return 1;\n    return f(n / 2) + f(n / 2);\n}",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(2^n)"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi T(n) = 2T(n/2) + O(1). Cây đệ quy có 2^(log₂n) = n nút lá => O(n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 5 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "17",
          "32",
          "22",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 5. Tổng các lá trong cây con này bằng 17."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 10 nút với dãy khóa: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "14",
          "17",
          "20",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 17."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(20, 35) trả về giá trị nào?",
        "code": "int F(int a, int b) {\n    if (a == b) return a;\n    if (a > b) return F(a - b, b);\n    else return F(a, b - a);\n}",
        "options": [
          "1",
          "5",
          "15",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Thuật toán Euclid bằng phép trừ tìm ước chung lớn nhất ƯCLN(20, 35) = 5."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [15, 27, 9, 34, 22] (chỉ số 0 đến 4). Hỏi lời gọi hàm F(a, 0, 4) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return -1000000;\n    if (i == j) return a[i];\n    int m = (i + j) / 2;\n    int t1 = F(a, i, m);\n    int t2 = F(a, m + 1, j);\n    return (t1 > t2) ? t1 : t2;\n}",
        "options": [
          "9",
          "34",
          "9",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia đôi mảng thành [i..m] và [m+1..j] rồi lấy giá trị lớn hơn giữa hai nửa => tìm phần tử lớn nhất của mảng là 34."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nHỏi lời gọi hàm cal(3, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k == d) return r.key;\n    return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "46",
          "49",
          "53",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút nằm ở đúng mức d = 3 (tính gốc mức 1). Tổng bằng 49."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 1, 7, 12, 16 và h2 trỏ đến đầu danh sách có khóa: 2, 5, 9, 21. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "1, 7, 12, 16, 2, 5, 9, 21",
          "1, 2, 5, 7, 9, 12, 16, 21",
          "21, 16, 12, 9, 7, 5, 2, 1",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 1, 2, 5, 7, 9, 12, 16, 21."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Thao tác đảo ngược danh sách liên kết đơn gồm n nút bằng vòng lặp sử dụng 3 con trỏ (pre, cur, next) có độ phức tạp thời gian và không gian phụ là bao nhiêu?",
        "code": "",
        "options": [
          "Thời gian O(n), Không gian O(1)",
          "Thời gian O(n), Không gian O(n)",
          "Thời gian O(n^2), Không gian O(1)",
          "Thời gian O(log n), Không gian O(1)"
        ],
        "answer": 0,
        "explanation": "Vòng lặp duyệt qua mỗi nút đúng 1 lần (O(n)) và chỉ dùng thêm 3 biến con trỏ cố định (O(1)) (Slide tuần 7)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [1, -4, 5, -2, 6, -3, 2]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "7",
          "9",
          "14",
          "12"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [1, -3, 5, 3, 9, 6, 8]. Giá trị lớn nhất trong mảng S là 9."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[1,2], [2,4], [3,5], [4,7], [5,6], [6,8], [8,9]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 5 đoạn: [1,2], [2,4], [5,6], [6,8], [8,9]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi sử dụng thuật toán đệ quy quay lui liệt kê tất cả các xâu nhị phân độ dài n = 4 theo thứ tự từ điển (thử v từ 0 đến 1), xâu nhị phân thứ 9 được sinh ra (tính từ 1) là xâu nào?",
        "code": "",
        "options": [
          "0111",
          "1000",
          "1001",
          "0001"
        ],
        "answer": 1,
        "explanation": "Xâu thứ k trong thứ tự từ điển (tính từ 1) tương ứng biểu diễn nhị phân 4 bit của (k - 1) = 8 => 1000."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"{([][])}()\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"{([][])}()\", độ sâu ngăn xếp cực đại đạt được là 3."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 5, 7, 6, 4, 2, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 5, 4, 7, 6, 2, 1, 3. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 5."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "void f(int n) {\n    if (n <= 1) return;\n    f(n - 1);\n    f(n - 1);\n    for (int i = 1; i <= n; i++) {}\n}",
        "options": [
          "O(2^n)",
          "O(n · 2^n)",
          "O(n^2)",
          "O(n!)"
        ],
        "answer": 1,
        "explanation": "T(n) = 2T(n-1) + O(n). Tại tầng k có 2^k lời gọi, mỗi lời gọi tốn (n-k), tổng hợp lại là O(n · 2^n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 5 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 3 thành phố (1 → u₂ → ... → u_3) với tổng chi phí là σ = 19. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 2. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "23",
          "25",
          "27",
          "25"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 5 - 3 + 1 = 3 chặng nữa, mỗi chặng tối thiểu c_min = 2. Vậy g = σ + (n - k + 1)·c_min = 19 + 3×2 = 25."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm đệ quy không có nhớ tính hệ số nhị thức C(k, n):\nKhi thực hiện lời gọi C(2, 6), hàm C được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int C(int k, int n) {\n    if (k == 0 || k == n) return 1;\n    return C(k - 1, n - 1) + C(k, n - 1);\n}",
        "options": [
          "14",
          "29",
          "31",
          "64"
        ],
        "answer": 1,
        "explanation": "Cây đệ quy nhị phân của C(2, 6) có đúng C(2, 6) nút lá, nên tổng số nút trên cây (tổng số lời gọi hàm) là 2·C(2, 6) - 1 = 29."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nKý hiệu r là con trỏ trỏ đến nút 19 trên cây T. Hỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    int h1 = cal(r.leftChild);\n    int h2 = cal(r.rightChild);\n    return max(h1, h2) + 1;\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính chiều cao (số nút trên đường đi dài nhất tới lá) của cây con gốc 19, kết quả bằng 3."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 13\n• Nút 13 có con trái là 5 và con phải là 19\n• Nút 5 có con trái là 2 và con phải là 8\n• Nút 19 có con trái là 15 và con phải là 24\n• Nút 2 có con trái là 1\n• Nút 8 có con trái là 6 và con phải là 10\n• Nút 15 có con trái là 14 và con phải là 17\nXét hàm cal bên dưới. Hãy điền giá trị số nguyên chính xác mà lời gọi hàm cal(3, r, 1) trả về:",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (k <= d)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    else\n        return cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n}",
        "answer": "97",
        "accepted": [
          "97"
        ],
        "explanation": "Hàm cộng khóa của tất cả các nút có mức d ≥ 3 (tính nút gốc mức 1). Tổng khóa các nút ở mức 3 và mức 4 trên cây T là 97."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Khó",
        "text": "Áp dụng thuật toán Quy hoạch động tìm độ dài dãy con chung dài nhất (LCS - Slide tuần 6) cho hai xâu ký tự X = \"xyzwx\" và Y = \"yxwz\". Hãy điền độ dài của dãy con chung dài nhất (một số nguyên):",
        "code": "",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "explanation": "Lập bảng quy hoạch động S(i, j) cho X = \"xyzwx\" và Y = \"yxwz\", độ dài dãy con chung dài nhất thu được là 2."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Cho đoạn mã C sau đây. Hãy điền giá trị số nguyên chính xác của biến đếm/biến kết quả sau khi đoạn mã thực thi xong:",
        "code": "int cnt = 0;\nfor (int i = 100; i >= 1; i /= 2)\n    cnt++;",
        "answer": "7",
        "accepted": [
          "7"
        ],
        "explanation": "Các giá trị của i: 100, 50, 25, 12, 6, 3, 1 => có đúng 7 lần lặp."
      }
    ]
  },
  {
    "id": 10,
    "title": "Đề số 10 — Đề Tổng ôn Toàn diện Trước giờ G",
    "durationMinutes": 50,
    "totalQuestions": 33,
    "mcqCount": 30,
    "shortCount": 3,
    "questions": [
      {
        "id": 1,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Mỗi nút (Node) của một danh sách liên kết đơn có hai trường: key (khóa) và next (con trỏ đến nút tiếp theo). Xét hàm eval sau:\nCho h trỏ đến nút đầu tiên của danh sách có dãy khóa: 5, 8, 12, 3, 10, 7, 1. Hỏi lời gọi hàm eval(h) trả về giá trị bao nhiêu?",
        "code": "eval(Node h) {\n    if (h == NULL) return 0;\n    if (h.next == NULL) return h.key;\n    return h.key + eval(h.next.next);\n}",
        "options": [
          "24",
          "28",
          "33",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cộng dồn khóa ở các vị trí lẻ (tính từ 1): 5 + 12 + 10 + 1 = 28."
      },
      {
        "id": 2,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Xác định độ phức tạp thời gian tính của đoạn chương trình sau theo kích thước đầu vào n:",
        "code": "int f(int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            for (int k = 0; k < n; k++)\n                s++;\n    return s;\n}",
        "options": [
          "O(n^2)",
          "O(n^2 log n)",
          "O(n^3)",
          "O(3^n)"
        ],
        "answer": 2,
        "explanation": "Ba vòng lặp lồng nhau mỗi vòng chạy n lần => n × n × n = n³ phép toán => O(n³)."
      },
      {
        "id": 3,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Dễ",
        "text": "S là một ngăn xếp ban đầu rỗng với các thao tác S.PUSH(x), S.POP() và S.TOP(). Hỏi đoạn chương trình sau hiển thị kết quả gì?",
        "code": "main() {\n    // S là ngăn xếp (LIFO) ban đầu rỗng\n    for (int i = 1; i <= 10; i++) S.PUSH(i * 3);\n    for (int j = 1; j <= 3; j++) S.POP();\n    print(S.TOP());\n}",
        "options": [
          "21",
          "24",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Ngăn xếp S nhận vào [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] (đỉnh là 30). Sau 3 lần POP từ đỉnh, phần tử ở đỉnh ngăn xếp hiện tại là 21."
      },
      {
        "id": 4,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Cho cây nhị phân T có cấu trúc như sau:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nHỏi dãy khóa các nút được liệt kê khi duyệt cây T theo Thứ tự trước (Preorder) là dãy nào sau đây?",
        "code": "",
        "options": [
          "2, 4, 6, 9, 10, 12, 14, 16, 18, 20, 24, 29",
          "16, 9, 4, 2, 6, 12, 10, 14, 24, 20, 18, 29",
          "2, 6, 4, 10, 14, 12, 9, 18, 20, 29, 24, 16",
          "29, 18, 20, 24, 14, 10, 12, 6, 2, 4, 9, 16"
        ],
        "answer": 1,
        "explanation": "Áp dụng quy tắc duyệt Thứ tự trước (Preorder) (Gốc-Trái-Phải / Trái-Gốc-Phải / Trái-Phải-Gốc) từ gốc 16, ta thu được dãy: 16, 9, 4, 2, 6, 12, 10, 14, 24, 20, 18, 29."
      },
      {
        "id": 5,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm đệ quy process trên danh sách liên kết đơn:\nCho h là con trỏ trỏ đến nút đầu tiên của danh sách có dãy khóa: 8, 5, 13, 2, 10, 6. Khi gọi hàm process(h), kết quả in ra màn hình theo thứ tự nào?",
        "code": "process(Node h) {\n    if (h == NULL) return;\n    process(h.next);\n    print(h.key);\n}",
        "options": [
          "8, 5, 13, 2, 10, 6",
          "6, 10, 2, 13, 5, 8",
          "5, 13, 2, 10, 6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Lời gọi đệ quy process(h.next) thực hiện trước lệnh print(h.key), nên các khóa được in ra theo thứ tự ngược lại từ cuối về đầu: 6, 10, 2, 13, 5, 8."
      },
      {
        "id": 6,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Một cây nhị phân đầy đủ (Full Binary Tree) có chiều cao bằng 4 (nút gốc có mức 1, mọi nút lá đều ở mức 4) thì có tổng cộng bao nhiêu nút?",
        "code": "",
        "options": [
          "7",
          "15",
          "16",
          "30"
        ],
        "answer": 1,
        "explanation": "Tổng số nút của cây nhị phân đầy đủ chiều cao h là 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1 = 2^4 - 1 = 15."
      },
      {
        "id": 7,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Dễ",
        "text": "Độ phức tạp thời gian của thuật toán duyệt cây nhị phân gồm n nút theo thứ tự giữa (Inorder) là bao nhiêu?",
        "code": "",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1,
        "explanation": "Mỗi nút trên cây được thăm đúng một lần và thực hiện thao tác O(1) tại mỗi nút => O(n) (Slide tuần 9)."
      },
      {
        "id": 8,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Dễ",
        "text": "Xét hàm F sau trên danh sách liên kết đơn:\nBiết h trỏ đến nút đầu của danh sách có các giá trị từ đầu đến cuối là 4, 1, 3. Hỏi lời gọi hàm F(h, 2) trả về kết quả bằng bao nhiêu?",
        "code": "int F(Node* h, int v) {\n    int T = 0;\n    for (Node* p = h; p != NULL; p = p->next) {\n        T = T * v + p->value;\n    }\n    return T;\n}",
        "options": [
          "19",
          "21",
          "23",
          "Đáp án khác"
        ],
        "answer": 1,
        "explanation": "Hàm tính giá trị đa thức theo sơ đồ Horner cơ số v = 2: kết quả lần lượt cập nhật qua các nút và đạt giá trị cuối cùng là 21."
      },
      {
        "id": 9,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Cho hàm đệ quy cal tính trên mảng a với chỉ số chạy từ i đến j (i ≤ j):\nCho mảng a = [19, 41, 13, 23, 7, 32] (chỉ số từ 0 đến 5). Hỏi lời gọi hàm cal(a, 0, 5) trả về giá trị bao nhiêu?",
        "code": "int cal(int a[], int i, int j) {\n    if (i == j) return a[i];\n    return a[i] + cal(a, i + 1, j);\n}",
        "options": [
          "116",
          "103",
          "135",
          "Tất cả các phương án đều sai"
        ],
        "answer": 2,
        "explanation": "Hàm cộng dồn từng phần tử từ a[0] đến a[5]: 19 + 41 + 13 + 23 + 7 + 32 = 135."
      },
      {
        "id": 10,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Dễ",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nHỏi lời gọi hàm cal(r) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "148",
          "164",
          "174",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm cal(r) tính tổng khóa của tất cả các nút trên cây T: 4 + 9 + 12 + 16 + 20 + 24 = 164."
      },
      {
        "id": 11,
        "type": "mcq",
        "topic": "Chiến lược thuật toán",
        "difficulty": "Dễ",
        "text": "Trong bài toán tìm đường đi ngắn nhất thoát khỏi mê cung bằng BFS, tại sao thuật toán đảm bảo đường đi tìm được đầu tiên chạm biên mê cung luôn là đường đi ngắn nhất?",
        "code": "",
        "options": [
          "Vì BFS ưu tiên đi thẳng theo một hướng",
          "Vì BFS duyệt các trạng thái theo từng lớp khoảng cách (step) tăng dần nhờ hàng đợi FIFO",
          "Vì BFS sử dụng ngăn xếp LIFO để quay lui",
          "Vì BFS luôn chọn ô có tọa độ nhỏ nhất"
        ],
        "answer": 1,
        "explanation": "Hàng đợi FIFO đảm bảo mọi trạng thái cách xuất phát k bước được xử lý hết trước khi xét trạng thái cách k+1 bước (Slide tuần 8)."
      },
      {
        "id": 12,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Dễ",
        "text": "Trong bài toán Tháp Hà Nội (HanoiTower), để chuyển chồng gồm n = 7 đĩa từ cọc a sang cọc c sử dụng cọc b làm trung gian theo đúng quy tắc, tổng số lần di chuyển đĩa cần thực hiện là bao nhiêu?",
        "code": "",
        "options": [
          "64",
          "127",
          "128",
          "13"
        ],
        "answer": 1,
        "explanation": "Công thức truy hồi số bước chuyển là T(n) = 2T(n-1) + 1 = 2^n - 1. Với n = 7, số bước là 2^7 - 1 = 127."
      },
      {
        "id": 13,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal tìm mức của nút có khóa k trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nHỏi lời gọi hàm cal(20, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (r.key == k) return d;\n    int d1 = cal(k, r.leftChild, d + 1);\n    if (d1 > 0) return d1;\n    return cal(k, r.rightChild, d + 1);\n}",
        "options": [
          "2",
          "3",
          "4",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Nút gốc r (16) có d = 1. Đi theo đường đi từ gốc xuống nút 20 qua 2 cạnh nên mức tìm được là 3."
      },
      {
        "id": 14,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Xác định độ phức tạp thời gian tính của hàm sau theo n:",
        "code": "int f(int n) {\n    if (n <= 0) return 1;\n    return f(n - 1) + f(n - 1);\n}",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(2^n)",
          "O(n!)"
        ],
        "answer": 2,
        "explanation": "Công thức truy hồi T(n) = 2T(n-1) + O(1) tạo ra cây nhị phân đầy đủ độ sâu n với 2^(n+1) - 1 lời gọi => O(2^n)."
      },
      {
        "id": 15,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T có cấu trúc:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nKý hiệu p là con trỏ trỏ đến nút có khóa bằng 24 trên cây T. Hỏi lời gọi hàm cal(p) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return r.key;\n    return cal(r.leftChild) + cal(r.rightChild);\n}",
        "options": [
          "47",
          "91",
          "71",
          "Tất cả các phương án đều sai"
        ],
        "answer": 0,
        "explanation": "Hàm cal(p) tính tổng khóa của tất cả các nút lá thuộc cây con gốc 24. Tổng các lá trong cây con này bằng 47."
      },
      {
        "id": 16,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Xét hàm steps sau trên danh sách liên kết đơn:\nCho h trỏ đến nút đầu tiên của danh sách gồm 8 nút với dãy khóa: 9, 18, 27, 36, 45, 54, 63, 72. Hỏi lời gọi hàm steps(h) trả về con trỏ trỏ đến nút có khóa bằng bao nhiêu?",
        "code": "Node steps(Node h) {\n    Node p = h;\n    Node q = h.next;\n    while (q != NULL) {\n        q = q.next;\n        if (q != NULL) {\n            p = p.next;\n            q = q.next;\n        }\n    }\n    return p.next;\n}",
        "options": [
          "36",
          "45",
          "54",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Con trỏ q đi nhanh gấp đôi con trỏ p (mỗi vòng lặp q tiến 2 bước, p tiến 1 bước). Khi vòng lặp kết thúc, p.next trỏ đến nút có khóa 45."
      },
      {
        "id": 17,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm đệ quy F nhận đầu vào là hai số nguyên dương a và b:\nHỏi lời gọi hàm F(32, 12) trả về giá trị nào (tổng số lần gọi hàm F)?",
        "code": "int F(int a, int b) {\n    if (a == b) return 1;\n    if (a > b) return 1 + F(a - b, b);\n    else return 1 + F(a, b - a);\n}",
        "options": [
          "4",
          "5",
          "6",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm đếm số lần gọi đệ quy cho đến khi a == b. Quá trình giảm (32, 12) thực hiện đúng 5 lời gọi hàm."
      },
      {
        "id": 18,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Trung bình",
        "text": "Cho hàm chia để trị F nhận đầu vào là mảng a từ chỉ số i đến j:\nCho mảng a = [19, 41, 13, 23, 7, 32] (chỉ số 0 đến 5). Hỏi lời gọi hàm F(a, 0, 5) trả về kết quả bằng bao nhiêu?",
        "code": "int F(int a[], int i, int j) {\n    if (i > j) return 0;\n    if (i == j) return (a[i] > 23) ? 1 : 0;\n    int m = (i + j) / 2;\n    return F(a, i, m) + F(a, m + 1, j);\n}",
        "options": [
          "1",
          "2",
          "3",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm chia để trị đếm số lượng phần tử trong mảng lớn hơn 23. Có 2 phần tử thỏa mãn."
      },
      {
        "id": 19,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Trung bình",
        "text": "Xét hàm cal trên cây nhị phân:\nCho cây T gốc r có cấu trúc:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nHỏi lời gọi hàm cal(2, r, 1) trả về kết quả bằng bao nhiêu?",
        "code": "int cal(int k, Node r, int d) {\n    if (r == NULL) return 0;\n    if (d <= k)\n        return r.key + cal(k, r.leftChild, d + 1) + cal(k, r.rightChild, d + 1);\n    return 0;\n}",
        "options": [
          "46",
          "49",
          "53",
          "Tất cả các phương án đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm tính tổng khóa của tất cả các nút có độ sâu d ≤ 2 (gốc ở mức 1 và các con trực tiếp ở mức 2). Tổng bằng 49."
      },
      {
        "id": 20,
        "type": "mcq",
        "topic": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "text": "Cho hàm process trộn hai danh sách liên kết đơn:\nCho h1 trỏ đến đầu danh sách có khóa: 2, 6, 13, 19 và h2 trỏ đến đầu danh sách có khóa: 3, 8, 10, 15. Sau khi gọi h = process(h1, h2), con trỏ h trỏ đến danh sách các khóa nào?",
        "code": "Node process(Node h1, Node h2) {\n    if (h1 == NULL) return h2;\n    if (h2 == NULL) return h1;\n    Node rs;\n    if (h1.key < h2.key) {\n        rs = h1;\n        rs.next = process(h1.next, h2);\n    } else {\n        rs = h2;\n        rs.next = process(h1, h2.next);\n    }\n    return rs;\n}",
        "options": [
          "2, 6, 13, 19, 3, 8, 10, 15",
          "2, 3, 6, 8, 10, 13, 15, 19",
          "19, 15, 13, 10, 8, 6, 3, 2",
          "Tất cả các phương án trả lời đều sai"
        ],
        "answer": 1,
        "explanation": "Hàm thực hiện trộn (merge) đệ quy hai danh sách liên kết đã sắp xếp tăng dần thành một danh sách tăng dần duy nhất: 2, 3, 6, 8, 10, 13, 15, 19."
      },
      {
        "id": 21,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Trung bình",
        "text": "Khi tính hệ số nhị thức C(k, n) bằng đệ quy có nhớ sử dụng bảng M[k][n], độ phức tạp thời gian và không gian bộ nhớ cần thiết là bao nhiêu?",
        "code": "",
        "options": [
          "O(n) thời gian, O(n) không gian",
          "O(k · n) thời gian, O(k · n) không gian",
          "O(2^n) thời gian, O(n) không gian",
          "O(n^2) thời gian, O(1) không gian"
        ],
        "answer": 1,
        "explanation": "Có tối đa (k+1)(n+1) trạng thái bài toán con (i, j), mỗi trạng thái tính 1 lần trong O(1) và lưu trong bảng 2 chiều => O(k · n) (Slide tuần 2)."
      },
      {
        "id": 22,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho dãy 7 số nguyên A = [-9, 6, -1, 3, -2, 4, -5]. Áp dụng thuật toán Quy hoạch động tìm đoạn con liên tiếp có tổng lớn nhất (S₁ = a₁; Sᵢ = Sᵢ₋₁ + aᵢ nếu Sᵢ₋₁ > 0, ngược lại Sᵢ = aᵢ), giá trị tổng cực đại max(S₁, ..., S₇) bằng bao nhiêu?",
        "code": "",
        "options": [
          "8",
          "10",
          "13",
          "13"
        ],
        "answer": 1,
        "explanation": "Dãy giá trị quy hoạch động S = [-9, 6, 5, 8, 6, 10, 5]. Giá trị lớn nhất trong mảng S là 10."
      },
      {
        "id": 23,
        "type": "mcq",
        "topic": "Quy hoạch động & Tham lam",
        "difficulty": "Trung bình",
        "text": "Cho tập các đoạn thẳng X = {[0,5], [1,3], [3,5], [4,6], [5,7], [7,9], [8,11]} (hai đoạn [a, b] và [c, d] coi là không giao nhau nếu b ≤ c). Số lượng đoạn thẳng lớn nhất trong một tập con các đoạn đôi một không giao nhau là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Sắp xếp các đoạn theo đầu mút phải bᵢ tăng dần rồi chọn tham lam, ta chọn được 4 đoạn: [1,3], [3,5], [5,7], [7,9]."
      },
      {
        "id": 24,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Trung bình",
        "text": "Khi liệt kê tất cả các hoán vị của (1, 2, 3, 4) theo thứ tự từ điển bằng thuật toán quay lui, hoán vị thứ 11 được in ra (tính từ 1) là hoán vị nào?",
        "code": "",
        "options": [
          "(2, 3, 4, 1)",
          "(2, 4, 1, 3)",
          "(2, 4, 3, 1)",
          "(3, 1, 4, 2)"
        ],
        "answer": 1,
        "explanation": "Liệt kê theo thứ tự từ điển từ (1, 2, 3, 4), hoán vị ở vị trí thứ 11 là (2, 4, 1, 3)."
      },
      {
        "id": 25,
        "type": "mcq",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Trung bình",
        "text": "Áp dụng thuật toán dùng ngăn xếp S để kiểm tra tính cân xứng của dãy ngoặc E = \"([({})])[]\" (duyệt từ trái sang phải, gặp ngoặc mở thì PUSH vào S, gặp ngoặc đóng thì POP khỏi S). Kích thước lớn nhất của ngăn xếp S đạt được trong suốt quá trình duyệt là bao nhiêu?",
        "code": "",
        "options": [
          "3",
          "4",
          "5",
          "5"
        ],
        "answer": 1,
        "explanation": "Theo dõi số lượng ngoặc mở đang nằm đồng thời trong ngăn xếp qua từng ký tự của \"([({})])[]\", độ sâu ngăn xếp cực đại đạt được là 4."
      },
      {
        "id": 26,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho một cây nhị phân có các nút mang khóa phân biệt. Biết dãy các nút duyệt theo thứ tự sau (Postorder) là: 4, 5, 2, 6, 7, 3, 1 và dãy các nút duyệt theo thứ tự giữa (Inorder) là: 4, 2, 5, 1, 6, 3, 7. Hãy cho biết chiều cao của cây (tính bằng số nút trên đường đi dài nhất từ nút gốc đến một nút lá) bằng bao nhiêu?",
        "code": "",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "Phần tử cuối của Postorder (1) là gốc cây. Chia dãy Inorder tại gốc để xác định cây con trái và cây con phải một cách đệ quy, ta dựng lại được cây có chiều cao bằng 3."
      },
      {
        "id": 27,
        "type": "mcq",
        "topic": "Độ phức tạp thuật toán",
        "difficulty": "Khó",
        "text": "Phân tích chính xác độ phức tạp thời gian tính (ký hiệu Big-O chặt nhất) của hàm sau:",
        "code": "int f(int n) {\n    int cnt = 0;\n    for (int i = 1; i * i <= n; i++)\n        for (int j = 1; j <= n; j *= 2)\n            cnt++;\n    return cnt;\n}",
        "options": [
          "O(√n)",
          "O(√n log n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 1,
        "explanation": "Vòng ngoài chạy √n lần, vòng trong chạy log₂n lần => tích độ phức tạp là O(√n log n)."
      },
      {
        "id": 28,
        "type": "mcq",
        "topic": "Quay lui & Nhánh cận",
        "difficulty": "Khó",
        "text": "Trong bài toán Người du lịch (TSP) gồm n = 6 thành phố giải bằng phương pháp Nhánh và cận (Slide tuần 4), giả sử hành trình bộ phận hiện tại đã đi qua k = 4 thành phố (1 → u₂ → ... → u_4) với tổng chi phí là σ = 28. Biết chi phí nhỏ nhất giữa hai thành phố bất kỳ là c_min = 4. Cận dưới g của chi phí hành trình đầy đủ phát triển từ nhánh này bằng bao nhiêu?",
        "code": "",
        "options": [
          "36",
          "40",
          "48",
          "44"
        ],
        "answer": 1,
        "explanation": "Còn phải đi n - k + 1 = 6 - 4 + 1 = 3 chặng nữa, mỗi chặng tối thiểu c_min = 4. Vậy g = σ + (n - k + 1)·c_min = 28 + 3×4 = 40."
      },
      {
        "id": 29,
        "type": "mcq",
        "topic": "Đệ quy & Chia để trị",
        "difficulty": "Khó",
        "text": "Xét hàm tính lũy thừa nhanh Pow(x, n) bằng phương pháp chia để trị:\nHỏi khi thực hiện lời gọi Pow(2, 22), hàm Pow được gọi tổng cộng bao nhiêu lần (tính cả lời gọi ban đầu)?",
        "code": "int Pow(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 != 0) return x * Pow(x, n - 1);\n    int res = Pow(x, n / 2);\n    return res * res;\n}",
        "options": [
          "7",
          "8",
          "9",
          "22"
        ],
        "answer": 1,
        "explanation": "Theo dõi chuỗi tham số n giảm dần đến 0: mỗi bước lẻ trừ 1, mỗi bước chẵn chia đôi. Tổng số lần gọi hàm Pow là 8."
      },
      {
        "id": 30,
        "type": "mcq",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cấu trúc dữ liệu cây tổng quát biểu diễn bằng con trỏ con cực trái (leftMostChild) và em kế cận phải (rightSibling). Hàm height(Node* p) dưới đây thực hiện chức năng gì?",
        "code": "int height(Node* p) {\n    if (p == NULL) return 0;\n    int maxh = 0;\n    Node* q = p->leftMostChild;\n    while (q != NULL) {\n        int h = height(q);\n        if (h > maxh) maxh = h;\n        q = q->rightSibling;\n    }\n    return maxh + 1;\n}",
        "options": [
          "Độ sâu của nút p tính từ gốc",
          "Chiều cao của cây con gốc p (tính theo số nút trên đường đi dài nhất tới lá)",
          "Tổng số nút con trực tiếp (bậc) của nút p",
          "Tổng số nút lá trong cây con gốc p"
        ],
        "answer": 1,
        "explanation": "Hàm duyệt qua tất cả các con trực tiếp q của p thông qua chuỗi rightSibling, tìm chiều cao lớn nhất maxh của các cây con rồi cộng thêm 1 (Slide tuần 9)."
      },
      {
        "id": 31,
        "type": "short",
        "topic": "Danh sách liên kết",
        "difficulty": "Khó",
        "text": "Cho h là con trỏ trỏ đến nút đầu tiên của danh sách liên kết đơn có dãy khóa: 3, 11, 8, 5, 15, 4. Hãy điền giá trị số nguyên mà lời gọi hàm eval(h) trả về:",
        "code": "int eval(Node h) {\n    if (h == NULL || h.next == NULL) return 0;\n    int pick = (h.key > h.next.key) ? h.key : h.next.key;\n    return pick + eval(h.next.next);\n}",
        "answer": "34",
        "accepted": [
          "34"
        ],
        "explanation": "Hàm xét từng cặp nút kề nhau (h, h.next), lấy khóa lớn hơn rồi nhảy cóc 2 nút: max(3, 11) + max(8, 5) + max(15, 4) = 34."
      },
      {
        "id": 32,
        "type": "short",
        "topic": "Ngăn xếp & Hàng đợi",
        "difficulty": "Khó",
        "text": "Trong bài toán Tìm đường đi ngắn nhất thoát khỏi mê cung bằng hàng đợi BFS (Slide tuần 8, 0 là ô trống, 1 là tường, thoát ra ngoài biên ma trận là đích, ghi -1 nếu không thoát được). Với dữ liệu đầu vào (N M r c và ma trận) dưới đây, chương trình xuất ra số nguyên nào?",
        "code": "4 5 2 4\n1 1 1 1 1\n1 0 0 0 0\n1 1 1 1 1\n1 1 1 1 1",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "explanation": "Dùng BFS loang từ ô xuất phát: (2,4) -> (2,5) -> thoát ra biên phải ở bước thứ 2."
      },
      {
        "id": 33,
        "type": "short",
        "topic": "Cây & Cây nhị phân",
        "difficulty": "Khó",
        "text": "Cho cây nhị phân T gốc r có cấu trúc:\n• Nút gốc là 16\n• Nút 16 có con trái là 9 và con phải là 24\n• Nút 9 có con trái là 4 và con phải là 12\n• Nút 24 có con trái là 20 và con phải là 29\n• Nút 4 có con trái là 2 và con phải là 6\n• Nút 12 có con trái là 10 và con phải là 14\n• Nút 20 có con trái là 18\nHãy điền giá trị số nguyên mà lời gọi hàm cal(r) dưới đây trả về:",
        "code": "int cal(Node r) {\n    if (r == NULL) return 0;\n    if (r.leftChild == NULL && r.rightChild == NULL) return 0;\n    return r.key + cal(r.leftChild) + cal(r.rightChild);\n}",
        "answer": "85",
        "accepted": [
          "85"
        ],
        "explanation": "Hàm bỏ qua các nút lá (trả về 0) và cộng khóa của tất cả các nút trong (nút có ít nhất 1 con). Tổng bằng 85."
      }
    ]
  }
];
