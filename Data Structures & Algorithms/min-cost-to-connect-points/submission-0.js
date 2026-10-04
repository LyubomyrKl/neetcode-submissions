class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const minHeap = new MinPriorityQueue((entry) => entry[1]);

        minHeap.enqueue([0, 0]);

        const visited = new Set();

        let totalCost = 0;

        while (!minHeap.isEmpty()) {
            const [node, cost] = minHeap.dequeue();

            if(visited.has(node)) continue

            visited.add(node);
            totalCost += cost;

            for(let i = 0; i < points.length; i++){
                if(visited.has(i)) continue;

                const distance = this.computeDistance(points[node], points[i])

                minHeap.enqueue([i, distance])
            }
        }

        return totalCost;
    }


    computeDistance(a, b){
       return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }
}
