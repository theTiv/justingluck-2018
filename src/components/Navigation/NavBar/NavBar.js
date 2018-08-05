import React from 'react';

import classes from './NavBar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../MobileMenu/MenuToggle/MenuToggle';

const navBar = (props) => (
    <header className={classes.NavBar}>
        <MenuToggle clicked={props.menuToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default navBar;