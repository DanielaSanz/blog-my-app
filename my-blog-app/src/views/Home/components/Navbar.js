import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
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
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${240}px)`,
          marginLeft: 240,
        },
      },
})); 

const NavBar = (props) => {
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
                <Button variant="text" color="inherit">
                    LOGIN
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;