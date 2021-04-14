export function maxArea(heights: number[]): number {
    let maxArea = 0;
    let p1 = 0;
    let p2 = heights.length - 1;
    while (p2 > p1) {
        let height = Math.min(heights[p1], heights[p2]);
        let width = p2 - p1;
        let curArea = width * height;
        maxArea = Math.max(maxArea, curArea);
        if (height === heights[p1]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}
