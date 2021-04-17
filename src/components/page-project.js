import PropTypes from 'prop-types';
import React from 'react';
import Page from './page';
import Project, { ProjectProps } from './project';
import { SlideProps } from './slide';

const ProjectPage = ({ gallery, location, project }) => {
  const metadata = {
    url: `https://adamgraham.io/${project.category}/${project.id}`,
    title: `Adam Graham • ${project.title}`,
    description: project.description_short || project.description,
    image: project.image && project.image.sharp.original.src,
  };
  return (
    <Page
      category={project.category}
      gallery={gallery}
      id={project.id}
      location={location}
      metadata={metadata}
    >
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
