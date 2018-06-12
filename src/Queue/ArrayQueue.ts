import IQueue from './IQueue';
import ArrayList from '../Array/Array';

// 数组队列,基于动态数组实现
export default class ArrayQueue<T> implements IQueue<T> {
    private arrayList: ArrayList<T>;
    constructor () {
        this.arrayList = new ArrayList<T>(10);
    }
    enqueue (el: T) {
        this.arrayList.addLast(el);
    }
    // 出队的时间复杂度是O(n)
    dequeue (): T {
        return this.arrayList.removeFirst();
    }
    getSize (): number {
        return this.arrayList.getSize();
    }
    isEmpty (): boolean {
        return this.arrayList.isEmpty();
    }
    getFront (): T {
        return this.arrayList.get(0);
    }
}