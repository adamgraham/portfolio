import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppMenuBar from './AppMenuBar';
import '../styles/gallery.css';

const Gallery = ({ className, slides = [] }) => (
  <React.Fragment>
    <div className={classNames('gallery', className)}>
      {slides.map((slide) => (
        <div className="gallery__slide" key={slide.id}>
          <div className="gallery__image-wrapper">
            <img alt="" className="gallery__image" src={slide.image}></img>
          </div>
          <div className="gallery__text-wrapper">
            <div className="h4">{slide.title}</div>
            <p>{slide.description}</p>
            <a className="font-weight-semibold" href={slide.link}>
              {slide.linkText || 'More Details'}
            </a>
          </div>
        </div>
      ))}
    </div>
    <AppMenuBar />
  </React.Fragment>
);

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
