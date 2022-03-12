import React from 'react';

const GraphRender = ({nodes, edges}) => (
    <fieldset>
        {nodes}
        {edges}
    </fieldset>
);

export default GraphRender;