import React from "react";
import classes from './MainMenu.module.css';

const MainMenu = () => {

  const mainMenu = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const htmlMainMenu = mainMenu.map((itemMainMenu, index) => {
    return <li key={index}><a className={classes.mainmenuItem} href={"#" + itemMainMenu.toLowerCase(itemMainMenu)}>{itemMainMenu}</a></li>
  })

  return (
    <ul className={classes.mainmenu}>
      {htmlMainMenu}
    </ul>
  )

}
export default MainMenu