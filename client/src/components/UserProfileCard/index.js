import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const userCard = ({user}) => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />

    <Card.Content>

      <Card.Header>
        
        {user.firstName} {user.lastName}
      
      </Card.Header>

      <Card.Header>
        
        {user.company} 
      
      </Card.Header>

      <Card.Meta>

        <span className='date'></span>

      </Card.Meta>

      <Card.Description>

        
      </Card.Description>

    </Card.Content>

    <Card.Content extra>

      <a>
        <Icon name='user' />
      </a>
    </Card.Content>
  </Card>
)

export default userCard