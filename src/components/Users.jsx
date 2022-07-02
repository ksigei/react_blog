// get all users from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/Actions/actions";

// create component, get users from state and display list
const Users = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (users.length === 0) {
        dispatch(getUsers());
        }
    }, []);
    
    return (
        <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
            <li key={user.url}>
                <div>{user.username}</div>
                <div>{user.email}</div>
            </li>
            ))}
        </ul>
        </div>
    );
    }
    export default Users;