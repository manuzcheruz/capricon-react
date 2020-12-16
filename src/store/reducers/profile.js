import * as actionTypes from '../actions/actionTypes';

const initialState = {
    profile: {},
    updateStart: null,
    updateFail: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE_START:
            return {
                ...state,
                updateStart: true
            }
        case actionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile,
                updateStart: false
            }
        case actionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                updateFail: action.error,
                updateStart: false
            }
        default:
            return state;
    }
}

export default reducer;