import { validPalindrome } from "./function";

describe("Question 6 - valid palindrome tests", () => {
    it("should return true if the input string is an empty string", () => {
        const s = "";
        expect(validPalindrome(s)).toBeTruthy();
    });
    it("should return true if the input string has only one char", () => {
        const s = "a";
        expect(validPalindrome(s)).toBeTruthy();
    });

    it("should return true if the input is a palindrome string", () => {
        const s = "aba";
        expect(validPalindrome(s)).toBeTruthy();
    });

    it("should return true if the input is a palindrome string with space", () => {
        const s = "A man, a plan, a canal: Panama";
        expect(validPalindrome(s)).toBeTruthy();
    });

    it("should return false if the input is not palindrome", () => {
        const s = "A man,";
        expect(validPalindrome(s)).toBeFalsy();
    });
});
