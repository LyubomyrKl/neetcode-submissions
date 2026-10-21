class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    //No overlap if one interval ends before the other starts.
    // two ways not to overlap a ends before b starts and b.ends before a starts:   
    // a.end < b.start:  [1, 3]  and  [5, 7]     
    // b.end < a.start:  [5, 7]  and  [1, 3]  
    // so flip when overlap  ⟺  a.start <= b.end  &&  b.start <= a.end
    // but if array is sorted then by definithin a.start <= b.end always true
    // since a.start <= b.start and b.start <= b.end 
    merge(intervals) {
                intervals.sort((x, y) => x[0] - y[0]);

        const res = [intervals[0]];
        
        for(let i = 1; i < intervals.length; i++){
            const a = res[res.length - 1];
            const b = intervals[i]

            if(b[0] <= a[1]){
                res[res.length - 1] = [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
            } else {
                res.push(b);
            }

        }

        return res;
    }
}
