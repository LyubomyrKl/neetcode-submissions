class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
       const inDegree = new Array(numCourses).fill(0)
       const dependenciesMap = new Map();

       for(let [course, prerequisite] of prerequisites){
          if(!dependenciesMap.has(prerequisite)) dependenciesMap.set(prerequisite, new Set())

          dependenciesMap.get(prerequisite).add(course);

          inDegree[course]++
       }


        const queue = [];
        const visited = new Set();

        inDegree.forEach((degree, course) => {
            if(degree === 0){
                queue.push(course);
                visited.add(course);
            }
        })

        while(queue.length){
            const course = queue.pop();

            const dependencies = dependenciesMap.get(course) || [];

            for(let dep of dependencies){
                if(--inDegree[dep] === 0) {
                    queue.push(dep);
                    visited.add(dep);
                }
            }
        }
        

        return visited.size === numCourses ? Array.from(visited) : []
    }
}