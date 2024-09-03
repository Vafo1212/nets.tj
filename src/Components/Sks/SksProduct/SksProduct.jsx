import React from 'react'
import './SksProduct.scss'
import SksProductTitle from './SksProductTitle/SksProductTitle'
import SksProductCard from './SksProductCard/SksProductCard'

const SksProduct = ({data, setModal}) => {
  return (
    <div className='sksProduct_container' id='possibilities'>
       <SksProductTitle setModal={setModal}/>
       {
         data?.map((e)=> 
        
            <SksProductCard number={e.number} title={e.title} subTitle={e.subTitle}/>
        )
       }
    </div>
  )
}

export default SksProduct
