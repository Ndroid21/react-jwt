import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import history from '../../helpers/history';

export default class Header extends Component {
    state = {
        activeItem: '',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    renderMenuItems(activeItem) {
        const { isLoggedIn } = this.props;

        if (isLoggedIn){
            return (
                <React.Fragment>
                    <Menu.Item
                        as={Link}
                        to="/products"
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                    >
                        All Products
                    </Menu.Item>
                    <Menu.Item
                        onClick={this.props.handleLogout}
                    >
                        Logout
                    </Menu.Item>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
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
            </React.Fragment>
        );

    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item header>Demo App</Menu.Item>

                <Menu.Menu position='right'>
                    { this.renderMenuItems(activeItem) }
                </Menu.Menu>
            </Menu>
        );
    }
}