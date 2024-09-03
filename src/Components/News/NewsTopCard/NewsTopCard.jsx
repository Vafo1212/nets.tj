import React from 'react'
import './NewsTopCard.scss'
import NewsTopCardItem from './NewsTopCardItem/NewsTopCardItem'

const NewsTopCard = () => {
  return (
    <div className='newsTopCard_block'>
      <NewsTopCardItem/>
      <NewsTopCardItem/>
      <NewsTopCardItem/>
    </div>
  )
}

export default NewsTopCard
