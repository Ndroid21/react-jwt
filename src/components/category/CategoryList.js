import React, { Component } from 'react';
import { Form } from "semantic-ui-react";
// import axios from 'axios';

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
            <Form.Field label='Category' control='select' value={this.props.value} name={this.props.name} onChange={this.props.onChange}>
                { this.state.categoryList.map(category => {
                    return <option key={category.value} value={category.value}>{category.text}</option>
                }) }
            </Form.Field>
        )
    }
}
