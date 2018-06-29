export default function<E> () {
    class Node {
        e: E;
        next: Node;
        constructor (e: E, next: Node) {
            this.e = e;
            this.next = next;
        }
    }
    class LinkedList {
        // 链表虚拟头节点
        private dummyHead: Node;
        // 链表节点个数
        private size: number;
        constructor () {
            this.dummyHead = new Node(null, null);
            this.size = 0;
        }
        // 链表中节点个数
        getSize (): number {
            return this.size;
        }
        // 链表是否为空
        isEmpty (): boolean {
            return this.size === 0;
        }
        // 在索引处添加节点
        add (index: number, e: E): void {
            if (index < 0 || index > this.size) {
                throw new Error('index is illegal');
            }
            let prev = this.dummyHead;
            for (let i = 0; i < index; i++) {
                prev = prev.next;
            }
            prev.next  = new Node(e, prev.next);
            this.size++;
        }
        // 链表头部添加节点
        addFirst (e: E): void {
            this.add(0, e);
        }
        // 链表尾部添加节点
        addLast (e: E): void {
            this.add(this.size, e);
        }
        // 得到索引节点的值
        get (index: number): E {
            if (index < 0 || index >= this.size) {
                throw new Error('index is illegal');
            }
            let cur: Node = this.dummyHead;
            for (let i = 0; i <= index; i++) {
                cur = cur.next;
            }

            return cur.e;
        }
        // 得到链表头部节点的值
        getFirst (): E {
            return this.get(0);
        }
        // 得到链表尾部节点的值
        getLast (): E {
            return this.get(this.size - 1);
        }
        // 设置指定索引中节点的值
        set (index: number, e: E): void {
            if (index < 0 || index >= this.size) {
                throw new Error('index is illegal');
            }
            let cur: Node = this.dummyHead.next;
            for (let i = 0; i < index; i++) {
                cur = cur.next;
            }
            cur.e = e;
        }
        // 查找节点值为e的节点是否存在
        contains (e: E): boolean {
            let cur = this.dummyHead.next;
            while(cur) {
                if (cur.e === e) {
                    return true;
                }
                cur = cur.next;
            }
            return false;
        }
        // 删除指定索引处的节点
        remove (index: number): E {
            if (index < 0 || index >= this.size) {
                throw new Error('index is illegal');
            }
            let prev: Node = this.dummyHead;
            for (let i = 0; i < index; i++) {
                prev = prev.next;
            }
            let retNode = prev.next;
            prev.next = retNode.next;
            retNode.next = null;
            this.size--;

            return retNode.e;
        }
        // 删除链表头部的节点,返回节点的值
        removeFrist (): E {
            return this.remove(0);
        }
        // 删除链表尾部的节点,返回节点的值
        removeLast (): E {
            return this.remove(this.size - 1);
        }
        toString (): string {
            let retStr = '';
            let cur: Node = this.dummyHead.next;
            while (cur) {
                retStr += cur.e;
                if (cur.next) {
                    retStr += '->';
                }
                cur = cur.next;
            }

            return retStr;
        }
    }

    return LinkedList;
};