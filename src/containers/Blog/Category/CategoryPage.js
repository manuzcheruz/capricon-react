import React, { Component } from "react";
// import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { Card, CardImgOverlay, CardImg, CardTitle, Row, Col, CardSubtitle} from 'reactstrap';

import * as actionCreators from '../../../store/actions/index';
import PostSmall1 from "../../../components/Post/PostSmall/PostSmall1";
// import CategoriesPage from "../../../components/CategoriesPage/CategoriesPage";
import Spinner from "../../../components/UI/Spinner/Spinner";

class CategoryPage extends Component {
    // create axios instance to fetch category data or use the stored data from redux
    // filter the data according to the most popular
    // display the remaining at the bottom
    componentDidUpdate () {

    }

    selectPostHandler = (id) => {
        this.props.history.push('/post/');
        this.props.onSelectPost(id);
    }

    render () {
        let category = this.props.categories.filter(item => item.id === this.props.categoryId).map(cat => {
            return <div>
                                    <Card inverse key={cat.id} style={{marginLeft: '0px', height: '100%', width: '100%', backgroundColor: '#092e42'}}>
                                        <CardImg width="100%" src={cat.thumbnail} alt="Card image cap"/>
                                        <CardImgOverlay>
                                            <Card style={{border: '1px solid white', width: '100%'}}>
                                                <CardTitle className="text-dark"><h5>{cat.title}</h5></CardTitle>
                                            </Card>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
        });
        
        let posts = this.props.posts ? <h5>There are no posts!</h5> : <Spinner />
        if (this.props.posts) {
        posts = <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
                        {this.props.posts.filter(item => item.catId === this.props.categoryId).slice(0,4).map(post => {
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
                {category}
            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Popular
                        </h5>
                    </div>
            {posts}
            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                        <h5 className="text-light font-weight-bold">
                            Recent
                        </h5>
                    </div>
            <div style={{marginLeft: '20px'}}>
                        <div>
                            <PostSmall1 selected={this.selectPostHandler} />
                        </div>
                    </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        categories: state.categories,
        categoryId: state.activeCategoryId
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id)),
    }    
}

export default connect(mapStateToProps, dispatchPropsToState)(CategoryPage);