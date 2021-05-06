import { quickSort } from '../sorting/quickSort';

export function findKthLargest(nums: number[], k: number): number {
    const kIndex = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[kIndex];
}
