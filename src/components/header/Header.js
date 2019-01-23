import React, {Component} from 'react'
import DesktopHeader from './Desktop'
import MobileHeader from './Mobile'

const menuItems = [
  {label:"about", tag:"about"},         
  {label:"services", tag:"services"},
  {label:"testimonials", tag:"testimonials"},
  {label:"timeline", tag:"timeline"},
  {label:"contact", tag:"contact"}
];

export default class Header extends Component  {
  constructor(props){
  	super(props);
  	this.state = {
      activeItem: "about",
			open: true,
			fixed:false
    };
	}
	
	setFixedMenu = (boolean) => this.setState({ fixed: boolean })

  render(){
    return(<div>
      <DesktopHeader items={menuItems} fixed={this.state.fixed} setFixedMenu={this.setFixedMenu}/>
      <MobileHeader items={menuItems}/>
    </div>
    )
  }
}
