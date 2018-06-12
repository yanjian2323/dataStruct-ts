import { expect, should } from 'chai';
import ArrayList from '../src/Array/Array';

let arrayList = new ArrayList<number>(10);

describe("ArrayList", () => {
    describe("#isEmpty()", () => {
        it("should return true", () => {
            expect(arrayList.isEmpty()).to.equal(true);
        });
    });
    
    describe("#contains()", () => {
        before(() => {
            for (let i = 0; i < 11; i++) {
                arrayList.addLast(i + 1);
            }
        });
        it('should return true', () => {
            expect(arrayList.contains(5)).to.equal(true);
        });
    });

    describe("#getSize()", () => {
        it('should return 11', () => {
            expect(arrayList.getSize()).to.equal(11);
        })
    });

    describe("#getCapacity()", () => {
        it('should return 20', () => {
            expect(arrayList.getCapacity()).to.equal(20);
        })
    });

    describe("#add(3, 30)", () => {
        it('should return 30 when calling get(3)', () => {
            arrayList.add(3, 30);
            expect(arrayList.get(3)).to.equal(30);
        })
    });

    describe("#find(30)", () => {
        it('should return 3 when calling find(30)', () => {
            expect(arrayList.find(30)).to.equal(3);
        })
    });

    describe("#remove(3)", () => {
        it('should return 30 when calling remove(3)', () => {
            expect(arrayList.remove(3)).to.equal(30);
        })
    });

    describe("#getSize()", () => {
        it('should return 11', () => {
            expect(arrayList.getSize()).to.equal(11);
        })
    });

    describe("#getCapacity()", () => {
        it('should return 10 when calling removeLast() 6 times', () => {
            for(let i = 0; i < 6; i++) {
                arrayList.removeLast();
            }
            expect(arrayList.getCapacity()).to.equal(10);
        })
    });
});