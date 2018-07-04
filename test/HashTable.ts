import { expect, should } from 'chai';
import HashTable from '../src/HashTable/HashTable';

let hashtable = new HashTable();

hashtable.add('name', 'yanjian');
hashtable.add('age', 28);
hashtable.add('company', 'yunniao');

describe("HashTable", () => {
    describe("#getSize(')", () => {
        it("should return 3", () => {
            expect(hashtable.getSize()).to.equal(3);
        });
    });
    describe("get('name')", () => {
        it("should return yanjian", () => {
            expect(hashtable.get('name')).to.equal('yanjian');
        });
    });
    describe("get('age')", () => {
        it("should return 28", () => {
            expect(hashtable.get('age')).to.equal(28);
        });
    });
    describe("get('company')", () => {
        it("should return yanjian", () => {
            expect(hashtable.get('company')).to.equal('yunniao');
        });
    });

    describe("remove('name')", () => {
        it("should return yanjian", () => {
            expect(hashtable.remove('name')).to.equal('yanjian');
        });
    });
    describe("#getSize(')", () => {
        it("should return 2", () => {
            expect(hashtable.getSize()).to.equal(2);
        });
    });
});