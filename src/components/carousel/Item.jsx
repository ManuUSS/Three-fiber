import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Item.css';

const fadeImages = [
  {
    url: 'https://i.scdn.co/image/ab67616d0000b2737c9496aaf6c3d3a1a6357a86',
    caption: 'First Slide'
  },
  {
    url: 'https://i.scdn.co/image/ab67616d0000b2737c9496aaf6c3d3a1a6357a86',
    caption: 'Second Slide'
  },
  {
    url: 'https://i.scdn.co/image/ab67616d0000b2737c9496aaf6c3d3a1a6357a86',
    caption: 'Third Slide'
  },
];

export const Slideshow = () => {
  return (
      <Slide
        easing='ease'
        duration={ 5000 }
        indicators
      >
        {
          fadeImages.map(( fadeImage ) => (
            <div className='each-slide' key={ fadeImage.caption } >
              <div style={{ backgroundImage: `url(${ fadeImage.url })` }}></div>
            </div>
          ))
        }
      </Slide>
  )
}
