import { almostAPalindrome } from './function';

describe('Question 6 - almost a palindrome solution tests', () => {
    it('should return true if the input is an empty string', () => {
        const s = '';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return true if the input is a one char string', () => {
        const s = 'a';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return true if the input is a palindrome string', () => {
        const s = 'aba';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return true if the input is a string that will be palindrome removing one char', () => {
        const s = 'abccdba';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return true if the input is a string that will be palindrome removing one char', () => {
        const s = 'abdba';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return true if the input is a string that will be palindrome removing one char and creating a string of odd length', () => {
        const s = 'abca';
        expect(almostAPalindrome(s)).toBeTruthy();
    });

    it('should return false if the input is a string that will not be palindrome removing any of its char', () => {
        const s = 'abcdefdba';
        expect(almostAPalindrome(s)).toBeFalsy();
    });
});
