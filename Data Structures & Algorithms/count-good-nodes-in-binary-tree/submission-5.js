class Solution {
    goodNodes(root) {
        let count = 0;

        const dfs = (node, maxValue) => {
            if(!node) return;

            if(node.val >= maxValue) count++;

            if(node.left){
                dfs(node.left, Math.max(maxValue, node.val));
            }

            if(node.right){
                dfs(node.right, Math.max(maxValue, node.val));

            }

        }

        dfs(root, root.val)
        return count;
    }
}