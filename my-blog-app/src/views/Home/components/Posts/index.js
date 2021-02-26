import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Post';

function Posts() {

  return (
    <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Post/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Post/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Post/>
        </Grid>
    </Grid>
  );
}

export default Posts;