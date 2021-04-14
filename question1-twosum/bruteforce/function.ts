export function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let numberToFind = target - numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === numberToFind) return [i, j];
        }
    }
    return null;
}
