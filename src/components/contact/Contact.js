
import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]



export default class Contact extends Component{
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const { value } = this.state

    return (
      <section id="contact">
        <h1>Contact</h1>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Input label='Email' placeholder='Email' />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>    
       </section>
     )
  }
  
}
