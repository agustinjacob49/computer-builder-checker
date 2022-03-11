const Queue = require('./queue');

class Graph {

    /**
     * Create a new directed graph
     * @param {Number} number of vertex
    */
    constructor(vertexNumber = 0){
        this.noOfVertex = vertexNumber;
        this.AdjList = new Map();
    }

    /**
     * Add to the adj matrix the vertex and a vector of empty edges or in spanish "arista".
     * @param {Object} vertex Vertex or "Vertice"
     */
    addVertex(v){
        this.AdjList.set(v, []);
    }

    /**
     * Add the relation with two vertex. Also know as edges or in spanish "arista"
     * @param {Object} device Request device data
     */
    addEdge(v, w){
        if (this.bfs(w).indexOf(v)  === -1){
            this.AdjList.get(v).push(w);
        } else {
            throw new Error('Circular reference');
        }
    }

     /**
     * Returns only de adj Matrix
     */
    getAdjMatrix(){
        return this.AdjList;
    }

    /**
     * Algorith "BFS" to find the relationships of a node
     * @param {Object} startingNode 
     * @returns 
     */
    bfs(startingNode){
    const relationships = [];
    const visited = {};
 
    const q = new Queue();
 
    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
        const getQueueElement = q.dequeue();
 
        relationships.push(getQueueElement);
 
        const adjList = this.AdjList.get(getQueueElement);
 
        for (const keyVertex in adjList) {
            const neigh = adjList[keyVertex];

            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
    return relationships;
}
}

module.exports = Graph;