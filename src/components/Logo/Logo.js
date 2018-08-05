import React from 'react';
import { Link } from 'react-router-dom';

import siteLogo from '../../assets/img/jglogo.svg';
import classes from './Logo.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Link 
        to={props.link}>
            <img src={siteLogo} alt="Justin Glück Freelance Web Developer" />
        </Link>
    </div>
);

export default logo;