
import React, {Component} from 'react';
import { Form, Message } from 'semantic-ui-react';
import SubscribeFrom from 'react-mailchimp-subscribe';


export default class Contact extends Component{

  constructor(props){
    super(props)
    this.state = {
        fname:"",
        lname:"",
        email:"",
        message:"",
        formSuccess:false
      }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = () => {
    fetch('https://formspree.io/barry@4d-media.ca', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(()=>{
      this.setState(
        {
          fname:"",
          lname:"",
          email:"",
          message:"",
          formSuccess:true
        }
      )
    })
  }
  render(){
    const { value } = this.state
    const {fname, lname, email, message}  = this.state;

    return (
      <section id="contact">
        <FormComp/>
        <h1>Contact</h1>
      <Form success={this.state.formSuccess} onSubmit={this.handleSubmit}>
        <Message
             success
             header='Form Completed'
             content="Thank you for your submission.  I will be in touch shortly!"
           />
            <Form.Group widths='equal'>
              <Form.Input name="fname" value={fname} label='First name' placeholder='First name' onChange={this.onChange}/>
            <Form.Input name="lname" value={lname} label='First name' placeholder='Last name' onChange={this.onChange}/>
          <Form.Input name="email" value={email} label='Email' placeholder='Email' onChange={this.onChange}/>
            </Form.Group>
            <Form.TextArea name="message" value={message} label='Message' placeholder='What can I help you with?' onChange={this.onChange}/>

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
