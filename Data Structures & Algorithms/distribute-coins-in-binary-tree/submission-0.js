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

            const childrenNeeds = dfs(node.right) + dfs(node.left)

            const needed = node.val + childrenNeeds - 1;;

            counter += Math.abs(needed);

            return node.val + childrenNeeds - 1;
        }

        dfs(root)

        return counter;

    }
}
