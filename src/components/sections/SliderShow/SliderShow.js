import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderShow.css'

import slide_1 from '../../../assets/imags/slide_1.jpg'
import slide_2 from '../../../assets/imags/slide_2.jpg'
import slide_3 from '../../../assets/imags/slide_3.jpg'


class SliderShow extends Component {
  componentDidMount() {
    this.slider.slickPlay();
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    const sliderShow = [
      {img: slide_1},
      {img: slide_2},
      {img: slide_3},
    ]
    return (
      <div className="slider-show">
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          {sliderShow.map((imgs, index) => (
            <div key="index">
              <img src={imgs.img} alt="" />
            </div>
          ))}
          
        </Slider>
      </div>
    );
  }
}

export default SliderShow;

