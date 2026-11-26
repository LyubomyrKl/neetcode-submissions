class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const minHeap = new MinPriorityQueue((entry) => entry[1]);

        minHeap.enqueue([0, 0]);

        const connectedNodes = new Set();

        let totalCost = 0;

        while (!minHeap.isEmpty()) {
           const [nodei, closestDistanceToNode] = minHeap.dequeue();

           if(connectedNodes.has(nodei)) continue;

            connectedNodes.add(nodei);

            totalCost += closestDistanceToNode;

            for(let i = 0; i < points.length; i++){
                if(connectedNodes.has(i)) continue;

                minHeap.enqueue([i, this.computeDistance(points[nodei], points[i])])
            }

        }

        return totalCost;
    }


    computeDistance(a, b){
       return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }
}
