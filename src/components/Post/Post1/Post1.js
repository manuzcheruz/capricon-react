import React from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

const post1 = (props) => (
    <Card className="border border-white" style={{height: '222px' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody style={{padding: '5px'}}>
            <Row>                 
                <Col xs="6">
                    <CardImg style={{borderRadius: '20px', height: '207px'}} width="100%" src={props.thumbnail} alt="Card image cap"/>
                </Col>
                <Col xs="6">  
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.category}</CardSubtitle>
                    <CardText className="text-success">{props.title}</CardText>
                    <CardSubtitle>{props.author}</CardSubtitle>
                </Col>
            </Row>
        </CardBody> 
    </Card>
);

export default post1;