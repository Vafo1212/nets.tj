import React from 'react'
import './BusinessFAQCard.scss'
const BusinessFAQCard = ({title, subTitle, img, active}) => {
  return (
    <div className='businessFAQCard_block' style={{borderLeft: active && 'none', borderRight: active && 'none', borderBottom: active && 'none', borderTop: active && 'none'}}>
      <h3>{title}</h3>
      <div className="businessFAQCard_item">
         <img src={img} alt="" />
         <h4>{subTitle}</h4> 
      </div>
    </div>
  )
}

export default BusinessFAQCard
