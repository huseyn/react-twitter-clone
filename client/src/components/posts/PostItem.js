import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post: { user, username, date, content, likeCount, replyCount } }) => {
    return (
        <div className="posted">
            <div className="img">
                <img src="./img/team_01.jpg" alt="Profile" />
            </div>
            <div className="shared">
                <div className="user-items">
                    <Link to="">Huseyn Mikayil</Link>
                    <span>@huseyn</span>
                    <span>{date}</span>
                </div>
                <div className="text">
                    <p>
                        {content}
                    </p>
                </div>
                <div className="shared-tools">
                    <div className="shared-items">

                        <Link to=""><i className="fas fa-comment"></i></Link>
                        <Link to=""
                        ><i className="fa fa-retweet" aria-hidden="true"></i
                        ></Link>
                        <Link to=""><i className="fas fa-heart"></i></Link>
                        <Link to=""> <i className="fas fa-arrow-up"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;