import React, {Component} from 'react'
import firebase from '../../common/firebase.js';
import Slider from "react-slick";

class Testimonials extends Component {
  constructor(props){
    super(props)

    this.state = {
      testimonials:[]
    }
   const testimonials = firebase.database().ref('testimonials/');
   testimonials.on('value', ((snapshot)=>{
     let filtered = snapshot.val().filter((o)=>!o.hidden) //Filter out items that are set to hidden
      this.setState({testimonials:filtered});
    }));
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
                          <img alt="avatar" class="avatar" src={testimonial.avatar ? `images/testimonials/${testimonial.avatar}` : defaultImage}/> 
                          <cite>{testimonial.citation}</cite>
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
