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
    let posts = <h1>cannot load post!</h1>
    // fetch active category id if there is
    if (props.categoryId) {
        posts = props.posts.filter(item => item.catId === props.categoryId).slice(0,5).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id, pst.catId)} style={{height: '110px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
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
                                                    <small className="text-muted">
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
    } else {
        posts = props.posts.slice(0,5).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id, pst.catId)} style={{height: '110px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
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
                                                    <small className="text-muted">
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
    // use an if statement to check whether the cat id is present and use it to filter through the posts, else fetch all the posts

    return posts;
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        categoryId: state.activeCategoryId
    }
}

export default connect(mapStateToProps)(post1);