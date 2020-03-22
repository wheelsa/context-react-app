import React from 'react'
import AccountCard from '../components/AccountCard'
import ConnectedAccountForm from '../components/AccountForm'

const AccountProfile = () => (
  <>
    <h1> Account Profile Page </h1>
    <AccountCard />
    <hr></hr>
    <h2>Update Your Account Info</h2>
    <ConnectedAccountForm />
  </>

)

export default AccountProfile