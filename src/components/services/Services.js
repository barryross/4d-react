import React from 'react'
import Paper from 'material-ui/Paper';

// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Services =  () => {
  return (
    <section id="services" class="gray">
          <h1>Services</h1>
        <div id="services-wrapper" className={"flex flex-around"}>

            <Paper zDepth={2} id="development" class="service flex card" >

                  <i class="fa fa-code-fork fa-service-icon" aria-hidden="true"></i>

                  <h2>Full-stack Development</h2>
                  <strong>Know what you need?</strong>
                  <ul>
                    <li>Database architecture</li>
                    <li>Server-side CRUD endpoints</li>
                    <li>Front-end API Integration</li>
                    <li>Cross-browser & responsive front-end</li>
                  </ul>

             </Paper>

            <Paper  zDepth={2} id="consulting" class="service flex card" >

                  <i class="fa fa-whatsapp fa-service-icon" aria-hidden="true"></i>

                  <h2>Consulting</h2>
                  <strong>Unsure what you need?</strong>
                  <ul>
                    <li >Experience a new level of clarity and enthusiasm about your ideas(s)</li>
                    <li >See the forest from the trees</li>
                    <li >Walk away with clear priorities, and actionable next steps</li>
                  </ul>

          </Paper>
           <Paper  zDepth={2} id="wordpress-tutoring" class="service flex card" >

                  <i class="fa fa-wordpress fa-service-icon" aria-hidden="true"></i>

                  <h2>Wordpress Tutoring</h2>
                   <strong>I can show you...</strong>
                 <ul>
                   <li>Add/edit/delete your site content</li>
                   <li>Make basic style changes yourself</li>
                   <li>Learn the ins & outs of your site's theme and plugins</li>
                 </ul>



          </Paper>
        </div>
        </section>
  )
}

export default Services
