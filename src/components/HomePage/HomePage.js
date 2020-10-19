import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import {
    Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardImgOverlay, Nav, NavItem, NavLink
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

const homePage = (props) => {
    
    const selectPostHandler = (id, catId) => {
        props.history.push('/post/'); 
        props.onSelectPost(id);
        props.onSelectPostCategoryId(catId);
    } 

    const selectedAuthor = (id) => {
        props.history.push('/author/' + id);
    }

    const onSelectCatHandler = (id) => {
        props.history.push('/category/');
        props.onSelectCategory(id);
    }

    let homePage = props.error ? <h1>Failed to load page!</h1> : <Spinner />
    if (props.pst) {
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
                    {props.author.slice(1,2).map(user => {
                        return <div>
                                <Card className="text-light" style={{backgroundColor: '#092e42', border: '2px solid #092e42'}}>
                                    <CardBody>
                                        <Row>
                                            <Col xs="6">
                                                <CardTitle>
                                                    <h2>Hi, <span className="text-muted">Manuz</span></h2>
                                                </CardTitle>
                                                <CardSubtitle>
                                                    Good Morning.
                                                </CardSubtitle>
                                            </Col>
                                            <Col xs="6">
                                                <div style={{paddingLeft: '35px', paddingRight: '35px'}}>
                                                    <CardImg style={{borderRadius: '50%', height: '70px'}} width="100%" src={user.profile_picture} alt="Card image cap"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </div>
                    })}

                    <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Featured
                        </h5>
                    </div>
                    {/* <div style={{marginLeft: '20px'}}>
                        <div>
                            <PostSmall1 selected={selectPostHandler}/>
                        </div>
                    </div> */}

                    <div style={{marginLeft: '20px', marginRight: '20px'}}>
                        <Row className="text-light">
                            <Col xs="6">
                                <h5 className="font-weight-bold">
                                    Popular
                                </h5>
                            </Col>
                            <Col xs="6">
                                <small>
                                    Sun, March 01, 2020
                                </small>
                            </Col>
                        </Row>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
                        {props.pst.slice(0,5).map(post => {
                            return (
                                <div>
                                    <Card inverse key={post.id} style={{marginLeft: '18px', height: '250px', width: '150px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '15px'}}>
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

                    <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Categories
                        </h5>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
                        {props.cats.map(cat => {
                            return <div>
                                <Card onClick={() => onSelectCatHandler(cat.id)} inverse key={cat.id} style={{marginLeft: '20px', height: '80px', width: '100px'}}>
                                    <CardImg style={{borderRadius: '5px'}} width="100%" src={cat.thumbnail} alt="Card image cap"/>
                                </Card>
                                <div className="text-center">
                                    <small className="text-light">{cat.title}</small>
                                </div>
                            </div>
                        })}
                    </div>

                    <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Recent
                        </h5>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        <div>
                            <PostSmall1 selected={selectPostHandler}/>
                        </div>
                    </div>
        
                    <div className="container" style={{position: 'fixed', bottom: '0', width: '100%'}}>
                        <Nav pills>
                            <NavItem>
                            <NavLink href="#" active>home</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">cat</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">search</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink disabled href="#">hehe</NavLink>
                            </NavItem>
                        </Nav>
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
        pst: state.posts,
        cats: state.categories,
        author: state.authors,
        error: state.error
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id)),
        onSelectPostCategoryId: (id) => dispatch(actionCreators.activePostCategoryId(id)),
        onSelectCategory: (id) => dispatch(actionCreators.activeCategoryId(id))
    }
}

export default connect(mapStateToProps, dispatchPropsToState)(homePage);