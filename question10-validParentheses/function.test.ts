import { isValid } from "./function";

describe("Question 10 - valid parentheses solution tests", () => {
    it("should return true if the string is valid - 1", () => {
        const s = "()";
        expect(isValid(s)).toBeTruthy();
    });
    it("should return true if the string is valid - 2", () => {
        const s = "()[]{}";
        expect(isValid(s)).toBeTruthy();
    });

    it("should return true if the string is valid - 3", () => {
        const s = "{[()[]{}]}";
        expect(isValid(s)).toBeTruthy();
    });

    it("should return false if the string is invalid - 1", () => {
        const s = "(]";
        expect(isValid(s)).toBeFalsy();
    });

    it("should return false if the string is invalid - 2", () => {
        const s = "([)]";
        expect(isValid(s)).toBeFalsy();
    });
});
