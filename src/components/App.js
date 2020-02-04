import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './commons/Header';
import Register from './authentication/Register';
import Login from './authentication/Login';
import StoreProduct from './product/StoreProduct';
import UpdateProduct from './product/UpdateProduct';
import ProductList from './product/ProductList';

export default function App() {
    return (
        <Router>
            <Header/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products/add" component={StoreProduct} />
            <Route exact path="/products/:product/edit" component={UpdateProduct} />
            <Route exact path="/products" component={ProductList} />
        </Router>
    )
}
