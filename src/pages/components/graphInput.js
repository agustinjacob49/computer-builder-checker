
import React from 'react';
import Alert from 'react-bootstrap/Alert';

const GraphInput = ({errorMessage, onInput, textAreaValue}) => (
    <div>
        <div className="form-floating">
            <textarea className="input-text" id="floatingTextarea" onInput={onInput}  value={textAreaValue}></textarea>
            { errorMessage && <Alert variant={'danger'}>
                {errorMessage}
            </Alert>}
         </div>
    </div>
);

export default GraphInput;


