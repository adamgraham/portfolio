import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ProjectPage, ProjectProps, SlideProps } from '../../components';

export const query = graphql`
  query($id: String!) {
    project: gamesJson(id: { eq: $id }) {
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
    json: allGamesJson {
      gallery: nodes {
        id
        category
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

const Game = ({ data, location }) => {
  const { project } = data;
  const { gallery } = data.json;
  return (
    <ProjectPage gallery={gallery} location={location} project={project} />
  );
};

Game.propTypes = {
  data: PropTypes.shape({
    project: ProjectProps,
    json: PropTypes.shape({
      gallery: PropTypes.arrayOf(SlideProps),
    }),
  }),
  location: PropTypes.object,
};

export default Game;
