import React, { useState } from 'react';
import generateGraph from '../../services/graphHandler';
import { generateEdges, generateVertexs } from '../../services/generators';
const { ERROR_MESSAGE: {EMPTY_TEXT} } = require('../../utils/constants');

const getHomeHOC = View => {
    
    const HomeHOC = () => {
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
            if (textAreaValue === ''){
                setErrorMessage(EMPTY_TEXT);
                return;
            }
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
    }

    return HomeHOC;

};  

export default getHomeHOC;