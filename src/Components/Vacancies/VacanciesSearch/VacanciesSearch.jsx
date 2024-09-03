import React from 'react'
import './VacanciesSearch.scss'
import img from '../../../Assets/Vacancies/img/metaverse_char_001.png'
const VacanciesSearch = () => { 
  return (
    <div className='vacanciesSearch_container'>
      <div className="vacanciesSearch_block">
        <div className="vacanciesSearch_item">
            <h1>Присоединяйтесь к команде инновационной компании NETS!</h1>
            <div className="vacanciesSearchInput_block">
                <input type="text" />
                <button>Искать</button>
            </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default VacanciesSearch
