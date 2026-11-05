class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let start = 0;
    let end = 0;
    let n = fruits.length;
    let maxLen = 0;

    const map = new Map();

    while(end < n){
        
        map.set(fruits[end], (map.get(fruits[end]) || 0) + 1);

        while(map.size > 2){
            map.set(fruits[start], map.get(fruits[start])-1);
            if(map.get(fruits[start]) == 0) map.delete(fruits[start]);
            start++
        }

        maxLen = Math.max(maxLen, end-start + 1);
        end++

    }


    return maxLen;
    }
}
