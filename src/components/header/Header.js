import React from 'react'
const Header =  () => {
  return (
    <header class="flex dark">
          <div class="inner-wrapper">
            <div class="logo-container">
            <div class="logo"><span>4d Media</span> </div>
            <div class="hamburger">
            Menu
            </div>
          </div>
        </div>
          <nav>
            <ul class="flex">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
  )
}

export default Header
