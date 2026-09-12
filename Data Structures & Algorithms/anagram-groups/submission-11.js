class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let n = strs.length
        let myMap = {}

        for (let i = 0; i < n; i++){

            let word = strs[i]
            let sorted = word.split("").sort().join("")

            if(myMap[sorted] !== undefined) myMap[sorted].push(word)
            else myMap[sorted] = [word]

        }

        let finalArr = []
        for (const key in myMap){
            finalArr.push(myMap[key])
        }      

        return finalArr
    }
}
