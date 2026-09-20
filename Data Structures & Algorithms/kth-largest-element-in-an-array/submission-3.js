class Solution {
    constructor() {
        this.minHeap = [];
    }

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        for(const num of nums){
            this.insert(num);

            if(this.minHeap.length > k) this.pop();
        }

        return this.minHeap[0];
    }

    parentIndex = (childIndex) => {
        return Math.floor((childIndex - 1) / 2);
    };

    leftIdx = (parentIdx) => {
        return parentIdx * 2 + 1;
    };

    rightIdx = (parentIdx) => {
        return parentIdx * 2 + 2;
    };

    insert(value) {
        this.minHeap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.minHeap.length === 0) return;

        if (this.minHeap.length === 1) {
            return this.minHeap.pop();
        }

        const valueToReturn = this.minHeap[0];

        this.minHeap[0] = this.minHeap.pop();

        this.heapifyDown();

        return valueToReturn;
    }

    heapifyUp() {
        let i = this.minHeap.length - 1;

        while (i !== 0) {
            const parentIdx = this.parentIndex(i);

            if (this.minHeap[parentIdx] <= this.minHeap[i]) {
                return;
            }

            [this.minHeap[i], this.minHeap[parentIdx]] =
                [this.minHeap[parentIdx], this.minHeap[i]];

            i = parentIdx;
        }
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            const leftIdx = this.leftIdx(i);
            const rightIdx = this.rightIdx(i);

            if (leftIdx >= this.minHeap.length) {
                return;
            }

            let minChildIdx = leftIdx;


            if (
                rightIdx < this.minHeap.length &&
                this.minHeap[rightIdx] < this.minHeap[leftIdx]
            ) {
                minChildIdx = rightIdx;
            }

            if (this.minHeap[i] <= this.minHeap[minChildIdx]) return;

            [this.minHeap[i], this.minHeap[minChildIdx]] =
                [this.minHeap[minChildIdx], this.minHeap[i]];

            i = minChildIdx;
        }
    }
}