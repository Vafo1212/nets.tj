import React from 'react'
import './BusinessServicesCard.scss'
const BusinessServicesCard = ({img, title, text}) => {
  return (
    <div className='businessServicesCard_block'>
      <div className="businessServicesCard_item">
        <h3>{title}</h3>
        <p>{text}</p>
        <h4>Подробнее</h4>  
      </div>  
      <img src={img} alt="" />
    </div>
  )
}

export default BusinessServicesCard
