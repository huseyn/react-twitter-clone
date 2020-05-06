import React from 'react';
import PostItem from '../posts/PostItem';

const Posts = ({ posts }) => {
    return (
        <div className="lifecycle">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <PostItem post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;
