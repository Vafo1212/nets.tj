import React, { useState } from "react";
import Menu from "../../Components/General/Menu/Menu";
import Footer from "../../Components/General/Footer/Footer";
import Whois from "../../Components/Whois/Whois";

import homeAdvantagesImg1 from "../../Assets/Home/img/HomeAdvantages/fluent-emoji-high-contrast_money-bag.png";
import homeAdvantagesImg2 from "../../Assets/Home/img/HomeAdvantages/ph_infinity.png";
import homeAdvantagesImg3 from "../../Assets/Home/img/HomeAdvantages/bx_support.png";
import { getWhois } from "./WhoisLogic/WhoisApi";

const WhoisModule = () => {
  const [whoisData, setWhoisData] = useState(null);

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
  const resdata = [
    {
      id: 1,
      title: "Какие данные можно узнать через Whois?",
      subTitle: 
      `Кто владеет доменом – это помогает определить, какой провайдер или лицо зарегистрировало домен. \n\n\n
       Регистратор домена – сервис, через который был зарегистрирован домен, может указывать на тип хостинга или репутацию хостинг-провайдера. IP-адрес сервера – с помощью этого можно определить, на каком сервере или в какой стране размещается сайт. \n\n\n
       Время регистрации и истечения домена – эта информация может быть полезна для оценки стабильности ресурса и хостинг-провайдера.\n\n\n
       DNS-серверы – они указывают на сервисы, которые управляют доменом, что может быть частью услуг хостинга.\n\n\n
       Публичные или приватные данные – в зависимости от типа хостинга (например, общий хостинг или выделенный сервер) может отображаться, насколько защищена информация владельца.\n\n\n
       
       `,
    },
    {
      id: 2,
      title: "Как узнать, на кого зарегистрирован домен?",
      subTitle:
        "Сервис Whois, который покажет имя владельца, регистратора домена, контактные данные и другую информацию, если она не скрыта владельцем с помощью приватной регистрации.",
    },
    {
      id: 3,
      title: "Как проверить дату регистрации домена?",
      subTitle:
        "Введя интересующий домен, вы получите информацию, включая дату регистрации, а также дату истечения его срока действия.",
    },
    {
      id: 4,
      title: "Как узнать информацию о хостинге сайта по домену?",
      subTitle:
        `
        Whois-сервисы могут предоставить данные о DNS-серверах, что может указывать на хостинг-провайдера. \n\n
        Сервисы проверки хостинга например введите домен, и сервис покажет хостинг-провайдера, на котором размещен сайт.\n\n
        Проверка IP-адреса: Узнав IP-адрес домена через команду ping или с помощью инструментов, таких как DNS Lookup, можно определить провайдера, на котором размещен сервер, с помощью сервисов типа Whois IP.
        
        
        
        `,
    },
  ];
  const getWhoisData = (data) => {
    getWhois(data)
      .then((res) => {
        if (res.data.status) {
          setWhoisData(res.data);
        } else {
          setWhoisData(false);
        }
        console.log(res, "dataaa whoissss");
      })
      .catch((err) => {
        console.log(err, "errrrr");
      });
  };
  return (
    <div>
      <Menu />
      <Whois
        data={homeAdvantagesCardData}
        whoisData={getWhoisData}
        whoisResutl={whoisData}
        resData={resdata}
      />
      <Footer />
    </div>
  );
};

export default WhoisModule;
