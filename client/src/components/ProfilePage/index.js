import React from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import UserProfileCard from '../UserProfileCard'

const userDashboard = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={4}>
        <UserProfileCard/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
)

export default userDashboard