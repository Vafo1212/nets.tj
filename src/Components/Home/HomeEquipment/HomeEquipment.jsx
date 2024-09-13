import React from 'react'
import './HomeEquipment.scss'
import arrowImg from '../../../Assets/Home/img/HomeEquipment/SVG.svg'
import HomeEquipmentCards from './HomeEquipmentCards/HomeEquipmentCards' 
import HomePromotion from './HomePromotion/HomePromotion'
import { NavLink } from 'react-router-dom'
const HomeEquipment = ({equipmentCard}) => {
  return (
    <div className='homeEquipment_container' id='promotion'>
      <div className="homeEquipment_block">
        <div className="homeEquipment_item">
            <div className="homeEquipment_title">
                <h1>Оборудование</h1> 
                <img src={arrowImg} alt="" />
            </div>
            <div className="homeEquipment_card">
                {
                 equipmentCard?.map((e)=> 
                 <a href={e.link} className='link'>

                   <HomeEquipmentCards img={e.img} name={e.name} key={e.id}/> 
                 </a>
                )
                }
            </div>
        </div>
        <HomePromotion />
      </div>
    </div>
  )
}

export default HomeEquipment
