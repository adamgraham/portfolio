import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Gallery, Page, SlideProps } from '../components';
import { baseUri } from '../links';

export const query = graphql`
  query Tech {
    json: allTechJson {
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

const Tech = ({ data, location }) => {
  const { slides } = data.json;
  return (
    <Page
      category="tech"
      slides={slides}
      location={location}
      metadata={{
        url: `${baseUri}/tech`,
        title: 'Adam Graham • Tech',
      }}
    >
      <Gallery slides={slides} />
    </Page>
  );
};

Tech.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Tech;
