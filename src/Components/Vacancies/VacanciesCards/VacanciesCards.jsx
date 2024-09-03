import React from 'react'
import './VacanciesCards.scss'
import VacanciesCard from './VacanciesCard/VacanciesCard'

const VacanciesCards = () => {
  return (
    <div className='vacanciesCards_container'>
       <div className="vacanciesCards_block">
        <div className="vacanciesCards_title">
            <h1>Актуальные вакансии</h1>
            <p>Мы ценим каждого, кто разделяет наши ценности</p>
        </div>
        <div className="vacanciesCards_item">
           <VacanciesCard/>
           <VacanciesCard/>
           <VacanciesCard/>
        </div>
       </div>
    </div>
  )
}

export default VacanciesCards
