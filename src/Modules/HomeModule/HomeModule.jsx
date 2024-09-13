import React, { useEffect, useState } from "react";
import Menu from "../../Components/General/Menu/Menu";
import { FaChildren } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { MdSports } from "react-icons/md";
import { HiOutlinePuzzle } from "react-icons/hi";
import tajikChannel from "../../Assets/Vacancies/img/tajik_icon.svg";

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
import imgInfo5 from "../../Assets/Home/img/Tarifs/Frame 7.png";
import imgInfo6 from "../../Assets/Home/img/Tarifs/mdi_gift-outline.png";
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
// безопасный дом

import { MdWifiLock } from "react-icons/md";
import { homeSlider, homeTerif } from "./HomeLogic/HomeLogic";
import { newsData } from "../NewsModule/NewsLogic/NewsLogic";
//безопасный инет

import tarifAdditionallyImg1 from '../../Assets/Home/img/Tarifs/image (11).png'
import tarifAdditionallyImg2 from '../../Assets/Home/img/Tarifs/image (12).png'


import tarifIptvImg from '../../Assets/Home/img/Tarifs/mts-image → Picture → mts_novogodnij_848_200.avif (3).png'


const HomeModule = () => {
  // годовые пакеты преведи друга ночной безлимит
  // const [slides, setSlider] = useState([]);
  const [tarifCards, setTarifCards] = useState([]);
  // const slides = [
  //     {
  //       image: img,
  //       image_item: img2,
  //       title: "Годовые пакеты",
  //       description:
  //         "Приобретай годовые пакеты по выгодной цене!",
  //       text_btn: "Подробнее",
  //     },
  //     {
  //       image: img6,
  //       image_item: img5,
  //       title: "Приведи друга",
  //       description: "Объединяйся с друзьями и получайте выгоду! Заполни анкету на подключение - и получи 50% кэшбека. Больше друзей, больше денег в твоем личном кабинете!",
  //       text_btn: "Подробнее",
  //     },
  //     {
  //       image: img4,
  //       image_item: img3,
  //       title: "Ночной безлимит",
  //       description: "Ночной безлимит всего за 25 сомони с 23.00 до 06.00",
  //       text_btn: "Подробнее",
  //     },
  //     // {
  //     //   image: img,
  //     //   title: "Домашний интернет 3",
  //     //   description: "С умными системами мониторинга 3",
  //     //   textBtn: "Подробнее",
  //     // },
  //   ];
  const tarifsTitle = [
    { name: "Домашний интернет" },
    { name: "Годовые пакеты" },
    { name: "IP TV" },
    { name: "Дополнительно" },
    { name: "Акции" },
  ];
  // img, title, subTitle, data, price
  const tarifIptvData =  [
    {id: 1, img: tarifIptvImg, title: 'Базовый', subTitle: 'Пакет ТВ каналов в HD качестве', data: '150 ТВ каналов', price: '25  TJS в мес'},
    {id: 2, img: tarifIptvImg, title: 'Годовой', subTitle: 'Пакет ТВ каналов в HD качестве ', data: '150 ТВ каналов', price: '225  TJS в год'},
  ]
  const tarifAdditionallyData =  [
    {id: 1, img: tarifAdditionallyImg1, title: 'Ночной безлимит', subTitle: 'Про ночной безлимит', data: 'Про ночной безлимит', price: '25 TJS', longText: 'с 23:00 до 06:00'},
    {id: 2, img: tarifAdditionallyImg1, title: 'Ночной безлимит на месяц', subTitle: 'Про ночной безлимит', data: 'Скорость до 234 MBit', price: '254  TJS в мес'},
    {id: 3, img: tarifAdditionallyImg2, title: 'Flash', subTitle: 'Про Flash', data: 'Скорость до 50 MB', price: '25 TJS в мес', },
    {id: 4, img: tarifAdditionallyImg2, title: 'Flash на месяц', subTitle: 'Про Flash', data: 'Скорость до 234 MB', price: '254  TJS в мес'},
  ]


  const tarifYearCards = [
    {
      id: 1,
      top_img: backImg,
      top_text: "Первые 10 дней — бесплатно",
      name: "NETS 2 (6 месяцев)",
      title:
        "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
        tarif_infos: [
        { image: imgInfo1, text: "Бесплатное подключение" },
        { image: imgInfo5, text: "Рассрочка от Алиф" },
        { image: imgInfo6, text: "Роутер и IP TV в подарок" },
        { image: imgInfo4, text: "до 5 Мбит/с" },
      ],
      indicator_line: "70%",
      connect: {
        text: "Возможность подключить дополнительные услуги",
        img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
      },
      pref_price: "640 TJS/6 мес",
      // curr_price: "115 TJS",
      stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
      active: true,
    },
    {
      id: 2,
      top_img: backImg,
      top_text: "Первые 10 дней — бесплатно",
      name: "NETS 3 (6 месяцев)",
      title:
        "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
        tarif_infos: [
        { image: imgInfo1, text: "Бесплатное подключение" },
        { image: imgInfo5, text: "Рассрочка от Алиф" },
        { image: imgInfo6, text: "Роутер и IP TV в подарок" },
        { image: imgInfo4, text: "до 10 Мбит/с" },
      ],
      indicator_line: "70%",
      connect: {
        text: "Возможность подключить дополнительные услуги",
        img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
      },
      pref_price: "1240 TJS/6 мес",
      // curr_price: "115 TJS",
      stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
      active: true,
    },
    {
      id: 3,
      top_img: backImg,
      top_text: "Первые 10 дней — бесплатно",
      name: "NETS 4 (6 месяцев)",
      title:
        "Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.",
        tarif_infos: [
        { image: imgInfo1, text: "Бесплатное подключение" },
        { image: imgInfo5, text: "Рассрочка от Алиф" },
        { image: imgInfo6, text: "Роутер и IP TV в подарок" },
        { image: imgInfo4, text: "до 20 Мбит/с" },
      ],
      indicator_line: "70%",
      connect: {
        text: "Возможность подключить дополнительные услуги",
        img: [{ img: logo1 }, { img: logo2 }, { img: logo3 }],
      },
      pref_price: "1590 TJS/6 мес",
      // curr_price: "115 TJS",
      stock: "Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес",
      active: true,
    },
    
 
  ];
  
  const equipmentCard = [
    { id: 1, name: "Роутеры", img: equipmentImg2, link: "/router#router" },
    { id: 1, name: "IP TV", img: equipmentImg3, link: "/router#Iptv"},
    { id: 1, name: "Камеры", img: equipmentImg1, link: "/router#camera"},
  ];
  const homeServicesData = [
    {
      id: 1,
      title: "Безопасный интернет",
      subTitle: [
        { item: "Возможностью разделять и контролировать трафик;" },
        { item: "Защита детей или сотрудников от нежелательного контента;" },
        {
          item: "Мониторинг активности в сети и повышения уровня безопасности;",
        },
      ],
      textBtn: "Подробнее",
      img: <MdWifiLock className="img" />,
    },
    {
      id: 2,
      title: "Видеонаблюдение от NETS",
      subTitle: [
        {
          item: "Камеры можно смотреть в приложении отовсюду, где есть интернет;",
        },
        { item: "Записи в безопасности на облачном сервере;" },
        { item: "Бесплатная установка при покупке камеры для абонентов NETS" },
      ],
      textBtn: "Подробнее",
      img: <PiSecurityCamera className="img" />,
    },
    {
      id: 3,
      title: "Интернет + ТВ",
      subTitle: [
        { id: 1, item: "Подключаем в удобное для вас время;" },
        { id: 2, item: "При подключении даём IPTV в аренду или рассрочку;" },
        {
          id: 3,
          item: "Более 240 телеканалов, более 50 из которых в HD-качестве;",
        },
        { id: 4, item: "IPTV  25 сомони в месяц." },
      ],
      textBtn: "Подробнее",
      img: <MdConnectedTv className="img" />,
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
    { id: 1, name: "Тарифы", link: "#tarifs" },
    { id: 2, name: "Акции", link: "#promotion" },
    { id: 3, name: "Услуги", link: "#services" },
    { id: 4, name: "Новости", link: "#news" },
  ];
  const IptvCannel = [
    {
      id: 1,
      title: "Таджикские",
      subTitle: "Документальные фильмы, сериалы и новости.",
      icon: <img src={tajikChannel} alt="" className="homeIptvListitem_img" />,
    },
    {
      id: 2,
      title: "Спортивные",
      subTitle:
        "Прямые эфиры спортивных событий, обзоры матчей и аналитические передачи.",
      icon: <MdSports className="homeIptvListitem_img" />,
    },
    {
      id: 3,
      title: "Кино",
      subTitle: "Отечественные и зарубежные фильмы разных жанров",
      icon: <MdLocalMovies className="homeIptvListitem_img" />,
    },
    {
      id: 4,
      title: "Детские",
      subTitle: "Программы для детей всех возрастов",
      icon: <FaChildren className="homeIptvListitem_img" />,
    },
    {
      id: 5,
      title: "Развлекательные",
      subTitle: "Контент для отдыха и досуга",
      icon: <HiOutlinePuzzle className="homeIptvListitem_img" />,
    },
  ];
  const getHomeTarif = () => {
    homeTerif()
      .then((res) => {
        setTarifCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [news, setNews] = useState();

  const getNewsData = () => {
    newsData()
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getHomeTarif();
    getNewsData();
  }, []);
  return (
    <div>
      <Menu menuLink={menuLink} />
      <HomeGeneralSlider />
      <Tarifs tarifsTitle={tarifsTitle} tarifCards={tarifCards} tarifIptvData={tarifIptvData} tarifAdditionallyData={tarifAdditionallyData} tarifYearCards={tarifYearCards}/>
      <HomeEquipment equipmentCard={equipmentCard} />
      <HomeIptv IptvCannel={IptvCannel} />
      <HomeServices homeServicesData={homeServicesData} />
      <HomeAdvantages
        homeAdvantagesCardData={homeAdvantagesCardData}
        title={"Преимущества"}
      />
      <HomeApplication />
      <HomeNews newsData={news} />
      <Footer />
    </div>
  );
};

export default HomeModule;
