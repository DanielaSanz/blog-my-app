import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Carousel from './components/Carousel';
import Posts from './components/Posts';
import usePosts from "../../hooks/usePosts";

const useStyles = makeStyles((theme) => ({
  cont: {
    [theme.breakpoints.down("sm")]: {
      display:"block",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5vh",
      marginBottom: "5vh",
    },
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  const { data } = usePosts();
  
    return(
      <>
        <Carousel/>  
        <>
          {
            data ? 
              <Grid className={classes.cont}>
                <Posts posts={data}/>
              </Grid> : null
          } 
        </>        
      </>
    );
};

export default Home;