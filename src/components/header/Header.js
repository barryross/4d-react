import React, {Component} from 'react'
import Scroll from 'react-scroll'; // Imports all Mixins

import Paper from 'material-ui/Paper';

export default class Header extends Component  {
  constructor(props){
  	super(props);
  	this.state = {
      activeItem: "about",
      open: true
    };
  }
  render(){
    let Link = Scroll.Link;

    const menu = [
        {label:"about", tag:"about"},         
        {label:"services", tag:"services"},
        {label:"work", tag:"work"},
        // {label:"experience", tag:"experience"},
        {label:"testimonials", tag:"testimonials"},
        {label:"contact", tag:"contact"}
    ];
    return (
      <Paper zDepth={0} class="primary-header dark">
          <div class="inner-wrapper">
            <div class="logo-container">
              <div class="logo">
                <span>4d Media</span>
              </div>
              <div class="hamburger" onClick={this.handleHamburger}>
              <i class="fa fa-bars" aria-hidden="true"></i>

              </div>
            </div>
          </div>
          <nav className={this.state.open ? "open" : ""}>
            <ul class="flex">
              { menu.map((item)=><li><Link onClick={()=>this.handleSetActive(item)} to={item.tag} className={this.state.activeItem == item.label ? "active": ""} spy={true} smooth={true} offset={50} duration={500} >{item.label}</Link></li> )}
            </ul>
          </nav>
    </Paper>
    )
  }
  handleSetActive = (item)=>{
    this.setState({activeItem:item, open: false})
  }

  handleHamburger = () =>{
    this.setState({open:!this.state.open})
  }

}
