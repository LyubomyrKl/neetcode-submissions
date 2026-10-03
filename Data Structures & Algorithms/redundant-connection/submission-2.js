class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;

        const group = new Map();
        
        for (let i = 1; i <= n; i++) group.set(i, i);


        for (const [a, b] of edges) {

            if (group.get(a) === group.get(b)) {
                return [a, b];
            }

            const oldLabel = group.get(b);
            const newLabel = group.get(a);

           for (const [node, label] of group) {
                if (label === oldLabel) group.set(node, newLabel);
            }
        }

        return [];
    }
}

