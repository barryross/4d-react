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
        {label:"services", tag:"services"},
        {label:"about", tag:"about"}, 
        {label:"work", tag:"work"},
        {label:"contact", tag:"contact"}
    ];
    return (
      <Paper zDepth={0} class="header dark">
          <div class="inner-wrapper">
            <div class="logo-container">
              <div class="logo">
                <span>4d Media</span>
              </div>
              <div class="hamburger" onClick={this.handleHamburger}>
                Menu
              </div>
            </div>
          </div>
          <nav className={this.state.open ? "open" : ""}>
            <ul class="flex">
              {
                menu.map((item)=><li><Link onClick={()=>this.handleSetActive(item)} to={item.tag} className={this.state.activeItem == item ? "active": ""} spy={true} smooth={true} offset={50} duration={500} >{item.label}</Link></li>
              )
              }
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
