const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
    if (!head || !head.next) return head;

    let current = head;
    let count = 0;
    while (current && count !== k) {
        current = current.next;
        count++;
    }

    if (count === k) {
        current = reverseKGroup(current, k);

        while (count-- > 0) {
            const next = head.next;
            head.next = current;
            current = head;
            head = next;
        }

        head = current;
    }

    return head;
};