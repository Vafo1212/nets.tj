import React from "react";
import Menu from "../../Components/General/Menu/Menu";
import { FaChildren } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { MdSports } from "react-icons/md";
import { HiOutlinePuzzle } from "react-icons/hi";
import tajikChannel from '../../Assets/Vacancies/img/tajik_icon.svg'


import HomeGeneralSlider from "../../Components/Home/HomeGeneralSlider/HomeGeneralSlider";
import Tarifs from "../../Components/Home/Tarifs/Tarifs";
import HomeEquipment from "../../Components/Home/HomeEquipment/HomeEquipment";
import HomeIptv from "../../Components/Home/HomeIptv/HomeIptv";
import HomeServices from "../../Components/Home/HomeServices/HomeServices";
import HomeAdvantages from "../../Components/Home/HomeAdvantages/HomeAdvantages";
import HomeApplication from "../../Components/Home/HomeApplication/HomeApplication";
import HomeNews from "../../Components/Home/HomeNews/HomeNews";
import Footer from "../../Components/General/Footer/Footer";


import img from "../../Assets/Home/img/111_Монтажная область 1 back.png";
import img2 from "../../Assets/Home/img/111_Монтажная область 1 копия.png";
import img3 from "../../Assets/Home/img/111-06.png";
import img4 from "../../Assets/Home/img//111-02.png";
import img5 from "../../Assets/Home/img/111-08.png";
import img6 from "../../Assets/Home/img/111-03.png";






import imgInfo1 from "../../Assets/Home/img/Tarifs/Frame 4.png";
import imgInfo2 from "../../Assets/Home/img/Tarifs/mts-universal-card-features → List → Item → icon_card_min.svg.png";
import imgInfo3 from "../../Assets/Home/img/Tarifs/mts-universal-card-features → List → Item → icon_card_tv.svg.png";
import imgInfo4 from "../../Assets/Home/img/Tarifs/Frame 3.png";
import backImg from "../../Assets/Home/img/image16.png";
 
import logo1 from "../../Assets/Home/img/Tarifs/mts-universal-card-benefits (2).png";
import logo2 from "../../Assets/Home/img/Tarifs/mts-universal-card-benefits (1).png";
import logo3 from "../../Assets/Home/img/Tarifs/mts-universal-card-benefits.png";
 

import equipmentImg1 from "../../Assets/Home/img/HomeEquipment/Frame 5.png";  
import equipmentImg2 from "../../Assets/Home/img/HomeEquipment/Frame 6.png";  
import equipmentImg3 from "../../Assets/Home/img/HomeEquipment/Mask group.png";  

import homeservicesImg from "../../Assets/Home/img/HomeServices/icon-park-outline_tv.png";
 

import homeAdvantagesImg1 from "../../Assets/Home/img/HomeAdvantages/fluent-emoji-high-contrast_money-bag.png";
import homeAdvantagesImg2 from "../../Assets/Home/img/HomeAdvantages/ph_infinity.png";
import homeAdvantagesImg3 from "../../Assets/Home/img/HomeAdvantages/bx_support.png";

 
import { MdConnectedTv } from "react-icons/md"; 
// инет и тв

import { PiSecurityCamera } from "react-icons/pi"; 
//безопасный дом  

import { MdWifiLock } from "react-icons/md"; 
//безопасный инет


