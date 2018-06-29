import IStack from './IStack';
import LinkedListFn from '../LinkedList/LinkedList';

// 链表在头部的添加和删除都是O(1)复杂度的，所以在链表头部进行 入栈和出栈
export default class LinkedListStack<E> implements IStack<E> {
    private linkedList = new (LinkedListFn<E>())();

    push (e: E) {
        this.linkedList.addFirst(e);
    }
    pop (): E {
        return this.linkedList.removeFrist();
    }
    getSize(): number {
        return this.linkedList.getSize();
    }
    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }
    getTop(): E {
        return this.linkedList.get(0);
    }
}