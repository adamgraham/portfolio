import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Gallery, Page, SlideProps } from '../components';
import { baseUri } from '../links';

export const query = graphql`
  query Presentations {
    json: allPresentationsJson {
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

const Presentations = ({ data, location }) => {
  const { slides } = data.json;
  return (
    <Page
      category="presentations"
      slides={slides}
      location={location}
      metadata={{
        url: `${baseUri}/presentations`,
        title: 'Adam Graham • Presentations',
      }}
    >
      <Gallery slides={slides} />
    </Page>
  );
};

Presentations.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Presentations;
