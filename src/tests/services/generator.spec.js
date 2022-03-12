/* eslint-disable jest/no-conditional-expect */
import { generateEdges, generateVertexs } from '../../services/generators';
import Graph from '../../classes/graph';


describe('Generator graph', () => {

    let graph = new Graph();
    beforeAll(() => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
    })

    test('Generate Vertex array', async () => {
        
        const edgesArray = await generateVertexs(graph.getAdjMatrix());
        expect(edgesArray.length).toBe(3);
    });

    test('Generate Edges array', async () => {
        
        const vertexArrayUndef = await generateEdges(graph.getAdjMatrix());
        expect(vertexArrayUndef.length).toBe(2);
    });

    test('Undefined matrix', async () => {
        try{
            const vertexArray = await generateVertexs(null);
        }catch (e){
            expect(e.message).toBe("Cannot read property 'keys' of null");
        }
       
    });

});  