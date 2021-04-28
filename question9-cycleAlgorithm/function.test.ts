import { ListNode, detectCycle } from "./function";

describe("Question 9 - detect cycle solution tests", () => {
    it("should detect a cycle", () => {
        const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
            (acc: ListNode, val: number) => new ListNode(val, acc),
            null
        );
        let curr = linkedList,
            cycleNode;

        while (curr.next) {
            if (curr.val === 3) {
                cycleNode = curr;
            }
            curr = curr.next;
        }
        curr.next = cycleNode;
        expect(detectCycle(linkedList)).toBe(cycleNode);
    });
    it("should return null if no cycle is present", () => {
        const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
            (acc: ListNode, val: number) => new ListNode(val, acc),
            null
        );
        expect(detectCycle(linkedList)).toBeNull();
    });
});
