import * as actionTypes from '../actions/actionTypes'

const initialState = {
    posts: [],
    fetchStart: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_FEATURED_POSTS_START:
            return {
                ...state,
                fetchStart: false
            }
        case actionTypes.FETCH_FEATURED_POSTS_SUCCESS:
            let fetchedPosts = action.posts
            return {
                ...state,
                posts: state.posts.concat(fetchedPosts),
                fetchStart: false
            }
        case actionTypes.FETCH_FEATURED_POSTS_FAIL:
            return {
                ...state,
                error: action.error,
                fetchStart: false
            }
        default:
            return state
    }
}

export default reducer

