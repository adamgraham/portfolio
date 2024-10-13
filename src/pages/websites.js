import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Gallery, Page, SlideProps } from '../components';
import { baseUri } from '../links';

export const query = graphql`
  query Websites {
    json: allWebsitesJson {
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

const Websites = ({ data, location }) => {
  const { slides } = data.json;
  return (
    <Page
      id="websites"
      title="Websites"
      location={location}
      metadata={{
        url: `${baseUri}/websites`,
        title: 'Adam Graham • Websites',
      }}
    >
      <Gallery category="websites" location={location} slides={slides} />
    </Page>
  );
};

Websites.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Websites;
