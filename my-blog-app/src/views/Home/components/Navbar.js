import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, IconButton, Button, Hidden, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        //TODO si esto no esta el appBar ocupa toda la pantalla
        /* [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${240}px)`,
          marginLeft: 240,
        }, */
      },
})); 

const CustomRouterLink = forwardRef((props, ref) => (
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <NavLink {...props} />
    </div>
  ));

const NavBar = (props) => {
    const {pages, className, ...rest} = props;

    const classes = useStyles();

    return(
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => props.handleOpenToggle()}
                >
                    <MenuIcon />
                </IconButton> 
                <Typography variant="h6" className={classes.title}>
                    Reina Marla
                </Typography>
                <Button
                    color="inherit"
                    {...rest}
                    className={clsx(classes.root, className)}
                >
                    {pages.map(page => (
                        <Hidden smDown>
                            <Button
                                color="inherit"
                                component={CustomRouterLink}
                                to={page.href}
                            >
                            <div>
                                {page.title}
                            </div>
                            </Button>
                        </Hidden>
                    ))}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;