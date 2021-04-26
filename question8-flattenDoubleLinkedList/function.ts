class DoubleLinkedListNode {
    value: number;
    next: DoubleLinkedListNode;
    prev: DoubleLinkedListNode;
    child: DoubleLinkedListNode;

    constructor(
        value: number,
        next: DoubleLinkedListNode = null,
        prev: DoubleLinkedListNode = null,
        child: DoubleLinkedListNode = null
    ) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

type Node = number | any[];

function buildMultiLevels(nodes: Node[]): DoubleLinkedListNode {
    const head = new DoubleLinkedListNode(nodes[0] as number);
    let currentNode = head;

    for (let i = 1; i < nodes.length; i++) {
        const val = nodes[i];
        let nextNode;

        if (Array.isArray(val)) {
            nextNode = buildMultiLevels(val);
            currentNode.child = nextNode;
            continue;
        }
        nextNode = new DoubleLinkedListNode(val);
        currentNode.next = nextNode;
        nextNode.prev = currentNode;
        currentNode = nextNode;
    }
    return head;
}

function printListMulti(head: DoubleLinkedListNode) {
    if (head) {
        console.log(head.value);
        if (head.child) {
            printListMulti(head.child);
        }
        printListMulti(head.next);
    }
}

function toList(head: DoubleLinkedListNode): number[] {
    let result = [];
    let currentNode = head;
    while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return result;
}

function flattenDoubleLinkedList(
    head: DoubleLinkedListNode
): DoubleLinkedListNode {
    if (!head) return head;

    let currentNode = head;
    while (currentNode) {
        if (currentNode.child) {
            let tail = currentNode.child;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = currentNode.next;
            if (tail.next) {
                tail.next.prev = tail;
            }
            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head;
}

export function flatten(nodes: Node[]): number[] {
    const head = buildMultiLevels(nodes);
    // printListMulti(list);
    return toList(flattenDoubleLinkedList(head));
}
