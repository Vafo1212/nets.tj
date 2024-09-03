import React from 'react'
import './SksAdvantages.scss'
import SksAdvantagesCard from './SksAdvantagesCard/SksAdvantagesCard'
const SksAdvantages = ({data}) => {
  return (
    <div className='sksAdvantages_container' id='advantages'>
       <h1>Преимущества системной интеграции</h1>
       <div className="sksAdvantages_block">
        {
            data?.map((e)=> 
            
                <SksAdvantagesCard number={e.number} title={e.title} subTitle={e.subTitle}/>
            )
        }
       </div>
    </div>
  )
}

export default SksAdvantages
