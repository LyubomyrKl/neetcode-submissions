class Solution {
    /**
     * @param {number[][]} graph
     * @return {number[]}
     */
    eventualSafeNodes(graph) {
        const inDegree = new Array(graph.length).fill(0);
    const dependsOnNode = Array.from({length: graph.length}, () => []);

    for(let i = 0; i < graph.length; i++){
        const item = graph[i];

        for(let dependsFrom of item){
            inDegree[i] += 1;
            dependsOnNode[dependsFrom].push(i);
        }
    } 
    

    const queue = [];

    for(let j = 0; j < inDegree.length; j++){
        if(inDegree[j] === 0){
            queue.push(j);
        }
    }

    let head = 0;

    while(head < queue.length){
        const item = queue[head++]
        for(let freedItem of dependsOnNode[item]){
            inDegree[freedItem] -= 1;

            if(inDegree[freedItem] === 0){
                queue.push(freedItem);
            }
        } 
    }

    const res = [];

    for(let k = 0; k < inDegree.length; k++){
        if(inDegree[k] === 0){
            res.push(k);
        }
    }

    return res;
    }
}
