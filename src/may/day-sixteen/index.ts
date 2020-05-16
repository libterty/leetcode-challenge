class ListNode {
    public data: number;
    public next: ListNode;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

var oddEvenList = function (head: ListNode) {
    const odd: ListNode = new ListNode(0);
    const even: ListNode = new ListNode(1);
    let _odd: ListNode = odd;
    let _even: ListNode = even;
    let flag: boolean = true;
    while (head) {
        if (flag) {
            _odd.next = head;
            _odd = _odd.next;
        } else {
            _even.next = head;
            _even = _even.next;
        }
        flag != flag;
        head = head.next;
    }

    _odd.next = even.next;
    _even.next = null;

    return odd.next;
};
