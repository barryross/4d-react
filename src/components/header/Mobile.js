import React, {Component} from 'react'
import { Container, Menu, Responsive, Visibility, Segment, Sidebar, Icon} from 'semantic-ui-react'
import Scroll from 'react-scroll'; 

import MenuItems from './MenuItems'
let Link = Scroll.Link;

export default class MobileHeader extends Component {
	state = {}
	
  handleSetActive = (item)=>{
    this.setState({activeItem:item, open: false})
  }

  handleHamburger = ()=>{
    this.setState({open:!this.state.open})
	}
	
  handlePusherClick = () => {
    const { sidebarOpened } = this.state
    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children, items } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={"800"}>
        <Sidebar.Pushable
          style={{ minHeight: '100vh', position:'fixed', width:'100vw',zIndex:'100'  }} 
				>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
						<MenuItems items={items}/>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}>
            <Segment
              inverted
              textAlign='center'
              style={{  padding: '1em 0em' }}
              vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}