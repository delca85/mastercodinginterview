import { findKthLargest as quickSelect } from './quickselect';
import { findKthLargest as quickSort } from './quickSort';

describe('Question 13 - findKthLargest quickSelect and quickSort solutions', () => {
    it('should return the kth largest element if there are no duplicates', () => {
        const nums = [3, 2, 1, 5, 6, 4],
            k = 2;
        const expectedResult = 5;

        expect(quickSelect(nums, k)).toBe(expectedResult);
        expect(quickSort(nums, k)).toBe(expectedResult);
    });

    it('should return the kth largest element if there are duplicates', () => {
        const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
            k = 4;
        const expectedResult = 4;

        expect(quickSelect(nums, k)).toBe(expectedResult);
        expect(quickSort(nums, k)).toBe(expectedResult);
    });

    it('should return the kth largest element if there is only one element', () => {
        const nums = [3],
            k = 1;
        const expectedResult = 3;

        expect(quickSelect(nums, k)).toBe(expectedResult);
        expect(quickSort(nums, k)).toBe(expectedResult);
    });
});
