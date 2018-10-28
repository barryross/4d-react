import React, {Component} from 'react'
import Scroll from 'react-scroll'; // Imports all Mixins
import { Container, Menu, Responsive, Visibility, Segment, Button, Sidebar, Icon} from 'semantic-ui-react'
const menu = [
  {label:"about", tag:"about"},         
  {label:"services", tag:"services"},
  // {label:"work", tag:"work"},
  {label:"testimonials", tag:"testimonials"},
  {label:"timeline", tag:"timeline"},
  {label:"contact", tag:"contact"}
];
let Link = Scroll.Link;

 class DesktopHeader extends Component {
   state = {}
   hideFixedMenu = () => this.setState({ fixed: false })
   showFixedMenu = () => this.setState({ fixed: true })
   handleSetActive = (item)=>{
    this.setState({activeItem:item, open: false})
  }

  handleHamburger = () =>{
    this.setState({open:!this.state.open})
  }
   render(){

    const { children } = this.props
    const { fixed } = this.state
   
    return (
      <Responsive minWidth={"800"}>
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          className="primary-header"
          inverted
          textAlign='center'
          style={{ padding: '1em 0em' }}
          vertical
        >
           <div class="logo-container">
            <div class="logo">
            <span>4d Media</span>
            </div>
          </div>    
          <Menu
           
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >     
       

            <Container className="primary-nav">
              {menu.map(m => {
                return (
                  <Menu.Item className="menu-item" as='a' to={m.tag} link="" onClick={()=>this.handleSetActive(m)}>
                    <Link to={m.tag} smooth={true} duration={500}>{m.label}</Link>
                  </Menu.Item>
                )
              })}
            
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>

    )
   }
}

class MobileHeader extends Component {
  state = {}
  handleSetActive = (item)=>{
    this.setState({activeItem:item, open: false})
  }

  handleHamburger = () =>{
    this.setState({open:!this.state.open})
  }
  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={"800"}>
        <Sidebar.Pushable
          style={{ minHeight: '100vh', position:'fixed', width:'100vw',zIndex:'100'  }}
        >
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
           {menu.map(m => {
                return (
                  <Menu.Item className="menu-item" as='a' to={m.tag} link="" onClick={()=>this.handleSetActive(m)}>
                    <Link to={m.tag} onClick={this.handleToggle} smooth={true} duration={500}>{m.label}</Link>
                  </Menu.Item>
                )
              })}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
          >
            <Segment
              inverted
              textAlign='center'
              style={{  padding: '1em 0em' }}
              vertical
            >
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
export default class Header extends Component  {
  constructor(props){
  	super(props);
  	this.state = {
      activeItem: "about",
      open: true
    };
  }


  render(){
    return(<div>
      <DesktopHeader/>
      <MobileHeader/>
    </div>
    )

  }


}
