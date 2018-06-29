import { expect } from 'chai';
import LoopQueue from '../../src/Queue/LoopQueue';
import ArrayQueue from '../../src/Queue/ArrayQueue';
import LinkedListQueueFn from '../../src/Queue/LinkedListQueue';

let  LinkedListQueue = LinkedListQueueFn<number>();

let linkedListQueue = new LinkedListQueue();

describe("LinkedListQueue", () => {

    describe("#enqueue()", () => {
        it("call enqueue 12 times", () => {
            for (let i = 0; i < 12; i++) {
                linkedListQueue.enqueue(i + 1);
            }
        });
    });

    describe("#getSize()", () => {
        it("should return 12", () => {
            expect(linkedListQueue.getSize()).to.equal(12);
        });
    });

    describe("#dequeue()", () => {
        it("should return 1", () => {
            expect(linkedListQueue.dequeue()).to.equal(1);
        });
    });

    describe("#dequeue()", () => {
        it("should return 2", () => {
            expect(linkedListQueue.dequeue()).to.equal(2);
        });
    });
});

describe("LoopQueue vs ArrayQueue vs LinkedListQueue", function() {
    it("test speed", function() {
        this.timeout(100000);
        let loopQueue = new LoopQueue<number>();
        let arrayQueue = new ArrayQueue<number>();
        let linkQueue = new LinkedListQueue();
        let count = 100000;
        for (let i = 0; i < count; i++) {
            loopQueue.enqueue(i);
            arrayQueue.enqueue(i);
            linkQueue.enqueue(i);
        }
        console.time('arrayQueue');
        for (let i = 0; i < count; i++) {
            arrayQueue.dequeue();
        }
        console.timeEnd('arrayQueue');

        console.time('loopQueue');
        for (let i = 0; i < count; i++) {
            loopQueue.dequeue();
        }
        console.timeEnd('loopQueue');

        console.time('linkedlistQueue');
        for (let i = 0; i < count; i++) {
            linkQueue.dequeue();
        }
        console.timeEnd('linkedlistQueue');
    });
});