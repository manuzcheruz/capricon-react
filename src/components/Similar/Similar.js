import React from 'react';
import { connect } from 'react-redux';
import {Card, CardImg, CardImgOverlay, CardTitle, Row, Col,CardSubtitle} from 'reactstrap';

import Spinner from '../UI/Spinner/Spinner';

const similar = (props) => {
    // find the category of the the active post first
    // filter the posts based on this category and remove the active post from the list
    let similarPosts = props.posts ? <h5>There are no similar posts!</h5> : <Spinner />
    if (props.posts) {
        similarPosts = <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
                        {props.posts.filter(item => item.catId === props.activePostCatId && item.id !== props.similarId).map(post => {
                            return (
                                <div>
                                    <Card inverse key={post.id} style={{marginLeft: '18px', height: '200px', width: '150px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '15px'}}>
                                        <CardImg style={{borderRadius: '15px'}} width="100%" src={post.thumbnail} alt="Card image cap"/>
                                        <CardImgOverlay>
                                            <Card style={{border: '1px solid white'}}>
                                                <CardTitle className="text-dark"><small>{post.title}</small></CardTitle>
                                                <Row>
                                                    <Col xs="5">
                                                        <CardSubtitle className="text-left text-danger">
                                                            <small>
                                                                BUSINESS
                                                            </small>
                                                        </CardSubtitle>
                                                    </Col>
                                                    <Col xs="7">
                                                        <CardSubtitle className="text-right text-secondary">
                                                            <small>
                                                                March 12, 2020
                                                            </small>
                                                        </CardSubtitle>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
    }
    return (
        <div>
            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Similar Posts
                        </h5>
                    </div>
            {similarPosts}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        activePostCatId: state.post.activePostCategoryId,
        posts: state.post.posts,
        similarId: state.post.activePostId
    }
}

export default connect(mapStateToProps)(similar);