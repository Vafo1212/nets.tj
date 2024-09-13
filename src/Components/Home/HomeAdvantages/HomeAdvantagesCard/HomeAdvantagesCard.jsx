import React from 'react'
import './HomeAdvantagesCard.scss'
const HomeAdvantagesCard = ({img, title, subTitle, active, activeCard}) => {
  return (
    <div className='homeAdvantagesCard' style={{display: active && 'flex' , flexDirection: 'column', alignItems: 'center' }}>
      {
        activeCard ? img : 
       <img src={img} alt="" style={{width: active && 'auto', height: active && 'auto', marginLeft: active && '0'}}/>
      }
       
       <h5>{title}</h5>
       <p style={{textAlign: active && 'center', marginTop: active && '0'}}>{subTitle}</p>
    </div>
  )
}

export default HomeAdvantagesCard
