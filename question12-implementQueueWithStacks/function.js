var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.actual = [];
        this.removed = [];
    }
    MyQueue.prototype.push = function (x) {
        this.actual.push(x);
    };
    MyQueue.prototype.pop = function () {
        var result = this.actual[this.removed.length];
        this.removed.push(result);
        return result;
    };
    MyQueue.prototype.peek = function () {
        return this.actual[this.removed.length];
    };
    MyQueue.prototype.empty = function () {
        return this.actual.length === this.removed.length;
    };
    return MyQueue;
}());
var queue = new MyQueue();
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
