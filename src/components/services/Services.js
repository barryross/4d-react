import React from 'react'
import Paper from 'material-ui/Paper';

// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Services =  () => {
  return (
    <section id="services" class="gray">
         <h1>Services <span>What do I offer?</span></h1>
          <div class="inner-wrapper">
          <div id="services-wrapper" className={"flex flex-around"}>
            <div class="ui card">
                <div class="content">
                <i class="fa fa-whatsapp fa-service-icon" aria-hidden="true"></i>
                  <div class="center aligned header">Technical consulting</div>
                    <div class="center aligned description">
                    <ul>
                            <li ><i class="check circle icon"></i>Understanding and synthesis of your idea(s)</li>
                            <li ><i class="check circle icon"></i>Suggestions to narrow the focus</li>
                            <li ><i class="check circle icon"></i>Clear technical scope & direction</li>
                          </ul>
                  </div>
                </div>
              </div>

             <div class="ui card">
              <div class="content">
              <i class="fa fa-code-fork fa-service-icon" aria-hidden="true"></i>
                <div class="center aligned header">Full-stack development</div>
                  <div class="center aligned description">
                  <ul>
                      <li><i class="check circle icon"></i>Database architecture</li>
                      <li><i class="check circle icon"></i>Backend API development</li>
                      <li><i class="check circle icon"></i>Front-end API Integration</li>
                      <li><i class="check circle icon"></i>Responsive & modern UIs</li>
                      </ul>  
                </div>
              </div>
            </div>
        </div>
        <button class="ui primary button">Get in touch!</button>

       </div>

    </section>
  )
}

export default Services
