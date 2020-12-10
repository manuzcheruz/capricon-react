import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    categories: [],
    authors: [],
    users: [],
    activePostId: null,
    activePost: null,
    error: false,
    activePostError: false,
    activeCategoryId: null,
    activePostCategoryId: null,
    profileId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            let fetchedPosts = action.posts
            return {
                ...state,
                posts: state.posts.concat(fetchedPosts)
            }
        case actionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categories: state.categories.concat(action.cats)
            }
        case actionTypes.FETCH_AUTHORS:
            let fetchedAuthors = action.authors
            for (let author of fetchedAuthors) {
                let id = +author.user.split('/').slice(-2,-1)
                author.userId = id
            }
            return {
                ...state,
                authors: fetchedAuthors
            }
        case actionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.users
            }
        case actionTypes.SELECT_POST:
            return {
                ...state,
                activePostId: action.id
            }
        case actionTypes.ACTIVE_POST:
            let activePost = action.post
            let catId = +activePost.categories[0].split('/').slice(-2,-1)
            activePost.catId = catId
            // console.log(activePost);
            return {
                ...state,
                activePost: activePost
            }
        case actionTypes.ACTIVE_POST_FETCH_FAILED:
            return {
                ...state,
                activePostError: true
            }
        case actionTypes.ACTIVE_CATEGORY_ID:
            return {
                ...state,
                activeCategoryId: action.id
            }
        case actionTypes.SET_CATEGORY_ID_TO_NULL:
            return {
                ...state,
                activeCategoryId: null,
                profileId: null
            }
        case actionTypes.ACTIVE_POST_CATEGORY_ID:
            return {
                ...state,
                activePostCategoryId: action.id
            }
        case actionTypes.AUTHOR_PROFILE_ID:
            return {
                ...state,
                profileId: action.id
            }
        default:
            return state;
    }
}

export default reducer;