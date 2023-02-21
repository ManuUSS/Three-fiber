import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}
