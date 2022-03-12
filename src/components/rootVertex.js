import React from 'react';

const RootVertex = ({keyNode, marginTop}) => {
    return (
    <div  data-testid="vertex" className={`block stepped-${keyNode}`} style={{top:marginTop,left:'50%'}}>
        {keyNode}
    </div>)
}

export default RootVertex;