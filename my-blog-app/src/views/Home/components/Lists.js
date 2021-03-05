import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import DeckIcon from '@material-ui/icons/Deck';

const Lists = () => {
    return(
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="primer"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText primary="segundo"/>
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}

export default Lists;