import React, { useReducer } from 'react';
import PostContext from './postContext';
import PostReducer from './postReducer';
import {
    ADD_POST, GET_POST
} from '../types';

const PostState = props => {

    const initialState = {
        posts: []
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

    // Get Posts
    const getPosts = () => {
        const post = {
            id: Math.random(),
            user: 'Huseyn Mikayil',
            username: 'huseynmikayil',
            date: '10 min',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto ipsam soluta dolorum, suscipit laudantium, atque dicta reiciendis ducimus expedita veniam voluptate fugit fuga nihil autem cum quo dolore doloremque eveniet!',
            likeCount: 10,
            replyCount: 5
        }

        dispatch({
            type: GET_POST,
            payload: post
        });
    }

    return <PostContext.Provider
        value={{
            posts: state.posts,
            addPost,
            getPosts
        }}
    >
        {props.children}
    </PostContext.Provider>
}

export default PostState;