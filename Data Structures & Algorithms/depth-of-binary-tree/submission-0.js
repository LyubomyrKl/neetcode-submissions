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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0
    
        const leftBranchDepthCount = this.maxDepth(root.left)
        const rightBranchDepthCount = this.maxDepth(root.right)

        return (Math.max(leftBranchDepthCount, rightBranchDepthCount) || 0) + 1;
    }
}
