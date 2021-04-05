import React, { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Navbar, Drawer } from './components';
import { GoogleLogin } from 'react-google-login';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj)
}

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
          <GoogleLogin
            clientId="383880074081-ng4cmrc3mldvsr2v7kg58db4rgfmag6b.apps.googleusercontent.com"
            //buttonText="Login"
            render={renderProps => (
              <AccountCircleIcon onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</AccountCircleIcon>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
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