import React from 'react'
import './BusinessAdvantagesCard.scss'
const BusinessAdvantagesCard = ({img, text}) => {
  return (
    <div className='businessAdvantagesCard_block'>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default BusinessAdvantagesCard
