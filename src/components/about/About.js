import React from 'react'
const About =  () => {
	return (
		<section id="about">
			<h1>Hi, I'm Barry.<span>Full-stack web developer, <br/>experienced instructor with entrepreneurial tendencies.</span> </h1>
			<div className="card about wrapper">
				<div>
					<img src="/images/barry.jpg" alt="image of Barry Ross"/>
				</div>
				<div className={"about-text"}>
					<p> <strong>I am an experienced full-stack developer, creative thinker, and consultant with 10+ years of industry experience. </strong>
					</p><p>I am self-starting, creative-minded, and passionate about technology.</p>
					<p><strong>I am an experienced instructor,</strong> having taught both General Assembly's Front-End Web Development course and their Web Development Immersive (WDI) program.</p>
					<p><strong>I have entrepreneurial tendencies,</strong> currently expressed through my work on two apps I've been inspired to create; one to encourage and track daily gratitude, and the other to help individuals establish, breakdown and track their goals.</p>
				</div>
			</div>
			<h4 class="ui horizontal divider header">
				<i class="phone icon"></i>Availability
			</h4>
			<div class="cta">
				<h4>
					I am currently available for light contract work, <br/>as well as for consulting regarding technical project scope and breakdown 
				</h4>
			</div>
			<button class="ui primary button">Get in touch!</button>
		</section>
	)
}
export default About
