import React, { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-screen">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
