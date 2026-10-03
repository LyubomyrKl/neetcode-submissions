class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        if (edges.length === 0) return true;
        const neighbors = new Map();

        for (let i = 0; i < n; i++) {
            neighbors.set(i, []);
        }

        edges.forEach(([a, b]) => {
            neighbors.get(a).push(b);
            neighbors.get(b).push(a);
        });

        const visited = new Set([0]);
        const queue = [0];
        let head = 0;

        while (head < queue.length) {
            const node = queue[head++];

            for (const next of neighbors.get(node) || []) {
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }

        return visited.size === n;
    }
}
