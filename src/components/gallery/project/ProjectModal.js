import React, {Component} from "react";
import Dialog from 'material-ui/Dialog';
import { Image } from 'semantic-ui-react'
import {find, remove} from 'lodash'
import {portfolioFilters} from '../data'
import Paper from 'material-ui/Paper';


    const ProjectModal = (props)=>{

      const {currentProject}  = props.currentProject
    
        return(
            <Dialog 
              className="dialog"
                open={props.open} 
                onRequestClose={props.handleClose} closeIcon>
                <div className={"projectModal"}>
                   <div className={"project-header"}>
                        <h2>{currentProject.project}</h2>
                        <div className={"project-icons"}>
                             {
                               props.currentProject.tags.map((tag)=>{
                                 let tagItem = find(portfolioFilters, {tag:tag});
                                 return tagItem ? <span> <span className="tag-label">{tagItem.label}</span><i className={tagItem.icon}></i> </span>: ''
                               })
                             }

                        </div>
                    </div>
                    
                      <div class="project-description">
                         <h3><i class="sticky note icon"></i>Overview</h3>
                        <p>{currentProject.description}</p>
                    <hr/>
                        <div class="project-images">
                          <Image src={'/images/'+currentProject.directory+currentProject.images.primary} />
                            {
                              currentProject.images.others != undefined && currentProject.images.others.length > 0 && currentProject.images.others.map((img)=>{
                                return img ?  <Image src={'/images/'+currentProject.directory+img} /> : ''
                              })
                            }

                        </div>
                      </div>
            
                     
                   <div class="project-details">

                    { !currentProject.features ? "" : 
                      <div>
                        <h3><i class="options icon"></i>Site features</h3>
                        <ul>{
                            currentProject.features ? currentProject.features.map((feature)=> <li>{feature}</li>) : ''
                          } </ul>
                          <h3><i class="code icon"></i>Work performed</h3>
                          <ul>{
                                currentProject.workPerformed ? currentProject.workPerformed.map((workPerformed)=><li>{workPerformed}</li>)
                                  : ""
                            } </ul>
                      </div>
                        }
                   </div>
                   {
                     !props.currentProject.url ? "" :  
                      <div class="project-visit">
                        <h5><i class="linkify icon"></i>Visit site</h5>
                      <span class="project-url"><a target="_blank" href={currentProject.url}>{currentProject.url}</a></span>
                    </div>
                   }
                   
               </div>
        

           </Dialog>
        )
    }
export default ProjectModal
