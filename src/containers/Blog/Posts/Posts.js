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
        this.props.fetchAuthors();
        this.props.fetchUsers();
        this.props.setCatIdToNull();
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

const mapStateToProps = state => {
    return {
        pst: state.posts,
        a: state.authors,
        c: state.categories
    }
}

const dispatchStateToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actionCreators.initPosts()),
        fetchCats: () => dispatch(actionCreators.initCategories()),
        fetchAuthors: () => dispatch(actionCreators.initAuthors()),
        fetchUsers: () => dispatch(actionCreators.initUsers()),
        setCatIdToNull: () => dispatch(actionCreators.setCatIdToNull())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Posts);