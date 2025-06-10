import '../styles/gallery.css';
import { useMediaQuery } from '@zigurous/forge-react';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import React, { useCallback, useEffect } from 'react';
import Slide from './Slide';
import type { SlideData } from '../types';
import { getSessionIndex, setSessionIndex } from '../utils/session';

export interface GalleryProps {
  category: string;
  location: Location;
  slides: SlideData[];
}

export default function Gallery({
  category,
  location,
  slides = [],
}: GalleryProps) {
  const vertical = useMediaQuery('(max-width: 1365px)');

  const urlParams = new URLSearchParams(location?.search);
  const slideIndex =
    (urlParams.has('index')
      ? Number.parseInt(urlParams.get('index')!) || 0
      : getSessionIndex(category)) % slides.length;
  const currentSlide =
    slideIndex >= 0 && slideIndex < slides.length ? slides[slideIndex] : null;

  const setSlideIndex = useCallback(
    (index: number) => {
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;
      setSessionIndex(category, index);
      navigate(`/${category}?index=${index}`, { replace: true });
    },
    [category, slides, slideIndex],
  );

  useEffect(() => {
    if (!document) return;
    const prev = () => setSlideIndex(slideIndex - 1);
    const next = () => setSlideIndex(slideIndex + 1);
    document.addEventListener('previous_slide', prev);
    document.addEventListener('next_slide', next);
    return () => {
      document.removeEventListener('previous_slide', prev);
      document.removeEventListener('next_slide', next);
    };
  }, [slideIndex]);

  return (
    <div
      className={classNames('gallery', {
        'gallery--vertical': vertical,
      })}
      id={category}
    >
      <button
        aria-label="Previous Slide"
        className="gallery__button previous"
        onClick={() => setSlideIndex(slideIndex - 1)}
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
        {currentSlide && <Slide slide={currentSlide} />}
      </div>
      <button
        aria-label="Next Slide"
        className="gallery__button next"
        onClick={() => setSlideIndex(slideIndex + 1)}
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
}
