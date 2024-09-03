import React from 'react'
import './NewsSubscibe.scss'
import MyButton from '../../../UI/MyButton/MyButton'
const NewsSubscibe = () => {
  return (
    <div className='newsSubscibe_block'>
      <input type="text" />
      <MyButton name={'Подписаться'} width={'200px'} height={'48px'} size={'16px'}/>
    </div>
  )
}

export default NewsSubscibe
