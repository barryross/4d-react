import React, { Component } from 'react';
import {API_URI} from '../../common/globals'
import {icons} from '../../common/icons'
import {find} from 'lodash'
import axios from 'axios'
import moment from 'moment'
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
  }

  async componentDidMount(){
	let res =  await axios.get(`${API_URI}/timeline`)
      console.log("Timeline response", res)	
	this.setState({timeline: res.data.timeline})
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
              date={`${moment(item.startDate).format("MMM YYYY")} - ${moment(item.endDate).format("MMM YYYY")}`}
              iconStyle={{ background: 'white', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <div className="logoContainer"> <img className="logo" src={item.logo}/></div>
              <h3 className="vertical-timeline-element-title">{item.project}</h3>
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