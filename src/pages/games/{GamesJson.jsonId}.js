import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Page, Project, ProjectProps } from '../../components';
import { baseUri } from '../../links';

export const query = graphql`
  query ($id: String!) {
    project: gamesJson(id: { eq: $id }) {
      id: jsonId
      category
      title
      description
      description_short
      description_long
      date
      role
      tech
      image {
        sharp: childImageSharp {
          original {
            src
            width
            height
          }
        }
      }
      buttons {
        name
        url
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
        mainImageLink
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
  }
`;

const Game = ({ data, location }) => {
  const { project } = data;
  return (
    <Page
      title="Games"
      dockLinks={project.buttons}
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

Game.propTypes = {
  data: PropTypes.shape({ project: ProjectProps }),
  location: PropTypes.object,
};

export default Game;
