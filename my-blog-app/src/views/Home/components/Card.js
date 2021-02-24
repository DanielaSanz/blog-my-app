import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles (theme => ({
    card: {
        width: "100%",
        height: "400px",
        background: "#333",
        color: "#fff",
        fontSize: "30px",
        margin: "0 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
    },
  }));

const Card = ({ number }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.card}>{number}</div>
    )    
} 

export default Card;