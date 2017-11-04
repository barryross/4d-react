import React, {Component} from 'react'
import Scroll from 'react-scroll'; // Imports all Mixins

import AppBar from 'material-ui/AppBar';

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

    const menu = ["about", "services", "portfolio", "contact"];
    return (
        <AppBar
           iconElementLeft={ 
               <div class="logo">
                   <span>4d Media</span>
           </div>}
           iconElementRight={ <nav className={this.state.open ? "open" : ""}>
        <ul class="flex">
          {
            menu.map((item)=><li><Link onClick={()=>this.handleSetActive(item)} to={item} className={this.state.activeItem == item ? "active": ""} spy={true} smooth={true} offset={50} duration={500} >{item}</Link></li>
          )
          }
        </ul>
      </nav>
}
         />
    )
  }
  handleSetActive = (item)=>{
    this.setState({activeItem:item, open: false})
  }

  handleHamburger = () =>{

    this.setState({open:!this.state.open})
  }

}
