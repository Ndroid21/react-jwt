import React, { Component } from 'react';
import { Form } from "semantic-ui-react";
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';
import ProductName from './fields/ProductName';
import ProductPrice from './fields/ProductPrice';
import CategoryList from '../category/CategoryList';

export default class StoreProduct extends Component {
    state = {
        isFormloading: false
    }

    render() {
        return (
            <CenteredGridLayout title="Add Product">
                <Form loading={this.state.isFormloading}>
                    <ProductName />
                    <ProductPrice />
                    <CategoryList />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}
