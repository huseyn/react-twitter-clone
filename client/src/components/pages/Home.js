import React, { useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Post from '../posts/Post';
import Posts from '../posts/Posts';
import Trend from '../layout/Trend';
import Header from '../layout/Header';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

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