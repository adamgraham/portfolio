import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryPage, SlideProps } from '../components';

export const query = graphql`
  query Tech {
    json: allTechJson {
      gallery: nodes {
        id: jsonId
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

const Tech = ({ data, location }) => {
  const { gallery } = data.json;
  return <GalleryPage category="tech" gallery={gallery} location={location} />;
};

Tech.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Tech;
