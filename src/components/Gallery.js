import '../styles/gallery.css';
import { useMediaQuery } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GalleryContext from './GalleryContext';
import Slide from './Slide';

const Gallery = ({ className }) => {
  const context = useContext(GalleryContext);
  const vertical = useMediaQuery('(max-width: 1365px)');
  return (
    <div
      className={classNames('gallery', {
        'gallery--vertical': vertical,
        className,
      })}
    >
      <button
        aria-label="Previous Slide"
        className="gallery__button previous"
        onClick={() => context.setSlideIndex(context.slideIndex - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
        </svg>
      </button>
      <div className="gallery__slides">
        {context.currentSlide && <Slide slide={context.currentSlide} />}
      </div>
      <button
        aria-label="Next Slide"
        className="gallery__button next"
        onClick={() => context.setSlideIndex(context.slideIndex + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
        </svg>
      </button>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
