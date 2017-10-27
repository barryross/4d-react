import React, {Component} from 'react'
import Scroll from 'react-scroll'; // Imports all Mixins


export default class Header extends Component  {
  constructor(props){
  	super(props);
  	this.state = {
      activeItem: "about"
    };
  }
  render(){
    let Link = Scroll.Link;

    const menu = ["about", "services", "portfolio", "contact"];
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
                {
                  menu.map((item)=><li><Link onClick={()=>this.handleSetActive(item)} to={item} className={this.state.activeItem == item ? "active": ""} spy={true} smooth={true} offset={50} duration={500} >{item}</Link></li>
                )
                }
              </ul>
            </nav>
          </header>
    )
  }
  handleSetActive = (item)=>{
    this.setState({activeItem:item})
  }

}
