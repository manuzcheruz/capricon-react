import React, { Component } from 'react';
// import axios from '../../../axios';
import { connect } from 'react-redux'; 

import {Card, CardBody, CardTitle, CardText, CardSubtitle, Row, Col, Nav, NavItem, NavLink} from 'reactstrap';
import * as actionCreators from '../../../store/actions/index';

class FullPost extends Component {

    componentDidMount () {
        // console.log(this.props.postId);
        if (this.props.postId) {
            if (!this.props.activePost || (this.props.activePost && this.props.activePost.id !== +this.props.postId)) {
                this.props.onFetchActivePost(this.props.postId);
            }
        }
    }

    render () {
        let post = <h1>No post matching request</h1>
        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.props.activePost) {
            post = (
            <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100%', backgroundColor: 'rgb(228, 237, 232)', border: '2px solid rgb(228, 237, 232)'}}>
                            <CardBody>
                                <CardSubtitle>
                                    <small>TECHNOLOGY
                                    </small>
                                </CardSubtitle>
                                <CardTitle style={{paddingTop: '5px'}}>{this.props.activePost.title}</CardTitle>
                                <Row>
                                    <Col xs="6">
                                        <CardSubtitle className="text-left">
                                            <small>
                                                Published by Manuz
                                            </small>
                                        </CardSubtitle>
                                    </Col>
                                    <Col xs="6">
                                        <CardSubtitle className="text-right">
                                            <small>
                                                29 Sep, 2020
                                            </small>
                                        </CardSubtitle>
                                    </Col>
                                </Row>
                            </CardBody>
                            <img width="100%" src={this.props.activePost.thumbnail} alt="Card cap" />
                            <CardBody>
                                <CardText>
                                    <div dangerouslySetInnerHTML={{__html:this.props.activePost.content}}/>
                                </CardText>
                            </CardBody>
                        </Card>
                        <div className="container" style={{position: 'fixed', bottom: '0', width: '100%'}}>
                        <Nav pills>
                            <NavItem>
                            <NavLink href="#" active>home</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">categories</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">search</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink disabled href="#">post</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    </div>

        );
        }
        return post;
    }
}

const mapStateToProps = state => {
    return {
        postId: state.activePostId,
        activePost: state.activePost
    }
}

const dispatchStateToProps = dispatch => {
    return {
        onFetchActivePost: (id) => dispatch(actionCreators.initActivePost(id))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(FullPost);