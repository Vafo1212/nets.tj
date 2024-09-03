import React from 'react'
import './VpsSliderCard.scss'
import MyButton from '../../../../UI/MyButton/MyButton'
const VpsSliderCard = ({vpsSliderCards, color, colorButton}) => {
    
  return (
<div className="vpsSliderCard_block">
      <div className="vpsSliderCardTop_block"  style={{background: `url(${vpsSliderCards.topImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <p style={{backgroundColor: color}}>{vpsSliderCards.topText}</p>
      </div>
      <div className="vpsSliderCardBottom_block">
        <div className="vpsSliderCardName_block">
          <h3>{vpsSliderCards.name}</h3>
          <p>{vpsSliderCards.title}</p>
        </div>
        <div className="vpsSliderCardInfo_block">
            {
                vpsSliderCards.param?.map((e)=> 
                 <div className="vpsSliderCardInfo_item" key={e.id}>
                    <p>{e.key}</p>
                    <p>{e.name}</p>
                 </div>
                )
            }
        </div>
        <div className="vpsSliderCardPrice_block">
          <div className="vpsSliderCardPrice_item">
            <h2>{vpsSliderCards.prefPrice}</h2> 
          </div> 
        </div>
        <div className="vpsSliderCard_btn">
        <MyButton name={"Подключить"} width={"140px"} height={"40px"} blue={colorButton} />
        </div>
      </div>
    </div>
  )
}

export default VpsSliderCard
