class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const inDegree = new Array(numCourses).fill(0);
        const dependencies = Array.from({length: numCourses}, () => []);


        for(let i = 0; i < prerequisites.length; i++){
            const item = prerequisites[i];
            inDegree[item[0]] += 1;
            dependencies[item[1]].push(item[0]);
        }


        const queue = [];
        
        for(let j = 0; j < inDegree.length; j++){
            if(inDegree[j] === 0) queue.push(j)
        }

        
        let head = 0;

        while(head < queue.length){
            const dependents = dependencies[queue[head++]];

            for(let dep of dependents){
                if(inDegree[dep] === 1){
                    queue.push(dep)
                }
                
                inDegree[dep] -= 1;
            }

        }


        return queue.length === numCourses ? queue : [];
        
    }
}