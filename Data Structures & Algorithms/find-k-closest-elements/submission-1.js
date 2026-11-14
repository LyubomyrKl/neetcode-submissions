class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
    if(x > arr[arr.length - 1]) return arr.slice(arr.length - k);
    if(x < arr[0]) return arr.slice(0, k);

    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        const mid = l + Math.floor((r - l) / 2);
        
        if(arr[mid] < x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    
    // l is leftmost position where arr[l] >= x
    let left = l - 1;   // one step left
    let right = l;      // at x position
    
    let res = [];
    while(k > 0) {
        if(left < 0) {
            res.push(arr[right]);
            right++;
        } else if(right >= arr.length) {
            res.unshift(arr[left]);
            left--;
        } else if(x - arr[left] <= arr[right] - x) {
            res.unshift(arr[left]);  // add to front
            left--;
        } else {
            res.push(arr[right]);    // add to back
            right++;
        }
        k--;
    }
    
    return res;
}

}
