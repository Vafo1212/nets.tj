import React from 'react'
import './NewsItem.scss'
import NewsItemTitle from './NewsItemTitle/NewsItemTitle'
import NewsItemDescription from './NewsItemDescription/NewsItemDescription'
import NewsItemBanner from './NewsItemBanner/NewsItemBanner'
import NewsItemTarif from './NewsItemTarif/NewsItemTarif'
const NewsItem = () => {
  return (
    <div className='newsItem_container'>
      <div className="newsItem_block">
        <NewsItemTitle/>
        <NewsItemBanner/>
        <NewsItemDescription/>
        <NewsItemTarif/>
      </div>
    </div>
  )
}

export default NewsItem
