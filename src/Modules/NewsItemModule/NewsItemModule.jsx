import React, { useEffect, useState } from 'react'
import Menu from '../../Components/General/Menu/Menu'
import NewsItem from '../../Components/NewsItem/NewsItem'
import Footer from '../../Components/General/Footer/Footer'
import HomeNews from '../../Components/Home/HomeNews/HomeNews' 
import { newsItemData } from './NewsItemLogic/NewsItemLogic'
import { newsData } from '../NewsModule/NewsLogic/NewsLogic'
import { useParams } from 'react-router-dom'
const NewsItemModule = () => {
  const [newsItemDat, setNewsData] = useState()
  const [newsDat, setData] = useState()
  const param = useParams()
  const getNewsItem = () => {
    newsItemData(param.id).then(res=> {
      setNewsData(res.data)
    })
  }
  const getNewsData = () => {
    newsData().then(res=> {
      setData(res.data)
    })
  }
  useEffect(()=> 
  {
    getNewsData();
    getNewsItem();
  }
    ,[])
  return (
    <div>
      <Menu/>
      <NewsItem newsItemData={newsItemDat}/>
      {/* <HomeNews active={true} newsData={newsDat}/> */}
      <Footer/> 
    </div>
  )
}

export default NewsItemModule
