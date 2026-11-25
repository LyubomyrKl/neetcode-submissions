class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    findMinArrowShots(points) {
        points.sort((x, y) => x[0] - y[0]);

        const res = [points[0]];

        for(let i = 1; i < points.length; i++){
            const a = res[res.length - 1];
            const b = points[i];

            if(b[0] <= a[1]){
                a[1] = Math.min(a[1], b[1]);
            } else {
                res.push(b);
            }
        }

        return res.length;
    }
}
