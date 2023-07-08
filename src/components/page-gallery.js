import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Gallery from './gallery';
import Page from './page';
import { SlideProps } from './slide';
import { GalleryContext } from '../context';
import { titleCase } from '../formatting';
import { getSessionIndex, setSessionIndex } from '../session';

const getContext = (category, gallery, slideIndex, setSlideIndex) => ({
  category,
  gallery,
  slideIndex,
  currentSlide: gallery[slideIndex],
  setSlideIndex: (index) => {
    index = Math.min(Math.max(index, 0), gallery.length - 1);
    setSessionIndex(category, index);
    setSlideIndex(index);
    navigate(`/${category}`);
  },
});

const GalleryPage = ({ category, gallery, location }) => {
  const [slideIndex, setSlideIndex] = useState(getSessionIndex(category));
  const context = useMemo(
    () => getContext(category, gallery, slideIndex, setSlideIndex),
    [category, gallery, slideIndex]
  );
  return (
    <GalleryContext.Provider value={context}>
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
