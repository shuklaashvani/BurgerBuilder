import React from 'react';
import burgerlogo from '../../assests/images/burgerlogo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src= {burgerlogo}/>
    </div>
)

export default Logo;