import LineTo from 'react-lineto';
import Vertex from './../components/vertex';
import RootVertex from './../components/rootVertex';
import RowVertex from '../components/rowVertex';
import RowRootVertex from '../components/rowRootVertex';

const style = {
    delay: true,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 3,
};

const generateVertexs = (adjMatrixResponse) => {
    return new Promise((resolve, reject) => {
        try{
            const adjMatrix = adjMatrixResponse;
                
            let keyNodes = adjMatrix.keys();
            let nodesArray = new Array(...keyNodes);
            let counter = 0;
            let marginTop = 0;
            let left = 0;
            let root = null;
            let rowElements = [];
            let elementToRender = null;
            let elementsToRender = [];
            let alreadyRenderedElements = [];
            let edges = null;

            nodesArray.forEach((keyNode) => {
                left = 0;
                marginTop += 30;
                rowElements = [];
                edges = adjMatrix.get(keyNode);

                for (const edge of edges){
                    if(alreadyRenderedElements.indexOf(edge)  === -1){
                        rowElements.push(<Vertex edge={edge} marginTop={marginTop} left={left}/>)
                        left += 10;
                        alreadyRenderedElements.push(edge);
                    }
                }

                if (counter === 0){
                    root = <RootVertex keyNode={keyNode} marginTop={marginTop} />;
                    elementToRender= <RowRootVertex root={root} rowElements={rowElements}/>
                } else {
                    elementToRender = <RowVertex rowElements={rowElements} />
                }
                elementsToRender.push(elementToRender);
                counter+= 1;
                    
            });
            resolve(elementsToRender);
        } catch(err) {
            reject(err);
        }
    });
}

const generateEdges = (adjMatrixResponse) => {
    return new Promise((resolve, reject) => {
        try{
            let vertexMatriKeys = adjMatrixResponse.keys();
            let edgesToRender = [];
            
                for (const vertexKey of vertexMatriKeys)
                {
                    const edges = adjMatrixResponse.get(vertexKey);
            
                    for (const edge of edges)
                        edgesToRender.push(<LineTo className="line" data-testid="edge" from={`stepped-${vertexKey}`} to={`stepped-${edge}`} {...style}></LineTo>)
                }

            resolve(edgesToRender);
        } catch (err) {
            reject(err);
        }
    });
}


export {
    generateVertexs, 
    generateEdges
};