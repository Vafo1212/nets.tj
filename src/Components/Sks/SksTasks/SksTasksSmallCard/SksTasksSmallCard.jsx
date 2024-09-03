import React from 'react'
import './SksTasksSmallCard.scss'
const SksTasksSmallCard = ({title, subTitle}) => {
  return (
    <div className='sksTasksSmallCard_block'>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default SksTasksSmallCard
