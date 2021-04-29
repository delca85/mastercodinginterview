import { twoSum } from './function';

describe('two-sum problem optimal solution tests', () => {
    it('should return null when numbers is empty', () => {
        const numbers = [];
        const target = 1;
        expect(twoSum(numbers, target)).toBeNull();
    });

    it('should return the right indeces', () => {
        const numbers = [1, 3, 7, 9, 2];
        const target = 11;
        expect(twoSum(numbers, target)).toEqual([3, 4]);
    });

    it('should return null when numbers has only one element', () => {
        const numbers = [11];
        const target = 11;
        expect(twoSum(numbers, target)).toBeNull();
    });

    it('should return null when there is no solution', () => {
        const numbers = [1, 3, 7, 9, 2];
        const target = 1;
        expect(twoSum(numbers, target)).toBeNull();
    });
});
