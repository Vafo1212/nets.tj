import React from 'react'
import './VacanciesItemText.scss'
import VacanciesItemTextCard from './VacanciesItemTextCard/VacanciesItemTextCard'
const VacanciesItemText = () => {
  return (
    <div className='vacanciesItemText_container'>
      <div className="vacanciesItemText_block">
        <VacanciesItemTextCard/>
        <VacanciesItemTextCard/>
        <VacanciesItemTextCard/>
      </div>
    </div>
  )
}

export default VacanciesItemText
