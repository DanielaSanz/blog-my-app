import React, { useState } from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import NavBar from './components/Navbar';
import Drawer from './components/Drawer';
import Content from './components/Content';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
}))

const Home = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleOpenToggle = () => {
        setOpen(!open);
      };

    return(
        <div className={classes.root}>
            <NavBar handleOpenToggle={handleOpenToggle}/>
            <Hidden xsDown>
                <Drawer
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Drawer
                    variant="temporary"
                    open={open}
                    onClose={handleOpenToggle}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Content/>
            </div>
        </div>
    )
}

export default Home;