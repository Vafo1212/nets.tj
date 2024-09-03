import React from "react";
import './HostingModule.scss'
import Menu from "../../Components/General/Menu/Menu";
import HomeGeneralSlider from "../../Components/Home/HomeGeneralSlider/HomeGeneralSlider";

import img from "../../Assets/Home/img/111_Монтажная область 1 back.png";
import img2 from "../../Assets/Home/img/111_Монтажная область 1 копия.png";
import img3 from "../../Assets/Home/img/111-06.png";
import img4 from "../../Assets/Home/img//111-02.png";
import img5 from "../../Assets/Home/img/111-08.png";
import img6 from "../../Assets/Home/img/111-03.png";
import Footer from "../../Components/General/Footer/Footer";

import backImg from "../../Assets/Home/img/image16.png";
import VpsSlider from "../../Components/Hosting/VpsSlider/VpsSlider";

import homeAdvantagesImg1 from "../../Assets/Home/img/HomeAdvantages/fluent-emoji-high-contrast_money-bag.png";
import homeAdvantagesImg2 from "../../Assets/Home/img/HomeAdvantages/ph_infinity.png";
import homeAdvantagesImg3 from "../../Assets/Home/img/HomeAdvantages/bx_support.png";
import HomeAdvantages from "../../Components/Home/HomeAdvantages/HomeAdvantages";
import WhoisResponse from "../../Components/Whois/WhoisResponse/WhoisResponse";
import TarifHosting from "../../Components/Hosting/TarifHosting/TarifHosting";

const HostingModule = () => {
  const slides = [
    {
      image: img,
      imgItem: img2,
      title: "Годовые пакеты",
      description: "Приобретай годовые пакеты по выгодной цене!",
      textBtn: "Подробнее",
    },
    {
      image: img6,
      imgItem: img5,
      title: "Приведи друга",
      description:
        "Объединяйся с друзьями и получайте выгоду! Заполни анкету на подключение - и получи 50% кэшбека. Больше друзей, больше денег в твоем личном кабинете!",
      textBtn: "Подробнее",
    },
    {
      image: img4,
      imgItem: img3,
      title: "Ночной безлимит",
      description: "Ночной безлимит всего за 25 сомони с 23.00 до 06.00",
      textBtn: "Подробнее",
    },
  ];
  const vpsCardsData = [
    {
      id: 1,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
        {
          id: 4,
          key: "Интернет",
          name: "200 Мбит/с",
        },
        {
          id: 5,
          key: "IP-адрес",
          name: "Бесплатно",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 2,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
        {
          id: 4,
          key: "Интернет",
          name: "200 Мбит/с",
        },
        {
          id: 5,
          key: "IP-адрес",
          name: "Бесплатно",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 3,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
        {
          id: 4,
          key: "Интернет",
          name: "200 Мбит/с",
        },
        {
          id: 5,
          key: "IP-адрес",
          name: "Бесплатно",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 4,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
        {
          id: 4,
          key: "Интернет",
          name: "200 Мбит/с",
        },
        {
          id: 5,
          key: "IP-адрес",
          name: "Бесплатно",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
  ];
  const bitrixCardsData = [
    {
      id: 1,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 2,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 3,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
    {
      id: 4,
      topImg: backImg,
      topText: "Первые 10 дней — бесплатно",
      name: "Cloud 15",
      title:
        "Описание тарифа, для чего подходит. Например небольшой сайт одностраничка и тд",
      param: [
        {
          id: 1,
          key: "CPU",
          name: "1 x 3.3 ГГц",
        },
        {
          id: 2,
          key: "RAM",
          name: "1 ГБ RAM",
        },
        {
          id: 3,
          key: "NVME",
          name: "15 ГБ",
        },
      ],
      prefPrice: "99 TJS/мес",
    },
  ];
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
      img: homeAdvantagesImg1,
      title: "Цена + качество",
      subTitle:
        "Мониторим рынок и следим за тем, чтобы каждый наш клиент получал лучшее за свои деньги",
    },
    {
      id: 3,
      img: homeAdvantagesImg3,
      title: "Поддержка 24/7",
      subTitle:
        "Отвечаем в любое время дня и ночи — без выходных, праздников и перерывов на обед",
    },
  ];
  const resdata = [
    {
      id: 1,
      title: "Какие способы оплаты доступны?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 2,
      title: "Как я могу проверить баланс моего счета?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 3,
      title: "Как можно продлить или приостановить услуги?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 4,
      title: "Предусмотрены ли у вас скидки или акции для новых клиентов?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 5,
      title: "Какие документы нужны для подключения интернета?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 6,
      title: "Как я могу настроить или изменить пароль для моего Wi-Fi роутера?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 7,
      title: "Как я могу узнать скорость моего интернет-соединения?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
  ];
  const tarifHosting = [
    {tarifName: 'Мини', size: 20 ,price: 25, },
    {tarifName: 'Стартер', size: 50 ,price: 60, },
    {tarifName: 'Базик', size: 100 ,price: 115, },
    {tarifName: 'Стандарт', size: 500 ,price: 300, },
    {tarifName: 'Профессионал', size: 1000 ,price: 650, },
    {tarifName: 'Адвансед', size: 1500 ,price: 900, },
    {tarifName: 'Премиум', size: 2000 ,price: 1300, },
    {tarifName: 'Эксклюзив', size: 2500 ,price: 1625, },
    {tarifName: 'Ультра', size: 3000 ,price: 1950, },
    {tarifName: 'Максимум', size: 3500 ,price: 2275, },
    {tarifName: 'Интенсив', size: 4000 ,price: 2600, },
    {tarifName: 'Адвансед Плюс', size: 4500 ,price: 2925, },
    {tarifName: 'Элит', size: 5000 ,price: 3500, },
  ]
  return (
    <div>
      <Menu />
      <HomeGeneralSlider slides={slides} />
      <VpsSlider
        vpsData={vpsCardsData}
        title={"Тарифы  VPS и VDS"}
        subTitle={
          "VPS - мощная и гибкая виртуальная серверная среда, предоставляющая полный контроль, высокую производительность и надежность"
        }
        color={"#EA3E2A"}
      />
      <VpsSlider
        vpsData={bitrixCardsData}
        title={"Тарифы  BITRIX"}
        subTitle={
          "Оптимизированная серверная среда, специально разработанная для запуска и хостинга веб-проектов на платформе Битрикс24."
        }
        color={"#21BBEF"}
        colorButton={true}
      />
        <TarifHosting data={tarifHosting}/>
      <HomeAdvantages
        homeAdvantagesCardData={homeAdvantagesCardData}
        title={"Почему нас выбирают?"}
      />
      <div className="hostingResponse_container">
        <div className="hostingResponse_block">
          <WhoisResponse data={resdata}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostingModule;
