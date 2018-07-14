import React, {Component} from "react";
import Dialog from 'material-ui/Dialog';
import { Image } from 'semantic-ui-react'
import {find, remove} from 'lodash'
import {portfolioFilters} from '../data'
import Paper from 'material-ui/Paper';


    const ProjectModal = (props)=>{
    
        return(
            <Dialog 
              className="dialog"
                open={props.open} 
                onRequestClose={props.handleClose} closeIcon>
                <div className={"projectModal"}>
                   <div className={"project-header"}>
                        <h2>{props.currentProject.project}</h2>
                        <div className={"project-icons"}>
                             {
                               props.currentProject.tags.map((tag)=>{
                                 let tagItem = find(portfolioFilters, {tag:tag});
                                 return tagItem ?  <span className={tagItem.icon}><span className="tag-label">{tagItem.label}</span></span> : ''
                               })
                             }

                        </div>
                    </div>
                    
                      <div class="project-description">
                         <h3><i class="sticky note icon"></i>Overview</h3>
                        <p>{props.currentProject.description}</p>
                    <hr/>
                        <div class="project-images">
                          <Image src={'/images/'+props.currentProject.directory+props.currentProject.images.primary} />
                            {
                              props.currentProject.images.others.map((img)=>{
                                return img ?  <Image src={'/images/'+props.currentProject.directory+img} /> : ''
                              })
                            }

                        </div>
                      </div>
            
                     
                   <div class="project-details">
                     <h3><i class="options icon"></i>Site features</h3>
                     <ul>{
                         props.currentProject.features ? props.currentProject.features.map((feature)=> <li>{feature}</li>) : ''
                       } </ul>
                       <h3><i class="code icon"></i>Work performed</h3>
                       <ul>{
                            props.currentProject.work ? props.currentProject.work.map((performed)=><li>{performed}</li>)
                               : ""
                         } </ul>
            
                   </div>
                   <div class="project-visit">
                       <h5><i class="linkify icon"></i>Visit site</h5>
                    <span class="project-url"><a target="_blank" href={props.currentProject.url}>{props.currentProject.url}</a></span>
                   </div>
               </div>
        

           </Dialog>
        )
    }
export default ProjectModal
