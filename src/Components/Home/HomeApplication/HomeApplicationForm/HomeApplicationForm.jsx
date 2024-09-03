import React from 'react'
import './HomeApplicationForm.scss'
const HomeApplicationForm = () => {
  return (
    <div className='homeApplicationForm_block'>
      <div className="homeApplicationForm_input">
        <p>Имя</p>
        <input type="text" placeholder='Ваше имя'/>
      </div>
      <div className="homeApplicationForm_input">
         <p>Номер телефон</p>
         <div className="homeApplicationFormInput_item">
            <p>+992</p> 
            <input type="number" />
         </div>
      </div>
      <button>Отправить</button>
    </div>
  )
}

export default HomeApplicationForm
