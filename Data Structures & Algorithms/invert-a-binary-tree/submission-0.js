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
        if(!node) return null

        const reversedRight = this.invertTree(node.right);
        const reversedLeft = this.invertTree(node.left);

        node.left = reversedRight;
        node.right = reversedLeft; 


        return node    
    }
}
