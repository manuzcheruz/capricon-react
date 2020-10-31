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
export const initNewPost = () => {
    return dispatch => {
        dispatch(newPostStart());
        const url = '/rest-api/posts/'
        const data = {
            title: 'test',
            categories: 1,
            author: 1,
            content: 'hehe',
            thumbnail: 'https://django-fancy-blog.s3.amazonaws.com/bomb.png?AWSAccessKeyId=AKIA364OVDU2NC4O6GSS&Signature=HlhNU5DVQxwk5%2FPyYypJsFDEpDQ%3D&Expires=1604149715'
        }
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        console.log(headers);
        axios.post(url, data, headers )
            .then(response => {
                console.log(response.data);
                dispatch(newPostSuccess(data));
            })
            .catch(error => {
                console.log(error.response.data.detail);
                dispatch(newPostFail(error.response.data.error))
            })
    }
}
