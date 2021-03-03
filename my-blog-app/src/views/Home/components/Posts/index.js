import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Post';
import chunk from 'lodash/chunk';

const Comp = (props) => {
  const { group } = props;

  const showPost = (post) => {
    return (
      <Grid item xs={12} md={4} >
        <Post post={post}/>
      </Grid>
    ) 
  };

  return (
    <>
        <Grid container spacing={4}>
        {group.map((post) => (
          <>
            {showPost(post)}
          </>
        ))}
      </Grid>
    </>
  )
}

const Posts = ({ posts }) => {
  
  return (
    <>
      {
        chunk(posts,3).map((groupOfThree) => {
          return (
            <Comp
            group={groupOfThree}
            />
          ) 
        })
      }
    </>
  );
}

export default Posts;