import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../helpers/history';
import Header from './commons/Header';
import Register from './authentication/Register';
import Login from './authentication/Login';
import StoreProduct from './product/StoreProduct';
import UpdateProduct from './product/UpdateProduct';
import ProductList from './product/ProductList';
import { getAuthToken } from '../helpers/getAuthToken';


export default class App extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        const auth_token = getAuthToken();

        if (auth_token) {
            this.setState({
                isLoggedIn: true
            });
        }
    }

    render() {
        return (
            <Router history={history}>
                <Header isLoggedIn={this.state.isLoggedIn} />
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/products/add" component={StoreProduct} />
                    <Route exact path="/products/:product/edit" component={UpdateProduct} />
                    <Route exact path="/products" component={ProductList} />
                </Switch>
            </Router>
        )
    }
}
