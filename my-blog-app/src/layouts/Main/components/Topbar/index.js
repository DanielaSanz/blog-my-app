import React, { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Navbar, Drawer } from './components';

const pages = [
  {
    title: 'Secciones',
    href: '/sections',
  },
  {
    title: 'Institucional',
    href: '/institutional',
  },
  {
    title: 'Contactanos',
    href: '/contact',
  },
];

const Topbar = () => {
  
  const [open, setOpen] = useState(false);
    
  const handleOpenToggle = () => {
    setOpen(!open);
  };

  return(
    <AppBar >
      <Toolbar>
        <Navbar 
          pages={pages}
          handleOpenToggle={handleOpenToggle}/>
          <div>Login</div>
        <Drawer
          pages={pages}
          variant="temporary"
          open={open}
          onClose={handleOpenToggle}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;