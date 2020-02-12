import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import history from '../../helpers/history';
import { getAuthToken } from '../../helpers/getAuthToken';

export default class Header extends Component {
    state = {
        isLoggedIn: false,
        activeItem: '',
    }

    componentDidMount() {
        const auth_token = getAuthToken();

        if (auth_token) {
            this.setState({
                isLoggedIn: true
            });
        }
    }

    handleLogout = () => {
        history.push('/');
        localStorage.removeItem('auth_token');
        this.setState({ isLoggedIn: false });
        console.log('logout');
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    renderMenuItems(activeItem) {
        const { isLoggedIn } = this.state;

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
                        onClick={this.handleLogout}
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