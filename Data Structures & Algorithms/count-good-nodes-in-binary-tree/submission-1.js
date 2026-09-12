class Solution {
    goodNodes(root) {
        let count = 0;

        const dfs = (node, maxSoFar) => {
            if(!node) return;

            if(node.val >= maxSoFar){
                count++;
                maxSoFar = node.val
            }

            dfs(node.right, maxSoFar)
            dfs(node.left, maxSoFar)
        }


        dfs(root, root.val)

        return count;
    }
}