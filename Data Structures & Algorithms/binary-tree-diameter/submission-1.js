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
    diameterOfBinaryTree(root) {

        let res = 0;

        const dfs = (node) => {
            if(!node) return 0;

            const leftDepth = dfs(node.left)
            const rightDepth = dfs(node.right)

            res = Math.max(res, leftDepth + rightDepth)

            return Math.max(leftDepth, rightDepth) + 1
        }

        dfs(root)


        return res;
     
    }
}
