import React from "react";
import Logo from './Logo';
import MainMenu from "./MainMenu";
import Profile from './Profile'
import classes from './Headers.module.css';

function Headers() {
  return (
    <div className={classes.headers}>
      
    <Logo />
    <MainMenu />
    <Profile />

    </div>
  )
}

export default Headers;