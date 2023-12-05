import React from "react";
import Account from "../UI/Account/Account";
import Basket from './../UI/Basket/Basket';
import classes from './Profile.module.css';


const Profile = () => {
  return (
  <div className={classes.profile}>
    <Basket />
    <Account />
  </div>
  );
};

export default Profile;