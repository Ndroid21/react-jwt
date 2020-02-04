import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import CenteredGridLayout from '../commons/layouts/CenteredGridLayout';
import ProductName from './fields/ProductName';
import ProductPrice from './fields/ProductPrice';
import CategoryList from '../category/CategoryList';


export default class UpdateProduct extends Component {
    state = {
        isFormloading: false,
        name: '',
        price: '',
        category: ''
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/products/${this.props.match.params.product}`)
        .then((response) => {console.log(response); this.setState({name: response.data.name, price: response.data.price, category: response.data.category_id});})
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <CenteredGridLayout title="Edit Product">
                <Form loading={this.state.isFormloading}>
                    <ProductName value={this.state.name} />
                    <ProductPrice value={this.state.price} />
                    <CategoryList value={this.state.category} />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}