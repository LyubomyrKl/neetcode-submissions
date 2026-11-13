class Solution {
    suggestedProducts(products, searchWord) {
        products.sort();
        let lo = 0,
            hi = products.length;
        const answer = [];
        for (let pos = 0; pos < searchWord.length; pos++) {
            const c = searchWord[pos];
            while (
                lo < hi &&
                (products[lo].length <= pos || products[lo][pos] !== c)
            )
                lo++;
            while (
                lo < hi &&
                (products[hi - 1].length <= pos || products[hi - 1][pos] !== c)
            )
                hi--;
            answer.push(products.slice(lo, Math.min(hi, lo + 3)));
        }
        return answer;
    }
}
