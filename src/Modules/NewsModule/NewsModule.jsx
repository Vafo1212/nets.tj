import React, { useEffect, useState } from 'react'
import Menu from '../../Components/General/Menu/Menu'
import News from '../../Components/News/News'
import Footer from '../../Components/General/Footer/Footer'
import { newsData } from './NewsLogic/NewsLogic'

const NewsModule = () => {
  const [news, setNews] = useState()

  const getNewsData = () => {
    newsData().then(res => {
      setNews(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(()=> 
    getNewsData()
    , [])
  return (
    <div>
      <Menu/>
      <News newsData={news}/>
      <Footer/>
    </div>
  )
}

export default NewsModule
