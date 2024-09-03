import React from 'react'
import './BusinessAdvantages.scss'
import BusinessAdvantagesCard from './BusinessAdvantagesCard/BusinessAdvantagesCard'
const BusinessAdvantages = ({data}) => {
  return (
    <div className='businessAdvantages_container' id='advantages'>
      <div className="businessAdvantages_block">
        <h3>Преимущества</h3>
        <div className="businessAdvantages_item">
          {
            data?.map((i)=> 
            <BusinessAdvantagesCard img={i.img} text={i.text}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default BusinessAdvantages
