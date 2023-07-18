const swapPairs = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) return head;

    const next = head.next;
    head.next = swapPairs(next.next);

    next.next = head;
    return next;
};