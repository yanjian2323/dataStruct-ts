import IQueue from './IQueue';

export default function<E> () {
    class Node {
        e: E;
        next: Node;
        constructor (e: E, next: Node) {
            this.e = e;
            this.next = next;
        }
    }
    // 入队在链表尾部操作，出队在链表头操作
    // 因为当有一个tail指向链表尾部的时候，只有在尾部添加操作才是O(1)
    // 而在链表首部的添加和删除都是O(1)
    return class LinkedListQueue implements IQueue<E> {
        private head: Node;
        private tail: Node;
        private size: number;
        constructor () {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        enqueue (e: E) {
            let newNode = new Node(e, null);
            if (this.tail !== null) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            if (this.head === null) {
                this.head = newNode;
            }
            this.size++;
        }
        dequeue (): E {
            if (this.isEmpty()) {
                throw new Error("queue is empty");
            }
            let headNode = this.head;
            this.head = headNode.next;
            headNode.next = null;
            this.size--;
            if (this.head === null) {
                this.tail = null;
            }
            return headNode.e;
        }
        isEmpty (): boolean {
            return this.size === 0;
        }
        getSize (): number {
            return this.size;
        }
        getFront (): E {
            if (this.isEmpty()) {
                throw new Error("queue is empty");
            }
            return this.head.e;
        }
    }
};