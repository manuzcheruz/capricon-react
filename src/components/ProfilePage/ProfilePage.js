import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

import * as actionCreators from '../../store/actions/index';
import PostSmall1 from '../Post/PostSmall/PostSmall1';

const profilePage = props => {
    const selectPostHandler = id => {
        props.history.push('/post/');
        props.onSelectPost(id);
    }
    let profile = <h5>cannot load profile at this time!</h5>
    if (props.authors) {
        profile = props.authors.filter(item => item.id === props.authorId).map(author => {
            return <div>
            <Card inverse key={author.id} style={{marginLeft: '0px', height: '100%', width: '100%', backgroundColor: '#092e42'}}>
                                        <CardImg style={{height: '200px'}} src={author.profile_bg} alt="profile background"/>
                                        <CardImgOverlay>
                                            <div style={{marginTop: '70px', marginLeft: '5px'}}>
                                                <CardImg style={{borderRadius: '50%', border: '2px solid white', width: '100px', height: '100px'}} src={author.profile_picture} alt="profile picture"/>
                                            </div>
                                        </CardImgOverlay>
                                    </Card>
                                    <div>
                                        <Card style={{marginLeft: '5px', marginRight: '5px', backgroundColor: '#092e42'}}>
                                            <CardTitle style={{marginLeft: '15px'}} className="text-capitalize text-light font-weight-bold">
                                                {props.users.filter(item => item.id === props.authorId).map(item => item.username)}
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
        </div>
        })
    }
    return <div>
        {profile}
    </div>
}

const mapStateToProps = state => {
    return {
        authorId: state.profileId,
        authors: state.authors,
        users: state.users,
        posts: state.posts
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id)),
    }
}

export default connect(mapStateToProps, dispatchPropsToState)(profilePage);