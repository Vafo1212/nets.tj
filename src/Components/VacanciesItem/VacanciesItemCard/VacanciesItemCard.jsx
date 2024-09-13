import React from 'react'
import './VacanciesItemCard.scss'
import VacanciesItemCardItem from './VacanciesItemCardItem/VacanciesItemCardItem'
import img1 from '../../../Assets/VacanciesItem/IMAGE (2).png'
import img2 from '../../../Assets/VacanciesItem/IMAGE (3).png'
import img3 from '../../../Assets/VacanciesItem/IMAGE (4).png'
import img4 from '../../../Assets/VacanciesItem/IMAGE (5).png'

const VacanciesItemCard = ({requirements}) => {
  return (
    <div className='vacanciesItemCard_block'>
      <div className="vacanciesItemCard_item">
        {
          requirements?.map((e)=> 
          
            <VacanciesItemCardItem icon={e.image} text={e.text} key={e.id}/>
          )
        }
   
      </div>
    </div>
  )
}

export default VacanciesItemCard
