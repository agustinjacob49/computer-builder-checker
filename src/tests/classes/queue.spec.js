/* eslint-disable jest/no-conditional-expect */
import Queue from '../../classes/queue';


describe('Queue', () => {

    test('Create new Queue', () => {
        let queue = new Queue();
        queue.enqueue("Task 1");
        queue.enqueue("Task 2");
        expect(queue.isEmpty()).toBeFalsy();
    });

    test('Queue empty should throw exception when I try to dequeue', () => {
        let queue = new Queue();

        try {
            queue.dequeue();
        } catch(error) {
            expect(error.message).toBe("Queue is empty!");
        }
    });

    test('Queue empty should throw exception when I try to front', () => {
        let queue = new Queue();

        try {
            queue.front();
        } catch(error) {
            expect(error.message).toBe("No elements!");
        }
    });

});  