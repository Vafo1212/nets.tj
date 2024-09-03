import React, { useEffect, useRef, useState } from "react";
import "./MenuMobi.scss";
import logo from "../../../../Assets/General/Img/logo_nets.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { menuRefItem } from "../../../../Modules/MenuModel/MenuLogic";
const MenuMobi = ({menuLink}) => { 
  const [active, setActive] = useState(false);
  const topMenuRef = useRef(null); 

  useEffect(() => { 
    const handleClickOutside = (event) => {
      if (topMenuRef.current && !topMenuRef.current.contains(event.target)) {
        setActive(false);  
      }
    }; 
    document.addEventListener('click', handleClickOutside); 
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="header__subtitle">
      <div className="header__container">
        <div className="header__logo">
          <p to="/">
            <img src={logo} alt="" />
          </p>
        </div>
        <div className="menu__block">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          {/* <ul className="menu__box">
            <li>
              <p className="menuText_mobi">Для дома</p>
              <p className="menuText_mobi">Бизнесу</p>
              <p className="menuText_mobi">Госзаказчикам</p>
              <div className="topMenuRef_item">
                <p className="menuText_mobi">Ещё</p>
                <ArrowDropDownIcon className="topMenuRef_icon" />
              </div>
            </li>
          </ul> */}
          <div className="menu__box">
            <div className="menu__box__top">
              <NavLink to={'/'} className={'menuMobi_ref'}>Для дома</NavLink>
              <NavLink to={'/business'} className={'menuMobi_ref'}>Бизнесу</NavLink>
              <NavLink to={'/system'} className={'menuMobi_ref'}>СКС</NavLink> 
              {
          menuRefItem?.map((e) => 
            <div className="topMenuRef_item" ref={topMenuRef} key={e.name}>  
              <p onClick={() => setActive(!active)} style={{ color: active && '#EA3E2A' }} >{e.name}</p>
              {
                active ?
                <IoMdArrowDropup className='topMenuRef_icon' style={{ color: active && '#EA3E2A' }}/> :
                <IoMdArrowDropdown className='topMenuRef_icon'/>
              }
              {
                active &&
                <div className="topMenuRef_group">
                  {
                    e.menuItemRef?.map((i) => 
                      <NavLink to={i.path} className='menuMobi_ref' key={i.name}>{i.name}</NavLink>
                    )
                  }
                </div>
              }
            </div>
          )
        } 
            </div>
            <div className="menu__box__bottom">
              <h1>Разделы</h1>
              {
               menuLink?.map((e)=> 
              
              <div className="menu__box__bottom_item">
              <FaArrowRightLong className="menu__box__bottom_item_icon"/>
              <a href={e.link}>{e.name}</a> 
              </div>
              )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobi;
