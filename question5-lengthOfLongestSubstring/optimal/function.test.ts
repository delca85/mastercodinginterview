import { lengthOfLongestSubstring } from "./function";

describe("lengthOfLongestSubstring - bruteforce optimal tests", () => {
    it("should return 0 when the string is empty", () => {
        const s = "";
        const expectedResult = 0;
        expect(lengthOfLongestSubstring(s)).toBe(expectedResult);
    });

    it("should return 1 when the string has only 1 char repeated", () => {
        const s = "aaaaaaaa";
        const expectedResult = 1;
        expect(lengthOfLongestSubstring(s)).toBe(expectedResult);
    });

    it("should return the length of the longest substring without repetition", () => {
        const s = "abccabb";
        const expectedResult = 3;
        expect(lengthOfLongestSubstring(s)).toBe(expectedResult);
    });

    it("should return the length of the longest substring without repetition even if two substrings collide", () => {
        const s = "abcbda";
        const expectedResult = 4;
        expect(lengthOfLongestSubstring(s)).toBe(expectedResult);
    });
});
