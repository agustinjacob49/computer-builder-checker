const Graph = require('../classes/graph');
const { ERROR_MESSAGE } = require('./../utils/constants');

const generateGraph = (text = "") => {
    const { EMPTY_TEXT } = ERROR_MESSAGE;
    return new Promise((resolve, reject) => {
        try{
            if (text === ''){
                throw new Error(EMPTY_TEXT);
            }
            let textTransform = text.toUpperCase();
            let rows = textTransform.split('\n');
        
            const graph = new Graph();
        
            let vertexs = new Set();
            let edgesFounded = new Set();
            let result = -1;
            let vertexFounded = [];
            let root = null;
            rows.forEach((line) => {
                root = line[0];
                vertexs.add(root);
                result = line.search("DEPENDS");
                if (result !== -1){
                    vertexFounded = line.slice(result + 8).split(' ');
                    vertexFounded.forEach((e) =>  {
                        vertexs.add(e);
                        edgesFounded.add({v: root, w: e})
                    });
                
                }
            });
        
            vertexs.forEach((vertex) => {
                graph.addVertex(vertex);
            });
        
            edgesFounded.forEach(({v, w}) => {
                graph.addEdge(v, w);
            });
        
            resolve(graph.getAdjMatrix());
        } catch (err){
            reject(err);
        }
    }); 
}


export default generateGraph;


