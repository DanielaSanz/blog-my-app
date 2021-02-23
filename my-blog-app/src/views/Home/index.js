import React, { useState } from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import NavBar from './components/Navbar';
import Drawer from './components/Drawer';
import Content from './components/Content';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    marginRight:"0vw",
  },
  flexGrow: {
    flexGrow: "1",
  },toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
}))

const pages = [
    {
      title: 'Secciones',
      href: '/sections',
    },
    {
      title: 'Comunidad',
      href: '/community',
    },
    {
      title: 'Institucional',
      href: '/institutional',
    },
    {
      title: 'Contactanos',
      href: '/contact',
    }
  ];

const Home = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleOpenToggle = () => {
        setOpen(!open);
      };

    return(
        <div className={classes.root}>
            <NavBar 
            pages={pages}
            handleOpenToggle={handleOpenToggle}/>
            {/* <Hidden xsDown>
                <Drawer
                    pages={pages}
                    variant="permanent"
                    open={true}
                />
            </Hidden>  */}
            <Hidden mdUp>
                <Drawer
                    pages={pages}
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