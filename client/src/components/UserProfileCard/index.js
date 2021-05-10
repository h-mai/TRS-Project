import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const userCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Joe Schmoe</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Joe is a tailor.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Certified User
      </a>
    </Card.Content>
  </Card>
)

export default userCard