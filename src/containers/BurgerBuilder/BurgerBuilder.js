import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxx from '../../hoc/Auxx';
import BuildControl from '../../components/Burger/buildControl/buildControl';
import Modal from '../../components/UI/Model/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const Ingredient_price = {
  salad: 0.8,
  bacon: 1.2,
  cheese: 0.9,
  meat: 1.6
}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredient) => {

    const sum = Object.keys(ingredient).map(igkeys => {
      return ingredient[igkeys];
    })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState(
      { purchasable: sum > 0 });
    /* const purchase=this.state.totalPrice;
     if(purchase>4){
       this.setState({
         purchasable:true
       });
     }
     else{
       this.setState({
         purchasable:false
       });
     }*/

  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngridient = {
      ...this.state.ingredients
    }
    updateIngridient[type] = updateCount;
    const priceAdd = Ingredient_price[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngridient
    });
    this.updatePurchaseState(updateIngridient);
  }

  DeleteIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngridient = {
      ...this.state.ingredients
    }
    updateIngridient[type] = updateCount;
    const priceAdd = Ingredient_price[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAdd;

    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngridient
    });
    this.updatePurchaseState(updateIngridient);

  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancleHandler = () => {
    this.setState({ purchasing: false });
  }
  
  cancleButton = () => {
    this.setState({purchasing: false});
  }

  continueButton = () => {
    alert("Your order is ready");
    this.setState({purchasing: false});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Auxx>
        <Modal show={this.state.purchasing}
          modalClosed={this.purchaseCancleHandler}>
          <OrderSummary
            ingredient={this.state.ingredients}
            cancel={this.cancleButton}
            continue={this.continueButton}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          ingredientAdded={this.addIngredientHandler}
          ingredientDelete={this.DeleteIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.purchaseHandler} />

      </Auxx>
    );
  }
}

export default BurgerBuilder;