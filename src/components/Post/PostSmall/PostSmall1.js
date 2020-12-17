import React from 'react';
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

const post1 = (props) => {
    console.log(props);
    return (
        <Link to={"/posts/" + props.id}>
            <Card onClick={() => props.selected(props.id, props.catId)} style={{backgroundColor: '#092e42', border: '2px solid #092e42', marginBottom: '10px'}}>
                <CardBody style={{padding: '1px'}}>
                    <Row>
                        <Col xs="3">
                            <CardImg style={{borderRadius: '10px', height: '60px', width: '60px'}} width="100%" src={props.thumbnail} alt="Card image cap"/>
                        </Col>
                        <Col xs="9" style={{padding: '0px'}}>
                            <CardTitle className="text-light"><h5 className="text-lowercase font-weight-bold">{props.title}</h5></CardTitle>
                                <span className="text-muted">{props.categories.title}</span>
                                <span className="text-muted" style={{marginLeft: '10px'}}><ReactTimeAgo date={props.created_on} locale="en-US"/></span>
                        </Col>
                    </Row>
                </CardBody>
                <CardBody style={{padding: '0px', marginTop: '10px'}}>
                    <CardText className="text-light">
                        <div dangerouslySetInnerHTML={{__html:props.content.slice(0, 80)}}/>
                    </CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

export default post1;