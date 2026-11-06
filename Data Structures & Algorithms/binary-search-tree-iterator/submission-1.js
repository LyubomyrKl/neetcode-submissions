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
    // O(n)
    constructor(root) {
        this.stack = [];

        
        while(root){
            this.stack.push(root);
            root = root.left
        }

    }



    /**
     * @return {number}
     */
    //O(1) in avarage
    next() {
        let res = this.stack.pop();
        let cur = res.right;
        while (cur) {
            this.stack.push(cur);
            cur = cur.left;
        }
        return res.val;
    }

    /**
     * @return {boolean}
     */
    //O(1) in avarage
    hasNext() {
        return this.stack.length > 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
