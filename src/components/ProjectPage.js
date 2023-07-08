import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GalleryContext, { useContext } from './GalleryContext';
import Page from './Page';
import Project, { ProjectProps } from './Project';
import { SlideProps } from './Slide';
import { getSessionIndex } from '../utils/session';

const ProjectPage = ({ category, gallery, location, project }) => {
  const [slideIndex, setSlideIndex] = useState(getSessionIndex(category));
  const context = useContext(category, gallery, slideIndex, setSlideIndex);
  return (
    <GalleryContext.Provider value={context}>
      <Page
        id={project.id}
        location={location}
        metadata={{
          url: `https://adamgraham.io/${project.category}/${project.id}`,
          title: `Adam Graham • ${project.title}`,
          description: project.description_short || project.description,
          image: project.image && project.image.sharp.original.src,
        }}
      >
        <Project project={project} />
      </Page>
    </GalleryContext.Provider>
  );
};

ProjectPage.propTypes = {
  category: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  location: PropTypes.object,
  project: ProjectProps,
};

export default ProjectPage;
