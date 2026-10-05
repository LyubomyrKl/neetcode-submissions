class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
    const edges = Array.from({ length: n }, () => []);
    for (const [from, to, price] of flights) edges[from].push([to, price]);

    const minFlights = new Array(n).fill(Infinity);

    const minHeap = new MinPriorityQueue((entry) => entry[1]); 
    minHeap.enqueue([src, 0, 0]);

    while (!minHeap.isEmpty()) {
        const [node, cost, used] = minHeap.dequeue();

        if (node === dst) return cost;

        if (used >= minFlights[node]) continue;
        minFlights[node] = used;

        if (used === k + 1) continue;

        for (const [next, price] of edges[node]) {
            minHeap.enqueue([next, cost + price, used + 1]);
        }
    }

    return -1;
}
}
