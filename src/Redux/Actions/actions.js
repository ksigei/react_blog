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
} from "./types";
// base url for api from django
const baseUrl = "http://localhost:8000/";

export const getUsers = () => (dispatch) => {
  fetch(baseUrl + "users/")
    .then((res) => res.json())
    .then((users) =>
      dispatch({
        type: GET_USERS,
        payload: users,
      })
    );
};

// fetch
export const getAuthors = () => (dispatch) => {
  fetch(baseUrl + "authors/")
    .then((res) => res.json())
    .then((authors) =>
      dispatch({
        type: GET_AUTHORS,
        payload: authors,
      })
    );
};
// fetch
export const getPosts = () => (dispatch) => {
  fetch(baseUrl + "posts/")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: GET_POSTS,
        payload: posts,
      })
    );
};
// fetch
export const getComments = () => (dispatch) => {
  fetch(baseUrl + "comments/")
    .then((res) => res.json())
    .then((comments) =>
      dispatch({
        type: GET_COMMENTS,
        payload: comments,
      })
    );
};
// fetch
export const getReplies = () => (dispatch) => {
  fetch(baseUrl + "replies/")
    .then((res) => res.json())
    .then((replies) =>
      dispatch({
        type: GET_REPLIES,
        payload: replies,
      })
    );
};
// fetch
export const getLikes = () => (dispatch) => {
  fetch(baseUrl + "likes/")
    .then((res) => res.json())
    .then((likes) =>
      dispatch({
        type: GET_LIKES,
        payload: likes,
      })
    );
};
// fetch
export const getEarnings = () => (dispatch) => {
  fetch(baseUrl + "earnings/")
    .then((res) => res.json())
    .then((earnings) =>
      dispatch({
        type: GET_EARNINGS,
        payload: earnings,
      })
    );
};

// use fetch to get data by id from django server and return it to the reducer.
export const getUserById = (id) => (
  dispatch
) => {
  fetch(baseUrl + "users/" + id)

    .then((res) => res.json())  
    .then((user) =>

      dispatch({
        type: GET_USERS,
        payload: user,
      })
    );
}
// use fetch to get data by id from django server and return it to the reducer.

// post
export const postUsers = (user) => (dispatch) => {
  fetch(baseUrl + "users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: POST_USERS,
        payload: user,
      })
    );
};
// post
export const postAuthors = (author) => (dispatch) => {
  fetch(baseUrl + "authors/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(author),
  })
    .then((res) => res.json())
    .then((author) =>
      dispatch({
        type: POST_AUTHORS,
        payload: author,
      })
    );
};
// post
export const postPosts = (post) => (dispatch) => {
  fetch(baseUrl + "posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: POST_POSTS,
        payload: post,
      })
    );
};
// post
export const postComments = (comment) => (dispatch) => {
  fetch(baseUrl + "comments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((comment) =>
      dispatch({
        type: POST_COMMENTS,
        payload: comment,
      })
    );
};
// post
export const postReplies = (reply) => (dispatch) => {
  fetch(baseUrl + "replies/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reply),
  })
    .then((res) => res.json())
    .then((reply) =>
      dispatch({
        type: POST_REPLIES,
        payload: reply,
      })
    );
};
// post

export const postLikes = (like) => (dispatch) => {
  fetch(baseUrl + "likes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  })
    .then((res) => res.json())
    .then((like) =>
      dispatch({
        type: POST_LIKES,
        payload: like,
      })
    );
};
// post
export const postEarnings = (earning) => (dispatch) => {
  fetch(baseUrl + "earnings/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(earning),
  })
    .then((res) => res.json())
    .then((earning) =>
      dispatch({
        type: POST_EARNINGS,
        payload: earning,
      })
    );
};
// delete
export const deleteUsers = (id) => (dispatch) => {
  fetch(baseUrl + "users/" + id + "/", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: DELETE_USERS,
        payload: user,
      })
    );
};
// delete
export const deleteAuthors = (id) => (dispatch) => {
  fetch(baseUrl + "authors/" + id + "/", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((author) =>
      dispatch({
        type: DELETE_AUTHORS,
        payload: author,
      })
    );
};
// delete
export const deletePosts = (id) => (dispatch) => {
  fetch(baseUrl + "posts/" + id + "/", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: DELETE_POSTS,
        payload: post,
      })
    );
};
// delete
// update
export const updateUsers = (id, user) => (dispatch) => {
  fetch(baseUrl + "users/" + id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: UPDATE_USERS,
        payload: user,
      })
    );
}

