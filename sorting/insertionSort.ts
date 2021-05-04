export function insertionSort(nums: number[]): number[] {
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        let current = nums[i];
        let j = i - 1;
        while (j > -1 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = current;
    }
    return nums;
}
