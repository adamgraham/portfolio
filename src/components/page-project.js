import PropTypes from 'prop-types';
import React from 'react';
import Page from './page';
import Project, { ProjectProps } from './project';
import { SlideProps } from './slide';

const ProjectPage = ({ gallery, location, project }) => {
  return (
    <Page gallery={gallery} id={project.id} location={location}>
      <Project project={project} />
    </Page>
  );
};

ProjectPage.propTypes = {
  gallery: PropTypes.arrayOf(SlideProps),
  location: PropTypes.object,
  project: ProjectProps,
};

export default ProjectPage;
