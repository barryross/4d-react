import React, {Component} from 'react'
import DesktopHeader from './Desktop/'
import MobileHeader from './Mobile/'

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
			fixed:false,
			sidebarOpened:false
    };
	}
	
	handleSetActive = (item)=> this.setState({activeItem:item, open: false})
	handleToggle = () => this.setState( state => { return {sidebarOpened:!state.sidebarOpened} })
	setFixedMenu = (boolean) => this.setState({ fixed: boolean })

  render(){
		const { sidebarOpened} = this.state
    return(
			<div>
				<DesktopHeader 
					items={menuItems} 
					fixed={this.state.fixed} 
					setFixedMenu={this.setFixedMenu}
					handleSetActive={this.handleSetActive}
				/>

				<MobileHeader 
					items={menuItems}
					handleToggle={this.handleToggle}
					sidebarOpened={sidebarOpened}
					handleSetActive={this.handleSetActive}
				/>
			</div>
    )
  }
}
