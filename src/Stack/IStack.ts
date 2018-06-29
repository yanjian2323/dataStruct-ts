export default interface IStack<T>{
    // 往栈压入一个元素
    push(el: T);
    // 弹出栈顶的元素
    pop(): T;
    // 栈中元素的大小
    getSize(): number;
    // 栈是否为空
    isEmpty(): boolean;
    // 得到栈顶元素
    getTop(): T;
}