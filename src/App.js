import React from 'react';
import {withStyles} from "@material-ui/core";
import {NavStyles, MaterialStyles} from './styles/NavStyles';
import ServersScreen from './screens/ServersScreen';
const Navigation = require('./utils/Navigation');

class App extends React.Component {

    state = {
        active: 'Servers',
        dropdown: [],
        Screen: ServersScreen
    };

    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    toggleDropdown(name) {
        let {dropdown} = this.state;

        if(~dropdown.indexOf(name)) {
            dropdown.splice(dropdown.indexOf(name), 1);
        }else {
            dropdown.push(name);
        }

        this.setState({dropdown});
    }

    navigate(name, screen) {
        this.setState({active: name, Screen: screen});
    }

    render() {
        let {Screen, active, dropdown} = this.state;

        return (
            <div className='body'>
                <div style={NavStyles.sideNav}>
                    <div style={NavStyles.navLogo}>
                        <img src='/assets/images/logo.svg' alt='logo' style={NavStyles.logo} />
                        <h2 style={NavStyles.logoText}>Arctic Panel</h2>
                    </div>
                    <hr style={NavStyles.divider} />

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>General</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'general', this.toggleDropdown, dropdown, this.props, active, this.navigate)}

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>Server</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'server', this.toggleDropdown, dropdown, this.props, active, this.navigate)}

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>Admin</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'admin', this.toggleDropdown, dropdown, this.props, active, this.navigate)}
                </div>

                <div style={NavStyles.rightContent}>
                    <div style={NavStyles.topNav}>
                        Top Navigation
                    </div>

                    <div style={NavStyles.content}>
                        {Screen != null ? <Screen /> : 'Unknown Screen!'}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(MaterialStyles)(App);