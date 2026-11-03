class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
    const parent = new Map();
    
    function find(x) {
        if (!parent.has(x)) parent.set(x, x);
        if (parent.get(x) !== x) {
            parent.set(x, find(parent.get(x))); // Path compression
        }
        return parent.get(x);
    }
    
    for (const [a, b] of edges) {
        const rootA = find(a);
        const rootB = find(b);
        
        if (rootA === rootB) {
            return [a, b];
        }
        parent.set(rootA, rootB); // Union
    }
    
    return [];
}
}

