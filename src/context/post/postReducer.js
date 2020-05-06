import {
    ADD_POST, GET_POST
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case GET_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}