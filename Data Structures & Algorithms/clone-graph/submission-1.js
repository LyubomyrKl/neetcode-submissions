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
        if(!node) return null;

        const map = new Map([[node, new Node(node.val)]]);
        const queue = [node]

        while(queue.length > 0){
            const nodeToUpdate = queue.shift();

            for(let n of nodeToUpdate.neighbors){
                if(!map.has(n)){
                    map.set(n, new Node(n.val));
                    queue.push(n);
                }

                map.get(nodeToUpdate).neighbors.push(map.get(n))
            }


        }

        return map.get(node);
    }

}
