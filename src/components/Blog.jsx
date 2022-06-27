// create a container component for the home page
import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import everything from Redux/blog/blog.js
import { getBlogs } from '../Redux/blog/blog';
import { getBlogsLoading } from '../Redux/blog/blog';
import { getBlogsError } from '../Redux/blog/blog';
import { getBlogsSuccess } from '../Redux/blog/blog';
// export component

// create a component that gets blogs from the state and displays them in a react-bootstrap card
const Blogs = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const loading = useSelector(state => state.blog.loading);
    const error = useSelector(state => state.blog.error);
    const success = useSelector(state => state.blog.success);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    
    useEffect(() => {
        if (error) {
        dispatch(getBlogsError(error));
        }
    }, [error]);
    
    useEffect(() => {
        if (success) {
        dispatch(getBlogsSuccess(success));
        }
    }, [success]);
    
    useEffect(() => {
        if (loading) {
        dispatch(getBlogsLoading(loading));
        }
    }, [loading]);
    
    return (
        <div>
        <h1>Blogs</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        {blogs.map(blog => (
            <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            </div>
        ))}
        </div>
    );
    } 
    // export
    export default Blogs;