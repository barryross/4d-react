import React, {Component} from 'react';
import axios from 'axios'
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline} from 'react-vertical-timeline-component';

import {API_URI} from '../../common/globals'
import TimelineElement from './TimelineElement/'

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
			<section id="timeline" class="primary-section">
				<div class="section-header-wrapper">
					<h1>Timeline</h1>
					<h2>What's my story?</h2>
				</div>
				<div className="inner-content-wrapper">
					<VerticalTimeline>
					{timelineElements.map(item => {
						return (<TimelineElement item={item}/>)
					})}
					</VerticalTimeline>
				</div>
			</section>
			)
  }
}

export default Timeline