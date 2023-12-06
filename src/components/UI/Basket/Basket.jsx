import React from "react";
import classes from './Basket.module.css';
import basketSvg from './../../../img/icon-cart.svg'; 

const Basket = () => {
  return (
  <div className={classes.basket}>
    <img src={basketSvg} alt="basket" />
  </div>
  );
}

export default Basket;