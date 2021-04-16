import { useMediaQuery } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slide, { SlideProps } from './slide';
import chevronLeftIcon from '../images/icons/chevron_left-black-48dp.svg';
import chevronRightIcon from '../images/icons/chevron_right-black-48dp.svg';
import imageIcon from '../images/icons/image-black-36dp.svg';
import infoIcon from '../images/icons/info-black-36dp.svg';
import '../styles/gallery.css';

const Gallery = ({
  className,
  gallery = [],
  setSlideIndex = () => {},
  slideIndex,
}) => {
  const verticalLayout = useMediaQuery('(max-width: 1365px)');
  const [showInfo, setShowInfo] = useState(true);
  const slide = gallery[slideIndex];
  return (
    <article
      className={classNames(
        'gallery',
        { 'gallery--hide-info': !showInfo },
        { 'gallery--vertical-layout': verticalLayout },
        className
      )}
    >
      <button
        aria-label="Previous Slide"
        className="gallery__button left"
        disabled={slideIndex <= 0}
        onClick={() => {
          const previousIndex = Math.max(slideIndex - 1, 0);
          setSlideIndex(previousIndex);
        }}
      >
        {slideIndex > 0 && <img alt="" src={chevronLeftIcon} />}
      </button>
      <div className="gallery__slides">
        {slide && <Slide key={slide.id} slide={slide} />}
      </div>
      <button
        aria-label="Next Slide"
        className="gallery__button right"
        disabled={slideIndex >= gallery.length - 1}
        onClick={() => {
          const nextIndex = Math.min(slideIndex + 1, gallery.length - 1);
          setSlideIndex(nextIndex);
        }}
      >
        {slideIndex < gallery.length - 1 && (
          <img alt="" src={chevronRightIcon} />
        )}
      </button>
      <button
        aria-label={showInfo ? 'Hide Info' : 'Show Info'}
        className="gallery__button info"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? (
          <img alt="" src={imageIcon} />
        ) : (
          <img alt="" src={infoIcon} />
        )}
      </button>
    </article>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  setSlideIndex: PropTypes.func,
  slideIndex: PropTypes.number,
};

export default Gallery;
