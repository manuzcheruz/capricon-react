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

const homePage = (props) => {
    
    const selectPostHandler = (id) => {
        props.history.push('/post/' + id); 
        props.onSelectPost(id);
    } 

    const selectedAuthor = (id) => {
        props.history.push('/author/' + id);
    }

    const onSelectCatHandler = (id) => {
        props.history.push('/category/' + id)

    }

    return (
        <Container fluid={true} style={{width: '95%'}}>
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
                    <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100px', backgroundColor: 'rgb(228, 237, 232)', border: '2px solid rgb(228, 237, 232)'}}>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <CardImg style={{borderRadius: '10px', height: '80px'}} width="100%" src="" alt="Card image cap"/>
                                    </Col>
                                    <Col xs="8">
                                        <CardTitle style={{paddingTop: '10px'}}>testing again</CardTitle>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{paddingTop: '20px'}}>
                        <Card style={{height: '380px', width: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '15px'}}>
                            <CardBody>
                                <CardTitle>Author</CardTitle>
                                <CardSubtitle>of the month</CardSubtitle>
                                <CardImg top style={{borderRadius: '10px'}} width="100%" src="" alt="Card image cap"/>
                                <CardImgOverlay>
                                    <CardTitle style={{paddingTop: '130px', paddingLeft: '20px'}}>Manuz</CardTitle>
                                </CardImgOverlay>
                            </CardBody>
                        </Card>
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
            </Container>
    );
}

const mapStateToProps = state => {
    return {
        pst: state.posts,
        author: state.authors,
        error: state.error
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id))
    }
}

export default connect(mapStateToProps, dispatchPropsToState)(homePage);