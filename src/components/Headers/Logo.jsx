import React from "react";
import classes from './Logo.module.css';

const Logo = () => {
  let logo = 'Sneakers';
  logo = logo.toLowerCase();

  return (
    <div>
      <a className={classes.logo} href="#!">{logo}</a>
    </div>
  )

}

export default Logo;