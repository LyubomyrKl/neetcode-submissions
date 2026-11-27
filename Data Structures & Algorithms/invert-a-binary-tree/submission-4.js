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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(node) {
        if(!node) return null;

        const left = this.invertTree(node.left);
        const right = this.invertTree(node.right);
        
        node.left = right;
        node.right = left;

        return node    
    }
}
