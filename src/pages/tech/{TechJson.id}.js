import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ProjectPage, ProjectProps, SlideProps } from '../../components';

export const query = graphql`
  query($id: String!) {
    project: techJson(id: { eq: $id }) {
      id
      category
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
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        mainVideo
        paragraphs
        gallery {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        videos
      }
    }
    json: allTechJson {
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

const Tech = ({ data, location }) => {
  const { project } = data;
  const { gallery } = data.json;
  return (
    <ProjectPage gallery={gallery} location={location} project={project} />
  );
};

Tech.propTypes = {
  data: PropTypes.shape({
    project: ProjectProps,
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Tech;
