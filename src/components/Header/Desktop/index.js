import React, {Component} from 'react'
import { Container, Menu, Responsive, Visibility, Segment} from 'semantic-ui-react'
import Logo from '../Logo'
import MenuItems from '../MenuItems'
import './style.css'
export default class DesktopHeader extends Component {

	render(){

	 const { setFixedMenu, fixed } = this.props
	 return (
		 <Responsive minWidth={"800"}>
			<Visibility
				once={false}
				onBottomPassed={()=>setFixedMenu(true)}
				onBottomPassedReverse={()=>setFixedMenu(false)}
			>
			 <Segment
				 className="desktop-header"
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
						<MenuItems {...this.props} />
					 </Container>
				 </Menu>
			 </Segment>
		 </Visibility>
	 </Responsive>

	 )
	}
}
