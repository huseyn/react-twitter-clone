import React from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Lifecyle from './Lifecycle';

const Main = () => {
    return (
        <div>
            <div className="main">
                <div className="main-container">
                    <Navbar />
                    <Post />
                    <Lifecyle />
                </div>
            </div>
        </div>
    )
}

export default Main;