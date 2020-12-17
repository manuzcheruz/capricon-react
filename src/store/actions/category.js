import * as actionTypes from './actionTypes'

const fetchCategorySuccess = data => {
    return {
        type: actionTypes.FETCH_CATEGORY_SUCCESS,
        data: data
    }
}

const fetchCategoryFail = error => {
    return {
        type: actionTypes.FETCH_CATEGORY_FAIL,
        error: error
    }
}

const fetchCategoryStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_START,
    }
}

export const initCategory = (uri, limit, dispatch) => {
    return dispatch => {
        dispatch(fetchCategoryStart())
        const url = `${uri}?postsLimit=${limit}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                dispatch(fetchCategorySuccess(responseData))
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchCategoryFail(error))
            })
    }
}