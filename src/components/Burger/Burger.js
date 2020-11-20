import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngridient';

const Burger =(props) => {
  
  let fillers=Object.keys(props.ingredients).map(item =>
                     {
                return [...Array(props.ingredients[item])].map((_,i) => {
                  return <BurgerIngredient key={item+i} type={item} />
                });
              })
           .reduce((arr,el) => {
                return  arr.concat(el)
              },[]);
            
      if(fillers.length===0){
        fillers=<p>Please start adding ingredients! </p>;
      }
    return(
      <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
             {fillers}
            <BurgerIngredient type="bread-bottom" />
      </div>
    );
}

export default Burger ;