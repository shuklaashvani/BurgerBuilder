import classes from './buildControls.module.css';
import React from 'react';

const BuildControls =(props) =>(
    <div className={classes.BuildControl}>
        <span className={classes.label}>{props.label}</span>
        <button 
            className={classes.Less} 
            onClick={props.delete}
            disabled={props.disabled}>Less
            </button>
        <button className={classes.more} onClick={props.added}>More</button>
    </div>
);

export default BuildControls;