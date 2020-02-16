const Theme = require('./Theme');

let LoginStyles = {
    loginBody: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTitle: {
        fontWeight: 'bold',
        color: Theme.textColor,
        marginBottom: 0
    },
    invalidLogin: {
        color: Theme.redColor,
        marginTop: 5,
        marginBottom: 0
    },
    logo: {
        width: '8vh',
        height: '8vh',
        padding: 0,
        margin: 0,
        backgroundColor: Theme.sideNavLeftColor,
        borderRadius: 'calc(8vh / 2)'
    }
};

const MaterialLoginStyles = theme => ({
    loginCard: {
        width: 'auto',
        height: 'auto',
        minWidth: '15%',
        minHeight: '15%',
        maxHeight: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    loginForm: {
        textAlign: 'center'
    },
    textField: {
        marginTop: 10,
        width: '100%'
    },
    loginBtn: {
        background: 'linear-gradient(45deg, ' + Theme.buttonLeftColor + ' 30%, ' + Theme.buttonRightColor + ' 90%)',
        //Cool Blue Gradient Too
        //background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: Theme.navTextColor,
        marginTop: 20,
        width: '100%'
    }
});

export {LoginStyles, MaterialLoginStyles};