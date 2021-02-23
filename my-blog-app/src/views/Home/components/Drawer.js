
import React, { forwardRef }  from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import {List, Drawer, Divider, Button} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}))

const CustomRouterLink = forwardRef((props, ref) => (
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <NavLink {...props} />
    </div>
  ));

const DrawerComp = (props) => {
    const { pages, className, ...rest } = props;
    const classes = useStyles();

    return(
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <List
                {...rest}
                className={clsx(classes.root, className)}
             >
                {pages.map(page => (
                    <Button
                        color="inherit"
                        component={CustomRouterLink}
                        to={page.href}
                    >
                        <div>
                            {page.title}
                        </div>
                    </Button>
                 ))}
            </List>
        </Drawer>
    )
}

export default DrawerComp;