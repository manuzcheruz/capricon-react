import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    categories: [],
    authors: [],
    activePostId: null,
    activePost: null,
    error: true,
    activePostError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            return {
                ...state,
                posts: state.posts.concat(action.posts)
            }
        case actionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categories: state.categories.concat(action.cats)
            }
        case actionTypes.FETCH_AUTHORS:
            return {
                ...state,
                authors: action.authors
            }
        case actionTypes.SELECT_POST:
            return {
                ...state,
                activePostId: action.id
            }
        case actionTypes.ACTIVE_POST:
            return {
                ...state,
                activePost: action.post
            }
        case actionTypes.ACTIVE_POST_FETCH_FAILED:
            return {
                ...state,
                activePostError: true
            }
        default:
            return state;
    }
}

export default reducer;