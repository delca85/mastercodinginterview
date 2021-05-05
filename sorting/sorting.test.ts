import { bubbleSort } from './bubbleSort';
import { insertionSort } from './insertionSort';
import { mergeSort } from './mergeSort';
import { selectionSort } from './selectionSort';

describe('Sorting different algorithms tests', () => {
    it('should sort a number array without duplicates and odd length', () => {
        const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const expected = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

        expect(bubbleSort(nums)).toEqual(expected);
        expect(selectionSort(nums)).toEqual(expected);
        expect(insertionSort(nums)).toEqual(expected);
        expect(mergeSort(nums)).toEqual(expected);
    });

    it('should sort a number array without duplicates and even length', () => {
        const nums = [22, 10, 11, 8];
        const expected = [8, 10, 11, 22];

        expect(bubbleSort(nums)).toEqual(expected);
        expect(selectionSort(nums)).toEqual(expected);
        expect(insertionSort(nums)).toEqual(expected);
        expect(mergeSort(nums)).toEqual(expected);
    });
});
