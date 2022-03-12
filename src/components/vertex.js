import React from 'react';

const Vertex = ({edge, marginTop, left}) => {
    return (
    <div data-testid="vertex" className={`block stepped-${edge}`} style={{top:marginTop,left:`${left}%`}}>
        {edge}
    </div>)
}

export default Vertex;