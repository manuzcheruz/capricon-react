import * as actionTypes from '../actions/actionTypes';

const initialState = {
    category: [],
    fetchStart: false,
    error: null

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORY_START:
            return {
                ...state,
                fetchStart: true
            }
        case actionTypes.FETCH_CATEGORY_SUCCESS:
            let cats = action.data
            return {
                ...state,
                category: state.category.concat(cats),
                fetchStart: false
            }
        case actionTypes.FETCH_CATEGORY_FAIL:
            return {
                ...state,
                error: action.error,
                fetchStart: false
            }
        default:
            return state;

    }
}

export default reducer;