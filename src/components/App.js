import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../helpers/history';
import Header from './commons/Header';
import Register from './authentication/Register';
import Login from './authentication/Login';
import StoreProduct from './product/StoreProduct';
import UpdateProduct from './product/UpdateProduct';
import ProductList from './product/ProductList';


class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to={{pathname: "/login"}} />
                    </Route>
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

export default App;