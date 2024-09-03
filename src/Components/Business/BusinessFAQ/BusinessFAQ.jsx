import React from 'react'
import './BusinessFAQ.scss'
import BusinessFAQCard from './BusinessFAQCard/BusinessFAQCard'
const BusinessFAQ = ({data}) => {
  return (
    <div className='businessFAQ_container'>
      <div className="businessFAQ_block">
        {
          data?.map((i)=> 
           <BusinessFAQCard title={i.title} subTitle={i.subTitle} img={i.img} active={i.active}/>
          )
        }
      </div>
    </div>
  )
}

export default BusinessFAQ
