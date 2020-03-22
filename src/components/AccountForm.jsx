import React from 'react'
import { Form } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

class AccountForm extends React.Component {
  state = { 
    username: this.props.username, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    avatar: this.props.avatar ,
    email: this.props.email
  };

  handleChange = (e, { name, value }) => 
  this.setState({ [name]: value,});
    
  

  handleSubmit = (e) => {
      e.preventDefault()
      const account = {...this.state,};
      this.props.updateAccount(account)
  };

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

const ConnectedAccountForm = (props) => {
  return(
    <AccountConsumer>
      { value => (
        <AccountForm 
          {...props}
          username={value.username}
          firstName={value.firstName}
          lastName={value.lastName}
          avatar={value.avatar}
          email={value.email}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>

  )
};

export default ConnectedAccountForm
