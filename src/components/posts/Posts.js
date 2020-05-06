import React, { useContext } from 'react';
import PostItem from '../posts/PostItem';
import PostContext from '../../context/post/postContext';

const Posts = () => {

    const postContext = useContext(PostContext);
    const { posts } = postContext;
    return (
        <div className="lifecycle">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <PostItem />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;
