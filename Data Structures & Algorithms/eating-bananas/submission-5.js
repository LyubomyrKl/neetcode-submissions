class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        let Max

        while (l < r) {
            let timeSpent = 0;
            let mRate = l + Math.floor((r - l) / 2)
            
            piles.forEach(pile => {
                timeSpent += Math.ceil(pile / mRate);
            })

            if (timeSpent <= h) {
                r = mRate;
            } else {
                l = mRate + 1;
            }
        }

        return l;
    }
}