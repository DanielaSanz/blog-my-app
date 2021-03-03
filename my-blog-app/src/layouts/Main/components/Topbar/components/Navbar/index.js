import React, { forwardRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { Typography, IconButton, Button, Hidden } from '@material-ui/core';
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
        marginLeft: "1.5vh",
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
        history.push(`home`);
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
                    <Hidden xsDown>
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