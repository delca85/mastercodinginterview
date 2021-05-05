export function quickSort(nums: number[], left, right): number[] {
    if (nums.length === 1) {
        return nums;
    }
    let index = partition(nums, left, right);
    if (left < index - 1) {
        quickSort(nums, left, index - 1);
    }
    if (right >= index) {
        quickSort(nums, index, right);
    }
    return nums;
}

function swap(nums: number[], leftIndex: number, rightIndex: number) {
    let tmp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = tmp;
}

function partition(
    nums: number[],
    leftIndex: number,
    rightIndex: number
): number {
    let pivot = nums[Math.floor((leftIndex + rightIndex) / 2)];
    let i = leftIndex,
        j = rightIndex;
    while (i <= j) {
        while (nums[i] < pivot) i++;
        while (nums[j] > pivot) j--;
        if (i <= j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
    return i;
}
