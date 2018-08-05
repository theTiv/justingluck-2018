import React from 'react';

import siteLogo from '../../assets/img/jglogo.svg';
import classes from './Logo.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={siteLogo} alt="Justin Glück Freelance Web Developer" />
    </div>
);

export default logo;