import { expect } from 'chai';
import LinkedListFn from '../src/LinkedList/LinkedList';

let LinkedList = LinkedListFn<number>();

let linkedList = new LinkedList();

for (let i = 0; i < 8; i++) {
    linkedList.addLast(i);
}
linkedList.set(2, 20);

describe("LinkedList", () => {
    describe("toString()", () => {
        it("should return 0->1->20->3->4->5->6->7", () => {
            expect(linkedList.toString()).to.equal("0->1->20->3->4->5->6->7");
        });
    });
    describe("getSize()", () => {
        it("should return 8", () => {
            expect(linkedList.getSize()).to.equal(8);
        });
    });
    describe("get(2)", () => {
        it("should return 20", () => {
            expect(linkedList.get(2)).to.equal(20);
        });
    });
    describe("getFirst()", () => {
        it("should return 0", () => {
            expect(linkedList.getFirst()).to.equal(0);
        });
    });
    describe("getLast()", () => {
        it("should return 7", () => {
            expect(linkedList.getLast()).to.equal(7);
        });
    });
    describe("contains(100)", () => {
        it("should return false", () => {
            expect(linkedList.contains(100)).to.equal(false);
        });
    });
    describe("remove(2)", () => {
        it("should return 20", () => {
            expect(linkedList.remove(2)).to.equal(20);
        });
    });
    describe("removeFirst()", () => {
        it("should return 0", () => {
            expect(linkedList.removeFrist()).to.equal(0);
        });
    });
    describe("removeLast()", () => {
        it("should return 7", () => {
            expect(linkedList.removeLast()).to.equal(7);
        });
    });
    describe("getSize()", () => {
        it("should return 5", () => {
            expect(linkedList.getSize()).to.equal(5);
        });
    });
});

