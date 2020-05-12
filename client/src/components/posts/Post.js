import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../../img/team_01.jpg';
import PostContext from '../../context/post/postContext';

const Post = () => {

    const postContext = useContext(PostContext);


    const [post, setPost] = useState({
        content: '',
        likeCount: 0,
        replyCount: 0
    });

    const { content, likeCount, replyCount } = post;

    const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        postContext.addPost(post);
    }

    return (
        <div>
            <div className="post">
                <div className="img">
                    <img src={UserImage} alt="Profile" />
                </div>
                <div className="share">
                    <div className="input">
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="content"
                                value={content}
                                onChange={onChange}
                                placeholder="What's happening?"
                            />
                        </form>
                    </div>
                    <div className="share-tools">
                        <div className="share-items">
                            <i className="fas fa-image"></i>
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-smile"></i>
                        </div>
                        <div className="share-button">
                            <Link to="#" onClick={onSubmit} className="btn btn-link btn-s">Tweet</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post;