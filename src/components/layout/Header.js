import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

import PropTypes from 'prop-types';

const Header = ({ icon }) => {
    return (
        <div className='header'>
            <div className='container'>
                <Link to="/" className="icon">
                    <i className={icon}></i>
                </Link>
                <Menu />
                <Link to="#" className="btn btn-link">Tweet</Link>
            </div>
        </div>
    )
}

Header.defaultProps = {
    icon: 'fab fa-twitter'
}

Header.propTypes = {
    icon: PropTypes.string.isRequired
}

export default Header;