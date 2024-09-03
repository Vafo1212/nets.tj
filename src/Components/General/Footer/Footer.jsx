import React from 'react'
import './Footer.scss'
import FooterLink from './FooterLink/FooterLink'
import FooterContact from './FooterContact/FooterContact'
import FooterLinkMenu from './FooterLinkMenu/FooterLinkMenu'
import FooterText from './FooterText/FooterText'
const Footer = () => {
  return (
    <div className='footer_container'>
        {/* <FooterLink/> */}
      <div className="footer_block">
        <div className="footerBottom_block">
            <FooterContact/>
            <FooterLinkMenu/>
            <FooterText/>
        </div>
      </div>
    </div>
  )
}

export default Footer
