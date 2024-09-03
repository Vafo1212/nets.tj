import React from 'react'
import VacanciesSearch from '../../Components/Vacancies/VacanciesSearch/VacanciesSearch'
import Menu from "../../Components/General/Menu/Menu";
import Footer from '../../Components/General/Footer/Footer';
import VacanciesCards from '../../Components/Vacancies/VacanciesCards/VacanciesCards';
import VacanciesValues from '../../Components/Vacancies/VacanciesValues/VacanciesValues';
import VacanciesBotomSlider from '../../Components/Vacancies/VacanciesBotomSlider/VacanciesBotomSlider';
import VacanciesResume from '../../Components/Vacancies/VacanciesResume/VacanciesResume';


const VacanciesModule = () => {
  return (
    <div className='vacanciesModule_container'>
      <Menu />
      <VacanciesSearch/>
      <VacanciesCards/>
      <VacanciesValues/>
      {/* <VacanciesBotomSlider/> */}
      <VacanciesResume/>
      <Footer/>
    </div>
  )
}

export default VacanciesModule
