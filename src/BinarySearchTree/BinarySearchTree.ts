export default (function<E>(){
    class Node {
        e: E;
        left: Node;
        right: Node;
        constructor (e) {
            this.e = e;
            this.left = this.right = null;
        }
    }   

    class BST {
        private size: number;
        private root: Node;
        private addNode (node: Node, e: E): Node {
            if (node === null) {
                return new Node(e);
            }
            // 这里没有判断e === node.e，相等的时候舍弃掉不添加这个节点
            if (e < node.e) {
                node.left = this.addNode(node.left, e);
            } else if (e > node.e) {
                node.right = this.addNode(node.right, e);
            }

            return node;
        }
        private containsE (node: Node, e: E): boolean {
            if (node === null) {
                return false;
            }
            // return this.containsE(node.left, e) || this.containsE(node.right, e);
            if (e < node.e) {
                return this.containsE(node.left, e);
            } else if (e > node.e) {
                return this.containsE(node.right, e);
            } else {
                return true;
            }
        }
        constructor () {
            this.size = 0;
            this.root = null;
        }
        add (e: E): void {
            this.root = this.addNode(this.root, e);
        }
        contains (e: E) {
            return this.containsE(this.root, e);
        }
        preOrder () {

        }
        inOrder () {

        }
        postOrder () {

        }
        levelOrder () {

        }
        minimum () {

        }
        maximum () {

        }
        removeMin () {

        }
        removeMax () {

        }
        remove () {
            
        }
        getSize () {
            return this.size;
        }
        isEmpty () {
            return this.size === 0;
        }
    }

    return BST;
})();