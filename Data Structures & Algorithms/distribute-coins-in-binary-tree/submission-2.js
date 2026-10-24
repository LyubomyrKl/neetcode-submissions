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
    distributeCoins(root) {

        let counter = 0

        const dfs = (node) => {
            if(!node) return 0;

           const left = dfs(node.left);
           const right = dfs(node.right);

            counter += Math.abs(left) + Math.abs(right);

            return node.val + left + right - 1
        }

        dfs(root)

        return counter;

    }
}
