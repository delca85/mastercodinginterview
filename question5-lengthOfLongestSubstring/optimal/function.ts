export function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length;
    let longest = 0;

    let seenChars = {};
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seenChars[currentChar];

        if (previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        seenChars[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}
