import IQueue from './IQueue';

// 循环队列
export default class LoopQueue<T> implements IQueue<T> {
    private data: T[];
    private front: number;// 队首
    private tail: number;// 队尾
    private size: number;//队列中的元素个数
    private getCapacity (): number {
        return this.data.length - 1;
    }
    private resize(newCapacity: number): void {
        let newData = new Array(newCapacity + 1);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + this.front) % this.data.length];
        }
    
        this.front = 0;
        this.tail = this.size;
        this.data = newData;
    }
    constructor () {
        // 分配11个空间，但实际只存储10个
        this.data = new Array(11);
        this.front = 0;
        this.tail = 0;
        this.size = 0;
    }
    enqueue(el: T) {
        // 容量已满,需要扩容
        if (this.size === this.getCapacity() - 1) {
            // 双倍扩容
            this.resize(this.data.length * 2);
        }
        this.data[this.tail] = el;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }
    dequeue (): T {
        if (this.isEmpty()) {
            throw new Error('queue is empty');
        }
        let ret = this.data[this.front];
        this.front = (this.front + 1) % this.data.length;
        this.size--;
        if (this.size === this.getCapacity() / 4 && this.data.length / 2 !== 0) {
            this.resize(this.getCapacity() / 2);
        }
        return ret;
    }
    getSize (): number {
        return this.size;
    }
    isEmpty (): boolean {
        return this.front === this.tail;
    }
    getFront (): T {
        if (this.isEmpty()) {
            throw new Error('queue is empty');
        }

        return this.data[this.front];
    }
}