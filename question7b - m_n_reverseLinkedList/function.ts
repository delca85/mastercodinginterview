type LinkedListItem = {
    value: number;
    next: LinkedListItem;
};

export function reverseLinkedListBetween(
    head: LinkedListItem,
    m: number,
    n: number
): LinkedListItem {
    if (m === n) {
        return head;
    }

    let position = 1;
    let currentNode = head;
    let startNode = head;

    while (position < m) {
        startNode = currentNode;
        currentNode = currentNode.next;
        position++;
    }

    let result = null,
        tailNode = currentNode;

    while (position >= m && position <= n) {
        const next = currentNode.next;
        currentNode.next = result;
        result = currentNode;
        currentNode = next;
        position++;
    }

    startNode.next = result;
    tailNode.next = currentNode;

    if (m > 1) {
        return head;
    }
    return result;
}
