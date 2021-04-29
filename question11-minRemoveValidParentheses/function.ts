export function minRemoveToMakeValid(s: string): string {
    const stack = [],
        sToArray = s.split('');
    for (let p = 0; p < sToArray.length; p++) {
        if (sToArray[p] === ')' && stack.length) {
            stack.pop();
        } else if (sToArray[p] === ')') {
            sToArray[p] = '';
        } else if (sToArray[p] === '(') {
            stack.push(p);
        }
    }
    while (stack.length) {
        sToArray[stack.pop()] = '';
    }
    return sToArray.join('');
}
