import React from 'react'
import './NewsItem.scss'
import NewsItemTitle from './NewsItemTitle/NewsItemTitle'
import NewsItemDescription from './NewsItemDescription/NewsItemDescription'
import NewsItemBanner from './NewsItemBanner/NewsItemBanner'
import NewsItemTarif from './NewsItemTarif/NewsItemTarif'
const NewsItem = ({newsItemData}) => {
  return (
    <div className='newsItem_container'>
      <div className="newsItem_block">
        <NewsItemTitle date={newsItemData?.created_at} title={newsItemData?.title}/>
        <NewsItemBanner img={newsItemData?.image}/>
        <NewsItemDescription text={newsItemData?.text}/> 
      </div>
    </div>
  )
}

export default NewsItem
