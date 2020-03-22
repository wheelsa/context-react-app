import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const AccountCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header> Your Profile Page</Card.Header>
      <Card.Meta>
      <span className='date'> Date Joined: dateJoined </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <h3> First Name: </h3>
      <h3> Last Name: </h3>
      <h3> Email: </h3>
    </Card.Content>
  </Card>
)

export default AccountCard