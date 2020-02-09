import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import axios from 'axios';
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';
import { getAuthToken } from '../../helpers/getAuthToken';

class Register extends Component{
    state = {
        isFormloading: false,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    componentDidMount(){
        const auth_token = getAuthToken();
        console.log(auth_token);
        if(auth_token){
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
        const { name, email, password, password_confirmation } = this.state;
        this.setState({ isFormloading: true });
        axios.post('http://localhost:8000/api/register', {
            name,
            email,
            password,
            password_confirmation
        })
            .then((response) => { console.log(response); localStorage.setItem('auth_token', response.data.token); this.setState({ isFormloading: false, name: '', email: '', password: '', password_confirmation: '' }); this.props.history.push('/products'); })
            .catch((error) => { console.log(error); this.setState({ isFormloading: false });});
    }

    render() {
        const { name, email, password, password_confirmation } = this.state;
        return(
            <CenteredGridLayout title="Register">
                <Form loading={this.state.isFormloading} onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Name</label>
                        <Input type='text' name='name' placeholder='Your Name' value={name} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Email</label>
                        <Input type='email' name='email' placeholder='joe@email.com' value={email} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input type='password' name='password' placeholder='secret password' value={password} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm Password</label>
                        <Input type='password' name='password_confirmation' placeholder='secret password' value={password_confirmation} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}

export default Register;