class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        const operations = {
            '+': (n1, n2) => n1 + n2,
            '-': (n1, n2) => n1 - n2,
            '*': (n1, n2) => n1 * n2,
            '/': (n1, n2) => Math.trunc(n1 / n2),
        };

        for (const token of tokens) {
            if (!(token in operations)) {
                stack.push(Number(token));
                continue;
            }

            const n2 = stack.pop();
            const n1 = stack.pop();

            stack.push(operations[token](n1, n2));
        }

        return stack[0];
    }
}