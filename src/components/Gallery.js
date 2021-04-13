import { useMediaQuery } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Page from './page';
import Slide, { SlideProps } from './slide';
import chevronLeftIcon from '../images/icons/chevron_left-black-48dp.svg';
import chevronRightIcon from '../images/icons/chevron_right-black-48dp.svg';
import imageIcon from '../images/icons/image-black-36dp.svg';
import infoIcon from '../images/icons/info-black-36dp.svg';
import '../styles/gallery.css';

let globalShowInfo = true;

// const findInitialIndex = (history, slides) => {
//   const hash = history.location.hash.replace('#', '');
//   const hashIndex = slides.findIndex((slide) => slide.id === hash);
//   return hashIndex !== -1 ? hashIndex : 0;
// };

const Gallery = ({ className, slides = [] }) => {
  const mobileWidth = useMediaQuery('(max-width: 767px)');
  const mobileHeight = useMediaQuery('(max-height: 767px)');
  const verticalLayout = useMediaQuery('(max-width: 1365px)');
  const [showInfo, setShowInfo] = useState(globalShowInfo);
  const [slideIndex] = useState(0);
  const slide = slides[slideIndex];

  // const [slideIndex, setSlideIndex] = useState(
  //   findInitialIndex(history, slides)
  // );

  useEffect(() => {
    globalShowInfo = showInfo;
  }, [showInfo]);

  // useEffect(() => {
  //   const currentSlide = slides[slideIndex];
  //   const hash = history.location.hash.replace('#', '');

  //   if (hash !== currentSlide.id) {
  //     const hashIndex = slides.findIndex((slide) => slide.id === hash);
  //     if (hashIndex !== -1) {
  //       setSlideIndex(Math.max(hashIndex, 0));
  //     } else {
  //       history.replace(`${history.location.pathname}#${currentSlide.id}`);
  //     }
  //   }
  // }, [slideIndex, slides]);

  return (
    <Page>
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
          disabled={slideIndex <= 0}
          onClick={() => {
            const previousIndex = Math.max(slideIndex - 1, 0);
            const previousSlide = slides[previousIndex];
            history.replace(`${history.location.pathname}#${previousSlide.id}`);
          }}
        >
          {slideIndex > 0 && <img alt="" src={chevronLeftIcon} />}
        </button>
        <div
          className={classNames('gallery__slides', {
            'gallery__slides--hide-info':
              !showInfo && !mobileWidth && !mobileHeight,
          })}
        >
          {slide && <Slide key={slide.id} slide={slide} showInfo={showInfo} />}
        </div>
        <button
          aria-label="Next Slide"
          className="gallery__button right"
          disabled={slideIndex >= slides.length - 1}
          onClick={() => {
            const nextIndex = Math.min(slideIndex + 1, slides.length - 1);
            const nextSlide = slides[nextIndex];
            history.replace(`${history.location.pathname}#${nextSlide.id}`);
          }}
        >
          {slideIndex < slides.length - 1 && (
            <img alt="" src={chevronRightIcon} />
          )}
        </button>
        {!mobileWidth && !mobileHeight && (
          <button
            aria-label={showInfo ? 'Hide Info' : 'Show Info'}
            className="gallery__button info"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {showInfo ? (
              <img alt="" src={imageIcon} />
            ) : (
              <img alt="" src={infoIcon} />
            )}
          </button>
        )}
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
