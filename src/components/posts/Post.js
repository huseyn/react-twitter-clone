import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../../img/team_01.jpg';
import PostContext from '../../context/post/postContext';

const Post = () => {

    const postContext = useContext(PostContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text) {
            postContext.addPost(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value);

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
                                name="text"
                                value={text}
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