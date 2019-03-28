import React from 'react'
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import moment from 'moment'

import Technologies from './Technologies/'
export default({item}) => {

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={`${moment(item.startDate).format("MMM YYYY")} - ${moment(item.endDate).format("MMM YYYY")}`}
            iconStyle={{
            background: 'white',
            color: '#fff'
        }}>
            <div className="logoContainer">
            <img className="logo" src={item.logo}/></div>
            <h3 className="vertical-timeline-element-title">{item.project}</h3>
            <h4 className="vertical-timeline-element-role">{item.role}</h4>
            <hr/>
            <p className="vertical-timeline-element-subtitle">{item.subtitle}</p>
            <p>{item.description}</p>
            {item.tags && item.tags.length > 0 && <div class="technologies">
                <h5>technologies used</h5>
               <Technologies tags={item.tags}/>
            </div>
}
        </VerticalTimelineElement>
    )
}