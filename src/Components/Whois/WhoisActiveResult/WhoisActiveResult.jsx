import React from 'react'
import './WhoisActiveResult.scss'
import MyButton from '../../../UI/MyButton/MyButton'

const WhoisActiveResult = ({domainName}) => {
  return (
    <div className='whoisActiveResult_block'>
      <h2>{domainName}.tj</h2>
      <p>Домен свободен</p>
      <div className="whoisActiveResult_item">
        <h1>180 TJS</h1>
        <div className="whoisActiveResult_btn">
        <MyButton name={'Купить'} width={'100%'} height={'48px'} size={'16px'}/>
        </div>
      </div>
    </div>
  )
}

export default WhoisActiveResult
