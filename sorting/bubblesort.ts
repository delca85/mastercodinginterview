export function bubbleSort(nums: number[]): number[] {
    let sorted;
    while (!sorted) {
        sorted = true;
        for (let p = 0; p < nums.length - 1; p++) {
            if (nums[p] > nums[p + 1]) {
                const tmp = nums[p];
                nums[p] = nums[p + 1];
                nums[p + 1] = tmp;
                sorted = false;
            }
        }
    }
    return nums;
}
