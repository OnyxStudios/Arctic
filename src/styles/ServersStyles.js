const Theme = require('./Theme');

let ServersStyles = {
    serversBody: {
        overflowY: 'auto',
        width: '100%',
        height: '100%'
    },
    serversGrid: {
        width: '100%',
        marginTop: 100
    },
    serverCard: {
        position: 'relative',
        borderRadius: 4,
        marginBottom: 50,
        boxShadow: '8px 10px 24px -5px ' + Theme.boxShadowColor
    },
    cardHeader: {
        backgroundColor: Theme.serverCardColor,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        color: Theme.serverCardTextColor
    },
    serverInfo: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    serverIcon: {
        height: '100%',
        backgroundColor: Theme.blueColor
    },
    serverStatus: {
        width: '20%',
        textShadow: '2px 2px 4px ' + Theme.boxShadowColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardFooter: {
        width: '100%',
        height: '70%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: Theme.serverCardTextColor
    },
    serverSpecs: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    gameLogo: {
        width: '100%',
        textAlign: 'center'
    }
};

export {ServersStyles};