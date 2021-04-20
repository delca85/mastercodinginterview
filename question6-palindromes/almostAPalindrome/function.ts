import { validPalindrome } from '../validPandromeFromCenter/function';

export function almostAPalindrome(s: string): boolean {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let leftPointer = 0,
        rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return (
                validSubPalindrome(s, leftPointer + 1, rightPointer) ||
                validSubPalindrome(s, leftPointer, rightPointer - 1)
            );
        }
        leftPointer++;
        rightPointer--;
    }

    return true;
}

function validSubPalindrome(
    s: string,
    leftPointer: number,
    rightPointer: number
) {
    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }
    return true;
}
