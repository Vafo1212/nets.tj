import React, { useState } from 'react'
import './WhoisSearch.scss'
import MyButton from '../../../UI/MyButton/MyButton'
const WhoisSearch = ({whoisData, setDomainName}) => {
  const [search, setSearch] = useState('')
  const getwhoisData = () => {
    whoisData(search)
    setDomainName(search)
  }
  return (
    <div className='whoisSearch_block'>
      <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      
      <MyButton name={'Проверить'} width={'159px'} height={'48px'} size={'16px'} data={getwhoisData}/>
    </div>
  )
}

export default WhoisSearch
