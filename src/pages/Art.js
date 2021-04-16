import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryPage, SlideProps } from '../components';

export const query = graphql`
  query Art {
    json: allArtJson {
      gallery: nodes {
        category
        id
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

const Art = ({ data, location }) => {
  const { gallery } = data.json;
  return <GalleryPage category="art" gallery={gallery} location={location} />;
};

Art.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Art;
