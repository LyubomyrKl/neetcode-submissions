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

            const excess = node.val + childrenNeeds - 1;;

            counter += Math.abs(excess);

            return excess
        }

        dfs(root)

        return counter;

    }
}
