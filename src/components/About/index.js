import React from 'react'
import CallToAction from '../cta/cta'
import { Image } from 'semantic-ui-react'

const About = () => {
    return (
        <section id="about" class="primary-section">
					<div class="section-header-wrapper">
            <h1>Hi, I'm Barry.</h1>
						<h2>Full-stack web developer,
                    experienced instructor with entrepreneurial tendencies.</h2>
						</div>
            <div className="flex card inner-content-wrapper">
								<Image src="/images/barry.jpg" alt="image of Barry Ross" size="medium"/>
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
						<CallToAction/>
        </section>
    )
}
export default About
