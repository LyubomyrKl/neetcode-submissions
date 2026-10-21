class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((x, y) => x[0] - y[0]);

        let counter = 0;
        let lastNonOverlapPoint = 0;

        for(let i = 1; i < intervals.length; i++){
            const a = intervals[lastNonOverlapPoint];
            const b = intervals[i];


            if(a[1] <= b[0]) {
                lastNonOverlapPoint = i;
            } else {
                counter++
                if (b[1] < a[1]) lastNonOverlapPoint = i;
            }
        }

        return counter;
    }
}
