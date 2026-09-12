class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1;
        let largest = 0;

        while(l < r){
            const currentLargestPossibleSize = Math.min(heights[l], heights[r]) * (r-l)
            largest = Math.max(largest, currentLargestPossibleSize);
            heights[l] > heights[r] ? r-- : l++
        }
        

        return largest; 
    }
}


