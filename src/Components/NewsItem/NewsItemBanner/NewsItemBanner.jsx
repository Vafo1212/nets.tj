import React from 'react'
import './NewsItemBanner.scss'
import { FaWhatsapp } from "react-icons/fa6";
import { FaViber } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { IoLogoVk } from "react-icons/io";
import { FaOdnoklassniki } from "react-icons/fa6";
import img from '../../../Assets/NewsItem/Img/image 1.png'
const NewsItemBanner = ({img}) => {
  return (
    <div className='newsItemBanner_block'>
      <div className="newsItemBannerSocial_block">
         <FaWhatsapp className='newsItemBannerSocial_icon'/>
         <FaViber className='newsItemBannerSocial_icon'/>
         <RiTelegramLine className='newsItemBannerSocial_icon'/>
         <IoLogoVk className='newsItemBannerSocial_icon'/>
         <FaOdnoklassniki className='newsItemBannerSocial_icon'/>
      </div>
      <img src={img} alt="" />
    </div>
  )
}

export default NewsItemBanner
