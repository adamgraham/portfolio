import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Gallery from './gallery';
import Page from './page';
import { SlideProps } from './slide';
import { GalleryContext } from '../context';
import { titleCase } from '../formatting';
import { getSessionIndex, setSessionIndex } from '../session';

const GalleryPage = ({ category, gallery, location }) => {
  const [slideIndex, setSlideIndex] = useState(getSessionIndex(category));
  const currentSlide = gallery[slideIndex];

  const changeSlide = useCallback(
    (index) => {
      const newIndex = Math.min(Math.max(index, 0), gallery.length - 1);
      setSlideIndex(newIndex);
    },
    [gallery, setSlideIndex]
  );

  const nextSlide = useCallback(() => {
    changeSlide(slideIndex + 1);
  }, [changeSlide, slideIndex]);

  const previousSlide = useCallback(() => {
    changeSlide(slideIndex - 1);
  }, [changeSlide, slideIndex]);

  const navigateToSlide = useCallback((slide) => {
    navigate(`/${slide.category}`);
  }, []);

  useEffect(() => {
    setSessionIndex(category, slideIndex);
  }, [category, slideIndex]);

  return (
    <GalleryContext.Provider
      value={{
        category,
        gallery,
        slideIndex,
        currentSlide,
        changeSlide,
        nextSlide,
        previousSlide,
        navigateToSlide,
      }}
    >
      <Page
        id={category}
        location={location}
        metadata={{
          url: `https://adamgraham.io/${category}`,
          title: `Adam Graham • ${titleCase(category)}`,
        }}
      >
        <Gallery
          category={category}
          gallery={gallery}
          setSlideIndex={setSlideIndex}
          slideIndex={slideIndex}
        />
      </Page>
    </GalleryContext.Provider>
  );
};

GalleryPage.propTypes = {
  category: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  location: PropTypes.object,
};

export default GalleryPage;
