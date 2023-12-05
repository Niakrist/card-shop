import React from "react";
import classes from './MainMenu.module.css';

const MainMenu = () => {

  const mainMenu = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  
  const menuHtml = mainMenu.map((itemMenu) => {
    return <li><a className={classes.mainmenuItem} href={'#' + itemMenu.toLowerCase()}>{itemMenu}</a></li>
  })

  return (
    <ul className={classes.mainmenu}>
      {menuHtml}
    </ul>
  )
}
export default MainMenu