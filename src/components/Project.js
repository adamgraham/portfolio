import {
  Button,
  ButtonGroup,
  EmbeddedYouTube,
  ImageGallery,
  Link,
  ProgressiveImage,
} from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/project.css';

const Project = ({ className, project }) => (
  <article className={classNames('project', 'container-md', className)}>
    <section>
      <h1>{project.title}</h1>
    </section>
    <section>
      {project.date && (
        <p className="font-sm">
          <em>{project.date}</em>
        </p>
      )}
      {project.description && <p>{project.description}</p>}
      {project.description_long &&
        project.description_long.map((description) => (
          <p key={description}>{description}</p>
        ))}
    </section>
    {project.details && (
      <section>
        <p className="font-sm">
          {project.details.map((detail, index) => (
            <React.Fragment key={detail.key}>
              {index !== 0 && <br />}
              <em>{detail.key}</em> {detail.value}
            </React.Fragment>
          ))}
        </p>
      </section>
    )}
    {project.buttons && (
      <section>
        <ButtonGroup>
          {project.buttons.map((button) => (
            <Button
              external
              icon={button.icon && 'left'}
              iconName={button.icon}
              key={button.name}
              link={button.link}
              size="small"
            >
              {button.name}
            </Button>
          ))}
        </ButtonGroup>
      </section>
    )}
    {project.sections &&
      project.sections.map((section, index) => (
        <section key={`section-${index}`}>
          {section.title && (
            <p className="font-lg">
              {section.link ? (
                <Link external href={section.link}>
                  <b>{section.title}</b>
                </Link>
              ) : (
                <b>{section.title}</b>
              )}
            </p>
          )}
          {section.mainImage && (
            <ProgressiveImage
              alt={`${project.title} Screenshot`}
              src={section.mainImage.publicURL}
            />
          )}
          {section.mainVideo && (
            <EmbeddedYouTube
              origin="https://adamgraham.io"
              videoId={section.mainVideo}
            />
          )}
          {section.paragraphs &&
            section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                className="font-sm"
                key={`section-${index}-paragraph-${paragraphIndex}`}
              >
                {paragraph}
              </p>
            ))}
          {section.gallery && (
            <ImageGallery
              images={section.gallery.map((image) => image.publicURL)}
              minWidth={128}
            />
          )}
          {section.videos &&
            section.videos.map((video) => (
              <EmbeddedYouTube
                className="margin-bottom-lg"
                key={video}
                origin="https://adamgraham.io"
                videoId={video}
              />
            ))}
        </section>
      ))}
  </article>
);

export const ProjectProps = PropTypes.shape({
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  date: PropTypes.string,
  description: PropTypes.string,
  description_long: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  id: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      mainImage: PropTypes.shape({
        publicURL: PropTypes.string.isRequired,
      }),
      mainVideo: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      gallery: PropTypes.arrayOf(
        PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        })
      ),
      videos: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  title: PropTypes.string.isRequired,
});

Project.propTypes = {
  className: PropTypes.string,
  project: ProjectProps,
};

export default Project;
