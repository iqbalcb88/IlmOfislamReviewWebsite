import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgOne from '../../resources/images/img2.jpg';
import imgTwo from '../../resources/images/img2.jpg';
import imgThree from '../../resources/images/img2.jpg';

const Slider = () => {
  return (
    <div
      style={{ zIndex: '-1000', top: '-50px' }}
      className='w-100 position-absolute top-0 start-50 translate-middle-x'
    >
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100 ' src={imgOne} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={imgTwo} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={imgThree} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
