export function trap(heights: number[]): number {
    let water = 0;
    let pLeft = 0;
    let pRight = heights.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    while (pLeft < pRight) {
        if (heights[pLeft] <= heights[pRight]) {
            if (maxLeft < heights[pLeft]) {
                maxLeft = heights[pLeft];
            } else {
                water += maxLeft - heights[pLeft];
            }
            pLeft++;
        } else {
            if (maxRight < heights[pRight]) {
                maxRight = heights[pRight];
            } else {
                water += maxRight - heights[pRight];
            }
            pRight--;
        }
    }
    return water;
}
