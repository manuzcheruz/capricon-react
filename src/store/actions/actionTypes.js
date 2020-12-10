// posts page
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'
export const FETCH_CATEGORIES_FAILED = 'FETCH_CATEGORIES_FAILED'
export const FETCH_AUTHORS_FAILED = 'FETCH_AUTHORS_FAILED'

// individual posts page
export const SELECT_POST = 'SELECT_POST';
export const ACTIVE_POST = 'ACTIVE_POST';
export const ACTIVE_POST_FETCH_FAILED = 'ACTIVE_POST_FETCH_FAILED';
export const ACTIVE_POST_CATEGORY_ID = 'ACTIVE_POST_CATEGORY_ID';

// category
export const ACTIVE_CATEGORY_ID = 'ACTIVE_CATEGORY_ID';
export const SET_CATEGORY_ID_TO_NULL = 'SET_CATEGORY_ID_TO_NULL';

// fetching the users 
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// assigning profile id to use in fetching the profile from authors
export const AUTHOR_PROFILE_ID = 'AUTHOR_PROFILE_ID'

// autenticating a user
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SWITCH_SIGNIN_FORM = 'SWITCH_SIGNIN_FORM';

// checking whether the authenticated user is an author
export const FETCH_USER_AS_AUTHOR = 'FETCH_USER_AS_AUTHOR';
export const FETCH_USER_AS_AUTHOR_FAILED = 'FETCH_USER_AS_AUTHOR_FAILED';

// posting a new article
export const NEW_POST_START = 'NEW_POST_START';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_FAIL = 'NEW_POST_FAIL';

// updating author profile
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

