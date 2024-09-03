import React from 'react'
import './HomeServicesCard.scss'
import MyButton from '../../../../UI/MyButton/MyButton'

const HomeServicesCard = ({img, title, subTitle, textBtn}) => {
  return (
    <div className='homeServicesCard_block'>
      <div className="homeServicesCard_item">

      {img}
      <h3>{title}</h3>
      {
       subTitle?.map((e)=>
      
        <p>{e.item}</p>
      )
      }
      </div>
      <div className="homeServicesCard_btn">

      <MyButton grey={true} width={'100%'} height={'35px'} name={textBtn}/>
      </div>
    </div>
  )
}

export default HomeServicesCard
