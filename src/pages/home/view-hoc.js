import React, { useState, useEffect } from 'react';
import LineTo from 'react-lineto';
import generateGraph from '../../services/dependenciesHandler';
import View from './view';

const Home = () => {

    const [textAreaValue, setTextAreaValue] = useState('');
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const renderGraph = () => {
        const style = {
            delay: true,
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: 3,
        };
        try{ 
            const adjMatrix = generateGraph(textAreaValue);
            let edgesToRender = [];

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
            nodesArray.forEach((keyNode) => {
                if (counter === 0){
                    root = <div className={`block stepped-${keyNode}`} style={{top:marginTop,left:'50%'}}>{keyNode}</div>;
                    
                    left = 0;
                    marginTop += 30;
                    rowElements = [];

                    const edges = adjMatrix.get(keyNode);
                    for (const edge of edges){
                        if(alreadyRenderedElements.indexOf(edge)  === -1){
                            rowElements.push(<div className={`block stepped-${edge}`} style={{top:marginTop,left:`${left}%`}}>{edge}</div>)
                            left += 10;
                            alreadyRenderedElements.push(edge);
                        }
                    }

                    elementToRender = <div><div>{root}</div><div className='row'>{rowElements}</div></div>
                } else {
                    left = 0;
                    marginTop += 30;
                    rowElements = [];

                    const edges = adjMatrix.get(keyNode);
                    for (const edge of edges){
                        if(alreadyRenderedElements.indexOf(edge)  === -1){
                            rowElements.push(<div className={`block stepped-${edge}`} style={{top:marginTop,left:`${left}%`}}>{edge}</div>)
                            left += 10;
                            alreadyRenderedElements.push(edge);
                        }
                    }

                    elementToRender = <div className='row'>{rowElements}</div>;
                }

                elementsToRender.push(elementToRender);
                counter+= 1;
                    
            })
            let vertexMatriKeys = adjMatrix.keys();
        
            for (const vertexKey of vertexMatriKeys)
            {
                const edges = adjMatrix.get(vertexKey);
        
                for (const edge of edges)
                    edgesToRender.push(<LineTo className="line" from={`stepped-${vertexKey}`} to={`stepped-${edge}`} {...style}></LineTo>)
            }
            setEdges(edgesToRender)
            setNodes(elementsToRender);
        } catch (err){
            if(err.message){
                setErrorMessage(err.message);
            }
        }
    }

    const cleanArea = () => {
        setErrorMessage(null);
        setTextAreaValue('');
    }

    const onInput = (e) => {
        setErrorMessage(null);
        setTextAreaValue(e.target.value);
        setNodes([]);
        setEdges([]);
    }

    const mappedProps = {
        textAreaValue,
        renderGraph,
        cleanArea,
        onInput,
        nodes,
        edges,
        errorMessage
      };

    return (
        <View {...mappedProps} />
    );
};

export default Home;