import {
    GET_POSTS,
    ADD_POST,
    POST_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}