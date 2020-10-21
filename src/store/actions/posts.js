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
        axios.get('/rest/posts/')
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
        axios.get('/rest/categories')
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
        axios.get('/rest/authors')
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
        axios.get('/rest/posts/' + id)
            .then(response => {
                dispatch(fetchActivePost(response.data));
            })
            .catch(error => {
                dispatch(activePostFetchFailed());
            });
    }
}

// selecting category for the active post
export const activePostCategoryId = (id) => {
    return {
        type: actionTypes.ACTIVE_POST_CATEGORY_ID,
        id: id
    }
}

// setting the category id to null when not in the categories page (when in the homepage or anywhere else)
export const setCatIdToNull = () => {
    return {
        type: actionTypes.SET_CATEGORY_ID_TO_NULL
    }
}

// category
export const activeCategoryId = id => {
    return {
        type: actionTypes.ACTIVE_CATEGORY_ID,
        id: id
    }
}

// fetching the users
export const fetchUsers = users => {
    return {
        type: actionTypes.FETCH_USERS,
        users: users
    }
}

export const fetchUsersFailed = () => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    }
}

// async function to get rest api
export const initUsers = dispatch => {
    return dispatch => {
        axios.get('/users')
            .then(response => {
                dispatch(fetchUsers(response.data))
            })
            .catch(error => {
                dispatch(fetchUsersFailed())
            })
    }
}

// author profile id
export const selectProfileId = id => {
    return {
        type: actionTypes.AUTHOR_PROFILE_ID,
        id: id
    }
}