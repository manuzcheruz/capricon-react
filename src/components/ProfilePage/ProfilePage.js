import React from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Row } from 'reactstrap';

import * as actionCreators from '../../store/actions/index';
import PostSmall1 from '../Post/PostSmall/PostSmall1';

const profilePage = props => {
    const addPostHandler = () => {
        props.history.push('/new-post')
    }
    const selectPostHandler = id => {
        props.history.push('/post/');
        props.onSelectPost(id);
    }
    const onEditProfile = () => {
        props.history.push('/profile-update')
    }
    let profile = <h5>cannot load profile at this time!</h5>
    if (props.authors) {
        profile = props.authors.filter(item => item.id === props.authorId).map(author => {
            return <div>
            <Card inverse key={author.id} style={{padding: '0px', marginLeft: '0px', height: '100%', width: '100%', backgroundColor: '#092e42'}}>
                                        <CardImg style={{height: '200px', width: '100%'}} src={author.profile_bg} alt="profile background"/>
                                        <CardImgOverlay>
                                            <div style={{marginTop: '70px', marginLeft: '5px'}}>
                                                <CardImg style={{borderRadius: '50%', border: '2px solid white', width: '100px', height: '100px'}} src={author.profile_picture} alt="profile picture"/>
                                            </div>
                                        </CardImgOverlay>
                                    </Card>
                                    <div>
                                        <Card style={{marginLeft: '5px', marginRight: '5px', backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                                            <CardTitle style={{marginLeft: '15px'}} className="text-capitalize text-light font-weight-bold">
                                                <Row>
                                                    <Col xs="6">
                                                        {props.users.filter(item => item.id === props.authorId).map(item => item.username)}
                                                    </Col>
                                                    <Col xs="6">
                                                        <div className="text-right">
                                                            <Button onClick={onEditProfile} style={{border: '1px solid white', padding: '0 2px 2px 2px', backgroundColor: '#092e42'}} className="btn">Edit profile</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardTitle>
                                            <CardText className="text-light">
                                                {props.authors.filter(item => item.id === props.authorId).map(item => item.description)}
                                            </CardText>
                                        </Card>
                                    </div>
                                    <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                                        <h5 className="text-light font-weight-bold">
                                            Articles
                                        </h5>
                                    </div>
                                    <div style={{marginLeft: '20px', marginRight: '20px'}}>
                                        <div>
                                            <PostSmall1 selected={selectPostHandler} />
                                        </div>
                                    </div>
                                    <div style={{position: 'fixed', right: '20px', bottom: '20px'}}>
                                        <Button onClick={addPostHandler} className="btn btn-secondary" style={{backgroundColor: 'rgba(126,203,244,1)', height: '70px', width: '70px', padding: '10px 16px', borderRadius: '35px', fontSize: '12px', textAlign: 'center'}}>
                                            add
                                        </Button>
                                    </div>
        </div>
        })
    }
    return <div>
        {profile}
    </div>
}

const mapStateToProps = state => {
    return {
        authorId: state.post.profileId,
        authors: state.post.authors,
        users: state.post.users,
        posts: state.post.posts
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id)),
    }
}

export default connect(mapStateToProps, dispatchPropsToState)(profilePage);