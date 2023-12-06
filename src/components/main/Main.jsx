import React from "react";
import Slider from "./Slider";
import classes from './Main.module.css';
import Content from "./Content";


const Main = () => {
  return (
    <div className={classes.main}>
      <Slider />
      <Content />

    </div>
  )
}

export default Main;