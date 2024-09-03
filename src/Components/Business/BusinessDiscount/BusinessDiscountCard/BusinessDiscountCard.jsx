import React from 'react'
import './BusinessDiscountCard.scss'

const BusinessDiscountCard = ({img, title}) => {
  return (
    <div className='businessDiscountCard_block'>
      <div className="businessDiscountCard_item">
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default BusinessDiscountCard
