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

    handleSubmit = () => {
        this.setState({isFormloading: true});
        const { name, price, category } = this.state;

        axios.put(`http://127.0.0.1:8000/api/products/${this.props.match.params.product}`, {
            name,
            price,
            category
        })
            .then((response) => { this.setState({ isFormloading: false }); })
            .catch((error) => { console.log(error); this.setState({ isFormloading: false });});
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/products/${this.props.match.params.product}`)
        .then((response) => { this.setState({name: response.data.name, price: response.data.price, category: response.data.category_id});})
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <CenteredGridLayout title="Edit Product">
                <Form loading={this.state.isFormloading} onSubmit={this.handleSubmit}>
                    <ProductName name="name" value={this.state.name} onChange={this.handleChange} />
                    <ProductPrice name="price" value={this.state.price} onChange={this.handleChange} />
                    <CategoryList name="category" value={this.state.category} onChange={this.handleChange} />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </CenteredGridLayout>
        );
    }
}