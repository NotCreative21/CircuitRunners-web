import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/slideshow.css';

const slideImages = [
  {
    url: './1.png',
  },
  {
    url: './2.png',
  },
  {
    url: './3.png',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;
