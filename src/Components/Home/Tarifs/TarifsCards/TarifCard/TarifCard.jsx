import React from "react";
import "./TarifCard.scss"; 
import MyButton from "../../../../../UI/MyButton/MyButton";
const TarifCard = ({ tarifCards, show }) => {

  return (
    <div className="tarifCard_block">
      <div className="tarifCardTop_block"  style={{background: `url(${tarifCards.top_img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
       {
        tarifCards.top_text &&
        <p>{tarifCards.top_text}</p>
       }
       
      </div>
      <div className="tarifCardBottom_block">
        <div className="tarifCardName_block">
          <h3>{tarifCards.name}</h3>
          <p>{tarifCards.title}</p>
        </div>
        <div className="tarifCardInfo_block">
          {tarifCards.tarif_infos?.map((e) => (
            <div className="tarifCardInfo_item">
              <img src={e.image} alt="" />
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="tarifCardloadding_block">
          <div
            className="tarifCardloadding_line"
            style={{ width: tarifCards.indicator_line + '%' }}
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
            {
              tarifCards?.active ? 

              <h2>{tarifCards.pref_price}</h2> :
              <h2>{tarifCards.pref_price} TJS/мес</h2>
            }
            {
              !tarifCards?.active &&
            <p>{tarifCards.curr_price} TJS</p>
            }
          </div>
          <h5>{tarifCards.stock}</h5>
        </div>
        <div className="tarifCard_btn" onClick={()=> show(true)}>
        <MyButton name={"Подключить"} width={"140px"} height={"40px"} />
        </div>
      </div>
    </div>
  );
};

export default TarifCard;
