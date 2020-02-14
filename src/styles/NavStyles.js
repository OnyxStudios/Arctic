const Theme = require('./Theme');

let NavStyles = {
    sideNav: {
        background: 'linear-gradient(180deg, ' + Theme.sideNavLeftColor + ' 0%, ' + Theme.sideNavRightColor + ' 100%)',
        width: '12%',
        height: '100%',
        zIndex: 1,
        boxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        WebkitBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        MozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor,
        display: 'flex',
        flexDirection: 'column'
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
        height: '6vh'
    },
    logoText: {
        color: Theme.navTextColor
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
        MozBoxShadow: '10px 10px 56px -19px ' + Theme.boxShadowColor
    },
    content: {
        width: '100%',
        height: '94%',
        backgroundColor: Theme.contentColor
    },
    navCategory: {
        width: '100%',
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
    option: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: Theme.sideNavActiveColor
        }
    },
    optionName: {
        color: Theme.navTextColor,
        padding: 5,
        paddingLeft: 10
    },
    dropdownOptionContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: Theme.sideNavActiveColor
        }
    }
};

const MaterialStyles = theme => ({
    icon: {
        color: Theme.navTextColor,
    },
    nestedListItem: {
        paddingLeft: theme.spacing(4),
        color: Theme.navTextColor,
        '&:hover': {
            backgroundColor: Theme.sideNavActiveColor
        }
    },
    listItem: {
        color: Theme.navTextColor,
        '&:hover': {
            backgroundColor: Theme.sideNavActiveColor
        },
        '&.Mui-selected': {
            backgroundColor: Theme.sideNavActiveColor,
            '&:hover': {
                backgroundColor: Theme.sideNavActiveColor
            },
        }
    }
});

export {NavStyles, MaterialStyles};