import React, {useContext} from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AccountContext } from '../providers/AccountProvider'

const AccountCard = () => {
  const {dateJoined, avatar, firstName, lastName, username, email} = useContext(AccountContext);
  return(
    <Card>
      <Image src={`${avatar}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header> {username}</Card.Header>
        <Card.Meta>
        <span className='date'> Date Joined: {dateJoined} </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <h3> First Name:{firstName} </h3>
        <h3> Last Name: {lastName}  </h3>
        <h3> Email:{email}  </h3>
      </Card.Content>
    </Card>

)}

export default AccountCard