import React from 'react';
const NavStyles = require('./styles/NavStyles');

export default class App extends React.Component{

    state = {
    };

    render() {
        return (
            <div className='body'>
                <div style={NavStyles.sideNav}>
                    <div style={NavStyles.navLogo}>
                        <img src='/assets/images/logo.svg' style={NavStyles.logo} />
                        <h2>Arctic Panel</h2>
                    </div>

                    Side Navigation
                </div>

                <div style={NavStyles.rightContent}>
                    <div style={NavStyles.topNav}>
                        Top Navigation
                    </div>

                    <div style={NavStyles.content}>
                        Panel Content
                    </div>
                </div>
            </div>
        );
    }
}