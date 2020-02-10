import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './commons/Header';
import Register from './authentication/Register';
import Login from './authentication/Login';
import StoreProduct from './product/StoreProduct';
import UpdateProduct from './product/UpdateProduct';
import ProductList from './product/ProductList';
import { getAuthToken } from '../helpers/getAuthToken';


class App extends React.Component {
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

    handleLogout = () => {
        localStorage.removeItem('auth_token');
        this.setState({ isLoggedIn: false });
        // this.props.history.push('/');
        // console.log('logout');
    }

    render() {
        return (
            <Router>
                <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
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

export default App;