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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const res = [];

    

        const bfs = (node, level) => {
            const currentLevelState = res[level] || []

            currentLevelState.push(node.val);

            res[level] = currentLevelState;

            if(node.left){
                bfs(node.left, level + 1)
            }

            if(node.right){
                bfs(node.right, level + 1)
            }
        }

        bfs(root, 0);

        return res;

    }
}

