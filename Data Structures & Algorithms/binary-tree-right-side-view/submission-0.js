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
     * @return {number[]}
     */
    rightSideView(root) {
       if(!root) return [];

        const res = [];

        const dfs = (node, level) => {
            if(!node) return;

            if (!res[level]) {
                res[level] = [];
            }

            res[level].push(node.val);

            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        
        }

        dfs(root, 0);
        console.log(res)
        return res.map(item => item[item.length - 1]);
    }
}
