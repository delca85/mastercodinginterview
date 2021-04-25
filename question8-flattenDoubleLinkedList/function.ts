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
        this.prev = next;
        this.child = next;
    }
}

type Node = number | number[];

function buildMultiLevels(nodes: Node[]): DoubleLinkedListNode {
    const head = new DoubleLinkedListNode(nodes[0] as number);
    let currentNode = head;

    for (let i = 0; i < nodes.length; i++) {
        const val = nodes[i];
        let nextNode;

        if (Array.isArray(val)) {
            let child = buildMultiLevels(val);
            currentNode.child = child;
            continue;
        } else {
            nextNode = new DoubleLinkedListNode(val);
            currentNode.next = nextNode;
            nextNode.prev = currentNode;
            currentNode = nextNode;
        }
    }
    return head;
}

export function flatten(nodes: Node[]): DoubleLinkedListNode {
    const list = buildMultiLevels(nodes);
    return list;
}
