import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Gallery, Page, SlideProps } from '../components';
import { baseUri } from '../links';

export const query = graphql`
  query Games {
    json: allGamesJson {
      slides: nodes {
        id: jsonId
        category
        date
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
  const { slides } = data.json;
  return (
    <Page
      category="games"
      slides={slides}
      location={location}
      metadata={{
        url: `${baseUri}/games`,
        title: 'Adam Graham • Games',
      }}
    >
      <Gallery slides={slides} />
    </Page>
  );
};

Games.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Games;
