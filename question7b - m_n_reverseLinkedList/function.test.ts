import { reverseLinkedListBetween } from './function';

describe('Question 7b - Reverse Linked List tests', () => {
    it('should return an empty linked list if the input is an empty linked list', () => {
        const head = null;
        const expectedResult = null;
        expect(reverseLinkedListBetween(head, 0, 0)).toEqual(expectedResult);
    });

    it('should return the same list if the input list is a list with only one item', () => {
        const head = { value: 2, next: null };
        const expectedResult = head;
        expect(reverseLinkedListBetween(head, 1, 1)).toEqual(expectedResult);
    });

    it('should return a totally reversed list if the boundaries are 1 and list length', () => {
        const head = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: { value: 4, next: { value: 5, next: null } },
                },
            },
        };
        const expectedResult = {
            value: 5,
            next: {
                value: 4,
                next: {
                    value: 3,
                    next: { value: 2, next: { value: 1, next: null } },
                },
            },
        };
        expect(reverseLinkedListBetween(head, 1, 5)).toEqual(expectedResult);
    });

    it('should return a list reversed in the selected boundaries', () => {
        const head = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: { value: 4, next: { value: 5, next: null } },
                },
            },
        };
        const expectedResult = {
            value: 1,
            next: {
                value: 4,
                next: {
                    value: 3,
                    next: { value: 2, next: { value: 5, next: null } },
                },
            },
        };
        expect(reverseLinkedListBetween(head, 2, 4)).toEqual(expectedResult);
    });

    it('should return the same list if m = n', () => {
        const head = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: { value: 4, next: { value: 5, next: null } },
                },
            },
        };
        const expectedResult = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: { value: 4, next: { value: 5, next: null } },
                },
            },
        };
        expect(reverseLinkedListBetween(head, 1, 1)).toEqual(expectedResult);
    });
});
