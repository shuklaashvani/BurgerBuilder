import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItem/NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
       <header className={classes.Toolbar}>
           <div onClick={props.clicked}
                className={classes.Menu}>
              Menu
            </div>
           
           <Logo />
           <nav className={classes.DesktopOnly}>
               <Navigation />
           </nav>
       </header>
);

export default Toolbar;