import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../img/åf_logo.jpg';

/**
 * TopBar component handling the functionality at the top of the application.
 */
class TopBar extends React.Component {
    state = {
        anchorEl: null,
    };

    handleMenuOpen = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleMenuClose = event => {
        this.setState({
            anchorEl: null
        });
    };

    render() {
        const {anchorEl} = this.state;
        const {classes} = this.props;
        const isMenuOpen = Boolean(anchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                transformOrigin={{ vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My Account</MenuItem>
            </Menu>
        );

        return(
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="Open drawer">
                            <MenuIcon/>
                        </IconButton>
                            <img className={classes.logo} src={logo} alt=""></img>
                            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon/>
                            </div>
                            <Input
                                placeholder="Search..."
                                disableUnderline
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                }}
                            >
                            </Input>
                        </div>
                        <div className={classes.grow}>
                                <div className={classes.icons}>
                                    <IconButton color="inherit">
                                        <Badge 
                                        className={classes.margin} 
                                        badgeContent={17} 
                                        color="secondary">
                                        <NotificationsIcon/>
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        aria-owns={isMenuOpen ?  'material-appbar': null}
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={this.handleMenuOpen}
                                    >
                                        <AccountCircle/>
                                    </IconButton>
                                </div>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 215,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing.unit * 3,
                width: 'auto'
            },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200
        },
    },
    icons: {
        marginLeft: 'auto',
        float: 'right'
    },
    logo: {
        height: '3%',
        width: '3%'
    },
})

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);