// // export const postPosts = (post) => {
// //     return dispatch => {
// //         axios.post('http://127.0.0.1:8000/posts/')
// //             .then(res => {
// //                 dispatch({
// //                     type: POST_POSTS,
// //                     payload: res.data
// //                 });
// //             }
// //         );
// //     };
// // }

// // create a form for creating a new post concerning the above action.
// // import required stuff to create a form.
// import React from 'react';
// // import useEffect, useState, useContext, useReducer from 'react';
// import {
//   useEffect, useState, useContext, useReducer,
// } from 'react';
// // import the action postPosts from the action file.
// import { postPosts } from '../../Redux/Actions/actions';
// // create a form for creating a new post.
// const NewPost = () => {
//   // create a state for the form.
//   const [form, setForm] = useState({
//     title: '',
//     content: '',
//     image: '',
//     tags: '',
//     category: '',
//     author: '',
//   });
//   // create a state for the error.
//   const [error, setError] = useState('');
//   // create a state for the success.
//   const [success, setSuccess] = useState('');
//   // create a state for the loading.
//   const [loading, setLoading] = useState(false);
//   // create a form.
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };
//   // create a form.
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');
//     // create a form.
//     postPosts(form)
//       .then((res) => {
//         setLoading(false);
//         setSuccess(res.data.message);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(err.response.data.message);
//       });
//   };
//   // create a form.
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h4>Create a new post</h4>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="title">Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="title"
//                     name="title"
//                     value={form.title}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="content">Content</label>
//                   <textarea
//                     className="form-control"
//                     id="content"
//                     name="content"
//                     value={form.content}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="image">Image</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     id="image"
//                     name="image"
//                     value={form.image}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="tags">Tags</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="tags"
//                     name="tags"
//                     value={form.tags}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="category">Category</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="category"
//                     name="category"
//                     value={form.category}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="author">Author</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="author"
//                     name="author"
//                     value={form.author}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </form>
//               {loading && <p>Loading...</p>}
//               {error && <p>{error}</p>}
//               {success && <p>{success}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // export the form.
// export default NewPost;
