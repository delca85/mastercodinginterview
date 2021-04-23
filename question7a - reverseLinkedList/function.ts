type LinkedListItem = {
    value: number;
    next: LinkedListItem;
};

export function reverseLinkedList(head: LinkedListItem): LinkedListItem {
    let currentNode = head;
    let reversed = null;
    while (currentNode) {
        reversed = {
            value: currentNode.value,
            next: reversed,
        };
        currentNode = currentNode.next;
    }
    return reversed;
}
