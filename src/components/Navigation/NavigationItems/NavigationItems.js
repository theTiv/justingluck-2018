import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/about">About Me</NavigationItem>
        <NavigationItem link="/work">Recent Work</NavigationItem>
        <NavigationItem link="/experience">Experience</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;