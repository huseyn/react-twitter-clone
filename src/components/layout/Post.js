import React from 'react';
import UserImage from '../../img/team_01.jpg';

const Post = () => {
    return (
        <div>
            <div className="post">
                <div className="img">
                    <img src={UserImage} alt="Profile" />
                </div>
                <div className="share">
                    <div className="input">
                        <form>
                            <input
                                type="text"
                                name=""
                                id=""
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
                            <a href="" className="btn btn-link btn-s">Tweet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;