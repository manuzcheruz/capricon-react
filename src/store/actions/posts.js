import * as actionTypes from './actionTypes';
import axios from '../../axios';

// es6 function to dispatch the loaded posts to state
export const fetchPosts = posts => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts: posts
    }
}

// function to dispatch an error to the state if fetching posts fails
export const fetchPostsFailed = () => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED
    }
}

// async code to fetch posts
export const initPosts = dispatch => {
    return dispatch => {
        axios.get('/posts')
            .then(response => {
                dispatch(fetchPosts(response.data));
            })
            .catch(error => {
                dispatch(fetchPostsFailed());
            });
    }
}

// categories

export const fetchCategories = cats => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        cats: cats
    }
}

export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED
    }
}

export const initCategories = dispatch => {
    return dispatch => {
        axios.get('/categories')
            .then(response => {
                dispatch(fetchCategories(response.data));
            })
            .catch(error => {
                dispatch(fetchCategoriesFailed());
            });
    }
}

// authors
export const fetchAuthors = authors => {
    return {
        type: actionTypes.FETCH_AUTHORS,
        authors: authors
    }
}

export const fetchAuthorsFailed = () => {
    return {
        type: actionTypes.FETCH_AUTHORS_FAILED
    }
}

export const initAuthors = dispatch => {
    return dispatch => {
        axios.get('/authors')
            .then(response => {
                dispatch(fetchAuthors(response.data));
            })
            .catch(error => {
                dispatch(fetchAuthorsFailed());
            });
    }
}

// selecting active post using id
export const activePostId = id => {
    return {
        type: actionTypes.SELECT_POST,
        id: id
    }
}

// dispatch active post to state
export const fetchActivePost = post => {
    return {
        type: actionTypes.ACTIVE_POST,
        post: post
    }
}

// dispatch error for active post to state
export const activePostFetchFailed = () => {
    return {
        type: actionTypes.ACTIVE_POST_FETCH_FAILED,
    }
}

// async to run code for fetching active post
export const initActivePost = (id, dispatch) => {
    return dispatch => {
        axios.get('/posts/' + id)
            .then(response => {
                dispatch(fetchActivePost(response.data));
            })
            .catch(error => {
                dispatch(activePostFetchFailed());
            });
    }
}