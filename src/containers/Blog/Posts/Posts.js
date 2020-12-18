import React, { Component} from 'react';
// import axios from '../../../axios';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as actionCreators from '../../../store/actions/index';

import './Posts.css';
import HomePage from '../../../components/HomePage/HomePage';

class Posts extends Component {

    componentDidMount () {
        this.props.fetchPosts();
        this.props.fetchCats();
        this.props.fetchFeatured();
    }

    selectPostHandler = (id) => {
        this.props.history.push('/posts/' + id)
    }

    render () {
        // console.log(this.props.pst);
        return (
            <div>
                <Route path="/" exact component={HomePage}/>
            </div>
        );
    }
}

const dispatchStateToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actionCreators.initPosts()),
        fetchCats: () => dispatch(actionCreators.initCategories()),
        fetchFeatured: () => dispatch(actionCreators.initFeaturedPosts())
    }
}

export default connect(null, dispatchStateToProps)(Posts);