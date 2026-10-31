class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    //No overlap if one interval ends before the other starts.
    // two ways not to overlap a ends before b starts and b.ends before a starts:   
    // a.end < b.start:  [1, 3]  and  [5, 7]     
    // b.end < a.start:  [5, 7]  and  [1, 3]  
    // so flip when overlap  ⟺  a.start <= b.end  &&  b.start <= a.end
    // but if array is sorted then by definithin a.start <= b.end always true
    // since a.start <= b.start and b.start <= b.end 
    insert(intervals, newInterval) {
        const res = []
        let i = 0;

        while(i < intervals.length && intervals[i][1] < newInterval[0]){
            res.push(intervals[i]);
            i++
        }

        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        res.push(newInterval)
        res.push(...intervals.slice(i))


        return res;
    }
}
