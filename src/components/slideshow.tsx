import React from 'react';
import { Slide } from 'react-slideshow-image';
// @ts-expect-error
import styles from '../styles/components.module.scss';

const slideImages = [
  {
    url: 'https://github.com/NotCreative21/CircuitRunners-web/blob/gh-pages/1.png?raw=true',
  },
  {
    url: 'https://github.com/NotCreative21/CircuitRunners-web/blob/gh-pages/2.png?raw=true',
  },
  {
    url: 'https://github.com/NotCreative21/CircuitRunners-web/blob/gh-pages/3.png?raw=true',
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
