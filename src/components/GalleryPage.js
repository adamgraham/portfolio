import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Gallery from './Gallery';
import GalleryContext, { useContext } from './GalleryContext';
import Page from './Page';
import { SlideProps } from './Slide';
import { titleCase } from '../utils/formatting';
import { getSessionIndex } from '../utils/session';

const GalleryPage = ({ category, gallery, location }) => {
  const [slideIndex, setSlideIndex] = useState(getSessionIndex(category));
  const context = useContext(category, gallery, slideIndex, setSlideIndex);
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
