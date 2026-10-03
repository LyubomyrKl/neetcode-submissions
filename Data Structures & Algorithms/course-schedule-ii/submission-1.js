class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
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

        needs.forEach((item, i) => {
            if(item === 0) queue.push(i)
        })

        let head = 0;
        while(head < queue.length){
            const nodeToDequeue = queue[head++];

            unlocks.get(nodeToDequeue).forEach( crs => {
                needs[crs]--
                if (needs[crs] === 0) queue.push(crs);
            })
        }

        return queue.length === numCourses ? queue : [];
    }
}