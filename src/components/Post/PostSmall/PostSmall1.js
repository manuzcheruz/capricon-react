import React from 'react';
import { connect } from 'react-redux';

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

const post1 = (props) => {
    let post = <h1>cannot load post!</h1>
    if (!props.error) {
        post = props.post.slice(0, 1).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id)} style={{height: '110px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                            <CardBody style={{padding: '1px'}}>
                                <Row>
                                    <Col xs="4">
                                        <CardImg style={{borderRadius: '10px', height: '90px'}} width="100%" src={pst.thumbnail} alt="Card image cap"/>
                                    </Col>
                                    <Col xs="8" style={{padding: '0px'}}>
                                        <CardTitle className="text-light"><small>{pst.title}</small></CardTitle>
                                        <Row>
                                            <Col xs="6">
                                                <CardSubtitle className="text-left text-light">
                                                    <small>
                                                        DESIGN
                                                    </small>
                                                </CardSubtitle>
                                            </Col>
                                            <Col xs="6">
                                                <CardSubtitle className="text-right text-light">
                                                    <small>
                                                        2 hrs ago
                                                    </small>
                                                </CardSubtitle>
                                            </Col>
                                        </Row>
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