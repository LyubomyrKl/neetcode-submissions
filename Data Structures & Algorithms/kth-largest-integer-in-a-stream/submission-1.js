class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.heap = [];
        for (const n of nums) this.add(n);
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp();
        if (this.heap.length > this.k) this.pop();
        return this.heap[0];
    }

     parentIndex = (childIndex) => {
        return Math.floor((childIndex - 1) / 2);
    };

    parent = (childIndex) => {
        return this.heap[this.parentIndex(childIndex)];
    };

    leftIdx = (parentIdx) => {
        return parentIdx * 2 + 1;
    };

    left = (parentIdx) => {
        return this.heap[this.leftIdx(parentIdx)];
    };

    rightIdx = (parentIdx) => {
        return parentIdx * 2 + 2;
    };

    right = (parentIdx) => {
        return this.heap[this.rightIdx(parentIdx)];
    };

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const valueToReturn = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return valueToReturn;
    }

    heapifyUp() {
        let i = this.heap.length - 1;

        while (i !== 0) {
            const parentIdx = this.parentIndex(i);

            if (this.heap[parentIdx] <= this.heap[i]) {
                return;
            }

            [this.heap[i], this.heap[parentIdx]] =
                [this.heap[parentIdx], this.heap[i]];

            i = parentIdx;
        }
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            const leftIdx = this.leftIdx(i);
            const rightIdx = this.rightIdx(i);

            if (leftIdx >= this.heap.length) {
                return;
            }


            let minChildIdx = leftIdx;

            if (
                rightIdx < this.heap.length &&
                this.heap[rightIdx] < this.heap[leftIdx]
            ) {
                minChildIdx = rightIdx;
            }

            if (this.heap[i] <= this.heap[minChildIdx]) {
                return;
            }

            [this.heap[i], this.heap[minChildIdx]] =
                [this.heap[minChildIdx], this.heap[i]];

            i = minChildIdx;
        }
    }
}
