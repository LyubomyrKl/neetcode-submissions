class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - k;  // Key: the rightmost valid starting position
        
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            
            // Compare: is x closer to arr[m] or arr[m + k]?
            if (x - arr[m] > arr[m + k] - x) {
                // x is closer to the right, so move window right
                l = m + 1;
            } else {
                // x is closer to the left (or equal), so move window left
                r = m;
            }
        }
        
        return arr.slice(l, l + k);
    }
        

}
