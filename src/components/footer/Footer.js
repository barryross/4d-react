import React, {Component} from 'react'
import './footer.css'
import { Segment, List, Grid, Header, Container } from 'semantic-ui-react'

export default class Footer extends Component  {

render(){
	return (
		<Segment inverted vertical style={{ padding: '5em 0em' }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header as='h4' inverted>
							Contact
							</Header>
							<List>
								<List.Item>
									<List.Icon name='phone' />
									<List.Content>
									360-526-1582
									</List.Content>
								</List.Item>
								<List.Item>
									<a href="https://www.linkedin.com/in/barry-ross-a3b19520/" target="_blank">
										<List.Icon name='linkedin' />
									</a>
									<a href="https://www.github.com/barryross" target="_blank">
										<List.Icon name='github' />
									</a>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={6}>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	)
}
}
