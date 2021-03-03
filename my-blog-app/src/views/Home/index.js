import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Carousel from './components/Carousel';
import Posts from './components/Posts';
import { PostsContext } from "../../context/posts/posts.provider";

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
  
    return(
      <>
        <Carousel/>  
        <PostsContext.Consumer>
          {(context) => {
  
            return (
              <>
                <Grid className={classes.cont}>
                  <Posts posts={context.posts}/>
                </Grid>
              </>
            );
          }}
        </PostsContext.Consumer>   
      </>
    );
};

export default Home;