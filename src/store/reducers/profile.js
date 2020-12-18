import * as actionTypes from '../actions/actionTypes';

const initialState = {
    author: [],
    fetchAuthorStart: false,
    fetchAuthorFail: null,
    updatedAuthorProfile: [],
    updateStart: false,
    updateFail: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUTHOR_PROFILE_START:
            return {
                ...state,
                fetchAuthorStart: true
            }
        case actionTypes.FETCH_AUTHOR_PROFILE_SUCCESS:
            return {
                ...state,
                author: state.author.concat(action.author),
                fetchAuthorStart: false
            }
        case actionTypes.FETCH_AUTHOR_PROFILE_FAIL:
            return {
                ...state,
                updateFail: state.updateFail.push(action.error),
                updateStart: false
            }
        case actionTypes.UPDATE_PROFILE_START:
            return {
                ...state,
                updateStart: true
            }
        case actionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updatedAuthorProfile: state.updatedAuthorProfile.concat(action.profile),
                updateStart: false
            }
        case actionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                updateFail: state.updateFail.push(action.error),
                updateStart: false
            }
        default:
            return state;
    }
}

export default reducer;