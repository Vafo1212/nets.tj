import React from 'react'
import './VacanciesItemText.scss'
import VacanciesItemTextCard from './VacanciesItemTextCard/VacanciesItemTextCard'
const VacanciesItemText = ({content}) => {
  return (
    <div className='vacanciesItemText_container'>
      <div className="vacanciesItemText_block">
        {
          content?.map((e, index)=> 
          
            <VacanciesItemTextCard index={index} name={e.name} text={e.text} key={e.id} /> 
          )
        }
      </div>
    </div>
  )
}

export default VacanciesItemText
