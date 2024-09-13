import React from 'react'
import './BusinessServices.scss'
import BusinessServicesCard from './BusinessServicesCard/BusinessServicesCard'
const BusinessServices = ({data}) => {
  return (
    <div className='businessServices_container' id='services'>
      <div className="businessServices_block">
          <h1>Сервисы для бизнеса</h1>
          <div className="businessServices_item">
             {
                data?.map((i)=> 
                 <BusinessServicesCard img={i.img} title={i.title} text={i.text} key={i.id} link={i.link} active={i.active} />
                )
             }
          </div>
      </div>
    </div>
  )
}

export default BusinessServices
