import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Fragment>
            <ul class="menu">
                <li class="menu-item">
                    <Link to="#" class="btn-link current btn-m">
                        <i class="fas fa-home"></i> Home
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-hashtag"></i> Explore
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-bell"></i> Notifications
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-envelope"></i> Messages
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-bookmark"></i> Bookmarks
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-list"></i> Lists
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m">
                        <i class="fas fa-user"></i> Profile
              </Link>
                </li>
                <li class="menu-item">
                    <Link to="#" class="btn-link btn-m"
                    ><i class="fas fa-ellipsis-h circle"></i> More
              </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default Menu;