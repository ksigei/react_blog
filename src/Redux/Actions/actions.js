import axios from "axios";

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
} from "./types";

// const api, api from django server
const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Access-Control-Allow-Credentials": true,
    'X-CSRF-Token': undefined,
  },
});
console.log("getUsers", api);
// const api, api from django server and uses redux-thunk
export const getUsers = () => async (dispatch) => {
  const res = await api.get("/users/");
  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};

// const api, api from django server and uses redux-thunk
export const getAuthors = () => async (dispatch) => {
  const res = await api.get("/authors/");
  dispatch({
    type: GET_AUTHORS,
    payload: res.data,
  });
};

// const api, api from django server and uses redux-thunk
export const getPosts = () => async (dispatch) => {
  const res = await api.get("posts/");
  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};
// const api, api from django server and uses redux-thunk
export const getComments = () => async (dispatch) => {
  const res = await api.get("/comments/");
  dispatch({
    type: GET_COMMENTS,
    payload: res.data,
  });
};
// const api, api from django server and uses redux-thunk
export const getReplies = () => async (dispatch) => {
  const res = await api.get("/replies/");
  dispatch({
    type: GET_REPLIES,
    payload: res.data,
  });
};
// const api, api from django server and uses redux-thunk
export const getLikes = () => async (dispatch) => {
  const res = await api.get("/likes/");
  dispatch({
    type: GET_LIKES,
    payload: res.data,
  });
};
// const api, api from django server and uses redux-thunk
export const getEarnings = () => async (dispatch) => {
  const res = await api.get("/earnings/");
  dispatch({
    type: GET_EARNINGS,
    payload: res.data,
  });
};

// action to register a new user.
export const postUsers = (user) => {
  return (dispatch) => {
    axios.post("api/users/").then((res) => {
      dispatch({
        type: POST_USERS,
        payload: res.data,
      });
    });
  };
};

export const postAuthors = (author) => {
  return (dispatch) => {
    axios.post("api/authors/").then((res) => {
      dispatch({
        type: POST_AUTHORS,
        payload: res.data,
      });
    });
  };
};

export const postPosts = (post) => {
  return (dispatch) => {
    axios.post("api/posts/").then((res) => {
      dispatch({
        type: POST_POSTS,
        payload: res.data,
      });
    });
  };
};

// post
export const postComments = (comment) => {
  return (dispatch) => {
    axios.post("api/comments/").then((res) => {
      dispatch({
        type: POST_COMMENTS,
        payload: res.data,
      });
    });
  };
};
// post
export const postReplies = (reply) => {
  return (dispatch) => {
    axios.post("api/replies/").then((res) => {
      dispatch({
        type: POST_REPLIES,
        payload: res.data,
      });
    });
  };
};
// post
export const postLikes = (like) => {
  return (dispatch) => {
    axios.post("api/likes/").then((res) => {
      dispatch({
        type: POST_LIKES,
        payload: res.data,
      });
    });
  };
};
// post
export const postEarnings = (earning) => {
  return (dispatch) => {
    axios.post("api/earnongs/").then((res) => {
      dispatch({
        type: POST_EARNINGS,
        payload: res.data,
      });
    });
  };
};
