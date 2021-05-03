class MyQueue {
    actual: number[];
    removed: number[];

    constructor() {
        this.actual = [];
        this.removed = [];
    }

    push(x: number): void {
        this.actual.push(x);
    }

    pop(): number {
        const result = this.actual[this.removed.length];
        this.removed.push(result);
        return result;
    }

    peek(): number {
        return this.actual[this.removed.length];
    }

    empty(): boolean {
        return this.actual.length === this.removed.length;
    }
}

let queue = new MyQueue();
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.empty());
queue.push(5);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.empty());
