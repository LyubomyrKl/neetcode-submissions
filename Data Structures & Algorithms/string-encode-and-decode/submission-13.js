class Solution {
    encode(strs) {
        if(strs.length === 0) return '';

        let encodeString = '';

        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            encodeString += word.length + '#' + word;
        }

        return encodeString
    }

    decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        while (str[j] !== '#') {
            j++;
        }

        const len = Number(str.slice(i, j));

        const word = str.slice(j + 1, j + 1 + len);

        res.push(word);

        i = j + 1 + len;
    }

    return res;
}
}