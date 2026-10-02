class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const unlocks = new Map();
        const needs = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            unlocks.set(i, []);
        }

        for (const [crs, pre] of prerequisites) {
            unlocks.get(pre).push(crs);
            needs[crs]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (needs[i] === 0) queue.push(i);
        }

        let taken = 0;
        let head = 0;

        while (head < queue.length) {
            const course = queue[head++];
            taken++;

            for (const next of unlocks.get(course)) {
                needs[next]--;
                if (needs[next] === 0) queue.push(next);
            }
        }

        return taken === numCourses;
    }
}