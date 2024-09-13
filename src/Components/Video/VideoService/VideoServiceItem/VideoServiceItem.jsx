import React from 'react'
import './VideoServiceItem.scss'
const VideoServiceItem = ({title, subTitle}) => {
  return (
    <div className='videoServiceItem_block'>
       <h2>{title}</h2>
       <p>{subTitle}</p>
    </div>
  )
}

export default VideoServiceItem
