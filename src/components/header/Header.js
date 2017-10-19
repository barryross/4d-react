import React from 'react'
import Scroll from 'react-scroll'; // Imports all Mixins

const handleSetActive = (evt)=>{
  //TODO set active link to display
}
const Header =  () => {
  let Link = Scroll.Link;

  return (
    <header class="flex dark">
          <div class="inner-wrapper">
            <div class="logo-container">
              <div class="logo">
                <span>4d Media</span>
              </div>
              <div class="hamburger">
                Menu
              </div>
            </div>
          </div>
          <nav>
            <ul class="flex">
              <li><Link to="about" activeClass="active" spy={true} smooth={true} offset={50} duration={500}  >About</Link></li>
              <li><Link to="services" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Services</Link></li>
              <li><Link to="portfolio" activeClass="active" spy={true} smooth={true} offset={50} duration={500}  >Portfolio</Link></li>
              {/* <li><Link to="testimonials" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Testimonials</Link></li>
              <li><Link to="pricing" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Pricing</Link></li> */}
              <li><Link to="contact" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li>
            </ul>
          </nav>
        </header>
  )
}

export default Header
