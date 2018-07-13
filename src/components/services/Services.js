import React from 'react'
import Paper from 'material-ui/Paper';

// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Services =  () => {
  return (
    <section id="services" class="gray">
         <h1>Services</h1>
          <div id="services-wrapper" className={"flex flex-around"}>

            <div zDepth={1} 
                id="development" 
                 className={"service"}
                children={
             <div>
                <i class="fa fa-code-fork fa-service-icon" aria-hidden="true"></i>
                <h2>Full-stack Development</h2>
                {/* <strong>Know what you need?</strong> */}
                <ul>
                  <li><i class="fa fa-check"></i>Database architecture</li>
                  <li><i class="fa fa-check"></i>Server-side CRUD endpoints</li>
                  <li><i class="fa fa-check"></i>Front-end API Integration</li>
                  <li><i class="fa fa-check"></i>Cross-browser & responsive front-end</li>
                 </ul> 
             </div>
            }>

                

             </div>

            <div  
                zDepth={2} 
                id="consulting" 
                className={"service"}
                children={
                    <div>
                        <i class="fa fa-whatsapp fa-service-icon" aria-hidden="true"></i>
                        <h2>Consulting</h2>
                        {/* <strong>Unsure what you need?</strong> */}
                        <ul>
                          <li ><i class="fa fa-check"></i>Experience new clarity about your ideas(s)</li>
                          <li ><i class="fa fa-check"></i>See the forest from the trees</li>
                          <li ><i class="fa fa-check"></i>Walk away with clear priorities, and actionable next steps</li>
                        </ul>
                    </div>   
                } >


          </div>
           <div  
               zDepth={2} 
               id="wordpress-tutoring" 
               className={"service"}
               children={
                   <div>
                        <i class="fa fa-wordpress fa-service-icon" aria-hidden="true"></i>

                        <h2>Wordpress Tutoring</h2>
                         {/* <strong>I can show you...</strong> */}
                       <ul>
                         <li><i class="fa fa-check"></i>Add/edit/delete your site content</li>
                         <li><i class="fa fa-check"></i>Make basic style changes yourself</li>
                         <li><i class="fa fa-check"></i>Learn the ins & outs of your site's theme and plugins</li>
                       </ul>
                   </div>
               }
               >




          </div>
        </div>
        </section>
  )
}

export default Services
