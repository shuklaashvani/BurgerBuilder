import React from 'react';
import Navigations from './NavigationItem/NavigationItem';
import classes from './Navigations.module.css';


const Navigation = () => (
    <ul className={classes.Navigation}>
         <Navigations link='/' active> Burger Builder</Navigations>
         <Navigations link='/'> Checkout</Navigations>
    </ul>
);

export default Navigation;