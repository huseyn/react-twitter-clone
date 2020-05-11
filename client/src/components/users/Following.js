import React from 'react';
import { Link } from 'react-router-dom';

const Following = () => {
    return (
        <div className="people">
            <div className="title border-bottom">
                Who to follow
                </div>
            <div className="users">
                <ul>
                    <li className="border-bottom">
                        <div className="user">
                            <img src="./img/team_02.jpg" alt="" />
                            <div className="user-info">
                                <span>Hana Kaner</span>
                                <span>@hankaner</span>
                            </div>
                            <Link to="" className="btn btn-link btn-s">Follow</Link>
                        </div>
                    </li>
                    <li className="border-bottom">
                        <div className="user">
                            <img src="./img/team_03.jpg" alt="" />
                            <div className="user-info">
                                <span>James Buffen</span>
                                <span>@james</span>
                            </div>
                            <Link to="" className="btn btn-link btn-s">Follow</Link>
                        </div>
                    </li>
                    <li className="border-bottom">
                        <div className="user">
                            <img src="./img/team_04.jpg" alt="" />
                            <div className="user-info">
                                <span>Lena daniels</span>
                                <span>@ldaniels</span>
                            </div>
                            <Link to="" className="btn btn-link btn-s">Follow</Link>
                        </div>
                    </li>
                </ul>
                <div className="more">
                    <Link to="">Show More</Link>
                </div>
            </div>
        </div>
    )
}

export default Following;
