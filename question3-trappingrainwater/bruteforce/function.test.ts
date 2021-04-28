import { trap } from "./function";

describe("trapping-rain-water problem bruteforce solution tests", () => {
    it("should return 0 when the heights array is void ", () => {
        const heights = [];
        const expectedResult = 0;
        expect(trap(heights)).toBe(expectedResult);
    });

    it("should return 0 when the heights array contains just one element", () => {
        const heights = [1];
        const expectedResult = 0;
        expect(trap(heights)).toBe(expectedResult);
    });

    it("should return the right value when the heights array contains more than one element", () => {
        const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        const expectedResult = 6;
        expect(trap(heights)).toBe(expectedResult);
    });

    it("should return the right value when the heights array contains more than one element", () => {
        const heights = [4, 2, 0, 3, 2, 5];
        const expectedResult = 9;
        expect(trap(heights)).toBe(expectedResult);
    });

    it("should return the right value when the heights array contains more than one element", () => {
        const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
        const expectedResult = 8;
        expect(trap(heights)).toBe(expectedResult);
    });
});
