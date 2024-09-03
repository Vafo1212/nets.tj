import React from 'react'
import './HomeApplication.scss'
import HomeApplicationForm from './HomeApplicationForm/HomeApplicationForm'
const HomeApplication = () => {
  return (
    <div className='homeApplication_container' id='homeContact'>
      <div className="homeApplication_block">
        <div className="homeApplication_title">
            <h1>Оставьте заявку на подключение</h1>
            <p>Мы перезвоним вам в течении 24 часов</p>
        </div>
        <div className="homeApplication_item">
            <HomeApplicationForm/>
        </div>
      </div>
    </div>
  )
}

export default HomeApplication
