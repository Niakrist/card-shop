import React from "react";
import classes from './Counter.module.css';
import plus from './../../../img/icon-plus.svg';
import minus from './../../../img/icon-minus.svg';

const Counter = () => {

  let count = 0;

  return (
    <div className={classes.counterWrapper}>
      <button className={classes.counterBtn}>
        <img src={minus} alt="" />
      </button>
      <div className={classes.counterBtnText}>{count}</div>
      <button className={classes.counterBtn}>
      <img src={plus} alt="" />
      </button>
    </div>
  )
} 

export default Counter;