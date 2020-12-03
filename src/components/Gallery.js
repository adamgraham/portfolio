import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppMenuBar from './AppMenuBar';
import '../styles/gallery.css';

const Gallery = ({ className, slides = [] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <React.Fragment>
      <div className={classNames('gallery', className)}>
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
              width="15.17"
              height="23.17"
              viewBox="0 0 15.17 23.17"
            >
              <path
                d="M24.71,31.29a1,1,0,0,0,0,1.42L35.29,43.29a1,1,0,0,0,1.42,0l2.58-2.58a1,1,0,0,0,0-1.42l-6.58-6.58a1,1,0,0,1,0-1.42l6.58-6.58a1,1,0,0,0,0-1.42l-2.58-2.58a1,1,0,0,0-1.42,0Z"
                transform="translate(-24.42 -20.42)"
                style={{ fill: '#101010' }}
              />
            </svg>
          )}
        </button>
        <div className="gallery__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames('slide', {
                inactive: slideIndex !== index,
              })}
              key={slide.id}
            >
              <div className="slide__image-wrapper">
                <img alt="" className="slide__image" src={slide.image}></img>
              </div>
              <div className="slide__text-container">
                <div className="h4">{slide.title}</div>
                <p>{slide.description}</p>
                <a className="font-weight-semibold" href={slide.link}>
                  {slide.linkText || 'More Details'}
                </a>
              </div>
            </div>
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
              width="15.17"
              height="23.17"
              viewBox="0 0 15.17 23.17"
            >
              <path
                d="M39.29,32.71a1,1,0,0,0,0-1.42L28.71,20.71a1,1,0,0,0-1.42,0l-2.58,2.58a1,1,0,0,0,0,1.42l6.58,6.58a1,1,0,0,1,0,1.42l-6.58,6.58a1,1,0,0,0,0,1.42l2.58,2.58a1,1,0,0,0,1.42,0Z"
                transform="translate(-24.42 -20.42)"
                style={{ fill: '#101010' }}
              />
            </svg>
          )}
        </button>
      </div>
      <AppMenuBar />
    </React.Fragment>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string,
    })
  ),
};

export default Gallery;
