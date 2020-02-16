import React from 'react';
import {withStyles, Menu, MenuItem, Button} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavStyles, MaterialStyles} from './../styles/NavStyles';
import ServersScreen from './../screens/ServersScreen';
const Navigation = require('./../utils/Navigation');
const Theme = require('./../styles/Theme');

class PanelPage extends React.Component {

    state = {
        active: 'Servers',
        dropdown: [],
        Screen: ServersScreen,
        optionsAnchor: null,
        showNavText: true,
        //Set Default Universal Resolution
        width: 1920,
        height: 1080
    };

    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
        if(window.innerWidth < 800) {
            this.setState({showNavText: false});
        }else if(window.innerWidth > 800) {
            this.setState({showNavText: true});
        }
    };

    setOptionsAnchor = (event) => {
        let target = event.currentTarget;
        this.setState({optionsAnchor: target});
    };

    closeUserOptions = () => {
        this.setState({optionsAnchor: null});
    };

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
        let {Screen, active, dropdown, optionsAnchor, showNavText} = this.state;
        let {classes} = this.props;

        return (
            <div className='body' style={{display: 'flex', flexDirection: 'row'}}>
                <div style={NavStyles.sideNav}>
                    <div style={NavStyles.navLogo}>
                        <img src='/assets/images/logo.png' alt='logo' style={NavStyles.logo} />
                        <h2 style={NavStyles.logoText}>Arctic Panel</h2>
                    </div>
                    <hr style={NavStyles.divider} />

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>General</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'general', this.toggleDropdown, dropdown, this.props, active, this.navigate, showNavText)}

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>Server</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'server', this.toggleDropdown, dropdown, this.props, active, this.navigate, showNavText)}

                    <div style={NavStyles.navCategory}>
                        <p style={NavStyles.categoryText}>Admin</p>
                    </div>
                    {Navigation.renderCategory(Navigation.mainNavigation, 'admin', this.toggleDropdown, dropdown, this.props, active, this.navigate, showNavText)}
                </div>

                <div style={NavStyles.rightContent}>
                    <div style={NavStyles.topNav}>
                        <p style={NavStyles.screenTitle}>{active}</p>
                        <div style={NavStyles.userContent}>
                            <Button aria-controls='userOptions' aria-owns='userOptions' aria-haspopup='true' onClick={this.setOptionsAnchor}>
                                <AccountCircleIcon style={{color: Theme.navTextColor, marginRight: 5}} />
                                <p style={{color: Theme.navTextColor, fontSize: '100%'}}>abused_master</p>
                            </Button>

                            <Menu
                                open={Boolean(optionsAnchor)}
                                anchorEl={optionsAnchor}
                                onClose={this.closeUserOptions}
                                id='userOptions'
                                elevation={0}
                                getContentAnchorEl={null}
                                anchorOrigin={{vertical: 'bottom'}}
                                transformOrigin={{vertical: 'top'}}
                            >
                                <MenuItem onClick={() => {
                                    let settingsOpt = Navigation.mainNavigation.general[1];
                                    this.navigate(settingsOpt.name, settingsOpt.screen);
                                    this.closeUserOptions();
                                }}><i style={{marginRight: 5}} className='fas fa-cog' /> Settings</MenuItem>
                                <MenuItem className={classes.logoutItem} onClick={null}><i style={{marginRight: 5}} className='fas fa-sign-out-alt' /> Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div style={NavStyles.content}>
                        {Screen != null ? <Screen /> : 'Unknown Screen!'}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(MaterialStyles)(PanelPage);