import React from 'react'
import './HomeAdvantagesCard.scss'
const HomeAdvantagesCard = ({img, title, subTitle}) => {
  return (
    <div className='homeAdvantagesCard'>
       <img src={img} alt="" />
       <h5>{title}</h5>
       <p>{subTitle}</p>
    </div>
  )
}

export default HomeAdvantagesCard
