import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Divider, Grid, Header, Icon, Search, Segment,} from 'semantic-ui-react'

const signUpDivider = () => (

  <Segment placeholder>
      
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Search Fixer 
          </Header>

          <Search placeholder='Search countries...' />
        </Grid.Column>

        <Grid.Column>
          <Header >
            <Icon name='user' />
            Sign in 
          </Header>
        <Button primary as={Link} to="/createaccount">Create</Button>
                    
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default signUpDivider