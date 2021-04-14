import { maxArea } from './function';

describe('water-container problem optimal solution tests', () => {
    it('should return 0 when the heights array is void ', () => {
        const heights = [];
        const expectedResult = 0;
        expect(maxArea(heights)).toBe(expectedResult);
    });

    it('should return 0 when the heights array contains just one element', () => {
        const heights = [1];
        const expectedResult = 0;
        expect(maxArea(heights)).toBe(expectedResult);
    });

    it('should return the right value when the heights array contains more than one element', () => {
        const heights = [6, 9, 3, 4, 5, 8];
        const expectedResult = 32;
        expect(maxArea(heights)).toBe(expectedResult);
    });

    it('should return the right value when the heights array contains more than one element', () => {
        const heights = [1, 7, 9, 2, 1, 6];
        const expectedResult = 24;
        expect(maxArea(heights)).toBe(expectedResult);
    });

    it('should return the right value when the heights array contains more than one element', () => {
        const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const expectedResult = 49;
        expect(maxArea(heights)).toBe(expectedResult);
    });
});
