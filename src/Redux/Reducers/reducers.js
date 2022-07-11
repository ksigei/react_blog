// actions and create reducers
import {
    GET_USERS,
    GET_AUTHORS,
    GET_POSTS,
    GET_COMMENTS,
    GET_REPLIES,
    GET_LIKES,
    GET_EARNINGS,
    POST_USERS,
    POST_AUTHORS,
    POST_POSTS,
    POST_COMMENTS,
    POST_REPLIES,
    POST_LIKES,
    POST_EARNINGS,
    DELETE_USERS,
    DELETE_AUTHORS,
    DELETE_POSTS,
    DELETE_COMMENTS,
    DELETE_REPLIES,
    DELETE_LIKES,
    DELETE_EARNINGS,
    UPDATE_USERS,
    UPDATE_AUTHORS,
    UPDATE_POSTS,
    UPDATE_COMMENTS,
    UPDATE_REPLIES,
    UPDATE_LIKES,
    UPDATE_EARNINGS,
    GET_USERS_BY_ID,

} from '../Actions/types';

const initialState = {
    users: [],
    authors: [],
    posts: [],
    comments: [],
    replies: [],
    likes: [],
    earnings: [],
    userById: {},
};

// reducer using es6 syntax
export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        // user by id
        case GET_USERS_BY_ID:
            return {
                ...state,
                userById: action.pay
            };
        case GET_AUTHORS:
            return {
                ...state,
                authors: action.payload
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case GET_REPLIES:
            return {
                ...state,
                replies: action.payload
            };
        case GET_LIKES:
            return {
                ...state,
                likes: action.payload
            };
        case GET_EARNINGS:
            return {
                ...state,
                earnings: action.payload
            };
        case POST_USERS:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case POST_AUTHORS:
            return {
                ...state,
                authors: [...state.authors, action.payload]
            };
        case POST_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case POST_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        case POST_REPLIES:
            return {
                ...state,
                replies: [...state.replies, action.payload]
            };
        case POST_LIKES:
            return {
                ...state,
                likes: [...state.likes, action.payload]
            };
        case POST_EARNINGS:
            return {
                ...state,
                earnings: [...state.earnings, action.payload]
            };
        default:
            return state;
    }
}

export default reducer;