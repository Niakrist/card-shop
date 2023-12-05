import React from "react";
import sasa from './../../../img/girls.jpg'; 
import classes from './Account.module.css';

const Account = () => {

  return (
    <div>
      <img className={classes.accountImg} src={sasa} alt="" />
    </div>
  )
}

export default Account;