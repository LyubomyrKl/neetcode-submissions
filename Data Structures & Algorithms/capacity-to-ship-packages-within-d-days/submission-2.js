class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = 0;
        let r = 0;

        for(let w of weights){
            l = Math.max(l, w)
            r += w
        }

        while(l < r){
            let mid = l + r >> 1;

            let daysSpent = 1;
            let sum = 0;

            for(let w of weights){
                if(sum + w <= mid){
                    sum += w;
                } else {
                    daysSpent++
                    sum = w;
                }
            }

            daysSpent > days ? l = mid + 1 : r = mid
        }
        
        return l
    }
}


{1, 2, 3, 4, 5}