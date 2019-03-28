import React from 'react'
import { Container } from 'semantic-ui-react'

const About = () => {
    return (
        <section id="about" class="primary-section">
					<div class="section-header-wrapper">
            <h1>Hi, I'm Barry.</h1>
						<h2>Full-stack web developer,
                    experienced instructor with entrepreneurial tendencies.</h2>
						</div>
            <div className="card inner-content-wrapper">
                <div>
                    <img src="/images/barry.jpg" alt="image of Barry Ross"/>
                </div>
                <div className="about-text">
                    <p>
                        <strong>I am an experienced full-stack developer, creative thinker, and
                            consultant with 10+ years of industry experience.
                        </strong>
                    </p>
                    <p>I am self-starting, creative-minded, and passionate about technology.</p>
                    <p>
                        <strong>I am an experienced instructor,</strong>
                        having taught both General Assembly's Front-End Web Development course and their
                        Web Development Immersive (WDI) program.</p>
                    <p>
                        <strong>I have entrepreneurial tendencies,</strong>
                        currently expressed through my work on two apps I've been inspired to create;
                        one to encourage and track daily gratitude, and the other to help individuals
                        establish, breakdown and track their goals.</p>
                </div>
            </div>
            <h4 class="ui horizontal divider header">
                <i class="phone icon"></i>Availability
            </h4>
						<Container textAlign="center">
            <div class="cta-container">
						<div class="cta">
                <h4>
                    I am currently available for light contract work,
                    <br/>as well as for consulting regarding technical project scope and breakdown
                </h4>
            </div>
            <button class="ui primary button">Get in touch!</button>
						</div>
						</Container>
        </section>
    )
}
export default About
