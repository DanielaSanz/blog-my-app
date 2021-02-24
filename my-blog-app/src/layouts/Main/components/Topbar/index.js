import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Hidden } from '@material-ui/core';
import { Navbar, Drawer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    marginRight:"0vw",
  },
  flexGrow: {
    flexGrow: "1",
  },
  card: {
    width: "100%",
    height: "200px",
    background: "#333",
    color: "#fff",
    fontSize: "30px",
    margin: "0 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
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

const Topbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleOpenToggle = () => {
        setOpen(!open);
      };

    return(
        <AppBar>
          <Toolbar>
              <Navbar 
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
            </Hidden>{/* 
            <div className={classes.content}>
              hola
                <div className={classes.toolbar}></div>
                chau
            </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Topbar;