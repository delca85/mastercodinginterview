export function water(heights: number[]): number {
    let water = 0;
    for (let p = 0; p < heights.length; p++) {
        let maxLeft = 0;
        let maxRight = 0;
        for (let pLeft = p - 1; pLeft >= 0; pLeft--) {
            maxLeft = Math.max(maxLeft, heights[pLeft]);
        }
        for (let pRight = p + 1; pRight < heights.length; pRight++) {
            maxRight = Math.max(maxRight, heights[pRight]);
        }
        water += Math.max(0, Math.min(maxLeft, maxRight) - heights[p]);
    }

    return water;
}
