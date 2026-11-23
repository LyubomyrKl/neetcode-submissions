class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a, b) => a[1] - b[1]);

        const minHeap = new MinPriorityQueue((x) => x[1]); // [capacity to free, end]

        let curPass = 0;
        for(let [numPassengersi, fromi, toi] of trips){

            while (!minHeap.isEmpty() && minHeap.front()[1] <= fromi) {
                curPass -= minHeap.dequeue()[0];
            }

            curPass += numPassengersi;
            if (curPass > capacity) {
                return false;
            }

            minHeap.enqueue([numPassengersi, toi]);
        }

        return true;
    };
}
