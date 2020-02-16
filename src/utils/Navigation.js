import React from 'react';
import {List, ListItem, Collapse, ListItemIcon, ListItemText} from "@material-ui/core";
import {ExpandMore, ExpandLess} from "@material-ui/icons";
import ServersScreen from './../screens/ServersScreen';
import MyAccountScreen from './../screens/MyAccountScreen';

const mainNavigation = {
    general: [
        {
            name: 'Servers',
            icon: 'fas fa-server',
            screen: ServersScreen
        },
        {
            name: 'My Account',
            icon: 'fas fa-sliders-h',
            screen: MyAccountScreen
        }
    ],
    server: [
        {
            name: 'Console',
            icon: 'fas fa-terminal',
            screen: null
        },
        {
            name: 'Players',
            icon: 'fas fa-gamepad',
            screen: null
        },
        {
            name: 'Advanced',
            icon: 'fas fa-wrench',
            type: 'dropdown',
            screens: [
                {
                    name: 'File Manager',
                    icon: 'fas fa-folder',
                    screen: null
                },
                {
                    name: 'Subusers',
                    icon: 'fas fa-users',
                    screen: null
                },
                {
                    name: 'Databases',
                    icon: 'fas fa-database',
                    screen: null
                },
                {
                    name: 'Startup',
                    icon: 'fas fa-play',
                    screen: null
                }
            ]
        }
    ],
    admin: [
        {
            name: 'Server Config',
            icon: 'fas fa-cogs',
            screen: null
        }
    ]
};

const adminNavigation = {
    basic: [
        {
            name: 'Overview',
            icon: 'fas fa-home',
            screen: null
        },
        {
            name: 'Settings',
            icon: 'fas fa-sliders-h',
            screen: null
        }
    ],
    management: [
        {
            name: 'Servers',
            icon: 'fas fa-server',
            screen: null
        },
        {
            name: 'Databases',
            icon: 'fas fa-database',
            screen: null
        },
        {
            name: 'User Accounts',
            icon: 'fas fa-users',
            screen: null
        }
    ]
};

function renderCategory(navigation, categoryName, toggleDropdown, dropdownState, props, active, navigate, showNavText) {
    return <List component='div'>{this.renderCategoryItems(navigation, categoryName, toggleDropdown, dropdownState, props, active, navigate, showNavText)}</List>
}

function renderCategoryItems (navigation, categoryName, toggleDropdown, dropdownState, props, active, navigate, showNavText) {
    const {classes} = props;
    let category = navigation[categoryName];

    return category.map(option => {
        if(option.type && option.type === 'dropdown') {
            return (
                <div key={option.name}>
                    <ListItem className={classes.listItem} button onClick={() => toggleDropdown(option.name)}>
                        <ListItemIcon className={classes.icon}><i className={option.icon} /></ListItemIcon>
                        {showNavText ? <ListItemText primary={option.name} /> : null}
                        {~dropdownState.indexOf(option.name) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={dropdownState.indexOf(option.name) > -1} timeout='auto' unmountOnExit>
                        {option.screens.map(subOption => {
                            return (
                                <ListItem key={subOption.name} selected={active === option.name} className={classes.nestedListItem} button onClick={() => navigate(subOption.name, subOption.screen)}>
                                    <ListItemIcon className={classes.icon}><i className={subOption.icon} /></ListItemIcon>
                                    {showNavText ? <ListItemText primary={subOption.name} /> : null}
                                </ListItem>
                            );
                        })}
                    </Collapse>
                </div>
            );
        }

        return (
            <ListItem key={option.name} selected={active === option.name} className={classes.listItem} button onClick={() => navigate(option.name, option.screen)}>
                <ListItemIcon className={classes.icon}><i className={option.icon} /></ListItemIcon>
                {showNavText ? <ListItemText primary={option.name} /> : null}
            </ListItem>
        );
    });
}

export {mainNavigation, adminNavigation, renderCategory, renderCategoryItems};