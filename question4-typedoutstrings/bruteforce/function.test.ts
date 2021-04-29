import { backspaceCompare } from './function';

describe('typed-out-strings problem bruteforce solution tests', () => {
    it('should return false when the two strings are different', () => {
        const s = 'b';
        const t = 'a#c';
        const expectedResult = false;
        expect(backspaceCompare(s, t)).toBe(expectedResult);
    });

    it('should return true when the two strings are equal', () => {
        const s = 'a##c';
        const t = '#a#c';
        const expectedResult = true;
        expect(backspaceCompare(s, t)).toBe(expectedResult);
    });

    it('should return true when the two strings are equal', () => {
        const s = 'ab##';
        const t = 'c#d#';
        const expectedResult = true;
        expect(backspaceCompare(s, t)).toBe(expectedResult);
    });

    it('should return true when the two strings are equal', () => {
        const s = 'ab#c';
        const t = 'ad#c';
        const expectedResult = true;
        expect(backspaceCompare(s, t)).toBe(expectedResult);
    });

    it('should return false when the two strings are equal but in different case', () => {
        const s = 'Ab#c';
        const t = 'ad#c';
        const expectedResult = false;
        expect(backspaceCompare(s, t)).toBe(expectedResult);
    });
});
