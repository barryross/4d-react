import React, {Component} from 'react'
import Slider from "react-slick";
import {API_URI} from '../../common/globals'

import axios from 'axios'
class Testimonials extends Component {
  constructor(props){
    super(props)

    this.state = {
      testimonials:[]
    }

  }

  async componentDidMount(){
	  let res =  await axios.get(`${API_URI}/testimonials`);
	console.log("RES", res)	
	  this.setState({testimonials: res.data.testimonials})
	}
  render(){
    const defaultImage = "https://i2.wp.com/www.ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?w=204"
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight:true
    };
	console.log("these testimonials", this.testimonials)
    return (
      <section id="testimonials">
       <h1>Testimonials</h1>
        <div>
            <Slider {...settings}>
            {
                this.state.testimonials.length > 0 && this.state.testimonials.map(testimonial => {
                  return (
                    <blockquote>
                      {testimonial.logo === undefined}
                      <p> 
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        {testimonial.content}
                      </p>  
                      <footer>
                        <div>
                          <img alt="avatar" class="avatar" src={testimonial.avatar ? testimonial.avatar.secure_url: defaultImage}/> 
                          <cite>{testimonial.name.first} {testimonial.name.last}</cite>
                        </div>
                        <a href="testimonial.website">{testimonial.website}</a>
                      </footer>
                    </blockquote>
                  )
                })
              }
            </Slider>
          </div>
      </section>
    )
  }


}

export default Testimonials
