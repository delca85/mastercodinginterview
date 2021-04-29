export function validPalindrome(s: string): boolean {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let leftPointer = 0,
        rightPointer = s.length - 1;
    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }

    return true;
}
