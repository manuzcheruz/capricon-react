import React, { Component } from 'react';
// import axios from '../../../axios';
import { connect } from 'react-redux'; 
import ReactTimeAgo from 'react-time-ago'

import {Card, CardBody, CardTitle, CardText, CardSubtitle, Row, Col} from 'reactstrap';
import Similar from '../../../components/Similar/Similar';
// import * as actionCreators from '../../../store/actions/index';

class FullPost extends Component {

    // componentDidMount () {
    //     // console.log(this.props.postId);
    //     if (this.props.postId) {
    //         if (!this.props.activePost || (this.props.activePost && this.props.activePost.id !== +this.props.postId)) {
    //             this.props.onFetchActivePost(this.props.postId);
    //         }
    //     }
    // }

    render () {
        let post = <h1>No post matching request</h1>
        if (this.props.posts) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.props.posts) {
            post = this.props.posts.filter(item => item.id === this.props.postId).map(post => {
                return <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100%', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                            <CardBody>
                                <CardSubtitle>
                                    <small className="text-success text-uppercase">{post.categories.title}
                                    </small>
                                </CardSubtitle>
                                <CardTitle className="text-light" style={{paddingTop: '5px'}}>{post.title}</CardTitle>
                                <Row>
                                    <Col xs="6">
                                        <CardSubtitle className="text-left">
                                            <small className="text-muted">
                                                Published by <span className="text-capitalize">
                                                    {post.author.user.username}
                                                </span>
                                            </small>
                                        </CardSubtitle>
                                    </Col>
                                    <Col xs="6">
                                        <CardSubtitle className="text-right">
                                            <small className="text-muted">
                                                <ReactTimeAgo date={post.created_on} locale="en-US"/>
                                            </small>
                                        </CardSubtitle>
                                    </Col>
                                </Row>
                            </CardBody>
                            <img width="100%" src={post.thumbnail} alt="Card cap" />
                            <CardBody>
                                <CardText className="text-light">
                                    <div dangerouslySetInnerHTML={{__html:post.content}}/>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
            })
        }
        return <div>
            {post}
            <Similar />
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        postId: state.post.activePostId,
        posts: state.post.posts,
        authors: state.authors,
        users: state.users,
        categories: state.categories
        // activePost: state.activePost
    }
}

// const dispatchStateToProps = dispatch => {
//     return {
//         onFetchActivePost: (id) => dispatch(actionCreators.initActivePost(id))
//     }
// }

export default connect(mapStateToProps)(FullPost);