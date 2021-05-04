export function selectionSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[min] > nums[j]) {
                min = j;
            }
            let tmp = nums[i];
            nums[i] = nums[min];
            nums[min] = tmp;
        }
    }

    return nums;
}
