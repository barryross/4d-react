import React, {Component} from 'react'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'
import { Popup, Button, Header, Image, Modal, Link } from 'semantic-ui-react'
import {portfolioFilters} from './data'
import {find} from 'lodash'
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
             <Modal.Header className="modal-header">
               <span className="flex-1">{this.state.currentProject.project}</span>
             <div className={"project-icons flex flex-1 flex-end"}>
                   {
                     this.state.currentProject.tags.map((tag)=>{
                       let tagItem = find(portfolioFilters, {tag:tag});
                       return tagItem ?  <span className={tagItem.icon}>{tagItem.label}</span> : ''
                     })
                   }

               </div>
             </Modal.Header>
             <Modal.Content>
               <Modal.Description>
               <div class="flex flex-between">
                 <section>
                   <div class="project-images flex-1 flex flex-around">
                     <Image src={'/images/'+this.state.currentProject.directory+this.state.currentProject.images.primary} />
                       {
                         this.state.currentProject.images.others.map((img)=>{
                           return img ?  <Image src={'/images/'+this.state.currentProject.directory+img} /> : ''
                         })
                       }

                   </div>
                   <div class="project-description flex-1">
                      <p>{this.state.currentProject.description}</p>
                    </div>
                </section>
                 <section class="project-details">
                   <h2>Site features</h2>
                   <ul>
                     {
                       this.state.currentProject.features ? this.state.currentProject.features.map((feature)=> <li>{feature}</li>) : ''
                     }
                   </ul>
                     <h2>Work performed</h2>
                     <ul>
                       {
                          this.state.currentProject.workPerformed ? this.state.currentProject.workPerformed.map((performed)=><li>{performed}</li>)
                             : ""
                       }
                     </ul>
                     <div class="project-visit">
                       <hr/>
                     <h5>Visit site</h5>
                       <span class="project-url">{this.state.currentProject.url}</span>
                     </div>
                 </section>
               </div>





               </Modal.Description>
             </Modal.Content>

           </Modal>
           : ''
         }
      </section>
    )
  }



}
