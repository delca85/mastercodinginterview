export function minRemoveToMakeValid(s: string): string {
    const stack = [],
        result = [];
    for (let p = 0; p < s.length; p++) {
        if (s[p] === ')') {
            if (stack.length) {
                stack.pop();
                result.push(s[p]);
            }
        } else if (s[p] === '(') {
            stack.push(result.length);
            result.push(s[p]);
        } else {
            result.push(s[p]);
        }
    }
    return result.filter((char, index) => !stack.includes(index)).join('');
}
