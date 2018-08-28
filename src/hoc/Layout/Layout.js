import React, { Component } from 'react';
import Headroom from  'react-headroom';

import classes from './Layout.scss';
import Header from '../../components/Header/Header';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';
import Footer from '../../components/Footer/Footer';
import Aux from '../Aux/Aux';

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
                    <Headroom 
                        style={{
                            height: '56px',
                        }}>
                        <Header className={classes.Header} menuToggleClicked={this.mobileMenuToggleHandler} />
                    </Headroom>
                    <MobileMenu 
                        open={this.state.showMobileMenu} 
                        closed={this.mobileMenuClosedHandler} />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                    <Footer className={classes.Footer} />
                </Aux>
        )
    }
}

export default Layout;