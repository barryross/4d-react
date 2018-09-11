import React, { Component } from 'react';
import firebase from '../../common/firebase.js';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function WorkIcon(){
  return <i class="fa fa-briefcase" aria-hidden="true"></i>
}

export class Timeline extends Component {
  constructor(props){
    super(props)

    this.state = {
      timeline:[]
    }
   const timeline = firebase.database().ref('timeline/');
   timeline.on('value', ((snapshot)=>{
     let filtered = snapshot.val() //Filter out items that are set to hidden
      this.setState({timeline:filtered});
    }));
  }

render(){
  return(
<section id="timeline">
    <h1>Timeline <span>What's my story?</span></h1>

    <VerticalTimeline>
      {
        this.state.timeline.length > 0 && this.state.timeline.map(item =>{
          return (
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={item.date}
            iconStyle={{ background: 'white', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>
            {item.description}
            </p>
          </VerticalTimelineElement>
          )
        })
      }
      
    </VerticalTimeline>
    </section>
  )
  }
}

export default Timeline