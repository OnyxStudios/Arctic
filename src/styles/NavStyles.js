const Theme = require('./Theme');

let NavStyles = {
    sideNav: {
        backgroundColor: Theme.sideNavColor,
        width: '15%',
        height: '100%',
        zIndex: 1,
        boxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        webkitBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        mozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor
    },
    navLogo: {
        width: '100%',
        height: '8%',
        backgroundColor: Theme.logoBGColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '2px solid ' + Theme.navBorderColor
    },
    logo: {
        width: '8vh',
        height: '8vh'
    },
    rightContent: {
        width: '85%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    topNav: {
        width: '100%',
        height: '8%',
        backgroundColor: Theme.topNavColor,
        zIndex: 1,
        boxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        webkitBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        mozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor
    },
    content: {
        width: '100%',
        height: '92%',
        backgroundColor: Theme.contentColor
    }
};

module.exports = NavStyles;