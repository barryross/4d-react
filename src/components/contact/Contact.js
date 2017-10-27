
import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import SubscribeFrom from 'react-mailchimp-subscribe';

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
        <FormComp/>
        <h1>Contact</h1>
      <Form action="https://4d-media.us6.list-manage.com/subscribe/post">
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

const formProps = {
  action: '//4d-media.us6.list-manage.com/subscribe/post',
  messages: {
    inputPlaceholder: "Name",
    btnLabel: "Name",
    sending: "Envoi en cours...",
    success: "Merci de votre intérêt!",
    error: "teest"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}
const FormComp = () => <SubscribeFrom {...formProps}/>
