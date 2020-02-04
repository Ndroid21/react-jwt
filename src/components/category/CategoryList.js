import React, { Component } from 'react';
import { Form, Select } from "semantic-ui-react";
import axios from 'axios';

export default class CategoryList extends Component {
    state = {
        categoryList: [
            {
                key: 1,
                text: 'Shoes',
                value: 1
            },
            {
                key: 2,
                text: 'Electronics',
                value: 2
            },
            {
                key: 3,
                text: 'Fashion',
                value: 3
            }
        ]
    }

    render() {
        return (
            <Form.Field required>
                <label>Category</label>
                <Select placeholder='Select Category' value={this.props.value} options={this.state.categoryList} />
            </Form.Field>
        )
    }
}
