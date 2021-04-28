export function validPalindrome(s: string): boolean {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let leftPointer = Math.floor(s.length / 2),
        rightPointer = leftPointer;

    if (s.length % 2 === 0) {
        leftPointer--;
    }

    while (leftPointer >= 0 && rightPointer < s.length) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        }
        leftPointer--;
        rightPointer++;
    }

    return true;
}
