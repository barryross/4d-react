import React, {Component} from 'react'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'


export default class Gallery extends Component {
  constructor(props){
    super(props)

    this.state = {
      open:false,
      currentProject: null
    }
    this.setCurrentProject = this.setCurrentProject.bind(this);
    this.close = this.close.bind(this)
  }

  close(){
    this.setState({open:false})
  }
  setCurrentProject(project){
    this.setState({open:true,currentProject:project })
  }
  render(){
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>
          <PortfolioFilters/>
        <PortfolioItems showModal={this.showModal} setCurrentProject={this.setCurrentProject}/>
        {
          this.state.open ?

      <Modal open={this.state.open} onClose={this.close} closeIcon>

             <Modal.Header>{this.state.currentProject.project}</Modal.Header>
             <Modal.Content image>
               <Image wrapped size='medium' src='/' />
               <Modal.Description>
                 <Header>Default Profile Image</Header>
               <p>{this.state.currentProject.description}</p>
               <p>{this.state.currentProject.url}</p>
               </Modal.Description>
             </Modal.Content>

           </Modal>
           : ''
         }
      </section>
    )
  }



}
