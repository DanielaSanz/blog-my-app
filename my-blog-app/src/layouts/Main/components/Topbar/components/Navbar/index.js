import React, { forwardRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, IconButton, Button, Hidden } from '@material-ui/core';
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

    const history = useHistory();

    const handleRedirectHomeClick = () => {
        history.push(`institutional`);
      };

    return(
            <>
                <IconButton 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => props.handleOpenToggle()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6" 
                    color="inherit"
                    className={classes.title}
                >
                    <Button
                        color="inherit"
                        onClick={handleRedirectHomeClick}
                    >
                     Reina Marla   
                    </Button>
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
         </>       
    )
}

export default NavBar;