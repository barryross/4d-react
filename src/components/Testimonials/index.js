import React, {Component} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Testimonial from './Testimonial/'
import {API_URI, SLIDER_SETTINGS} from '../../common/globals'

class Testimonials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testimonials: []
        }
    }

    async componentDidMount() {
        let res = await axios.get(`${API_URI}/testimonials`);
        this.setState({testimonials: res.data.testimonials})
    }

    render() {
        const {testimonials} = this.state;
        return (
            <section id="testimonials" class="primary-section">
                <div class="section-header-wrapper">
                    <h1>Testimonials</h1>
                </div>
                <div className="inner-content-wrapper">
                    <Slider {...SLIDER_SETTINGS}>
                        {testimonials.map(data => {
                            return (<Testimonial data={data}/>)
                        })
											}
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Testimonials
