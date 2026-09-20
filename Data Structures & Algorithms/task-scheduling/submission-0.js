class Solution {

    constructor(){
        this.maxHeap = [];
        this.queue = [];
    }
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
    const countArray = new Array(26).fill(0);

    for (let task of tasks) {
        const taskAscii = task.charCodeAt(0) - 65;
        countArray[taskAscii]++;
    }

    countArray
        .filter(item => item > 0)
        .forEach(item => this.insert(item));

    let timer = 0;

    while (this.maxHeap.length > 0 || this.queue.length > 0) {

        if (this.maxHeap.length > 0) {
            const mostFrequentItem = this.pop();

            if (mostFrequentItem > 1) {
                this.queue.push({
                    count: mostFrequentItem - 1,
                    timeToReturnInHeap: timer + n + 1
                });
            }
        }

        if (
            this.queue.length > 0 &&
            this.queue[0].timeToReturnInHeap <= timer + 1
        ) {
            const task = this.queue.shift();
            this.insert(task.count);
        }

        timer++;
    }

    return timer;
}

    insert(value) {
        this.maxHeap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.maxHeap.length === 0) return -1;

        if (this.maxHeap.length === 1) {
            return this.maxHeap.pop();
        }

        const valueToReturn = this.maxHeap[0];

        this.maxHeap[0] = this.maxHeap.pop();

        this.heapifyDown();

        return valueToReturn;
    }

    heapifyUp() {
        let i = this.maxHeap.length - 1;

        while (i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);

            if (this.maxHeap[parentIdx] >= this.maxHeap[i]) {
                return;
            }

            [this.maxHeap[parentIdx], this.maxHeap[i]] =
                [this.maxHeap[i], this.maxHeap[parentIdx]];

            i = parentIdx;
        }
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            const leftIdx = i * 2 + 1;
            const rightIdx = i * 2 + 2;

            if (leftIdx >= this.maxHeap.length) {
                return;
            }

            let maxChildIdx = leftIdx;

            if (
                rightIdx < this.maxHeap.length &&
                this.maxHeap[rightIdx] > this.maxHeap[leftIdx]
            ) {
                maxChildIdx = rightIdx;
            }

            if (this.maxHeap[i] >= this.maxHeap[maxChildIdx]) {
                return;
            }

            [this.maxHeap[i], this.maxHeap[maxChildIdx]] =
                [this.maxHeap[maxChildIdx], this.maxHeap[i]];

            i = maxChildIdx;
        }
    }
    
}
