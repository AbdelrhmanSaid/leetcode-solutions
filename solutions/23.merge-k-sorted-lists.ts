const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
    const result: number[] = [];

    lists.forEach((list) => {
        while (list) {
            result.push(list.val);
            list = list.next;
        }
    });

    result.sort((a, b) => a - b);
    const head = new ListNode(0);
    let current = head;

    result.forEach((val) => {
        current.next = new ListNode(val);
        current = current.next;
    });

    return head.next;
};