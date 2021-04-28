import { flatten } from "./function";

describe("Question 8 - Flatten double linked solution tests", () => {
    it("should return the same list if all the nodes are without child", () => {
        const list = [1, 2, 3, 4, 5, 6];
        const expectedResult = [1, 2, 3, 4, 5, 6];

        expect(flatten(list)).toEqual(expectedResult);
    });

    it("should return the a flatten list", () => {
        const list = [1, 2, 3, [7, 8, [11, 12], 9, 10], 4, 5, 6];
        const expectedResult = [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6];

        expect(flatten(list)).toEqual(expectedResult);
    });
});
