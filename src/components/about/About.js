import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
const About =  () => {
 return (
   <div id="about">
   <h1>About</h1>

    <Card className="about">
      <CardHeader>
      </CardHeader>
      <CardText>
          <img src="images/barry.jpg" alt="image of Barry Ross"/>
          <p>My name is Barry Ross, and I am passionate about using technology to improve the quality and efficiency of our lives. In addition to implementing and maintaining my roster of clients’ presence on the web, I am currently working on two large-scale MEAN stack apps of my own creation, and teaching a Front-End Web Development course in Los Angeles. I am currently taking on new projects, so please reach out!</p>
      </CardText>
    </Card>
  </div>
   )
}

export default About
