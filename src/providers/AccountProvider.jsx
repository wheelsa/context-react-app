import React from 'react'

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

export default class AccountProvider extends React.Component {
  state= {
    username: 'wheelsa',
    dateJoined: '3/22/2020',
    firstName: 'Seth',
    lastName: 'W',
    email: 'sw@mail.com',
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', 
    updateAccount: (account) => this.updateAccount(account)
}

  updateAccount = (account) => {
    this.setState({...account, })
  }

  render(){
    return(
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>

    )
  }
}

