import React from "react";
import Dialog from 'material-ui/Dialog';
import { Image } from 'semantic-ui-react'
import {find} from 'lodash'
import {portfolioFilters} from '../data'



const ProjectModal = (props) => {
  const {currentProject}  = props
  console.log("current project in modal", currentProject)
        return(
            <Dialog 
              className="dialog"
                open={props.open} 
                onRequestClose={props.handleClose} closeIcon>
              <ProjectDetails project={currentProject}/>
           </Dialog>
        )
}

function ProjectDetails(props){
  const project = props.project
  return(
  <div className={"projectModal"}>
        <div className={"project-header"}>
            <h2>{project.project}</h2>
            <div className={"project-icons"}>
                  {
                    project.tags.map(tag =>{
                      let tagItem = find(portfolioFilters, {tag:tag});
                      return tagItem ? <span> <span className="tag-label">{tagItem.label}</span><i className={tagItem.icon}></i> </span>: ''
                    })
                  }
            </div>
        </div>
        
        <Description {...props}/>
        <Specifics {...props}/>

        {
          !props.project.url ? "" :  
          <div class="project-visit">
            <h5><i class="linkify icon"></i>Visit site</h5>
          <span class="project-url"><a target="_blank" href={project.url}>{project.url}</a></span>
        </div>
        }
    </div>
  )}

function Description(props){
  const { project } = props
  return (
    <div class="project-description">
     <h3><i class="sticky note icon"></i>Overview</h3>
      <p>{project.description}</p>
      <hr/>
      <ProjectImages {...props}/>
    </div>
  )
}


function Specifics(props){
  const {project} = props
  return(
    <div class="project-specifics">
      { !project.features ? "" : 
        <div>
          <h3><i class="options icon"></i>Site features</h3>
          <ul>
            {project.features.map(feature => <li>{feature}</li>) }
          </ul>

          <h3><i class="code icon"></i>Work performed</h3>
          <ul>
            {project.workPerformed ? project.workPerformed.map((workPerformed)=><li>{workPerformed}</li>): ""} 
          </ul>
        </div>
        }
    </div>
  )
}
function ProjectImages(props){
  const { project } = props
  return(
    <div class="project-images">
    <Image src={`/images/${project.directory+project.images.primary}`} />
      {
        project.images.others !== undefined && project.images.others.length > 0 && project.images.others.map((img)=>{
          return img ?  <Image src={`/images/${project.directory+img}`}/> : ''
        })
      }
  </div>
  )
}

export default ProjectModal
