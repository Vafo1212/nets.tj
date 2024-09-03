import React from 'react'
import './RouterWarranty.scss'
import Slider from 'react-slick';
import RouterWarrantyCard from './RouterWarrantyCard/RouterWarrantyCard';
const RouterWarranty = ({data}) => {
    const settin = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,  
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1000,  
            settings: {
              slidesToShow: 2,  
              slidesToScroll: 1,   
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 950,  
            settings: {
              slidesToShow: 1,  
              slidesToScroll: 1,   
              dots: true,
              arrows: false,
            },
          },
         
        ],
      };
  return (
    <div className='routerWarranty_container'>
      <div className="routerWarranty_block">
        <h1>Гарантия на оборудование</h1>
        <div className="routerWarranty_item">
        <Slider {...settin}>
              {
                data?.map((i)=> 
                  <RouterWarrantyCard title={i.title} subTitle={i.subTitle} list={i.list} key={i.id}/>
                )
              }
           </Slider>
        </div>
      </div>
    </div>
  )
}

export default RouterWarranty
