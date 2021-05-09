import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SearchBtn = () => (
  <div>

    
        <Button animated as={Link} to='/search'>
      <Button.Content visible>Find a Fixer</Button.Content>
            <Button.Content hidden>
            <Icon name='cut' />
      </Button.Content>
    </Button>
  </div>
)

export default SearchBtn