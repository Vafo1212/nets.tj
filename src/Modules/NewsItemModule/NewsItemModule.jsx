import React from 'react'
import Menu from '../../Components/General/Menu/Menu'
import NewsItem from '../../Components/NewsItem/NewsItem'
import Footer from '../../Components/General/Footer/Footer'
import HomeNews from '../../Components/Home/HomeNews/HomeNews'
const NewsItemModule = () => {
  return (
    <div>
      <Menu/>
      <NewsItem/>
      <HomeNews active={true}/>
      <Footer/> 
    </div>
  )
}

export default NewsItemModule
