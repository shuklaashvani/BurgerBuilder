import classes from './buildControl.module.css';
import React from 'react';
import BuildControls from './buildControls/buildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const BuildControl = (props) => (
     <div className={classes.buildControl}>
         <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
       {controls.map(ctrl => (
         <BuildControls
             key={ctrl.label} 
             label={ctrl.label} 
             added={() => props.ingredientAdded(ctrl.type)} 
             delete={() => props.ingredientDelete(ctrl.type)}
             disabled={ props.disabled[ctrl.type] }/> 
        ) )}

          <button 
          className={classes.OrderButton}
          disabled={!props.purchasable}
          onClick={props.order}
          >ORDER NOW</button>
     </div>

);

export default BuildControl;