import React, { useReducer } from 'react';
import PostContext from './postContext';
import PostReducer from './postReducer';
import {
    ADD_POST
} from '../types';

const PostState = props => {

    const initialState = {
        posts: [
            {
                id: Math.random(),
                user: 'Mike Johnson',
                username: 'mike',
                date: '1 min',
                content: 'Test test',
                likeCount: 0,
                replyCount: 0
            }
        ]
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);

    // Add Post
    const addPost = text => {
        const post = {
            id: Math.random(),
            user: 'Mike Johnson',
            username: 'mike',
            date: '1 min',
            content: text,
            likeCount: 0,
            replyCount: 0
        }

        dispatch({
            type: ADD_POST,
            payload: post
        })
    }

    return <PostContext.Provider
        value={{
            posts: state.posts,
            addPost
        }}
    >
        {props.children}
    </PostContext.Provider>
}

export default PostState;