class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = new Set(["/", "-", "+", "*"]);

        for (let i = 0; i < tokens.length; i++) {
            if (!operators.has(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                let right = stack.pop();
                let left = stack.pop();

                switch (tokens[i]) {
                    case "+":
                        stack.push(left + right);
                        break;
                    case "*":
                        stack.push(left * right);
                        break;
                    case "-":
                        stack.push(left - right);
                        break;
                    case "/":
                        stack.push(Math.trunc(left / right));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
