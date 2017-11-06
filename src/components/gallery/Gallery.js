import React, {Component} from 'react'
import PortfolioFilters from './filters/PortfolioFilters'
import PortfolioItems, {tgroup} from './PortfolioItems'
import {portfolioFilters} from './data'
import {find, remove} from 'lodash'

import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Paper from 'material-ui/Paper';
import ProjectModal from './project/ProjectModal'
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

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(){
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
          <Paper zDepth={3} children={<h1>Potfolio</h1>}/>

        <div className="wrapper">
         <PortfolioFilters active={this.state.filters} toggleFilter={this.toggleFilter}/>

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
    )
  }



}
