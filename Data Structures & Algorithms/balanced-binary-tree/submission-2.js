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
        
        const dfs = (node) => {
            if(!node) return 0;
            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right)

            if(Math.max(leftHeight, rightHeight) - Math.min(leftHeight, rightHeight) > 1 ){
                res = false;
                return
            }
        
            return Math.max(leftHeight, rightHeight) + 1;
        }

        dfs(root);

        return res;
    }
}
