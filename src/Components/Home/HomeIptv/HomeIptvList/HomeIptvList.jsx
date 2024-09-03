import React from 'react'
import './HomeIptvList.scss'
import { FaChildren } from "react-icons/fa6";
const HomeIptvList = ({title, subTitle, icon,} ) => {
    
  return (
    <div className='homeIptvList_block' >
      <div className="homeIptvList_item">
        {icon}
      </div>
      <div className="homeIptvList_text">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export default HomeIptvList
