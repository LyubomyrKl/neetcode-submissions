class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    findMinArrowShots(points) {
        points.sort((a, b) => a[1] - b[1]);
        let res = 1,
            prevEnd = points[0][1];

        for (let i = 1; i < points.length; i++) {
            if (points[i][0] > prevEnd) {
                prevEnd = points[i][1];
                res++;
            }
        }

        return res;
    }
}