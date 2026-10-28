class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        const sum = weights.reduce((w, a) => w + a, 0);
        let l = Math.max(...weights);
        let r = sum;

        const canShip = (capacity) => {
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
            return daysNeeded <= days;
        };

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (canShip(mid)) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
