export default class MaxHeap<E> {
    private size: number;
    private data: E[];
    private shiftUp (k: number) {
        while (k > 1) {
            let parentIndex = Math.floor(k / 2);
            if (this.data[k] <= this.data[parentIndex]) return;
            [this.data[parentIndex], this.data[k]] = [this.data[k], this.data[parentIndex]];
            k = parentIndex;
        }
    }
    private shiftDown (k: number) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j + 1 <= this.size && this.data[j + 1] > this.data[j]) {
                j = j + 1;
            }
            if (this.data[k] >= this.data[j]) {
                break;
            }
            [this.data[k], this.data[j]] = [this.data[j], this.data[k]];
            k = j;
        }
    }
    private heapify (arr: E[]) {
        for (let i = 0; i < arr.length; i++) {
            this.data[i + 1] = arr[i];
        }
        this.size = arr.length;
        for (let i = Math.floor(this.size / 2); i >= 1; i--) {
            this.shiftDown(i);
        }
    }
    constructor (arr: E[] = null) {
        this.size = 0;
        this.data = [];
        if (Array.isArray(arr)) {
            this.heapify(arr);
        }
    }
    insert (e: E) {
        this.size++;
        this.data[this.size] = e;
        this.shiftUp(this.size);
    }
    extractMax () {
        if (this.isEmpty()) {
            throw new Error('data is empty');
        }
        let ret = this.data[1];
        // 最后一个元素和第一个交换
        [this.data[1], this.data[this.size]] = [this.data[this.size], this.data[1]];
        this.size--;
        this.shiftDown(1);
        return ret;
    }
    getSize () {
        return this.size;
    }
    isEmpty (): boolean {
        return this.size === 0;
    }
    toString (): string {
        let str = '';
        for (let i = 1; i <= this.size; i++) {
            str += this.data[i];
            if (i <= this.size - 1) {
                str += ',';
            }
        }

        return str;
    }
}