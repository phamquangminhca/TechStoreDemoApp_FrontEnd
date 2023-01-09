import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickSlider = () => {
  const settings = {
      speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false
  };

  return (
    <Slider {...settings} className="slick-slider">
      <span>8% discount for purchase of at least 499K</span>
	  <span>10% discount for purchase of at least 800K</span>
      <span>30K discount for purchase of at least 399K</span>
    </Slider>
  )

}
