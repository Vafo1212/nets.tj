import React, { useState } from 'react'
import Menu from "../../Components/General/Menu/Menu";
import Footer from '../../Components/General/Footer/Footer';
import Whois from '../../Components/Whois/Whois';

import homeAdvantagesImg1 from "../../Assets/Home/img/HomeAdvantages/fluent-emoji-high-contrast_money-bag.png";
import homeAdvantagesImg2 from "../../Assets/Home/img/HomeAdvantages/ph_infinity.png";
import homeAdvantagesImg3 from "../../Assets/Home/img/HomeAdvantages/bx_support.png";
import { getWhois } from './WhoisLogic/WhoisApi';


const WhoisModule = () => {
    const [whoisData, setWhoisData] = useState(null) 

    const homeAdvantagesCardData = [
      {
        id: 1,
        img: homeAdvantagesImg2,
        title: "Бесперебойная работа",
        subTitle:
          "Гарантируем доступность сайтов на уровне 99,99% по SLA. Возможный простой — максимум 5 минут в месяц",
      },
      {
        id: 2,
        img: homeAdvantagesImg3,
        title: "Цена + качество",
        subTitle:
          "Мониторим рынок и следим за тем, чтобы каждый наш клиент получал лучшее за свои деньги",
      },
        {
          id: 3,
          img: homeAdvantagesImg1,
          title: "Поддержка 24/7",
          subTitle:
            "Отвечаем в любое время дня и ночи — без выходных, праздников и перерывов на обед",
        },
    
       
      ];
    const resdata =[
      {id: 1, title: 'Какие данные можно узнать через Whois?', subTitle: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла'},
      {id: 2, title: 'Как узнать, на кого зарегистрирован домен?', subTitle: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла'},
      {id: 3, title: 'Как проверить дату регистрации домена?', subTitle: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла'},
      {id: 4, title: 'Как узнать информацию о хостинге сайта по домену?', subTitle: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла'},
    ]  
      const getWhoisData = (data) => { 
        getWhois(data).then(res=> {
          if(res.data.status){

            setWhoisData(res.data)
          }else{
            setWhoisData(false)
          }
          console.log(res, 'dataaa whoissss')
        }).catch(err => {
          console.log(err, 'errrrr')
        })
      }
  return (
    <div>
      <Menu/>
      <Whois data={homeAdvantagesCardData} whoisData={getWhoisData} whoisResutl={whoisData} resData={resdata}/>
      <Footer/>
    </div>
  )
}

export default WhoisModule
