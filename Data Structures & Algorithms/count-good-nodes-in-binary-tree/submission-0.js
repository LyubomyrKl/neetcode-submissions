class Solution {
    goodNodes(root) {
        let count = 0;

        const dfs = (node, maxSoFar) => {
            if (!node) return;

            if (node.val >= maxSoFar) {
                count++;
            }

            maxSoFar = Math.max(maxSoFar, node.val);

            dfs(node.left, maxSoFar);
            dfs(node.right, maxSoFar);
        };

        dfs(root, root.val);

        return count;
    }
}