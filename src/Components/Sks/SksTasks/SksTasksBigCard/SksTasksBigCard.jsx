import React from 'react'
import './SksTasksBigCard.scss'
const SksTasksBigCard = ({title, subTitle}) => {
  return (
    <div className='sksTasksBigCard_block'>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default SksTasksBigCard
