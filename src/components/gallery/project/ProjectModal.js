import React from "react";
import Dialog from 'material-ui/Dialog';
import { Image } from 'semantic-ui-react'
import {find} from 'lodash'
import {icons} from '../../../common/icons'



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
                      let tagItem = find(icons, {tag:tag});
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
          <h4 class="ui horizontal divider header"> Visit site </h4>
          <span class="project-url"><a target="_blank" href={project.url}>{project.url}</a></span>
        </div>
        }
    </div>
  )}

function Description(props){
  const { project } = props
  return (
    <div class="project-description">
     <h4 class="ui horizontal divider header">
        <i class="sitemap icon"></i>
        Description
      </h4>
      <p>{project.description}</p>
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
               <h4 class="ui horizontal divider header"> <i class="cubes icon"></i> Features </h4>
          <ul>
            {project.features.map(feature => <li><i class="check circle icon"></i>{feature}</li>) }
          </ul>

          <h4 class="ui horizontal divider header"> <i class="code icon"></i> Contribution </h4>
          <ul>
            {project.workPerformed ? project.workPerformed.map((workPerformed)=><li><i class="check circle icon"></i>{workPerformed}</li>): ""} 
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
