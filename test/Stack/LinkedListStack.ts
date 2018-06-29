import { expect } from 'chai';
import LinkedListStack from '../../src/Stack/LinkedListStack';

let stack = new LinkedListStack<number>();

describe("Stack", () => {
    describe("#isEmpty()", () => {
        it("should return true", () => {
            expect(stack.isEmpty()).to.equal(true);
        });
    });
    describe("#push()", () => {
        it("push 1-15 to Stack", (done) => {
            for(let i = 0; i < 15; i++) {
                stack.push(i + 1);
            }
            done();
        });
    });
    describe("#getTop()", () => {
        it("should return 15", () => {
            expect(stack.getTop()).to.equal(15);
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