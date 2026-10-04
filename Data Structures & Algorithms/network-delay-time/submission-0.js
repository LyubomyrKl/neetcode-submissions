/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
   networkDelayTime(times, n, k) {
        const edges = new Map();
        for (let i = 1; i <= n; i++) edges.set(i, []);
        for (const [u, v, w] of times) edges.get(u).push([v, w]);

        const minHeap = new MinPriorityQueue((entry) => entry[1]);
        minHeap.enqueue([k, 0]);

        const visit = new Set();

        let t = 0;

        while (!minHeap.isEmpty()) {
            const [node, time] = minHeap.dequeue();
            if (visit.has(node)) continue;
            visit.add(node);
            t = time;

            for (const [next, cost] of edges.get(node)) {
                if (!visit.has(next)) {
                    minHeap.enqueue([next, time + cost]);
                }
            }
        }

        return visit.size === n ? t : -1;
    }
}