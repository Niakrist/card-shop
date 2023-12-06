// import React from "react";
import classes from './Slider.module.css';
import imageProduct1 from './../../img/slider-img/image-product-1.jpg';
import imageProduct2 from './../../img/slider-img/image-product-2.jpg';
import imageProduct3 from './../../img/slider-img/image-product-3.jpg';
import imageProduct4 from './../../img/slider-img/image-product-4.jpg';

import imageProductSmall1 from './../../img/slider-img/image-product-1-thumbnail.jpg';
import imageProductSmall2 from './../../img/slider-img/image-product-2-thumbnail.jpg';
import imageProductSmall3 from './../../img/slider-img/image-product-3-thumbnail.jpg';
import imageProductSmall4 from './../../img/slider-img/image-product-4-thumbnail.jpg';


const gallery = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]


const Slider = () => {
  return (
    <div>
      <div className={classes.sliderWrapper}>
        <div className={classes.slide}>
          <img className={classes.slideImg} src={gallery[1]} alt="" />
        </div>
        <div className={classes.sliderNav}>
          <div className={classes.slideNavWrapper}>
            <img className={classes.slideNavImg} src={imageProductSmall1} alt="" />
            <div className={classes.imgFilter}></div>
          </div>
          <div className={classes.slideNavWrapper}>
            <img className={classes.slideNavImg} src={imageProductSmall2} alt="" />
            <div className={classes.imgFilter}></div>
          </div>
          <div className={classes.slideNavWrapper}>
            <img className={classes.slideNavImg} src={imageProductSmall3} alt="" />
            <div className={classes.imgFilter}></div>
          </div>
          <div className={classes.slideNavWrapper}>
            <img className={classes.slideNavImg} src={imageProductSmall4} alt="" />
            <div className={classes.imgFilter}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider;