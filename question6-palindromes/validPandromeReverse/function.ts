export function validPalindrome(s: string): boolean {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reverse = "";
    for (let p = s.length - 1; p >= 0; p--) {
        reverse += s[p];
    }
    return s === reverse;
}
