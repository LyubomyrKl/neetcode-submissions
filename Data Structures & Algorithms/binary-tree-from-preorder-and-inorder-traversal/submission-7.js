class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(preorder.length === 0 || inorder.length === 0) return null;
        const indexesMap = new Map();


        inorder.forEach((value, index) => {
            indexesMap.set(value, index);
        });

        let preorderIndex = 0;

        const dfs = (leftIndexOfSubtree, rightIndexOfSubtree) => {
            if (leftIndexOfSubtree > rightIndexOfSubtree) {
                return null;
            }
     
            const value = preorder[preorderIndex++];
            const root = new TreeNode(value);
            const mid = indexesMap.get(value);

            root.left = dfs(leftIndexOfSubtree, mid - 1);
            root.right = dfs(mid + 1, rightIndexOfSubtree)

            return root

            
        }


        return dfs(0, inorder.length - 1);

    }
}