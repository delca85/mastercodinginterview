import { reverseLinkedList } from './function';

describe('Question 7a - Reverse Linked List tests', () => {
    it('should return an empty linked list if the input is an empty linked list', () => {
        const head = null;
        const expectedResult = null;
        expect(reverseLinkedList(head)).toEqual(expectedResult);
    });

    it('should return the same list if the input list is a list with only one item', () => {
        const head = { value: 2, next: null };
        const expectedResult = { value: 2, next: null };
        expect(reverseLinkedList(head)).toEqual(expectedResult);
    });

    it('should return a reversed list', () => {
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
        expect(reverseLinkedList(head)).toEqual(expectedResult);
    });
});
