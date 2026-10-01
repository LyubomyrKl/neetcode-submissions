/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
     
        const copiedNodes = new Map();

        const dfs = (node) => {
            if (!node) return null;
            if(copiedNodes.has(node)){
                return copiedNodes.get(node);
            }

            const copyNode = new Node(node.val)
            copiedNodes.set(node, copyNode)

            copyNode.neighbors = node.neighbors.map(dfs)

            return copyNode;
        }

        return dfs(node)
    }


}
