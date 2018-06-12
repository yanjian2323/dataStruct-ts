// 实现一个动态数组
export default class ArrayList<T>{
    private data: T[];
    // 数组元素个数
    private size: number;
    // 扩容
    private resize (newCapacity: number): void {
        let newData = new Array<T>(newCapacity);
        // 把原来的值重新复制到新的空间中
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
    // 容量,最大存放个数
    constructor(capacity: number) {
        this.data = new Array<T>(capacity);
        this.size = 0;
    }
    // 数组是否为空
    isEmpty () : boolean {
        return this.size === 0;
    }
    // 动态数组的大小
    getSize () : number {
        return this.size;
    }
    // 数组容量
    getCapacity () : number {
        return this.data.length;
    }
    // 在指定的位置插入元素
    add (index: number, el: T) : void {
        // index > this.size是为了保证空间是连续的
        if (index < 0 || index > this.size) {
            throw new Error('index is illegal,index = ' + index);
        }
        // 元素已经填满,需要扩容操作
        if (this.size === this.getCapacity()) {
            // 2倍空间扩容
            this.resize(this.getCapacity() * 2);
        }
        // 元素整体向后移动
        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = el;
        this.size++;
    }
    // 在末尾插入元素
    addLast (el: T) {
        this.add(this.size, el);
    }
    addFirst (el: T) {
        this.add(0, el);
    }
    // 得到索引位置的元素
    get (index: number) : T {
        if (index < 0 || index >= this.size) {
            throw new Error('index is illegal');
        }
        return this.data[index];
    }
    // 设置索引位置元素的值 
    set (index: number, el: T) : void {
        if (index < 0 || index >= this.size) {
            throw new Error('index is illegal');
        }
        this.data[index] = el;
    }
    // 是否包含某个元素
    contains (el: T) : Boolean {
        for (let item of this.data) {
            if (item === el) {
                return true;
            }
        }
        return false;
    }
    // 寻找某个元素的索引,有重复的元素，返回第一个元素的索引
    find (el: T) : number {
        for (let i = 0; i < this.getSize(); i++) {
            if (this.data[i] === el) {
                return i;
            }
        }
        return -1;
    }
    // 删除指定索引的元素,返回这个元素
    remove (index: number) : T {
        if (index < 0 || index >= this.size) {
            throw new Error('index is illegal');
        }
        let ret: T = this.data[index];
        for (let i = index + 1; i < this.getSize(); i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
        // 避免复杂度震荡
        if (this.getSize() === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
            this.resize(this.getCapacity() / 2);
        }
        return ret;
    }
    // 删除第一个元素,返回第一个元素
    removeFirst () : T {
        return this.remove(0);
    }
    // 删除最后一个元素
    removeLast () : T {
        return this.remove(this.getSize() - 1);
    }
}