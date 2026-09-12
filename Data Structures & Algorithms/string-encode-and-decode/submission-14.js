class Solution {
    encode(strs) {
        if (strs.length === 0) return '';
        let encodedStr = '';

        for(let i = 0; i < strs.length; i++){
           encodedStr += strs[i].length + '#' + strs[i]
        }

        return encodedStr;
    }

    decode(str) {
        if(str.length === 0) return []

        const res = [];

        let i = 0;

        while(i < str.length){
            let j = i;

            while (str[j] !== '#'){
                j++
            }

            const len = Number(str.slice(i, j));
            const word = str.slice(j+1, j+1+len)

            res.push(word);

            i = j+1+len
        }


        return res;
    }
}


'15#hellohellohello'