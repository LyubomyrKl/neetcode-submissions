/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((x, y) => x.start - y.start);

        for(let i = 0; i < intervals.length - 1; i++){
            const a = intervals[i];
            const b = intervals[i + 1]
    
            if (b.start < a.end) {                       
                return false  
            } 
        }

        return true
    }
}
