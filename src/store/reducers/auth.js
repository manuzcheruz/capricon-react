import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    authStart: null,
    authError: null,
    switchForm: false,
    author: [],
    authorError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                authStart: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                authStart: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                authError: action.error
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null
            }
        case actionTypes.SWITCH_SIGNIN_FORM:
            return {
                ...state,
                switchForm: !state.switchForm
            }
        case actionTypes.FETCH_USER_AS_AUTHOR:
            return {
                ...state,
                author: state.author.concat(action.author)
            }
        case actionTypes.FETCH_USER_AS_AUTHOR_FAILED:
            return {
                ...state,
                author: action.error
            }
        default:
            return state;

    }
}

export default reducer;