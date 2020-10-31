import * as actionTypes from '../actions/actionTypes';

const initialState = {
    post: {},
    newPostStart: null,
    newPostFail: null
}

const reducer = (state = initialState, action) => {
    switch (action.actionTypes) {
        case actionTypes.NEW_POST_START:
            return {
                ...state,
                newPostStart: true
            }
        case actionTypes.NEW_POST_SUCCESS:
            return {
                ...state,
                post: action.post,
                newPostStart: false
            }
        case actionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                newPostFail: action.error,
                newPostStart: false
            }
        default:
            return state;
    }
}

export default reducer;