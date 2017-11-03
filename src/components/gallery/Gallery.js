import React, {Component} from 'react'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems, {tgroup} from './PortfolioItems'
import { Popup, Button, Header, Image, Modal, Link } from 'semantic-ui-react'
import {portfolioFilters} from './data'
import {find, remove} from 'lodash'
import { CSSTransitionGroup } from 'react-transition-group' // ES6

export default class Gallery extends Component {
  constructor(props){
    super(props)

    this.state = {
      open:false,
      currentProject: null,
      filters: portfolioFilters,
    }

    this.setCurrentProject = this.setCurrentProject.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);

    this.close = this.close.bind(this)
  }

  close(){
    this.setState({open:false})
  }

  setCurrentProject(project){
    this.setState({open:true,currentProject:project })
  }
  toggleFilter(filter){
    let filters = this.state.filters;

    let found =  find(filters, {tag:filter.tag});
    found.active = !found.active;
    this.setState({filters:filters})
    console.log("Current filters", this.state.filters.filter((f)=> f.active == true))
    // let active = this.state.activeFilters;
    // remove(this.state.activeFilters, (f) => f == filter).length > 0 ? "" :
    // this.setState({activeFilters: [...this.state.activeFilters].concat(filter)});
    //
    // if (this.state.activeFilters.indexOf(filter) > -1 ){
    //   remove(this.state.activeFilters, (f) => f == filter)
    // } else {
    //   this.setState({activeFilters: [...this.state.activeFilters, filter]})
    //     // console.log("filters after", this.state.activeFilters)
    // }


  }
  render(){
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>
        <div className="wrapper">
         <PortfolioFilters active={this.state.filters} toggleFilter={this.toggleFilter}/>

         <PortfolioItems
           filters={this.state.filters}
           showModal={this.showModal}
           setCurrentProject={this.setCurrentProject}
         />
       <tgroup/>
          {
            this.state.open ?

            <Modal open={this.state.open} onClose={this.close} closeIcon>
               <Modal.Header className={"modal-header flex flex-between"}>
                 <span className="flex-1">{this.state.currentProject.project}</span>
                <div className={"project-icons"}>
                     {
                       this.state.currentProject.tags.map((tag)=>{
                         let tagItem = find(portfolioFilters, {tag:tag});
                         return tagItem ?  <span className={tagItem.icon}><span className="tag-label">{tagItem.label}</span></span> : ''
                       })
                     }

                 </div>
               </Modal.Header>
               <Modal.Content>
                 <Modal.Description>
                 <div class="flex flex-between">
                   <section class="project-overview">
                     <h3><i class="sticky note icon"></i>
Overview</h3>
                     <div class="project-description">
                        <p>{this.state.currentProject.description}</p>
                      </div>
                      <hr/>
                      <div class="project-images">
                        <Image src={'/images/'+this.state.currentProject.directory+this.state.currentProject.images.primary} />
                          {
                            this.state.currentProject.images.others.map((img)=>{
                              return img ?  <Image src={'/images/'+this.state.currentProject.directory+img} /> : ''
                            })
                          }

                      </div>
                  </section>
                   <section class="project-details">
                     <h3><i class="options icon"></i>Site features</h3>
                     <ul>
                       {
                         this.state.currentProject.features ? this.state.currentProject.features.map((feature)=> <li>{feature}</li>) : ''
                       }
                     </ul>
                       <h3><i class="code icon"></i>Work performed</h3>
                       <ul>
                         {
                            this.state.currentProject.workPerformed ? this.state.currentProject.workPerformed.map((performed)=><li>{performed}</li>)
                               : ""
                         }
                       </ul>
                       <div class="project-visit">
                         <hr/>
                       <h5><i class="linkify icon"></i>Visit site</h5>
                   <span class="project-url"><a target="_blank" href={this.state.currentProject.url}>{this.state.currentProject.url}</a></span>
                       </div>
                   </section>
               </div>
               </Modal.Description>
             </Modal.Content>

           </Modal>
           : ''
         }
       </div>
      </section>
    )
  }



}
