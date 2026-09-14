class Node{
    constructor(coords, distance){
        this.coords = coords;
        this.distance = distance
    }
}

class Solution {
    constructor() {
        this.map = new Map();
        this.minHeap = [];
    }

    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        for(let point of points){
            this.insert(new Node(point, (point[0]**2 + point[1]**2)))
        }

        const res = [];

        while(res.length < k){
            res.push(this.pop().coords);
        }
        return res
    }

    insert(value) {
        this.minHeap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.minHeap.length === 0) return;

        if (this.minHeap.length === 1) {
            return this.minHeap.pop();
        }

        const minNode = this.minHeap[0];

        this.minHeap[0] = this.minHeap.pop();

        this.heapifyDown();

        return minNode;
    }

    heapifyUp() {
        let i = this.minHeap.length - 1;

        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);

            const itemToHeapify = this.minHeap[i];
            const parentNode = this.minHeap[parentIndex];

            if (parentNode.distance <= itemToHeapify.distance) return;

            this.minHeap[i] = parentNode;
            this.minHeap[parentIndex] = itemToHeapify;

            i = parentIndex;
        }
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            const leftChildIdx = i * 2 + 1;
            const rightChildIdx = i * 2 + 2;

            if (leftChildIdx >= this.minHeap.length) {
                return;
            }

            let smallestChildIdx = leftChildIdx;

            if (
                rightChildIdx < this.minHeap.length &&
                this.minHeap[rightChildIdx].distance <
                this.minHeap[leftChildIdx].distance
            ) {
                smallestChildIdx = rightChildIdx;
            }

            if (
                this.minHeap[i].distance <=
                this.minHeap[smallestChildIdx].distance
            ) {
                return;
            }

            const temp = this.minHeap[i];

            this.minHeap[i] = this.minHeap[smallestChildIdx];
            this.minHeap[smallestChildIdx] = temp;

            i = smallestChildIdx;
        }
    }
}