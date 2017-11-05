import React from 'react'
import Paper from 'material-ui/Paper';
const About =  () => {
 return (
<section id="about">
  <Paper zDepth={3} children={<h1>About</h1>}/>
  
  <Paper zDepth={2} className="card about wrapper">
        <div>
          <img src="images/barry.jpg" alt="image of Barry Ross"/>
         </div>
        <div className={"about-text"}>
            <p>My name is Barry Ross, and I am passionate about using technology to improve the quality and efficiency of our lives. In addition to implementing and maintaining my roster of clients’ presence on the web, I am currently working on two large-scale MEAN stack apps of my own creation, and teaching a Front-End Web Development course in Los Angeles. I am currently taking on new projects, so please reach out!</p>
        </div>
    </Paper>
</section>
   )
}

export default About
