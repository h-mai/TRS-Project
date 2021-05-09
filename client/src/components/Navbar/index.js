import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input, Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon>

        <Menu.Item as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='cut' />
          TRS | THE REPAIR SOCIETY
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
          <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item as={Link} to='/signUp'
            name='Sign Up'
            active={activeItem === 'Sign Up'}
            onClick={this.handleItemClick}
          >
            <Icon name='user' />

          </Menu.Item>

        </Menu.Menu >

      </Menu >

    )
  }
}