import Theme from './../styles/Theme';

let NavStyles = {
    sideNav: {
        background: 'linear-gradient(180deg, ' + Theme.sideNavLeftColor + ' 0%, ' + Theme.sideNavRightColor + ' 100%)',
        minWidth: '12%',
        height: '100%',
        zIndex: 1,
        boxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        WebkitBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        MozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    navLogo: {
        width: '100%',
        height: '6%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        height: 1,
        border: 0,
        borderTop: '2px solid ' + Theme.navBorderColor,
        margin: '0 0',
        padding: 0
    },
    logo: {
        width: '6vh',
        min: '6vh'
    },
    logoText: {
        color: Theme.navTextColor,
        fontSize: '100%'
    },
    rightContent: {
        width: '88%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    topNav: {
        width: '100%',
        height: '6%',
        backgroundColor: Theme.topNavColor,
        zIndex: 1,
        boxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        WebkitBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        MozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    },
    content: {
        width: '100%',
        height: '94%',
        backgroundColor: Theme.contentColor
    },
    navCategory: {
        width: 'auto',
        maxWidth: '100%',
        height: 'auto',
        backgroundColor: Theme.navCategoryColor
    },
    categoryText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 12,
        padding: 5,
        color: Theme.categoryTextColor
    },
    screenTitle: {
        color: Theme.navTextColor,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    userContent: {
        marginRight: 10
    }
};

const MaterialStyles = theme => ({
    icon: {
        color: Theme.navTextColor,
    },
    nestedListItem: {
        paddingLeft: theme.spacing(4),
        color: Theme.navTextColor,
        width: 'auto',
        maxWidth: '100%',
        wordWrap: 'break-word',
        fontSize: '100%',
        '&:hover': {
            backgroundColor: Theme.sideNavActiveColor
        }
    },
    listItem: {
        width: 'auto',
        maxWidth: '100%',
        wordWrap: 'break-word',
        fontSize: '100%',
        color: Theme.navTextColor,
        '&:hover': {
            backgroundColor: Theme.sideNavActiveColor
        },
        '&.Mui-selected': {
            backgroundColor: Theme.sideNavActiveColor,
            borderLeft: '4px solid ' + Theme.blueColor,
            '&:hover': {
                backgroundColor: Theme.sideNavActiveColor
            },
        }
    },
    logoutItem: {
        color: Theme.redColor
    }
});

export {NavStyles, MaterialStyles};