import React, { useEffect, useState } from 'react'
import './Whois.scss'
import WhoisTitle from './WhoisTitle/WhoisTitle'
import WhoisSearch from './WhoisSearch/WhoisSearch'
import WhoisActiveResult from './WhoisActiveResult/WhoisActiveResult'
import WhoisBusyResult from './WhoisBusyResult/WhoisBusyResult'
import WhatWhois from './WhatWhois/WhatWhois'
import WhoisResponse from './WhoisResponse/WhoisResponse'
import HomeAdvantages from '../Home/HomeAdvantages/HomeAdvantages'
const Whois = ({data, whoisData, whoisResutl, resData}) => { 
  const [status, setStatus] = useState(0)
  const [domainName, setDomainName] = useState('')
 
  useEffect(()=> {
    if(whoisResutl === false){
      setStatus(2)
    } else if (whoisResutl !== null) {
      setStatus(1)
    }
  }, [whoisResutl])
  return (
    <div className='whois_container'>
      <div className="whois_block">
        <WhoisTitle/>
        <WhoisSearch whoisData={whoisData} setDomainName={setDomainName}/>
         {
        status === 2 &&
        <WhoisActiveResult domainName={domainName}/>
         }
         {
         status ===  1 && 
        <WhoisBusyResult domainName={domainName} whoisResutl={whoisResutl}/>
         }
        <WhatWhois/>
        <WhoisResponse data={resData}/>
        <HomeAdvantages homeAdvantagesCardData={data} title={'Почему нас выбирают?'}/> 
      </div>
    </div>
  )
}

export default Whois
