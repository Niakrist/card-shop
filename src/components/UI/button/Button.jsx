import React from "react";
import classes from './Button.module.css';
import basketWhite from './../../../img/icon-cart-white.svg';

const Button = ( { title } ) => {
  return <button className={classes.btn}>
    <div className={classes.btnInfo}>
      <img src={basketWhite} alt="basket" />
      <span className={classes.btnInfoTitle}>{title}</span>
    </div>
  </button>
}

export default Button;