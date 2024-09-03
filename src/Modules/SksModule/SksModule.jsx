import React, { useState } from 'react'
import './SksModule.scss'
import Sks from '../../Components/Sks/Sks'
import Menu from '../../Components/General/Menu/Menu'
import Footer from '../../Components/General/Footer/Footer'
import HomeGeneralSlider from '../../Components/Home/HomeGeneralSlider/HomeGeneralSlider'
import img from "../../Assets/Home/img/111_Монтажная область 1 back.png";
import img2 from "../../Assets/Home/img/111_Монтажная область 1 копия.png";
import img3 from "../../Assets/Home/img/111-06.png";
import img4 from "../../Assets/Home/img//111-02.png";
import img5 from "../../Assets/Home/img/111-08.png";
import img6 from "../../Assets/Home/img/111-03.png";
import Form from '../../Components/General/Form/Form'
import FormModal from '../../Components/General/FormModal/FormModal'

const SksModule = () => {
  const [showModal, setShowModal] = useState(false)
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
    {id: 2, name: 'Задачи', link: '#task'},
    {id: 3, name: 'Возможности', link: '#possibilities'}, 
] 
  return (
    <div className='sksModule_container'>
      <Menu menuLink={menuLink}/>
      <HomeGeneralSlider slides={slides}  />
      <Sks setModal={setShowModal}/>
      {
      showModal &&
      <FormModal setShowModal={setShowModal} show={true}/>
      }
      <Footer/>
    </div>
  )
}

export default SksModule
