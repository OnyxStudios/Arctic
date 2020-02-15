const Theme = require('./Theme');

let ServersStyles = {
    running: {
        color: Theme.navTextColor,
        fontWeight: 'bold',
        backgroundColor: Theme.greenColor,
        borderRadius: 2,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px ' + Theme.boxShadowColor
    },
    offline: {
        color: Theme.navTextColor,
        fontWeight: 'bold',
        backgroundColor: Theme.redColor,
        borderRadius: 2,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px ' + Theme.boxShadowColor
    }
};

const MaterialServerStyles = theme => ({
    serverBody: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 50,
        overflowY: 'auto'
    },
    serverCard: {
        position: 'relative',
        maxWidth: '30%',
        width: '100%',
        height: 'auto',
        maxHeight: '20%',
        overflow: 'initial',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 50
    },
    serverIcon: {
        position: 'absolute',
        width: '20%',
        marginTop: -25,
        marginLeft: 20,
        backgroundColor: Theme.blueColor,
        borderRadius: 2,
        boxShadow: '8px 10px 24px -5px rgba(0, 0, 0, 0.50)'
    },
    serverInfo: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    serverInfoGrid: {
        marginLeft: 'calc(20% + 20px)',
        width: 'calc(100% - (20% + 20px))',
        paddingLeft: 10,
        paddingRight: 20
    }
});

export {ServersStyles, MaterialServerStyles};