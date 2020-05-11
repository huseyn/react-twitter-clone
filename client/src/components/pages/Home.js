import React from 'react';
import Navbar from '../layout/Navbar';
import Post from '../posts/Post';
import Posts from '../posts/Posts';

const Home = () => {
    return (
        <div>
            <div className="main">
                <div className="main-container">
                    <Navbar />
                    <Post />
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Home;