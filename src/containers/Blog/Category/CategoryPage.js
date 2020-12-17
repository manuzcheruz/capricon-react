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

        let category = this.props.category.map(item => {
                return (
                    <div>
                        <div>
                            <Card inverse key={item.id} style={{marginLeft: '0px', height: '100%', width: '100%', backgroundColor: '#092e42'}}>
                                <CardImg width="100%" src={item.thumbnail} alt="Card image cap"/>
                                <CardImgOverlay style={{marginTop: '180px', padding: '0px'}}>
                                    <Card style={{marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgba(245, 245, 245, 0.6)', borderRadius: '10px', height: '60px'}}>
                                        <CardTitle className="text-dark" style={{margin: '5px'}}><h5>{item.title}</h5></CardTitle>
                                    </Card>
                                </CardImgOverlay>
                            </Card>
                        </div>
                        <div style={{marginLeft: '20px', paddingTop: '15px'}}>
                            <h5 className="text-light font-weight-bold">
                                Recent
                            </h5>
                        </div>
                        <div style={{marginLeft: '20px', paddingTop: '15px'}}>
                            <div>
                                {item.posts_list.map(item => {
                                    return (
                                        <PostSmall1 
                                            selected={this.selectPostHandler} 
                                            {...item}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                )
            })

        return category;
    }
}

const mapStateToProps = state => {
    return {
        category: state.category.category
    }
}

const dispatchPropsToState = dispatch => {
    return {
        onSelectPost: (id) => dispatch(actionCreators.activePostId(id)),
    }    
}

export default connect(mapStateToProps, dispatchPropsToState)(CategoryPage);