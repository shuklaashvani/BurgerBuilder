import React from 'react';
import classes from './Navigation.module.css';
const Navigations = (props) => (
   
        <li className={classes.NavigationItem}>
            <a href={props.link} className={props.active ? classes.active : null}>
                {props.children}</a>
        </li>
    
);

export default Navigations;