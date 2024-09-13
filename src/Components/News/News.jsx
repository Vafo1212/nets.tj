import React from 'react'
import './News.scss'
import NewsTitle from './NewsTitle/NewsTitle'
import NewsSubscibe from './NewsSubscibe/NewsSubscibe'
import HomeNews from '../Home/HomeNews/HomeNews'
import NewsTopCard from './NewsTopCard/NewsTopCard'
import NewsBottomCard from './NewsBottomCard/NewsBottomCard'
const News = ({newsData}) => {
  return (
    <div className='news_container'>
      <div className="news_block">
        <NewsTitle/>
        <NewsSubscibe/>
        <HomeNews active={true} newsData={newsData}/>
        <NewsTopCard newsData={newsData}/>
        <NewsBottomCard newsData={newsData}/>
      </div>
    </div>
  )
}

export default News
