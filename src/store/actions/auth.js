import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenValidFrom');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogout = (expiryTime) => {
    return dispatch => {
        setTimeout (() => {
            dispatch(logout())
        }, expiryTime);
    }
}

// user signin
export const initAuth = (data) => {
    return dispatch => {
        dispatch(authStart());
        const url = '/rest-auth/login/'
        axios.post(url, data)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.user.pk);
                localStorage.setItem('tokenValidFrom', new Date());
                dispatch(authSuccess(response.data.token, response.data.user.id));
            })
            .catch(error => {
                console.log(error.response.data);
                dispatch(authFail(error.response.data.error))
            })
    }
}

// user signup
export const initAuthSignUp = (data) => {
    return dispatch => {
        dispatch(authStart())
        const url = '/rest-auth/registration/'
        axios.post(url, data)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.user.pk);
                localStorage.setItem('tokenValidFrom', new Date());
                dispatch(authSuccess(response.data.token, response.data.user.id))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error))
            })

    }
}

// utility method for automatically login in users
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('tokenValidFrom')).getSeconds() + 432000;
            console.log(expirationDate);
            if (new Date().getSeconds() <= expirationDate) {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(authLogout(expirationDate));
            } else {
                dispatch(logout());
            }

        }
    }
}

export const switchSignInForm = () => {
    return {
        type: actionTypes.SWITCH_SIGNIN_FORM
    }
}