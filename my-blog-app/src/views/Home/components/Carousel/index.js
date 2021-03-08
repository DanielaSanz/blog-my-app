import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "7vh",
  },  
}));

const CarouselComp = () => {
  const classes = useStyles();

  return (
    <Carousel className={classes.content}>
      <Card number="1"/>
      <Card number="2"/>
      <Card number="3"/>
    </Carousel>
  )
}

export default CarouselComp;