import React, { useState } from 'react';
import generateGraph from '../../services/dependenciesHandler';
import { generateEdges, generateVertexs } from '../../services/generators';
import View from './view';

const Home = () => {

    const [textAreaValue, setTextAreaValue] = useState('');
    const [vertexs, setVertexs] = useState([]);
    const [edges, setEdges] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);


    const renderVertexs = async (adjMatrixResponse) => {
        const vertexArray = await generateVertexs(adjMatrixResponse);
        setVertexs(vertexArray);
    }

    const renderEdges = async (adjMatrixResponse) => {
        const edgesArray = await generateEdges(adjMatrixResponse); 
        setEdges(edgesArray);
    }

    const renderGraph = () => {
        generateGraph(textAreaValue).then( (adjMatrixResponse) => {
            renderVertexs(adjMatrixResponse);
            renderEdges(adjMatrixResponse);
        }).catch ((err) => {
            if(err.message) setErrorMessage(err.message);
        });
    }

    const cleanArea = () => {
        setErrorMessage(null);
        setTextAreaValue('');
    }

    const onInput = (e) => {
        setErrorMessage(null);
        setTextAreaValue(e.target.value);
        setVertexs([]);
        setEdges([]);
    }

    const mappedProps = {
        textAreaValue,
        renderGraph,
        cleanArea,
        onInput,
        vertexs,
        edges,
        errorMessage
      };

    return (
        <View {...mappedProps} />
    );
};

export default Home;