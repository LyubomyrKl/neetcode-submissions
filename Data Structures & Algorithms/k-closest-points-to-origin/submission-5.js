class Solution {
    kClosest(points, k) {
        const maxHeap = new PriorityQueue((a, b) => b.distance - a.distance);

        for (const [x, y] of points) {
            maxHeap.enqueue({ distance: x * x + y * y, point: [x, y] });
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        return maxHeap.toArray().map(item => item.point);
    }
}
