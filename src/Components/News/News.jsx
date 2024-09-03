import React from 'react'
import './News.scss'
import NewsTitle from './NewsTitle/NewsTitle'
import NewsSubscibe from './NewsSubscibe/NewsSubscibe'
import HomeNews from '../Home/HomeNews/HomeNews'
import NewsTopCard from './NewsTopCard/NewsTopCard'
import NewsBottomCard from './NewsBottomCard/NewsBottomCard'
const News = () => {
  return (
    <div className='news_container'>
      <div className="news_block">
        <NewsTitle/>
        <NewsSubscibe/>
        <HomeNews active={true}/>
        <NewsTopCard/>
        <NewsBottomCard/>
      </div>
    </div>
  )
}

export default News
