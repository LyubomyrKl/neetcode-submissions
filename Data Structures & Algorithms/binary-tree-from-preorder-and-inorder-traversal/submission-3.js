class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preorderIndex = 0;

        const dfs = (left, right) => {
            // No elements in this inorder range
            if (left > right) return null;

            // Take the next root from preorder
            const number = preorder[preorderIndex++];

            const node = {
                val: number,
                left: null,
                right: null
            };

            // Find where the root is in inorder
            const indexOfNumber = inorder.indexOf(number);

            // Build everything left of the root
            node.left = dfs(left, indexOfNumber - 1);

            // Build everything right of the root
            node.right = dfs(indexOfNumber + 1, right);

            return node;
        };

        return dfs(0, inorder.length - 1);
    }
}