import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Carousel from './components/Carousel';
import Posts from './components/Posts';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: "5vh",
  },
  item: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginLeft:"7vh",
      marginRight:"10vh",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      marginLeft:"5vh",
      marginRight:"5vh",
    },
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      marginTop:"5vh",
      marginLeft:"5vh",
      marginRight: "5vh",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  
    return(
        <Grid contanier className={classes.grid}>
          <Grid item>
            <Carousel/>
          </Grid> 
          <Grid item className={classes.item}>
            <Posts />
          </Grid>
        </Grid>
    )
}

export default Home;