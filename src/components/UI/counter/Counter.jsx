import React, { useState } from "react";
import classes from './Counter.module.css';
import plus from './../../../img/icon-plus.svg';
import minus from './../../../img/icon-minus.svg';

const Counter = () => {

  const [count, setCount] = useState(0);

  const getIncrement = () => {
    setCount(count + 1);
  }

  const getDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
  }

  return (
    <div className={classes.counterWrapper}>
      <button
        onClick={getDecrement}
        className={classes.counterBtn}>
        <img src={minus} alt="" />
      </button>
      <div className={classes.counterBtnText}>{count}</div>
      <button
        onClick={getIncrement}
        className={classes.counterBtn}>
        <img src={plus} alt="" />
      </button>
    </div>
  )
}

export default Counter;