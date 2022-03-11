import './home.scss';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import GraphRender from '../components/graphRender';
import GraphInput from '../components/graphInput';

const View = (props) => {

    const {
        textAreaValue,
        renderGraph,
        cleanArea,
        onInput,
        nodes,
        edges,
        errorMessage} = props;

    return (
        <div>
            <Row>
                <Col>
                    <GraphInput errorMessage={errorMessage} onInput={onInput} textAreaValue={textAreaValue} />
                </Col>
                <Col>
                    <GraphRender nodes={nodes} edges={edges}/>
                </Col>
            </Row>
            <div className="button-group">
                <Button variant="primary" onClick={renderGraph}>Render</Button>{' '}
                <Button variant="secondary" onClick={cleanArea}>Clean</Button>{' '}
            </div>
        </div>
    );
};

export default View;