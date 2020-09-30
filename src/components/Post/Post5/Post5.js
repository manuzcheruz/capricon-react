import React from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardSubtitle,
    CardBody,
    CardTitle,
} from 'reactstrap';

const post5 = (props) => (
    <Card style={{height: '150px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <Row>
                <Col xs="5">
                    <CardImg top width="100%" src={props.thumbnail} alt="Card image cap" />
                </Col>
                <Col xs="7">
                    <CardSubtitle>views</CardSubtitle>
                    <CardTitle>{props.title}</CardTitle>
                </Col>
            </Row>
        </CardBody>
    </Card>
);

export default post5;