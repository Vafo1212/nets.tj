import React from "react";
import './VideoModule.scss'
import Menu from "../../Components/General/Menu/Menu";
import HomeGeneralSlider from "../../Components/Home/HomeGeneralSlider/HomeGeneralSlider";
import img from "../../Assets/Video/img/Rectangle.png";
import img2 from "../../Assets/Video/img/Group7.png";
import HomeAdvantages from "../../Components/Home/HomeAdvantages/HomeAdvantages";
import VideoService from "../../Components/Video/VideoService/VideoService";

import videoTopCardImg1 from "../../Assets/Video/img/bi_shield.svg";
import videoTopCardImg2 from "../../Assets/Video/img/et_gears.png";
import videoTopCardImg3 from "../../Assets/Video/img/Vector.svg";

import videoBottomCardImg1 from "../../Assets/Video/img/ep_connection.svg";
import videoBottomCardImg2 from "../../Assets/Video/img/arcticons.svg";
import videoBottomCardImg3 from "../../Assets/Video/img/material.svg";
import Form from "../../Components/General/Form/Form";
import WhoisResponse from "../../Components/Whois/WhoisResponse/WhoisResponse";
import LendingAddress from "../../Components/General/LendingAddress/LendingAddress";
import Footer from "../../Components/General/Footer/Footer";

import { RiQuestionnaireLine } from "react-icons/ri";

const VideoModule = () => {
  const videoTopCardData = [
    {
      id: 1,
      img: videoTopCardImg1,
      subTitle:
        "Мы предлагаем разнообразные тарифные планы, соответствующие потребностям различных категорий пользователей, от индивидуальных абонентов до крупных корпоративных клиентов.",
    },
    {
      id: 2,
      img: videoTopCardImg2,
      subTitle:
        "Наслаждайтесь свободой использования интернета без ограничений по трафику или скорости. Наша услуга предоставляет вам полный доступ к контенту в сети без дополнительных платежей.",
    },
    {
      id: 3,
      img: videoTopCardImg3,
      subTitle:
        "Наша команда профессионалов всегда готова ответить на ваши вопросы и решить любые технические проблемы. Мы ценим каждого клиента и стремимся обеспечить их высоким сервисом.",
    },
  ];
  const videoBottomCardData = [
    {
      id: 1,
      img: videoBottomCardImg1,
      title: "Стабильное соединение",
      subTitle:
        "Мы предоставляем надежный высокоскоростной интернет, гарантируя бесперебойное видеонаблюдение.",
    },
    {
      id: 2,
      img: videoBottomCardImg2,
      title: "Защита данных",
      subTitle:
        "Обеспечиваем высокий уровень защиты и конфиденциальности ваших видеоданных.",
    },
    {
      id: 3,
      img: <RiQuestionnaireLine style={{fontSize: '70px', color: '#EA3E2A'}}/>,
      activeCard: true,
      title: "Техническая поддержка",
      subTitle:
        "Предоставляем профессиональную помощь при настройке и обслуживании системы видеонаблюдения.",
    },
  ];
  const videoData = [
    {
      image: img,
      img_item: img2,
      title: "Видеонаблюдение",
      description: "Дома все в порядке,  вот увидите",
      text_btn: "Подробнее",
    },
  ];
  const videoServiceData = [
    {
      id: 1,
      title: "Детекция движения",
      subTitle:
        "Автоматическое обнаружение движущихся объектов в кадре, что позволяет выявлять потенциально подозрительные события.",
    },
    {
      id: 2,
      title: "Запись и хранение",
      subTitle:
        "Возможность записывать видеопоток и хранить его для последующего анализа, а также для обеспечения долгосрочной безопасности.",
    },
    {
      id: 3,
      title: "Удаленный доступ",
      subTitle:
        "Возможность просматривать видеопотоки и данные удаленно через интернет, обеспечивая мониторинг из любой точки мира.",
    },
  ];
  const resdata = [
    {
      id: 1,
      title: "Как подключить систему?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 2,
      title: "Кому полезен сервис видеонаблюдения?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 3,
      title: "Как видеонаблюдение улучшит эффективность?",
      subTitle:
        "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
 
  ];
  return (
    <div>
      <Menu />
      <HomeGeneralSlider data={videoData} black={true} />
      <HomeAdvantages
        homeAdvantagesCardData={videoTopCardData}
        title={"Преимущества"}
        active={true}
      />
      <VideoService data={videoServiceData} />
      <HomeAdvantages
        homeAdvantagesCardData={videoBottomCardData}
        title={"Почему стоит выбрать Nets"}
        active={true}
      />
      <div className="response_container">
        <div className="response_block">
          <WhoisResponse data={resdata} />
        </div>
      </div>
      <Form />
      <LendingAddress/>
      <Footer/>
    </div>
  );
};

export default VideoModule;
