export function backspaceCompare(s: string, t: string): boolean {
    let sResult = [];
    let tResult = [];
    for (let sPointer = 0; sPointer < s.length; sPointer++) {
        if (s[sPointer] === '#') {
            sResult.pop();
        } else {
            sResult.push(s[sPointer]);
        }
    }
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (t[tPointer] === '#') {
            tResult.pop();
        } else {
            tResult.push(t[tPointer]);
        }
    }
    if (sResult.length !== tResult.length) {
        return false;
    }
    for (let p = 0; p < sResult.length; p++) {
        if (sResult[p] !== tResult[p]) {
            return false;
        }
    }
    return true;
}
