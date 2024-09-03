import React from "react";
import "./Menu.scss";
import TopMenu from "./TopMenu/TopMenu";
import RefMenu from "./RefMenu/RefMenu";
import MenuMobi from "./MenuMobi/MenuMobi";
const Menu = ({menuLink}) => {
  return (
    <div className="menu_container">
      <div className="menu_block">
        <TopMenu />
        <RefMenu menuLink={menuLink}/>
        <MenuMobi menuLink={menuLink}/>
      </div>
    </div>
  );
};

export default Menu;
