import React from 'react'
import './BusinessModule.scss'
import Menu from '../../Components/General/Menu/Menu'
import Footer from '../../Components/General/Footer/Footer'

import img from "../../Assets/Home/img/111_Монтажная область 1 back.png";
import img2 from "../../Assets/Home/img/111_Монтажная область 1 копия.png";
import img3 from "../../Assets/Home/img/111-06.png";
import img4 from "../../Assets/Home/img//111-02.png";
import img5 from "../../Assets/Home/img/111-08.png";
import img6 from "../../Assets/Home/img/111-03.png";
import HomeGeneralSlider from '../../Components/Home/HomeGeneralSlider/HomeGeneralSlider'; 
import { BusinessAdvantagesData, BusinessDiscountData, BusinessFAQData, BusinessInsternetData, BusinessServicesData } from './BusinessLogic/BusinessLogic';
import BusinessInternet from '../../Components/Business/BusinessInternet/BusinessInternet';
import BusinessAdvantages from '../../Components/Business/BusinessAdvantages/BusinessAdvantages';
import BusinessServices from '../../Components/Business/BusinessServices/BusinessServices';
import BusinessDiscount from '../../Components/Business/BusinessDiscount/BusinessDiscount';
import Form from '../../Components/General/Form/Form';
import BusinessFAQ from '../../Components/Business/BusinessFAQ/BusinessFAQ';

const BusinessModule = () => {
  const slides = [
    {
      image: img,
      imgItem: img2,
      title: "Годовые пакеты",
      description:
        "Приобретай годовые пакеты по выгодной цене!",
      textBtn: "Подробнее",
    },
    {
      image: img6,
      imgItem: img5,
      title: "Приведи друга",
      description: "Объединяйся с друзьями и получайте выгоду! Заполни анкету на подключение - и получи 50% кэшбека. Больше друзей, больше денег в твоем личном кабинете!",
      textBtn: "Подробнее",
    },
    {
      image: img4,
      imgItem: img3,
      title: "Ночной безлимит",
      description: "Ночной безлимит всего за 25 сомони с 23.00 до 06.00",
      textBtn: "Подробнее",
    },
    // {
    //   image: img,
    //   title: "Домашний интернет 3",
    //   description: "С умными системами мониторинга 3",
    //   textBtn: "Подробнее",
    // },
  ];
      const menuLink = [
        {id: 1, name: 'Преимущество', link: '#advantages'},
        {id: 2, name: 'Интернет', link: '#internet'},
        {id: 3, name: 'Сервисы', link: '#services'},
        {id: 4, name: 'Заявка', link: '#form'},
    ] 
  return (
    <div className='businessModule_container'>
      <Menu menuLink={menuLink}/>
      <HomeGeneralSlider slides={slides}/>   
      <BusinessAdvantages data={BusinessAdvantagesData}/>
      <BusinessInternet data={BusinessInsternetData}/>
      <BusinessServices data={BusinessServicesData}/>
      <BusinessDiscount data={BusinessDiscountData}/>
      <Form/>
      <BusinessFAQ data={BusinessFAQData}/>
      <Footer/>
    </div>
  )
}

export default BusinessModule
