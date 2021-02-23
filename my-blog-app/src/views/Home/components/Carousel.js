import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

const CarouselComp = () => {

    return (
      <Carousel >
        <Card number="1"/>
        <Card number="2"/>
        <Card number="3"/>
      </Carousel>
    )
}

export default CarouselComp;