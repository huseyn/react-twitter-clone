import React, { useContext, useEffect } from 'react';
import PostItem from '../posts/PostItem';
import PostContext from '../../context/post/postContext';

const Posts = () => {

    const postContext = useContext(PostContext);
    const { posts, getPosts, loading } = postContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="lifecycle">
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <PostItem post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;
