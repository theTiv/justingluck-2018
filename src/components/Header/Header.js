import React from 'react';

import classes from './Header.scss';
import Logo from '../UI/Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import MenuToggle from '../Navigation/MobileMenu/MenuToggle/MenuToggle';

const navBar = (props) => (
    <header className={classes.Header}>
        <MenuToggle clicked={props.menuToggleClicked} />
        <div className={classes.Logo}>
            <Logo link="/home" />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default navBar;