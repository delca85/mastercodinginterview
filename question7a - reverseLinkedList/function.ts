type LinkedListItem = {
    value: number;
    next: LinkedListItem;
};
type LinkedList = {
    head?: LinkedListItem;
};

export function reverseLinkedList(list: LinkedList): LinkedList {
    let currentValue = list?.head;
    let reversed = {} as LinkedList;
    while (currentValue) {
        reversed.head = {
            next: reversed.head || null,
            value: currentValue.value,
        };
        currentValue = currentValue.next;
    }
    return reversed;
}
