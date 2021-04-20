import { reverseLinkedList } from './function';

describe('Question 7 - Reverse Linked List tests', () => {
    it('should return an empty linked list if the input is an empty linked list', () => {
        const list = {};
        const expectedResult = {};
        expect(reverseLinkedList(list)).toEqual(expectedResult);
    });

    it('should return the same list if the input list is a list with only one item', () => {
        const list = { head: { value: 2, next: null } };
        const expectedResult = list;
        expect(reverseLinkedList(list)).toEqual(expectedResult);
    });

    it('should return a reversed list', () => {
        const list = {
            head: {
                value: 1,
                next: {
                    value: 2,
                    next: {
                        value: 3,
                        next: { value: 4, next: { value: 5, next: null } },
                    },
                },
            },
        };
        const expectedResult = {
            head: {
                value: 5,
                next: {
                    value: 4,
                    next: {
                        value: 3,
                        next: { value: 2, next: { value: 1, next: null } },
                    },
                },
            },
        };
        expect(reverseLinkedList(list)).toEqual(expectedResult);
    });
});
