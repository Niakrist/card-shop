import React from "react";
import Price from "../UI/price/Price.jsx";
import data  from './../../data/data.jsx'
import Button from "../UI/button/Button.jsx";
import classes from './InfoProduct.module.css';
import Counter from "../UI/counter/Counter.jsx";

const InfoProduct = () => {



  const product = {
    brand: 'Sneaker Company',
    name: 'Fall limited edition Sneakers',
    info: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    currientPrice: 125.00,
    discount: '50%',
    startPrice: 250.00,
  }


  return (
    <div className={classes.infoProduct}>
      <div className={classes.infoProductBrand}>{data.brand}</div>
      <h1 className={classes.infoProductTitle}>{data.name}</h1>
      <p className={classes.infoProductText}>{data.info}</p>
      <div className={classes.price}>
        <Price />        
      </div>
      <div className={classes.infoProductBuy}>
        <Counter />
        <Button title="Add to card" />
      </div>


    </div>
  )
}

export default InfoProduct;