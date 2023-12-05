import React from "react";
import classes from './MainMenu.module.css';

const MainMenu = () => {

  const mainMenu = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <ul className={classes.mainmenu}>
      <li><a href="#!" className={classes.mainmenuItem}>{mainMenu[0]}</a></li>
      <li><a href="#!" className={classes.mainmenuItem}>{mainMenu[1]}</a></li>
      <li><a href="#!" className={classes.mainmenuItem}>{mainMenu[2]}</a></li>
      <li><a href="#!" className={classes.mainmenuItem}>{mainMenu[3]}</a></li>
      <li><a href="#!" className={classes.mainmenuItem}>{mainMenu[4]}</a></li>
    </ul>
  )

}
export default MainMenu