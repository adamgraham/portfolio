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
          {'<'}
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
          {'>'}
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
