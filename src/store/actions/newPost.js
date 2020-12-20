import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const newPostStart = () => {
    return {
        type: actionTypes.NEW_POST_START
    }
}

export const newPostSuccess = (post) => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        post: post
    }
}

export const newPostFail = error => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }
}

// posting the 
export const initNewPost = (data) => {
    return dispatch => {
        dispatch(newPostStart());
        const url = 'http://127.0.0.1:8000/api-v1/posts/'
        console.log(JSON.stringify(data));
        axios.post(url, {
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': "JWT " + localStorage.getItem('token')},
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log(response);
                dispatch(newPostSuccess(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(newPostFail(error.response.data.error))
            })
    }
}
