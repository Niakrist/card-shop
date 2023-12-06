import React from "react";
import classes from './Logo.module.css';
import logoImg from './../../img/logo.svg';

const Logo = () => {

  return (
    <div className={classes.logo}>
      <a href="#!"><img src={logoImg} alt="" /></a>
    </div>
  )

}

export default Logo;