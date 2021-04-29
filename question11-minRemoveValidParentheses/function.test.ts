import { minRemoveToMakeValid } from './function';

describe('Question 11 - Minimum Remove to Make Valid Parentheses solutions', () => {
    it('should remove a bracket to produce a valid string  - 1', () => {
        const s = 'lee(t(c)o)de)';
        const expectedResult = 'lee(t(c)o)de';
        expect(minRemoveToMakeValid(s)).toBe(expectedResult);
    });

    it('should remove a bracket to produce a valid string - 2', () => {
        const s = 'la)b(c)d';
        const expectedResult = 'ab(c)d';
        expect(minRemoveToMakeValid(s)).toBe(expectedResult);
    });

    it('should return an empty string', () => {
        const s = '))((';
        const expectedResult = '';
        expect(minRemoveToMakeValid(s)).toBe(expectedResult);
    });

    it('should return the same string if it is already valid', () => {
        const s = '(abc)()';
        const expectedResult = s;
        expect(minRemoveToMakeValid(s)).toBe(expectedResult);
    });
});
