import React from 'react';
import { connect } from 'react-redux';

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

const post1 = (props) => {
    let post = <h1>cannot load post!</h1>
    if (!props.error) {
        post = props.post.slice(0, 1).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id)} className="border border-white" style={{height: '222px' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
            <CardBody style={{padding: '5px'}}>
                <Row>                 
                    <Col xs="6">
                        <CardImg style={{borderRadius: '20px', height: '207px'}} width="100%" src={pst.thumbnail} alt="Card image cap"/>
                    </Col>
                    <Col xs="6" style={{paddingTop: '30px'}}>  
                        <CardSubtitle><small>Business</small></CardSubtitle>
                        <CardTitle style={{paddingTop: '10px'}}>{pst.title}</CardTitle>
                        <div>
                            <Card style={{border: '2px solid white', paddingTop: '20px'}}>
                                <Row>
                                    <Col xs="3">
                                    </Col>
                                    <Col xs="9">
                                        <CardSubtitle><small>Manuz</small></CardSubtitle>
                                        <CardText><small>Jul 13, 2020</small></CardText>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </CardBody> 
        </Card>
        })
    }
    return post;
}

const mapStateToProps = state => {
    return {
        post: state.posts
    }
}

export default connect(mapStateToProps)(post1);