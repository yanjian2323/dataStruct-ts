export default interface IQueue<T>{
    // 入队
    enqueue(el: T);
    // 出队
    dequeue(): T;
    // 队列里元素的个数
    getSize(): number;
    // 队列是否为空
    isEmpty(): boolean;
    // 得到栈顶元素,不出队
    getFront (): T;
}