type LinkedListItem = {
    value: number;
    next: LinkedListItem;
};

export function reverseLinkedList(head: LinkedListItem): LinkedListItem {
    let currentValue = head;
    let reversed = null;
    while (currentValue) {
        reversed = {
            value: currentValue.value,
            next: reversed,
        };
        currentValue = currentValue.next;
    }
    return reversed || null;
}
