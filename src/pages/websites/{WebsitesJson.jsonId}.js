import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Page, Project, ProjectProps, SlideProps } from '../../components';
import { baseUri } from '../../links';

export const query = graphql`
  query ($id: String!) {
    project: websitesJson(id: { eq: $id }) {
      id: jsonId
      category
      title
      date
      description
      description_short
      description_long
      image {
        sharp: childImageSharp {
          original {
            src
            width
            height
          }
        }
      }
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
    json: allWebsitesJson {
      slides: nodes {
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

const Website = ({ data, location }) => {
  const { project } = data;
  const { slides } = data.json;
  return (
    <Page
      category="websites"
      slides={slides}
      location={location}
      metadata={{
        url: `${baseUri}/${project.category}/${project.id}`,
        title: `Adam Graham • ${project.title}`,
        description: project.description_short || project.description,
        image: project.image && project.image.sharp.original.src,
      }}
    >
      <Project project={project} />
    </Page>
  );
};

Website.propTypes = {
  data: PropTypes.shape({
    project: ProjectProps,
    json: PropTypes.shape({
      slides: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Website;
