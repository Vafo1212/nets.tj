import React from 'react'
import './BusinessDiscount.scss'
import BusinessDiscountCard from './BusinessDiscountCard/BusinessDiscountCard'
const BusinessDiscount = ({data}) => {
  return (
    <div className='businessDiscount_container'>
      <div className="businessDiscount_block">
        <div className="businessDiscount_item">
            <h3>Популярные запросы</h3>
            <p>Всё самое полезное для бизнеса — в одном месте</p>
        </div>
        <div className="businessDiscount_collection">
           {
            data?.map((i)=> 
            <BusinessDiscountCard img={i.img} title={i.title}/>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default BusinessDiscount
