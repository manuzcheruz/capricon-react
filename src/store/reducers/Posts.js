import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    categories: [],
    authors: [],
    activePostId: null,
    activePost: null,
    error: true,
    activePostError: false,
    activeCategoryId: null,
    activePostCategoryId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:

        let fetchedPosts = action.posts

        // console.log(JSON.stringify(fetchedPosts, null, 2));

        for (let post of fetchedPosts){
            let id = +post.categories[0].split('/').slice(-2, -1)
            post.catId = id
            let authorId = +post.author.split('/').slice(-2,-1)
            post.authorId = authorId
        }
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
            return {
                ...state,
                authors: action.authors
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
                activeCategoryId: null
            }
        case actionTypes.ACTIVE_POST_CATEGORY_ID:
            return {
                ...state,
                activePostCategoryId: action.id
            }
        default:
            return state;
    }
}

export default reducer;