const HomeModule = () => {
      // годовые пакеты преведи друга ночной безлимит 
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
      const tarifsTitle = [
        { name: "Домашний интернет" },
        { name: "Годовые пакеты" },
        { name: "IP TV" },
        { name: "Дополнительно" },
        { name: "Акции" },
      ];
      const tarifCards = [
        {
          id: 1,
          topImg: backImg,
          topText: "Первые 10 дней — бесплатно",
          name: "NETS 1",
          title:
            "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
          tarifInfo: [
            { img: imgInfo1, text: "Бесплатное подключение" },
            { img: imgInfo2, text: "Безлимитный трафик" },
            { img: imgInfo3, text: "Локальные ресурсы до 100 Мбит/с" },
            { img: imgInfo4, text: "до 1 Мбит/с" },
          ],
          indecatorLine: "70%",
          connect: {
            text: "Возможность подключить дополнительные услуги",
            img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
          },
          prefPrice: "125 TJS/мес",
          currPrice: "115 TJS",
          stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
        },
        {
          id: 2,
          topImg: backImg,
          topText: "Первые 10 дней — бесплатно",
          name: "NETS 1",
          title:
            "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
          tarifInfo: [
            { img: imgInfo1, text: "Бесплатное подключение" },
            { img: imgInfo2, text: "Безлимитный трафик" },
            { img: imgInfo3, text: "Локальные ресурсы до 100 Мбит/с" },
            { img: imgInfo4, text: "до 1 Мбит/с" },
          ],
          indecatorLine: "70%",
          connect: {
            text: "Возможность подключить дополнительные услуги",
            img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
          },
          prefPrice: "125 TJS/мес",
          currPrice: "115 TJS",
          stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
        },
        {
          id: 3,
          topImg: backImg,
          topText: "Первые 10 дней — бесплатно",
          name: "NETS 1",
          title:
            "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
          tarifInfo: [
            { img: imgInfo1, text: "Бесплатное подключение" },
            { img: imgInfo2, text: "Безлимитный трафик" },
            { img: imgInfo3, text: "Локальные ресурсы до 100 Мбит/с" },
            { img: imgInfo4, text: "до 1 Мбит/с" },
          ],
          indecatorLine: "70%",
          connect: {
            text: "Возможность подключить дополнительные услуги",
            img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
          },
          prefPrice: "125 TJS/мес",
          currPrice: "115 TJS",
          stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
        },
        {
          id: 4,
          topImg: backImg,
          topText: "Первые 10 дней — бесплатно",
          name: "NETS 1",
          title:
            "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
          tarifInfo: [
            { img: imgInfo1, text: "Бесплатное подключение" },
            { img: imgInfo2, text: "Безлимитный трафик" },
            { img: imgInfo3, text: "Локальные ресурсы до 100 Мбит/с" },
            { img: imgInfo4, text: "до 1 Мбит/с" },
          ],
          indecatorLine: "70%",
          connect: {
            text: "Возможность подключить дополнительные услуги",
            img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
          },
          prefPrice: "125 TJS/мес",
          currPrice: "115 TJS",
          stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
        },
      ];
      const equipmentCard = [
        { id: 1, name: "Роутеры", img: equipmentImg2},
        { id: 1, name: "IP TV", img: equipmentImg3 },
        { id: 1, name: "Камеры", img: equipmentImg1 },
      ];
      const homeServicesData = [
        {
          id: 1,
          title: "Безопасный интернет",
          subTitle: [
           {item:'Возможностью разделять и контролировать трафик;'},
           {item:'Защита детей или сотрудников от нежелательного контента;'},
           {item:'Мониторинг активности в сети и повышения уровня безопасности;'},

          ] ,
          textBtn: "Подробнее",
          img: <MdWifiLock className="img"/>,
        },
        {
          id: 2,
          title: "Видеонаблюдение от NETS",
          subTitle:[
            {item: 'Камеры можно смотреть в приложении отовсюду, где есть интернет;'},
            {item: 'Записи в безопасности на облачном сервере;'},
            {item: 'Бесплатная установка при покупке камеры для абонентов NETS'}, 
          ],
          textBtn: "Подробнее",
          img: <PiSecurityCamera className="img"/>,
        },
        {
          id: 3,
          title: "Интернет + ТВ",
          subTitle:[
            {id: 1, item: 'Подключаем в удобное для вас время;'},
            {id: 2, item: 'При подключении даём IPTV в аренду или рассрочку;'}, 
            {id: 3, item: 'Более 240 телеканалов, более 50 из которых в HD-качестве;'},
            {id: 4, item: 'IPTV  25 сомони в месяц.'},
          ],
          textBtn: "Подробнее",
          img: <MdConnectedTv className="img"/>,
        },
        
      ];
      const homeAdvantagesCardData = [
        {
          id: 1,
          img: homeAdvantagesImg1,
          title: "Широкий выбор тарифов",
          subTitle:
            "Мы предлагаем разнообразные тарифные планы, соответствующие потребностям различных категорий пользователей, от индивидуальных абонентов до крупных корпоративных клиентов.",
        },
        {
          id: 2,
          img: homeAdvantagesImg2,
          title: "Безлимитный интернет",
          subTitle:
            "Наслаждайтесь свободой использования интернета без ограничений по трафику или скорости. Наша услуга предоставляет вам полный доступ к контенту в сети без дополнительных платежей.",
        },
        {
          id: 3,
          img: homeAdvantagesImg3,
          title: "Качественное обслуживание клиентов",
          subTitle:
            "Наша команда профессионалов всегда готова ответить на ваши вопросы и решить любые технические проблемы. Мы ценим каждого клиента и стремимся обеспечить их высоким сервисом.",
        },
      ];
      const menuLink = [
        {id: 1, name: 'Тарифы', link: '#tarifs'},
        {id: 2, name: 'Акции', link: '#promotion'},
        {id: 3, name: 'Услуги', link: '#services'},
        {id: 4, name: 'Новости', link: '#news'},
    ] 
    const IptvCannel = [
      {id: 1, title: 'Таджикские', subTitle: 'Документальные фильмы, сериалы и новости.', icon: <img src={tajikChannel} alt="" className='homeIptvListitem_img'/> },
      {id: 2, title: 'Спортивные', subTitle: 'Прямые эфиры спортивных событий, обзоры матчей и аналитические передачи.', icon: <MdSports className='homeIptvListitem_img'/>},
      {id: 3, title: 'Кино', subTitle: 'Отечественные и зарубежные фильмы разных жанров', icon: <MdLocalMovies className='homeIptvListitem_img'/>},
      {id: 4, title: 'Детские', subTitle: 'Программы для детей всех возрастов', icon: <FaChildren className='homeIptvListitem_img'/>},
      {id: 5, title: 'Развлекательные', subTitle: 'Контент для отдыха и досуга', icon: <HiOutlinePuzzle className='homeIptvListitem_img'/>},
    ]
  return (
    <div>
      <Menu menuLink={menuLink} />
      <HomeGeneralSlider slides={slides} />
      <Tarifs tarifsTitle={tarifsTitle} tarifCards={tarifCards} />
      <HomeEquipment equipmentCard={equipmentCard} />
      <HomeIptv IptvCannel={IptvCannel}/>
      <HomeServices homeServicesData={homeServicesData} />
      <HomeAdvantages homeAdvantagesCardData={homeAdvantagesCardData} title={'Преимущества'}/>
      <HomeApplication />
      <HomeNews />
      <Footer />
    </div>
  );
};

export default HomeModule;
