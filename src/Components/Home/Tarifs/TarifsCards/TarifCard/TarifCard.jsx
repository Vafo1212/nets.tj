import React from "react";
import "./TarifCard.scss"; 
import MyButton from "../../../../../UI/MyButton/MyButton";
const TarifCard = ({ tarifCards }) => {
  // {
  //   id: 1,
  //   topImg: backImg,
  //   topText: 'Первые 10 дней — бесплатно',
  //   backgroundTopImg: '',
  //   name: 'NETS 1',
  //   title: 'Домашний интернет для небольших потребностей в потоковом видео и онлайн-играх.',
  //   tarifInfo: [
  //     {img: imgInfo1, text: 'Бесплатное подключение' },
  //     {img: imgInfo2, text: 'Безлимитный трафик' },
  //     {img: imgInfo3, text: 'Локальные ресурсы до 100 Мбит/с' },
  //     {img: imgInfo4, text: 'до 1 Мбит/с' },
  //   ],
  //   indecatorLine: '70%',
  //   connect: {
  //     text: 'Возможность подключить дополнительные услуги',
  //     img: [
  //       {img: logo1,},
  //       {img: logo2,},
  //       {img: logo3,},
  //     ]
  //   },
  //   prefPrice: '125 TJS/мес',
  //   currPrice: '115 TJS',
  //   stock: 'Стоимость по акции первые 2 месяца, с 3 месяца — 115 TJS/мес'
  // }
  return (
    <div className="tarifCard_block">
      <div className="tarifCardTop_block"  style={{background: `url(${tarifCards.topImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <p>{tarifCards.topText}</p>
      </div>
      <div className="tarifCardBottom_block">
        <div className="tarifCardName_block">
          <h3>{tarifCards.name}</h3>
          <p>{tarifCards.title}</p>
        </div>
        <div className="tarifCardInfo_block">
          {tarifCards.tarifInfo?.map((e) => (
            <div className="tarifCardInfo_item">
              <img src={e.img} alt="" />
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="tarifCardloadding_block">
          <div
            className="tarifCardloadding_line"
            style={{ width: tarifCards.indecatorLine }}
          ></div>
        </div>
        <div className="tarifCardConnect_block">
          <div className="tarifCardConnect_item">
            {tarifCards.connect.img?.map((e) => (
              <img src={e.img} alt="" />
            ))}
          </div>
          <p>{tarifCards.connect.text}</p>
        </div>
        <div className="tarifCardPrice_block">
          <div className="tarifCardPrice_item">
            <h2>{tarifCards.prefPrice}</h2>
            <p>{tarifCards.currPrice}</p>
          </div>
          <h5>{tarifCards.stock}</h5>
        </div>
        <div className="tarifCard_btn">
        <MyButton name={"Подключить"} width={"140px"} height={"40px"} />
        </div>
      </div>
    </div>
  );
};

export default TarifCard;
