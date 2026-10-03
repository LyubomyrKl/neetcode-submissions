class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const neighbors = new Map();

        for (let i = 0; i < n; i++) {
            neighbors.set(i, []);
        }

        edges.forEach(([a, b]) => {
            neighbors.get(a).push(b);
            neighbors.get(b).push(a);
        });

        const visited = new Set([0]);
        const q = new Queue([[0, -1]]);

        
        while (!q.isEmpty()) {
            const [node, parent] = q.pop();
            for (const nei of neighbors.get(node)) {
                if (nei === parent) continue;
                if (visited.has(nei)) return false;
                visited.add(nei);
                q.push([nei, node]);
            }
        }

        return visited.size === n;
    }
}
