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
        
        function dfs(currentNode){
            if(!currentNode) return 0;

            const leftHeight = dfs(currentNode.left);
            const rigthHeight = dfs(currentNode.right);

            res = Math.max(res, leftHeight + rigthHeight)

            return Math.max(leftHeight, rigthHeight) + 1
        }

        dfs(root)

        return res
    }
}
