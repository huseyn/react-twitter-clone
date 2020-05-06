import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../../img/team_01.jpg';

class Post extends Component {

    state = {
        text: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text) {
            this.props.addPost(this.state.text);
            this.setState({ text: '' });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <div className="post">
                    <div className="img">
                        <img src={UserImage} alt="Profile" />
                    </div>
                    <div className="share">
                        <div className="input">
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.onChange}
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
                                <Link to="#" onClick={this.onSubmit} className="btn btn-link btn-s">Tweet</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Post;