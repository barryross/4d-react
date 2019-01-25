import React, {Component} from 'react';
import {API_URI} from '../../common/globals'
import axios from 'axios'
import TimelineElement from './TimelineElement'
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export class Timeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timelineElements: []
        }
    }

    async componentDidMount() {
        let res = await axios.get(`${API_URI}/timeline`)
        this.setState({timelineElements: res.data.timeline})
    }

    render() {
        let {timelineElements} = this.state
        return (
            <section id="timeline">
                <h1>Timeline
                    <span>What's my story?</span>
                </h1>
                <VerticalTimeline>
                    {timelineElements.map(item => {
                        return (<TimelineElement item={item}/>)
                    })}
                </VerticalTimeline>
            </section>
        )
    }
}

export default Timeline