const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}',
};

export function isValid(s: string): boolean {
    let stack = [];
    for (let p = 0; p < s.length; p++) {
        if (parentheses[s[p]]) {
            stack.push(s[p]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parentheses[leftBracket];
            if (s[p] !== correctBracket) return false;
        }
    }
    return !stack.length;
}
