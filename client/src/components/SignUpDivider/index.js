import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Header, Icon, Container } from 'semantic-ui-react'

const signUpDivider = () => {
  return (

      <Container>

      <Grid columns={2}>
        
        <Grid.Column verticalAlign='middle'>

        <Grid.Row>
          <Header>
          <Icon name='cut' />
          TRS Members
          </Header>
          <Button as={Link} to="/loginaccount">Login</Button>
          </Grid.Row>

        </Grid.Column>

        <Grid.Column verticalAlign='middle'>

        <Grid.Row>
          <Header >
          <Icon name='user' />
          Join TRS
          </Header>
          <Button as={Link} to="/createaccount">Signup</Button>
          </Grid.Row>

        </Grid.Column>

      </Grid>

    </Container>


  )
}

export default signUpDivider