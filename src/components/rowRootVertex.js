import React from 'react';

const RowRootVertex = ({root, rowElements}) => {
    return (
        <div>
            <div>
                {root}
            </div>
            <div className='row'>
                {rowElements}
            </div>
        </div>)
}

export default RowRootVertex;