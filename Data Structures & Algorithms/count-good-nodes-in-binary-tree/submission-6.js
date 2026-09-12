class Solution {
    goodNodes(root) {
        let count = 0;

        const dfs = (node, lastMaxValue) => {
            if(!node) return;

            if(node.val >= lastMaxValue){
                count++
                lastMaxValue = node.val
            };

            dfs(node.left, lastMaxValue)
            dfs(node.right, lastMaxValue)
        }

        dfs(root, root.val)

        return count;
    }
}