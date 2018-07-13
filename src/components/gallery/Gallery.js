import React, {Component} from 'react'
import PortfolioMenu from './filters/PortfolioMenu'
import PortfolioItems, {tgroup} from './PortfolioItems'
import {portfolioFilters, portfolioControls} from './data'
import {find} from 'lodash'

import Paper from 'material-ui/Paper';
import ProjectModal from './project/ProjectModal'
export default class Portfolio extends Component {
  constructor(props){
    super(props)

    this.state = {
      open:false,
      currentProject: null,
      filters: portfolioFilters,
      portfolioControls:  portfolioControls
    }

    this.setCurrentProject = this.setCurrentProject.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(){
    this.setState({open:false})
  }

  setCurrentProject(project){
    console.log("PROJECT", project)
    this.setState({open:true,currentProject:project })
  }
  toggleFilter(filter){
    let filters = this.state.filters;
    
    if(filter == "All"){
      let none =  find(portfolioControls, {label:"None"});
      none.active = false;
      let all =  find(portfolioControls, {label:"All"});
      all.active = true;
           filters = filters.map((item)=>{
         item.active = true;
         return item
      })
    }
    else if(filter=="None"){
      let none =  find(portfolioControls, {label:"None"});
      none.active = true;
      let all =  find(portfolioControls, {label:"All"});
      all.active = false;
      let found =  find(portfolioControls, {label:"None"});
      found.active = true;
      filters = filters.map((item)=>{
        item.active = false;
        return item
     })
    }
    else{
      let found =  find(filters, {tag:filter.tag});
      found.active = !found.active;
    }

    console.log("filters", filters, portfolioControls)
    this.setState({filters:filters})


  }
  render(){
    return (
      <section id="gallery">
          <section id="work">
          <h1>Work</h1>

            <div className="wrapper">
             <PortfolioMenu active={this.state.filters} toggleFilter={this.toggleFilter}/>

             <PortfolioItems
               filters={this.state.filters}
               showModal={this.showModal}
               setCurrentProject={this.setCurrentProject}
             />
      
              {
                this.state.open ?

                 <ProjectModal
                 currentProject={this.state.currentProject}
                 open={this.state.open}
                 handleClose={this.handleClose}
                />
               : ''
             }
           </div>
          </section>
      </section>
     
    )
  }



}
