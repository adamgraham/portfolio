import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryPage, SlideProps } from '../components';

export const query = graphql`
  query Presentations {
    json: allPresentationsJson {
      gallery: nodes {
        id
        category
        title
        description
        description_short
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
  }
`;

const Presentations = ({ data, location }) => {
  const { gallery } = data.json;
  return (
    <GalleryPage
      category="presentations"
      gallery={gallery}
      location={location}
    />
  );
};

Presentations.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Presentations;
