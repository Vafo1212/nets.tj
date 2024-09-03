import React, { useState, useEffect, useRef } from 'react';
import './TopMenu.scss';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import TelegramIcon from '@mui/icons-material/Telegram'; 
import HelpIcon from '@mui/icons-material/Help';
import { menuRef, menuRefItem } from '../../../../Modules/MenuModel/MenuLogic';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
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
    <div className='topMenu_container'>
      <div className="topMenuRef_block">
        {
          menuRef?.map((e) => 
            <NavLink to={e.path} className='link_menu' key={e.name}>{e.name}</NavLink>
          )
        }
        {
          menuRefItem?.map((e) => 
            <div className="topMenuRef_item" ref={topMenuRef} key={e.name}> {/* связываем реф */}
              <p onClick={() => setActive(!active)} style={{ color: active && '#EA3E2A' , cursor: 'pointer'}}>{e.name}</p>
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
                      <NavLink to={i.path} className='link_menu' key={i.name}>{i.name}</NavLink>
                    )
                  }
                </div>
              }
            </div>
          )
        } 
      </div>
      <div className="topMenuService_block">
        <div className="topMenuService_item">
          <TelegramIcon className='topMenuService_icon'/>
          <p>Душанбе</p>
        </div>
        <div className="topMenuService_item">
          <HelpIcon className='topMenuService_icon'/>
          <p>Поддержка</p>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
