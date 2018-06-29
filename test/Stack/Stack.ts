import { expect } from 'chai';
import Stack from '../../src/Stack/Stack';

let stack = new Stack<number>();

describe("Stack", () => {
    describe("#push()", () => {
        it("push 1-15 to Stack", (done) => {
            for(let i = 0; i < 15; i++) {
                stack.push(i + 1);
            }
            done();
        });
    });
    describe("#getSize()", () => {
        it("should return 15", () => {
            expect(stack.getSize()).to.equal(15);
        });
    });
    describe(`#pop()`, () => {
        it(`should return 15`, () => {
            let el = stack.pop();
            expect(el).to.equal(15);
        });
    });
    describe(`#pop()`, () => {
        it(`should return 14`, () => {
            let el = stack.pop();
            expect(el).to.equal(14);
        });
    });
    describe("#getSize()", () => {
        it("should return 13", () => {
            expect(stack.getSize()).to.equal(13);
        });
    });
});