import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';
const OrderSummary = (props) => {
   const ingredientSummary = Object.keys(props.ingredient)
          .map(igkey => {
          return (
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredient[igkey]}
                </li>);
          });

    return(
     
            <div className={classes.Box}>
            <h3>Your Order</h3>
            <p className={classes.Quote}>A delecious burger with the following ingredients :</p>             
             <ul>
                     {ingredientSummary}
             </ul>
             <p><strong className={classes.Price}>Total Price : {props.price.toFixed(2)}$</strong></p>
             <br/>
             <p>Continue to Checkout ...</p>
            <Button 
            cancel={props.cancel}
            continue={props.continue}/>
            </div>
     
    )
}

export default OrderSummary;