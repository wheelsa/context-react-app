import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

const AccountCard = () => (
  <AccountConsumer> 
    { value => (
    <Card>
      <Image src={`${value.avatar}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header> Your Profile Page</Card.Header>
        <Card.Meta>
        <span className='date'> Date Joined: {value.dateJoined} </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <h3> First Name:{value.firstName} </h3>
        <h3> Last Name: {value.lastName}  </h3>
        <h3> Email:{value.email}  </h3>
      </Card.Content>
    </Card>

    )}
  </AccountConsumer>
)

export default AccountCard