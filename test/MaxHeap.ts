import { expect, should } from 'chai';
import MaxHeap from '../src/Heap/MaxHeap';

// let maxHeap = new MaxHeap<number>();
// maxHeap.insert(10);
// maxHeap.insert(100);
// maxHeap.insert(90);
// maxHeap.insert(80);
// maxHeap.insert(60);
// maxHeap.insert(210);
// maxHeap.insert(200);

let maxHeap = new MaxHeap([10,100,90,80,60,210,200]);

describe("MaxHeap", () => {
    describe("getSize", () => {
        it("should return 7", () => {
            expect(maxHeap.getSize()).to.equal(7);
        });
    });
    describe("extractMax", () => {
        it("should return 210", () => {
            expect(maxHeap.extractMax()).to.equal(210);
        });
    });
    describe("extractMax", () => {
        it("should return 200", () => {
            expect(maxHeap.extractMax()).to.equal(200);
        });
    });
    describe("extractMax", () => {
        it("should return 100", () => {
            expect(maxHeap.extractMax()).to.equal(100);
        });
    });
    describe("extractMax", () => {
        it("should return 90", () => {
            expect(maxHeap.extractMax()).to.equal(90);
        });
    });
    describe("extractMax", () => {
        it("should return 80", () => {
            expect(maxHeap.extractMax()).to.equal(80);
        });
    });
    describe("extractMax", () => {
        it("should return 60", () => {
            expect(maxHeap.extractMax()).to.equal(60);
        });
    });
    describe("extractMax", () => {
        it("should return 10", () => {
            expect(maxHeap.extractMax()).to.equal(10);
        });
    });
    describe("isEmpty", () => {
        it("should return true", () => {
            expect(maxHeap.isEmpty()).to.equal(true);
        });
    });
});