// get all Posts from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Actions/actions";

// create component, get Posts from state and display list
const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (posts.length === 0) {
        dispatch(getPosts());
        }
    }, []);
    
    return (
        <div>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => (
            <li key={post.url}>
                <div>{post.title}</div>
                <div>{post.content}</div>
                <div>{post.author}</div>
            </li>
            ))}
        </ul>
        </div>
    );
    }
    export default Posts;