import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PanelPage from './pages/PanelPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

export default class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={LoginPage} exact />
                    <Route path='/panel' component={PanelPage} exact />
                    <Route path='/admin' component={AdminPage} exact />
                </Switch>
            </Router>
        );
    }
}