export class ListNode {
    val: number;
    next: ListNode;

    constructor(val: number, next: ListNode = null) {
        this.val = val;
        this.next = next;
    }
}

export function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let tortoise = head,
        hare = head;

    while (true) {
        tortoise = tortoise.next;
        hare = hare.next;
        if (!hare || !hare.next) {
            return null;
        }
        hare = hare.next;
        if (tortoise === hare) break;
    }

    let p1 = head,
        p2 = tortoise;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}
