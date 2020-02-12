import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import { getAuthToken } from '../../helpers/getAuthToken';

import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';


export default class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        const auth_token = getAuthToken();
        axios.get('http://127.0.0.1:8000/api/products', {
                headers: {
                    'Authorization': `Bearer ${auth_token}`
                }
            })
            .then((response) => { this.setState({ products: response.data }); })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <CenteredGridLayout title="Products List">
                <Link to="/products/add" className="ui right floated compact primary button">Add New Product</Link>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.products.map((product) => (
                            <Table.Row key={product.id}>
                                <Table.Cell>{ product.name }</Table.Cell>
                                <Table.Cell>{ product.price }</Table.Cell>
                                <Table.Cell>{ product.category.name }</Table.Cell>
                                <Table.Cell><Link to={`/products/${product.id}/edit`}>Edit</Link></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </CenteredGridLayout>
        )
    }
}
