const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let carry = 0;
    let head: ListNode | null = null;
    let curr: ListNode | null = null;

    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum > 9 ? 1 : 0;
        sum = sum % 10;

        if (!head) {
            head = new ListNode(sum);
            curr = head;
        } else {
            curr!.next = new ListNode(sum);
            curr = curr!.next;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry) {
        curr!.next = new ListNode(carry);
    }

    return head;
};