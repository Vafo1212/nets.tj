import React from 'react'
import './VacanciesItemCard.scss'
import VacanciesItemCardItem from './VacanciesItemCardItem/VacanciesItemCardItem'
import img1 from '../../../Assets/VacanciesItem/IMAGE (2).png'
import img2 from '../../../Assets/VacanciesItem/IMAGE (3).png'
import img3 from '../../../Assets/VacanciesItem/IMAGE (4).png'
import img4 from '../../../Assets/VacanciesItem/IMAGE (5).png'

const VacanciesItemCard = () => {
  return (
    <div className='vacanciesItemCard_block'>
      <div className="vacanciesItemCard_item">
        <VacanciesItemCardItem icon={img1} text={'Душанбе'}/>
        <VacanciesItemCardItem icon={img2} text={'Опыт работы не требуется'}/>
        <VacanciesItemCardItem icon={img3} text={'Полный рабочий день'} subText={'Возможна удаленная работа'}/>
        <VacanciesItemCardItem icon={img4} text={'З/П договорная'}/>
      </div>
    </div>
  )
}

export default VacanciesItemCard
