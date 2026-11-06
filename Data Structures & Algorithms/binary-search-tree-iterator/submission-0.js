/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.pointer = 0
        this.inOrderTraversal = [];

        const dfs = (node) => {
            if(node.left){
                dfs(node.left);
            }

            this.inOrderTraversal.push(node.val)

            if(node.right){
                dfs(node.right)
            }

        }

        dfs(root);

    }

    

    /**
     * @return {number}
     */
    next() {
        return this.inOrderTraversal[this.pointer++]
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return Boolean(this.inOrderTraversal[this.pointer])
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
