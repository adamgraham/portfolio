import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Gallery from './gallery';
import Page from './page';
import { SlideProps } from './slide';

const GalleryPage = ({ category, gallery, location }) => {
  const [requestedIndex, setRequestedIndex] = useState();
  return (
    <Page
      gallery={gallery}
      id={category}
      location={location}
      onRequestSlideIndex={(index) => setRequestedIndex(index)}
    >
      <Gallery
        category={category}
        requestedIndex={requestedIndex}
        slides={gallery}
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
