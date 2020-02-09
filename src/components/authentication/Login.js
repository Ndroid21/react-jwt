import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import axios from 'axios';
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';
import { getAuthToken } from '../../helpers/getAuthToken';

class Login extends Component {
    state = {
        isFormloading: false,
        email: '',
        password: ''
    };

    componentDidMount() {
        const auth_token = getAuthToken();
        console.log(auth_token);
        if (auth_token) {
            this.props.history.push('/products');
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.setState({ isFormloading: true });
        axios.post('http://localhost:8000/api/login', {
            email,
            password
        })
            .then((response) => { console.log(response); localStorage.setItem('auth_token', response.data.token); this.setState({ isFormloading: false, email: '', password: '' }); this.props.history.push('/products'); })
            .catch((error) => { console.log(error); this.setState({ isFormloading: false }); })
    }

    render() {
        const { email, password } = this.state;
        return (
            <CenteredGridLayout title="Login">
                <Form loading={this.state.isFormloading} onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Email</label>
                        <Input type='email' name='email' placeholder='joe@email.com' value={email} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input type='password' name='password' placeholder='secret password' value={password} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}

export default Login;