import React, {Component} from 'react'
import { Container, Menu, Responsive, Visibility, Segment, Sidebar, Icon} from 'semantic-ui-react'
import Scroll from 'react-scroll'; 
import Logo from './Logo'
import MenuItems from './MenuItems'

let Link = Scroll.Link;

export default class DesktopHeader extends Component {
	state = {}

	handleSetActive = (item)=>{
	 this.setState({activeItem:item, open: false})
 }

 handleHamburger = () =>{
	 this.setState({open:!this.state.open})
 }
	render(){

	 const { children, items, setFixedMenu, fixed } = this.props
	 return (
		 <Responsive minWidth={"800"}>
			<Visibility
				once={false}
				onBottomPassed={()=>setFixedMenu(true)}
				onBottomPassedReverse={()=>setFixedMenu(false)}
			>
			 <Segment
				 className="primary-header"
				 inverted
				 textAlign='center'
				 style={{ padding: '1em 0em' }}
				 vertical
			 >
				 <Logo/>
		  
				 <Menu
					
					 fixed={fixed ? 'top' : null}
					 inverted={!fixed}
					 pointing={!fixed}
					 secondary={!fixed}
					 size='large'
				 >     
			
					 <Container className="primary-nav">
						<MenuItems items={items}/>
					 </Container>
				 </Menu>
			 </Segment>
		 </Visibility>
	 </Responsive>

	 )
	}
}
