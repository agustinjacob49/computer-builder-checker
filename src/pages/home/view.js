import './home.scss';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import GraphRender from '../components/graphRender';
import GraphInput from '../components/graphInput';
import getHomeHOC from './view-hoc';

const View = (props) => {

    const {
        textAreaValue,
        renderGraph,
        cleanArea,
        onInput,
        vertexs,
        edges,
        errorMessage} = props;

    return (
        <div>
            <Row>
                <Col>
                    <GraphInput errorMessage={errorMessage} onInput={onInput} textAreaValue={textAreaValue} aria-label="text-area" />
                </Col>
                <Col>
                    <GraphRender nodes={vertexs} edges={edges}/>
                </Col>
            </Row>
            <div className="button-group">
                <Button variant="primary" onClick={renderGraph} data-testid="button-render">Render</Button>{' '}
                <Button variant="secondary" onClick={cleanArea} data-testid="button-clean">Clean</Button>{' '}
            </div>
        </div>
    );
};

export default getHomeHOC(View);