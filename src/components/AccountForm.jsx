import React from 'react'
import { Form } from 'semantic-ui-react'

export default class AccountForm extends React.Component {
  state = { 
    username: '', 
    firstName: '', 
    lastName: '', 
    avatar: '' ,
    email: ''}


  handleChange = (e, { name, value }) => this.ListeningStateChangedEvent({ [name]: value,})
    
  

  handleSubmit = (e) => {
      e.preventDefault()
  }

  render() {
    const { username, firstName, lastName, avatar, email } = this.state;

    return (
      
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Change Username'
          type='text'
          name="username"
          value= {username}
          onChange={this.handleChange}
        />
         <Form.Input 
          label='First Name'
          type='text'
          name="firstName"
          value= {firstName}
          onChange={this.handleChange}
        />
         <Form.Input 
          label='Last Name'
          type='text'
          name="lastName"
          value= {lastName}
          onChange={this.handleChange}
        />
        <Form.Input 
          label='Email'
          type='email'
          name="email"
          value= {email}
          onChange={this.handleChange}
        />
        <Form.Input 
          label='Avatar'
          type='text'
          name="avatar"
          value= {avatar}
          onChange={this.handleChange}
        />
        <Form.Button color='blue'>Save</Form.Button>
      </Form>
    )
  }
}
  
