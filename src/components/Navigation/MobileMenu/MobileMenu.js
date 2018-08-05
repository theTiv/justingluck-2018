import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './MobileMenu.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const mobileMenu = (props) => {
    
    // Displays by default adjacent classes "SideDrawer Close" - needs to use javascript join(' ') (ref JSX below) to actually work this way.
    let attachedClasses = [classes.MobileMenu, classes.Close];
    // However is show open is true, then it displays by default adjacent classes "SideDrawer Open"
    if (props.open) {
        attachedClasses = [classes.MobileMenu, classes.Open];
    }
    
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default mobileMenu;