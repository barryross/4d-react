import React from 'react'
import ServiceItem from './ServiceItem/'
import Service from './Service/'
import { Grid, Image, Container} from 'semantic-ui-react'

const Services = () => {
    return (
        <section id="services" className="section">
									<div class="section-header-wrapper">

            <h1>Services</h1>
                <h2>What do I offer?</h2>
						</div>
            <div className="inner-content-wrapper">
							<Container textAlign="center">
                <Grid>
								<Grid.Column mobile={16} tablet={8} computer={8}>

                    <Service icon="fa fa-whatsapp fa-service-icon" label="Technical Consulting">
                        <ServiceItem text="Understanding and synthesis of your idea(s)"/>
                        <ServiceItem text="Suggestions to narrow the focus"/>
                        <ServiceItem text="Clear technical scope & direction"/>
                    </Service>
								</Grid.Column>
								<Grid.Column mobile={16} tablet={8} computer={8}>

                    <Service icon="fa fa-code-fork fa-service-icon" label="Full-stack development">
                        <ServiceItem text="Database architecture"/>
                        <ServiceItem text="Backend API development"/>
                        <ServiceItem text="Front-end API Integration"/>
                        <ServiceItem text="Responsive & modern UIs"/>
                    </Service>
									</Grid.Column>
                </Grid>
                <div class="cta-container"><button class="ui primary button">Get in touch!</button></div>
								</Container>
            </div>
        </section>
    )
}

export default Services
