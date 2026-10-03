class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const neighbors = new Map();

        for (let i = 0; i < n; i++) {
            neighbors.set(i, []);
        }

        edges.forEach(([a, b]) => {
            neighbors.get(a).push(b);
            neighbors.get(b).push(a);
        });


        let counter = 0;
        const visited = new Set();

        const bfs = (start) => {
            const queue = [start];
            let head = 0;

            while (head < queue.length) {
                const item = queue[head++];

                neighbors.get(item).forEach(next => {
                    if (!visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                });
            }
        };

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;

            visited.add(i);
            counter++;
            bfs(i);
        }

        return counter;
    }
}
