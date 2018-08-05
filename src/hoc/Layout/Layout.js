import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.scss';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';

class Layout extends Component {

    // State
    state = {
        showMobileMenu: false
    }

    // Methods

    mobileMenuToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {showMobileMenu: !this.state.showMobileMenu};
        });
    }

    mobileMenuClosedHandler = () => {
        this.setState( { showMobileMenu: false } );
    }

    render() {
        return (
            <Aux>
            <NavBar menuToggleClicked={this.mobileMenuToggleHandler} />
            <MobileMenu 
                open={this.state.showMobileMenu} 
                closed={this.mobileMenuClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>           
        )
    }
}

export default Layout;