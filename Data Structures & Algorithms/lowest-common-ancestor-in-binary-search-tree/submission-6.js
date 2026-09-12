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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(node, p, q) {
        if(node.val > Math.max(p.val, q.val)) return this.lowestCommonAncestor(node.left, p, q)
        if(node.val < Math.min(p.val, q.val)) return this.lowestCommonAncestor(node.right, p, q)

        return node;
    }
}
