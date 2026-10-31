class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
    const parent = Array.from({ length: n + 1 }, (_, i) => i);  // everyone is their own leader
    const rank = new Array(n + 1).fill(0);                      // rough tree height

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);       // walk up, then shortcut
        return parent[x];
    };

    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra === rb) return false;                            // already same island
        if (rank[ra] < rank[rb]) parent[ra] = rb;               // short tree under tall
        else if (rank[ra] > rank[rb]) parent[rb] = ra;
        else { parent[rb] = ra; rank[ra]++; }
        return true;
    };

    for (const [a, b] of edges) {
        if (!union(a, b)) return [a, b];
    }
    return [];
    }
}

