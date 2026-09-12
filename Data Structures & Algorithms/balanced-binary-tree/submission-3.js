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
    isBalanced(root) {
        let res = true;

        const dfs = node => {
            if(!node || !res) return 0;

            const leftDepth  = dfs(node.left);
            const rightDepth = dfs(node.right);

            if(Math.max(leftDepth, rightDepth) - Math.min(leftDepth, rightDepth) > 1){
                res = false;
            }

            return Math.max(leftDepth, rightDepth) + 1
        }

        dfs(root)

        return res;
    }
}
