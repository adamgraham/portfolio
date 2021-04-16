import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryPage, SlideProps } from '../components';

export const query = graphql`
  query Games {
    json: allGamesJson {
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

const Games = ({ data, location }) => {
  const { gallery } = data.json;
  return <GalleryPage category="games" gallery={gallery} location={location} />;
};

Games.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Games;
