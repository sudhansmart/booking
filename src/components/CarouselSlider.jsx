import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carouselSliderpage.css'
import image1 from '../assets/images/img1.jpg'
import image2 from '../assets/images/img2.jpg'
import image3 from '../assets/images/img3.jpg'
import image4 from '../assets/images/img4.jpg'

function CarouselSliderpage() {
  let data = [
    {
      id: "1",
      imgSrc: image1
    },
    {
      id: "2",
      imgSrc: image2
    },
    {
      id: "3",
      imgSrc: image3
    },
    {
      id: "4",
      imgSrc: image4
    },
   
  ];
 
  return (
      <>
         <Carousel className='carousal-main' fade controls={false} touch={true} interval={1500}>
              {data.map((item) => (
              <Carousel.Item className='details-carousal' key={item.id} >
                <img className='carousal-image' src={item.imgSrc} alt={item.title} />
                </Carousel.Item>
          ))}
            </Carousel>
      </>
  );
}

export default CarouselSliderpage;

