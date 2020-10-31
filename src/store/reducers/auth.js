import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    authStart: null,
    authError: null,
    switchForm: false
}

const reducer = (state = initialState, action) => {
    switch (action.actionTypes) {
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
        default:
            return state;

    }
}

export default reducer;