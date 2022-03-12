/* eslint-disable jest/no-conditional-expect */
import generateGraph from './../../services/graphHandler';

describe('Graph handler', () => {

    test('Reject test - empty text', () => {

        return generateGraph().catch(e => {
            expect(e.message).toBe('Please, enter some text');
        });

    });


    test('Reject test - Circular reference', () => {

        return generateGraph("A DEPENDS B C\nC DEPENDS X\nX DEPENDS A").catch(e => {
            expect(e.message).toBe('Circular reference');
        });

    });

    test('Then test - Matrix with 2 rows', () => {

        return generateGraph("A DEPENDS B C\nC DEPENDS X Y\nY DEPENDS Z").then(r => {
            expect(r.size).toBe(6);
        });

    });

});  