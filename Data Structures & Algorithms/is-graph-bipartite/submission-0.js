class Solution {
    /**
     * @param {number[][]} graph
     * @return {boolean}
     */
    isBipartite(graph) {
        const colors = new Array(graph.length).fill(-1);

        for (let start = 0; start < graph.length; start++) {
            if (colors[start] !== -1) continue; // Already processed
            
            colors[start] = 0; // Start BFS from this node
            const queue = [start];
            
            for (let i = 0; i < queue.length; i++) {
                const node = queue[i];
                for (let neighbor of graph[node]) {
                    if (colors[neighbor] === colors[node]) return false; // Conflict!
                    if (colors[neighbor] === -1) {
                        colors[neighbor] = 1 - colors[node];
                        queue.push(neighbor);
                    }
                }
            }
        }
        
        return true;
    }
}



const slidingWindow = (cond = () => {}) => {
    let l = 0;
    let r = 0;

    cond() ? l++ : r++

    
} 