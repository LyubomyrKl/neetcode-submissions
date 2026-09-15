class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(preorder.length === 0 || inorder.length === 0) return null;

        const map = new Map();

        inorder.forEach((item, i) => {
            map.set(item, i)
        })

        let i = 0;

        const dfs = (startIdx, endIdx) => {
            if(startIdx > endIdx) return null;
            const val = preorder[i++];
            const currentIdx = map.get(val);
            const node = new TreeNode(val)

            node.left = dfs(startIdx, currentIdx - 1)
            node.right = dfs(currentIdx + 1, endIdx)

            return node;
        }

        return dfs(0, inorder.length - 1);

    }
}