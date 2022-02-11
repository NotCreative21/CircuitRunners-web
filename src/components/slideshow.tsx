import React from 'react';
import { Slide } from 'react-slideshow-image';
// @ts-expect-error
import styles from '../styles/components.module.scss';

const slideImages = [
  {
    url: './slide1.png',
  },
  {
    url: './slide2.png',
  },
  {
    url: './slide3.png',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className={styles.eachSlide} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;
