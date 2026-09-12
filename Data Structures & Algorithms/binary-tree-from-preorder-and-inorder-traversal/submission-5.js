class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preorderIndex = 0;

        const indexMap = new Map()

        inorder.forEach((item,  index) => { 
            indexMap.set(item, index);
        })

        const dfs = (left, right) => {
            if (left > right) return null;

            const number = preorder[preorderIndex++];

            const node = {
                val: number,
                left: null,
                right: null
            };

            const indexOfNumber = indexMap.get(number)

            node.left = dfs(left, indexOfNumber - 1);
            node.right = dfs(indexOfNumber + 1, right);

            return node;
        };

        return dfs(0, inorder.length - 1);
    }
}