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
                        Logo
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