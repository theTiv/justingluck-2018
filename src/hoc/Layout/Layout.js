import React, { Component } from 'react';

import classes from './Layout.scss';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';
import Footer from '../../components/Footer/Footer';

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
            <div className={classes.Container}>
                <NavBar className={classes.Header} menuToggleClicked={this.mobileMenuToggleHandler} />
                <MobileMenu 
                    open={this.state.showMobileMenu} 
                    closed={this.mobileMenuClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer className={classes.Footer} />
            </div>           
        )
    }
}

export default Layout;