import React from 'react'
import './SksProductTitle.scss'
import { HiArrowLongRight } from "react-icons/hi2";

const SksProductTitle = ({setModal}) => {
  return (
    <div className="sksProductTitle_content">
      <h1>Возможности</h1>
    <div className='sksProductTitle_block'>
       <h1>Оставьте свой номер — обсудим ваши задачи и пути решения, рассчитаем стоимость</h1>
       <div className="sksProductTitle_btn" onClick={()=> setModal(true)}>
         <p>Получить консультацию</p>
         <HiArrowLongRight className='sksProductTitleBtn_arrow'/>
       </div>
    </div>
    </div>
  )
}

export default SksProductTitle
