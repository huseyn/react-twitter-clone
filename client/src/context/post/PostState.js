import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import PostReducer from './postReducer';
import {
    GET_POSTS,
    ADD_POST,
    POST_ERROR
} from '../types';

const PostState = props => {

    const initialState = {
        posts: [],
        error: null
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);

    // Get Posts
    const getPosts = async () => {

        try {
            const res = await axios.get('/api/posts');

            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({ type: POST_ERROR, payload: err.response.msg })
        }
    }

    // Add Post
    const addPost = async post => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/posts', post, config);

            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        } catch (err) {
            dispatch({ type: POST_ERROR, payload: err.response.msg })
        }
    }

    return <PostContext.Provider
        value={{
            posts: state.posts,
            error: state.error,
            addPost,
            getPosts
        }}
    >
        {props.children}
    </PostContext.Provider>
}

export default PostState;