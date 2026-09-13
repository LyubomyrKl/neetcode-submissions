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

        let i = 0;

        const dfs = (leftIdx, rightIdx) => {
            if(leftIdx > rightIdx) return null;

            const val = preorder[i++];
            const currentIdx = indexesMap.get(val)

            const root = new TreeNode(val);
           
            root.left = dfs(leftIdx, currentIdx - 1)
            root.right = dfs(currentIdx + 1, rightIdx)

            return root;
        }

        return dfs(0, inorder.length - 1)
    }
}