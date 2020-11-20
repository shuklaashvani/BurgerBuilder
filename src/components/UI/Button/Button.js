import React from'react';
import Auxx from '../../../hoc/Auxx';
import classes from './Button.module.css';
const Button = (props) => (
   <Auxx>
       <button onClick={props.cancel} className={classes.Cancle}>Cancle</button>
       <button onClick={props.continue} className={classes.Confirm}>Continue</button>
   </Auxx>
);

export default Button ;