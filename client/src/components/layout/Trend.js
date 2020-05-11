import React from 'react';
import Search from '../users/Search';
import Following from '../users/Following';

const Trend = () => {
    return (
        <div className="trend">
            <Search />
            <div className="trends border-bottom">
                Trends for you
            </div>
            <Following />

        </div>
    )
}

export default Trend;
