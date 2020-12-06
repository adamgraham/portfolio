import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from './Page';
import Slide, { SlideProps } from './Slide';
import '../styles/gallery.css';

const Gallery = ({ className, slides = [] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Page>
      <article className={classNames('gallery', className)}>
        <button
          className="gallery__button left"
          disabled={slideIndex <= 0}
          onClick={() => {
            setSlideIndex(Math.max(slideIndex - 1, 0));
          }}
        >
          {slideIndex > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.3"
              height="31.54"
              viewBox="0 0 19.3 31.54"
            >
              <polyline
                points="17.54 1.77 3.54 15.77 17.54 29.77"
                style={{
                  fill: 'none',
                  stroke: '#242424',
                  strokeMiterlimit: 10,
                  strokeWidth: '5px',
                }}
              />
            </svg>
          )}
        </button>
        <div className="gallery__slides">
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              inactive={slideIndex !== index}
              slide={slide}
            />
          ))}
        </div>
        <button
          className="gallery__button right"
          disabled={slideIndex >= slides.length - 1}
          onClick={() => {
            setSlideIndex(Math.min(slideIndex + 1, slides.length - 1));
          }}
        >
          {slideIndex < slides.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.3"
              height="31.54"
              viewBox="0 0 19.3 31.54"
            >
              <polyline
                points="1.77 29.77 15.77 15.77 1.77 1.77"
                style={{
                  fill: 'none',
                  stroke: '#242424',
                  strokeMiterlimit: 10,
                  strokeWidth: '5px',
                }}
              />
            </svg>
          )}
        </button>
      </article>
    </Page>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
  slides: PropTypes.arrayOf(SlideProps),
};

export default Gallery;
