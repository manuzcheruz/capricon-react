import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTimeAgo from 'react-time-ago'

import * as actionCreators from '../../store/actions/index';

import {
    Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardImgOverlay, Button
} from 'reactstrap';
import Categories from '../Categories/Categories';
import Author from '../Author/Author';
import Post1 from '../Post/Post1/Post1';
import Post2 from '../Post/Post2/Post2';
import Post4 from '../Post/Post4/Post4';
import Post5 from '../Post/Post5/Post5';
import Post6 from '../Post/Post6/Post6';
import Subscribe from '../Subscribe/Subscribe';
import Spinner from '../UI/Spinner/Spinner';
import PostSmall1 from '../Post/PostSmall/PostSmall1';
import './HomePage.css';
import { Link } from 'react-router-dom';

const homePage = props => {
    const loginHandler = () => {
        props.history.push('/signin')
    }
    
    const selectPostHandler = (id, catId) => {
        props.history.push('/posts/' + id); 
        props.onSelectPost(id);
        props.onSelectPostCategoryId(catId);
    } 

    const selectedAuthor = id => {
        props.history.push('/author/');
    }

    const onSelectCatHandler = (uri, id) => {
        props.history.push('/category/' + id);
        let limit = 10
        props.onSelectCategory(uri, limit);
    }

    // redirecting to author profile when the username is clicked
    const selectProfile = uri => {
        // props.history.push('/author/');
        const limit = 10
        props.onSelectProfile(uri, limit);
    }

    const time = new Date().getHours();
    let greeting = ''
    if (time < 12) {
        greeting = 'Good Morning';
    } else if (time < 18 ) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening'
    }

    let user = ''
    let loginBtn = <div className="text-center">
                        <Button onClick={loginHandler} style={{marginTop: '15px'}} className="btn btn-primary">Login</Button>
                </div>
    if (localStorage.getItem('username') && props.author.length !== 0) {
        user = props.author.map((author) => {
        return <Link to={"/author/" + author.user.username} key={author.user.username}>
                <Card onClick={() => selectProfile(author.uri)} className="text-light" style={{backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                    <CardBody>
                        <Row>
                            <Col xs="6">
                                <CardTitle>
                                    <h2>Hi, <span className="text-muted text-capitalize">{author.user.username}</span></h2>
                                </CardTitle>
                                <CardSubtitle>
                                    {greeting}.
                                </CardSubtitle>
                            </Col>
                            <Col xs="6">
                                <div style={{paddingLeft: '35px', paddingRight: '35px'}}>
                                    <CardImg style={{borderRadius: '50%', height: '70px'}} width="100%" src={author.profile_picture} alt="Card image cap"/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                </Link>})
    } else {
            user = <div>
                    <Card className="text-light" style={{backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                        <CardBody>
                            <Row>
                                <Col xs="8">
                                    <CardTitle>
                                        <h2>Hi, <span className="text-muted text-capitalize">{localStorage.getItem('username') ? `${localStorage.getItem('username')}` : "... Doe"}</span></h2>
                                    </CardTitle>
                                    <CardSubtitle>
                                        {greeting}.
                                    </CardSubtitle>
                                </Col>
                                <Col xs="4">
                                    {!localStorage.getItem('username') && loginBtn}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    </div>
    } 

    let homePage = props.error ? <h1>Failed to load page!</h1> : <Spinner />
    if (props.posts) {
        homePage = <div>
            <div className="Large">
                    <Row>
                        <Col xs="3">
                            <Categories onSelectCat={onSelectCatHandler}/>
                        </Col>
                    <Col xs="9">
                    <Row>
                        <Col xs="8">
                            <div>
                                <Post1 selected={selectPostHandler}/>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                <Post2 selected={selectPostHandler}/>
                            </div>
                        </Col>
                    </Row>
                    {/* second row */}
                    <Row style={{paddingTop: '30px'}}>
                        <Col xs="4">
                            <div>
                                <Subscribe />
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                <Post4 selected={selectPostHandler}/>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                <Post5 selected={selectPostHandler}/>
                            </div>
                        </Col>
                    </Row>
                    {/* third row */}
                    <Row style={{paddingTop: '30px'}}>
                        <Col xs="10">
                            <div>
                                <Post6 selected={selectPostHandler}/>
                            </div>
                        </Col>
                        <Col xs="2">
                            <div>
                                <Author clicked={selectedAuthor}/>
                            </div>
                        </Col>
                    </Row>
                    </Col>
                    </Row>
                </div>
                <div className="Small">
                    {user}

                    <div style={{marginLeft: '20px', paddingTop: '15px'}}>
                        <h5 className="text-light font-weight-bold">
                            Explore 
                        </h5>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden', marginTop: '20px'}}>
                        {props.cats.map(cat => {
                            return <Link key={cat.id} to={"/category/" + cat.id}>
                                <Card onClick={() => onSelectCatHandler(cat.uri, cat.id)} inverse style={{marginLeft: '20px', height:'60px', width: '60px', borderRadius: '10px', padding: '0px'}}>
                                    <CardImg style={{width:'100%', height: '100%', padding: '0px', borderRadius: '10px'}} src={cat.thumbnail} alt="Card image cap"/>
                                </Card>
                                <div className="text-center">
                                    <small className="text-light">{cat.title}</small>
                                </div>
                            </Link>
                        })}
                    </div>

                    <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
                        <Row className="text-light">
                            <Col xs="6">
                                <h5 className="font-weight-bold">
                                    Featured
                                </h5>
                            </Col>
                            <Col xs="6">
                                <small>
                                    Sun, March 01, 2020
                                </small>
                            </Col>
                        </Row>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden', marginTop: '20px'}}>
                        {props.featured.map(post => {
                            return (
                                <div>
                                    <Card inverse key={post.id} style={{marginLeft: '18px', height: '200px', width: '150px', borderRadius: '15px', padding: '0px'}}>
                                        <CardImg style={{borderRadius: '15px', height: '100%'}} src={post.thumbnail} alt="Card image cap"/>
                                        <CardImgOverlay style={{marginTop: '130px', padding: '0px'}}>
                                            <Card style={{marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgba(245, 245, 245, 0.6)', borderRadius: '10px', height: '60px'}}>
                                                <CardTitle className="text-dark" style={{margin: '5px'}}>
                                                    <small className="text-lowercase font-weight-bold">{post.title}</small>
                                                </CardTitle>
                                            </Card>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>

                    <div style={{marginLeft: '20px', marginTop: '20px'}}>
                        <h5 className="text-light font-weight-bold">
                            Recent
                        </h5>
                    </div>
                    <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
                        <div>
                            {props.posts.map(item => {
                                return (
                                    <PostSmall1 
                                        key={item.title}
                                        selected={selectPostHandler}
                                        {...item}/>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
                </div>
    }

    return (
        <Container fluid={true} style={{padding: '0px'}}>
                {homePage}
                
            </Container>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        cats: state.post.categories,
        error: state.post.error,
        featured: state.featured.posts,
        author: state.auth.author
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onSelectPost: id => dispatch(actionCreators.activePostId(id)),
        onSelectPostCategoryId: id => dispatch(actionCreators.activePostCategoryId(id)),
        onSelectCategory: (uri, limit) => dispatch(actionCreators.initCategory(uri, limit)),
        onSelectProfile: (uri, limit) => dispatch(actionCreators.initSelectAuthor(uri, limit))
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(homePage);