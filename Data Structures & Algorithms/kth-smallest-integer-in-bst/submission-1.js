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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let resNode = []

        const dfs = (node) => {
            if(resNode.length >= k) return;

            if(!node) return;
            
            if(node.left){
                dfs(node.left);
            }

            resNode.push(node);

            if(node.right){
                dfs(node.right)
            };
        }

        dfs(root);

        return resNode[k-1].val
    }
}
