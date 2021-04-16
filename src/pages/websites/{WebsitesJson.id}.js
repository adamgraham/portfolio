import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ProjectPage, ProjectProps, SlideProps } from '../../components';

export const query = graphql`
  query($id: String!) {
    project: websitesJson(id: { eq: $id }) {
      id
      title
      date
      description
      description_long
      details {
        key
        value
      }
      buttons {
        name
        link
        icon
      }
      sections {
        title
        link
        mainImage {
          publicURL
        }
        mainVideo
        paragraphs
        gallery {
          publicURL
        }
        videos
      }
    }
    json: allWebsitesJson {
      gallery: nodes {
        category
        id
        title
        description
        description_short
        image {
          publicURL
        }
        imageAltText
        imageBorder
      }
    }
  }
`;

const Website = ({ data, location }) => {
  const { project } = data;
  const { gallery } = data.json;
  return (
    <ProjectPage gallery={gallery} location={location} project={project} />
  );
};

Website.propTypes = {
  data: PropTypes.shape({
    project: ProjectProps,
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Website;
