import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

const post1 = (props) => {
    let posts = <h1>cannot load post!</h1>
    // fetch active category id if there is
    if (props.categoryId) {
        posts = props.posts.map(pst => {
            return <Card key={pst.created_on} onClick={() => props.selected(pst.id, pst.catId)} style={{height: '110px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
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
                                                    <small className="text-muted text-capitalize">
                                                        {}
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
    } else if (props.authorId) {
        posts = props.posts.map(pst => {
            return <Card key={pst.created_on} onClick={() => props.selected(pst.id, pst.catId)} style={{height: '110px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                            <CardBody style={{padding: '1px', height: '70px'}}>
                                <Row>
                                    <Col xs="4">
                                        <Card inverse style={{marginLeft: '20px', height:'60px', width: '60px', borderRadius: '10px', padding: '0px'}}>
                                            <CardImg style={{width:'100%', height: '100%', padding: '0px', borderRadius: '10px'}} src={pst.thumbnail} alt="Card image cap"/>
                                        </Card>
                                    </Col>
                                    <Col xs="8" style={{padding: '0px'}}>
                                        <CardTitle className="text-light"><small>{pst.title}</small></CardTitle>
                                        <Row>
                                            <Col xs="6">
                                                <CardSubtitle className="text-left text-light">
                                                    <small className="text-muted text-capitalize">
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
        posts = props.posts.map(pst => {
            return <Link key={pst.created_on} to={"/posts/" + pst.id}>
            <Card onClick={() => props.selected(pst.id, pst.catId)} style={{backgroundColor: '#092e42', border: '2px solid #092e42', marginBottom: '10px'}}>
                            <CardBody style={{padding: '1px'}}>
                                <Row>
                                    <Col xs="3">
                                        <CardImg style={{borderRadius: '10px', height: '60px', width: '60px'}} width="100%" src={pst.thumbnail} alt="Card image cap"/>
                                    </Col>
                                    <Col xs="9" style={{padding: '0px'}}>
                                        <CardTitle className="text-light"><h5 className="text-lowercase font-weight-bold">{pst.title}</h5></CardTitle>
                                        <span className="text-muted">{pst.categories.title}</span>
                                        <span className="text-muted" style={{marginLeft: '10px'}}><ReactTimeAgo date={pst.created_on} locale="en-US"/></span>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardBody style={{padding: '0px', marginTop: '10px'}}>
                                <CardText className="text-light">
                                    <div dangerouslySetInnerHTML={{__html:pst.content.slice(0, 80)}}/>
                                </CardText>
                            </CardBody>
                        </Card>
            </Link>
        })
    }
    // use an if statement to check whether the cat id is present and use it to filter through the posts, else fetch all the posts

    return posts;
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        categories: state.post.categories,
        categoryId: state.post.activeCategoryId,
        authorId: state.post.profileId,
    }
}

export default connect(mapStateToProps)(post1);