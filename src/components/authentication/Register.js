import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';

class Register extends Component{
    state = {
        isFormloading: false,
    };

    render() {
        return(
            <CenteredGridLayout title="Register">
                <Form loading={this.state.isFormloading}>
                    <Form.Field required>
                        <label>Name</label>
                        <Input type='text' placeholder='Your Name' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Email</label>
                        <Input type='email' placeholder='joe@email.com' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input type='password' placeholder='secret password' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm Password</label>
                        <Input type='password' placeholder='secret password' />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}

export default Register;