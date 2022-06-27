const GET_BLOGS = 'GET_BLOGS';
// const for loading
const GET_BLOGS_LOADING = 'GET_BLOGS_LOADING';
// const for error
const GET_BLOGS_ERROR = 'GET_BLOGS_ERROR';
// const for success
const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
// api
const api = 'https://api.weebly.com';
// axios
const axios = require('axios');

// reducer for blog
export default function blogReducer(state = {}, action) { 
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload
      };
    case GET_BLOGS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_BLOGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    default:
      return state;
  }
}

// fetch blogs from api using axios with with both GET_BLOGS and  GET_BLOGS_LOADING
export function getBlogs() {
  return dispatch => {
    dispatch({
      type: GET_BLOGS_LOADING,
      payload: true
    });
    axios.get(`${api}/blogs`)
      .then(response => {
        dispatch({
          type: GET_BLOGS,
          payload: response.data
        });
        dispatch({
          type: GET_BLOGS_LOADING,
          payload: false
        });
      }
      )
      .catch(error => {
        dispatch({
          type: GET_BLOGS_ERROR,
          payload: error
        });
        dispatch({
          type: GET_BLOGS_LOADING,
          payload: false
        });
      }
      );
  }
}

// export
export const getBlogsLoading = () => {
  return {
    type: GET_BLOGS_LOADING
  }
}
export const getBlogsSuccess = (blogs) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: blogs
  }
}
export const getBlogsError = (error) => {
  return {
    type: GET_BLOGS_ERROR,
    payload: error
  }
}
