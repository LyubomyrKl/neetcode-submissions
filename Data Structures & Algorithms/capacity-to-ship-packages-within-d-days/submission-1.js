class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((w, a) => w + a, 0);

        const getDaysNeeded = (capacity) => {
            let daysNeeded = 1;
            let currentLoad = 0;
            
            for (const weight of weights) {
                if (currentLoad + weight > capacity) {
                    daysNeeded++;
                    currentLoad = weight;
                } else {
                    currentLoad += weight;
                }
            }
            return daysNeeded;
        };

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const daysNeeded = getDaysNeeded(mid);

            daysNeeded <= days ? r = mid - 1 : l = mid + 1
        }

        return l;
    }
}
