import React from 'react'
import { Container } from 'semantic-ui-react'


export default () => {
	return (
		<React.Fragment>
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
				</React.Fragment>
	)
}