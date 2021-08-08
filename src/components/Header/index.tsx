import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.Header}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;
