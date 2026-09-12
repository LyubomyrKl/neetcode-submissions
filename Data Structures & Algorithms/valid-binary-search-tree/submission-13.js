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
     * @return {boolean}
     */
   
    isValidBST(node, min = -Infinity, max = Infinity) {
        if (!node) return true;

        if(node.val <= min || node.val >= max) return false;

        return this.isValidBST(node.left, min, node.val) && this.isValidBST(node.right, node.val, max)        
    }
}
