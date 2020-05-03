import React from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Posts from './Posts';
import PropTypes from 'prop-types';

const Home = ({ addPost, posts }) => {
    return (
        <div>
            <div className="main">
                <div className="main-container">
                    <Navbar />
                    <Post addPost={addPost} />
                    <Posts posts={posts} />
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    posts: PropTypes.object.isRequired
}

export default Home;