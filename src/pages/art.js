import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Gallery, Page, SlideProps } from '../components';
import { baseUri } from '../links';

export const query = graphql`
  query Art {
    json: allArtJson {
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

const Art = ({ data, location }) => {
  const { slides } = data.json;
  return (
    <Page
      id="art"
      title="Interactive Art"
      location={location}
      metadata={{
        url: `${baseUri}/art`,
        title: 'Adam Graham • Interactive Art',
      }}
    >
      <Gallery category="art" location={location} slides={slides} />
    </Page>
  );
};

Art.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Art;
