import React from 'react'
import './SksAdvantagesCard.scss'

const SksAdvantagesCard = ({number, title, subTitle}) => {
  return (
    <div className='sksAdvantagesCard_block'>
        <h6>{number}</h6>
      <div className="sksAdvantagesCard_title">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export default SksAdvantagesCard
