import * as actionTypes from './actionTypes';
import axios from '../../axios';

// author profile 
export const fetchAuthorProfileStart = () => {
    return {
        type: actionTypes.FETCH_AUTHOR_PROFILE_START,
    }
}

export const fetchAuthorProfileSuccess = author => {
    return {
        type: actionTypes.FETCH_AUTHOR_PROFILE_SUCCESS,
        author: author
    }
}

export const fetchAuthorProfileFail = error => {
    return {
        type: actionTypes.FETCH_AUTHOR_PROFILE_FAIL,
        error: error
    }
}

export const initSelectAuthor = (uri, limit, dispatch) => {
    return dispatch => {
        dispatch(fetchAuthorProfileStart())
        const url = `${uri}?postsList=${limit}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                dispatch(fetchAuthorProfileSuccess(responseData))
            })
            .catch(error => {
                dispatch(fetchAuthorProfileFail(error))
            })
    }
}

// updating the author profile
export const profileUpdateStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    }
}

export const profileUpdateSuccess = profile => {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        profile: profile
    }
}

export const profileUpdateFail = error => {
    return {
        type: actionTypes.UPDATE_PROFILE_FAIL,
        error: error
    }
}

// posting the profile update
export const initProfileUpate = (data) => {
    return dispatch => {
        dispatch(profileUpdateStart());
        const url = '/rest-api/authors/'
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        console.log(headers);
        axios.post(url, data, headers)
            .then(response => {
                console.log(response.data);
                dispatch(profileUpdateSuccess(data));
            })
            .catch(error => {
                console.log(error.response.data.detail);
                dispatch(profileUpdateFail(error.response.data.error))
            })
    }
}
