import IStack from './IStack';
import ArrayList from '../Array/Array';
// 基于动态数组实现一个栈
export default class Stack<T> implements IStack<T>{
    private arrayList: ArrayList<T>;
    constructor () {
        this.arrayList = new ArrayList<T>(10);
    }
    push (el: T) {
        this.arrayList.addLast(el);
    }
    pop (): T {
        return this.arrayList.removeLast();
    }
    getSize (): number {
        return this.arrayList.getSize();
    }
    isEmpty (): boolean {
        return this.arrayList.isEmpty();
    }
    getTop (): T {
        return this.arrayList.get(this.getSize() - 1);
    }
}