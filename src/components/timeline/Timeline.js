import React, { Component } from 'react';
import firebase from '../../common/firebase.js';
import {icons} from '../../common/icons'
import {find} from 'lodash'
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
  let {timeline} = this.state
  return(
<section id="timeline">
    <h1>Timeline <span>What's my story?</span></h1>

    <VerticalTimeline>
      {
        timeline && timeline.length > 0 && timeline.map(item =>{
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: 'white', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <div className="logoContainer"> <img className="logo" src={item.logo}/></div>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-role">{item.role}</h4>
              <hr/>
              <p className="vertical-timeline-element-subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
                {item.tags && item.tags.length > 0 &&
                 <div class="technologies">
                  <h5>technologies used</h5>
                  <ul>
                    {item.tags.map(tag=>{
                      console.log("LOOKING FOR", tag)
                      let obj = find(icons, {tag:tag});
                      return <li><i class={obj.icon}></i></li>
                    })}
                  </ul>
              </div>
            }
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