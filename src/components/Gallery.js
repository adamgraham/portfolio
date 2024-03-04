import { useMediaQuery } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GalleryContext from './GalleryContext';
import Slide from './Slide';
import icons from '../icons';
import '../styles/gallery.css';

const Gallery = ({ className }) => {
  const context = useContext(GalleryContext);
  const verticalLayout = useMediaQuery('(max-width: 1365px)');
  return (
    <article
      className={classNames(
        'gallery',
        { 'gallery--vertical-layout': verticalLayout },
        className
      )}
    >
      <button
        aria-label="Previous Slide"
        className="gallery__button left"
        disabled={context.slideIndex <= 0}
        onClick={() => context.setSlideIndex(context.slideIndex - 1)}
      >
        {context.slideIndex > 0 && <img alt="" src={icons.chevronLeft} />}
      </button>
      <div className="gallery__slides">
        {context.currentSlide && <Slide slide={context.currentSlide} />}
      </div>
      <button
        aria-label="Next Slide"
        className="gallery__button right"
        disabled={context.slideIndex >= context.gallery.length - 1}
        onClick={() => context.setSlideIndex(context.slideIndex + 1)}
      >
        {context.slideIndex < context.gallery.length - 1 && (
          <img alt="" src={icons.chevronRight} />
        )}
      </button>
    </article>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
