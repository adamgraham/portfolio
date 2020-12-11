import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from './Page';
import Slide, { SlideProps } from './Slide';
import '../styles/gallery.css';

const findInitialIndex = (history, slides) => {
  const hash = history.location.hash.replace('#', '');
  const hashIndex = slides.findIndex((slide) => slide.id === hash);
  return hashIndex !== -1 ? hashIndex : 0;
};

const Gallery = ({ className, slides = [] }) => {
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(true);
  const [slideIndex, setSlideIndex] = useState(
    findInitialIndex(history, slides)
  );

  useEffect(() => {
    const currentSlide = slides[slideIndex];
    const hash = history.location.hash.replace('#', '');
    if (hash !== currentSlide.id) {
      history.replace(`${history.location.pathname}#${currentSlide.id}`);
    }
  }, [history, slideIndex, slides]);

  return (
    <Page>
      <article className={classNames('gallery', className)}>
        <button
          aria-label="Previous Slide"
          className="gallery__button left"
          disabled={slideIndex <= 0}
          onClick={() => {
            setSlideIndex(Math.max(slideIndex - 1, 0));
          }}
        >
          {slideIndex > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="48px"
              height="48px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
            </svg>
          )}
        </button>
        <div className="gallery__slides">
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              inactive={slideIndex !== index}
              slide={slide}
              showInfo={showInfo}
            />
          ))}
        </div>
        <button
          aria-label="Next Slide"
          className="gallery__button right"
          disabled={slideIndex >= slides.length - 1}
          onClick={() => {
            setSlideIndex(Math.min(slideIndex + 1, slides.length - 1));
          }}
        >
          {slideIndex < slides.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="48px"
              height="48px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
            </svg>
          )}
        </button>
        <button
          aria-label={showInfo ? 'Hide Info' : 'Show Info'}
          className="gallery__button info"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="36px"
              height="36px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="36px"
              height="36px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
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
