import React, {Component} from 'react'
import {find} from 'lodash'
import {icons} from '../../common/icons'
import PortfolioMenu from './filters/PortfolioMenu'
import PortfolioItems, {tgroup} from './PortfolioItems'
import {portfolioControls} from './data'
import ProjectModal from './project/ProjectModal'
export default class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      open:false,
      currentProject: null,
      filters: icons,
      portfolioControls:  portfolioControls
    }
  }

  handleClose = () =>{
    this.setState({open:false})
  }
  showProjectDetails = (project) => {
    console.log("project", project)
    this.setState({currentProject:project, open:true })
  }
  setCurrentProject = (project) =>{
    console.log("project", project)
    this.setState({currentProject:project, open:true })
  }

  resetQuickSelect(){
    let none =  find(portfolioControls, {label:"None"});
    let all =  find(portfolioControls, {label:"All"});

    none.false
    all

  }
  toggleFilter = (filter) =>{
    let filters = this.state.filters;
    let updatedFilters = [];
    console.log(`toggling ${filter}`)

    if(filter.preset){
      console.log("USING A PRESET!")
      //Set all filters to active:true
         
      //Set all controls to false
      portfolioControls.map(control =>{
        return control.active = false;
      })

      //Set current control to active
      find(portfolioControls, {label:filter.label}).active = true
      if(filter.label === "All"){
        updatedFilters = filters.map(filter =>{
           filter.active = true
           return filter
        })

      } else{
        updatedFilters = filters.map(filter =>{
           filter.active = false
           return filter
        })
      }
      console.log("portfolio controls", portfolioControls)
    }

    else{
      portfolioControls.map(control =>{
        return control.active = false;
      })
      updatedFilters = filters.map(flt =>{
        if(flt.tag == filter.tag){
          flt.active = !flt.active
        }
        return flt
      })
 
    }


    // console.log("filters", filters, portfolioControls)
    this.setState({filters:updatedFilters})


  }
  render(){
    return (
      <section id="gallery" class="primary-section">
          <section id="work">
          <h1>Work <span>What have I worked on?</span></h1>
            <div className="wrapper">
             <PortfolioMenu active={this.state.filters} toggleFilter={this.toggleFilter}/>

             <PortfolioItems
               storage={this.props.storage}
               filters={this.state.filters}
               showProjectDetails={this.showProjectDetails.bind(this)}
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
