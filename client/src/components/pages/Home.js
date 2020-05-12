import React from 'react';
import Navbar from '../layout/Navbar';
import Post from '../posts/Post';
import Posts from '../posts/Posts';
import Trend from '../layout/Trend';
import Header from '../layout/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <div className="main-container">
                    <Navbar />
                    <Post />
                    <Posts />
                </div>
            </div>
            <Trend />
        </div>
    )
}

export default Home;