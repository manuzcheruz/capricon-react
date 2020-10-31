import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const profileUpdateStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    }
}

export const profileUpdateSuccess = (profile) => {
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
// try to resuse this profile update in the creation of a new profile

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
