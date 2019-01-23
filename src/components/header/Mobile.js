import React, {Component} from 'react'
import { Container, Menu, Responsive, Segment, Sidebar, Icon} from 'semantic-ui-react'
import MenuItems from './MenuItems'

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


  render() {
    const {handleToggle, sidebarOpened } = this.props

    return (
      <Responsive maxWidth={"800"}>
        <Sidebar.Pushable
          style={{ minHeight: '100vh', position:'fixed', width:'100vw',zIndex:'100'  }} 
				>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
						<MenuItems {...this.props}/>
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
                  <Menu.Item onClick={handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}