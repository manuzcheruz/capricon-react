import * as actionTypes from './actionTypes'

const fetchFeaturedSuccess = data => {
    return {
        type: actionTypes.FETCH_FEATURED_POSTS_SUCCESS,
        posts: data
    }
}

const fetchFeaturedFail = error => {
    return {
        type: actionTypes.FETCH_FEATURED_POSTS_FAIL,
        error: error
    }
}

const fetchFeaturedStart = () => {
    return {
        type: actionTypes.FETCH_FEATURED_POSTS_START,
    }
}

export const initFeaturedPosts = dispatch => {
    return dispatch => {
        dispatch(fetchFeaturedStart())
        const url = 'https://capricon.herokuapp.com/api-v1/posts/?featured=true&&limit=5'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                dispatch(fetchFeaturedSuccess(responseData.results))
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchFeaturedFail(error))
            })
    }
}