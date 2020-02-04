import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleMenus extends Component {
    state = {
        activeItem: ''
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item header>Demo App</Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        as={Link}
                        to="/register"
                        name='register'
                        active={activeItem === 'register'}
                        onClick={this.handleItemClick}
                    >
                        Register
                    </Menu.Item>

                    <Menu.Item
                        as={Link}
                        to="/login"
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >
                        Login
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}