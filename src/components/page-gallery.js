import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Gallery from './gallery';
import Page from './page';
import { SlideProps } from './slide';
import { getSessionIndex, setSessionIndex } from '../session';

const GalleryPage = ({ category, gallery, location }) => {
  const [slideIndex, setSlideIndex] = useState(getSessionIndex(category));

  useEffect(() => {
    setSessionIndex(category, slideIndex);
  }, [category, slideIndex]);

  return (
    <Page
      category={category}
      gallery={gallery}
      id={category}
      location={location}
      setSlideIndex={setSlideIndex}
      slideIndex={slideIndex}
    >
      <Gallery
        category={category}
        gallery={gallery}
        setSlideIndex={setSlideIndex}
        slideIndex={slideIndex}
      />
    </Page>
  );
};

GalleryPage.propTypes = {
  category: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  location: PropTypes.object,
};

export default GalleryPage;
