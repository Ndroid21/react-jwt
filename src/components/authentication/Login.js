import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';

class Login extends Component {
    state = {
        isFormloading: false,
    };

    render() {
        return (
            <CenteredGridLayout title="Login">
                <Form loading={this.state.isFormloading}>
                    <Form.Field required>
                        <label>Email</label>
                        <Input type='email' placeholder='joe@email.com' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input type='password' placeholder='secret password' />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}

export default Login;