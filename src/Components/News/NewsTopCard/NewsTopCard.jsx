import React from 'react'
import './NewsTopCard.scss'
import NewsTopCardItem from './NewsTopCardItem/NewsTopCardItem'

const NewsTopCard = ({newsData}) => {
  return (
    <div className='newsTopCard_block'>
      {
       newsData?.slice(0,2).map((e)=> 
        <NewsTopCardItem img={e.image} data={e.created_at} read_time={e.read_time} title={e.title} id={e.id}/> 
      
      )
      }
    </div>
  )
}

export default NewsTopCard
