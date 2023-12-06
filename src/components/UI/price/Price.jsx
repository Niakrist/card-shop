import React from "react";
import classes from './Price.module.css';
import data from './../../../data/data';

const Price = () => {

  const formatUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return(
    <div className={classes.price}>
      <div className={classes.newPrice}>
        <div className={classes.currientPrice}>{formatUSD.format(data.currientPrice)}</div>
        <div className={classes.discount}>{data.discount}</div>
      </div>
      <div className={classes.startPrice}>{formatUSD.format(data.startPrice)}</div>
    </div>
  )
}

export default Price;