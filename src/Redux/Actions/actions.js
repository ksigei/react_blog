import axios from 'axios';

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
    POST_EARNINGS
} from './types';

export const getUsers = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/users/')
            .then(res => {
                dispatch({
                    type: GET_USERS,
                    payload: res.data
                });
            }
        );
    };
};

// const 
export const getAuthors = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/authors/')
            .then(res => {
                dispatch({
                    type: GET_AUTHORS,
                    payload: res.data
                });
            }
        );
    };
}

// const
export const getPosts = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/posts/')
            .then(res => {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data
                });
            }
        );
    };
}
// const
export const getComments = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/comments/')
            .then(res => {
                dispatch({
                    type: GET_COMMENTS,
                    payload: res.data
                });
            }
        );
    };
}

//  const
export const getReplies = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/replies/')
            .then(res => {
                dispatch({
                    type: GET_REPLIES,
                    payload: res.data
                });
            }
        );
    };
}

// const
export const getLikes = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/likes/')
         .then(res => {
                dispatch({
                    type: GET_LIKES,
                    payload: res.data
                });
            }
        );
    };
}
// const
export const getEarnings = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/earnings/')
            .then(res => {
                dispatch({
                    type: GET_EARNINGS,
                    payload: res.data
                });
            }
        );
    };
}

export const postUsers = (user) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/users/')  
            .then(res => {
                dispatch({
                    type: POST_USERS,
                    payload: res.data
                });
            }
        );
    };
}

export const postAuthors = (author) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/authors/')
            .then(res => {
                dispatch({
                    type: POST_AUTHORS,
                    payload: res.data
                });
            }
        );
    };
}

export const postPosts = (post) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/posts/')
            .then(res => {
                dispatch({
                    type: POST_POSTS,
                    payload: res.data
                });
            }
        );
    };
}

// post
export const postComments = (comment) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/comments/')
            .then(res => {
                dispatch({
                    type: POST_COMMENTS,
                    payload: res.data
                });
            }
        );
    };
}
// post
export const postReplies = (reply) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/replies/')
            .then(res => {
                dispatch({
                    type: POST_REPLIES,
                    payload: res.data
                });
            }
        );
    };
}
// post
export const postLikes = (like) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/likes/')
            .then(res => {
                dispatch({
                    type: POST_LIKES,
                    payload: res.data
                });
            }
        );
    };
}
// post
export const postEarnings = (earning) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/earnongs/')
            .then(res => {
                dispatch({
                    type: POST_EARNINGS,
                    payload: res.data
                });
            }
        );
    };
}
