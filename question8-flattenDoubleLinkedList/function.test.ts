import { flatten } from './function';

describe('Question 8 - Flatten double linked solution tests', () => {
    it('should return the same list if all the nodes are without child', () => {
        const head = { value: 3, next: { value: 4, next: null } };
        const expectedResult = { value: 3, next: { value: 4, next: null } };

        expect(flatten(head)).toEqual(expectedResult);
    });
});
