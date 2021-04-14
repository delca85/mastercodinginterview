export function twoSum(nums: number[], target: number): number[] {
    let numsMap = {};
    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];
        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        }
        const numberToFind = target - nums[p];
        numsMap[numberToFind] = p;
    }
    return null;
}
