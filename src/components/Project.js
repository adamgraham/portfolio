import '../styles/project.css';
import { Badge, EmbeddedYouTube, ImageGallery, Link, ProgressiveImage } from '@zigurous/react-components'; // prettier-ignore
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageProps } from '../types/image';

const Project = ({ className, project }) => (
  <article className={classNames('project', 'container-md', className)}>
    <section>
      <h1 className="display-4 project__title">{project.title}</h1>
      <div className="project__subtitle">
        {project.date}
        <span className="separator">|</span>
        {project.role}
      </div>
      {project.tech && (
        <div className="project__badges">
          {project.tech.map((tech) => (
            <Badge pill key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <div className="project__description">
        {project.description && (
          <p className="opacity-90p">{project.description}</p>
        )}
        {project.description_long &&
          project.description_long.map((description) => (
            <p className="opacity-90p" key={description}>
              {description}
            </p>
          ))}
      </div>
    </section>
    {project.sections &&
      project.sections.map((section, index) => (
        <section key={`section-${index}`}>
          {section.title && (
            <h2 className="subtitle font-xl">
              {section.link ? (
                <Link external href={section.link}>
                  <b>{section.title}</b>
                </Link>
              ) : (
                <b>{section.title}</b>
              )}
            </h2>
          )}
          {section.mainImage &&
            (section.mainImageLink ? (
              <Link external to={section.mainImageLink} unstyled>
                <ProgressiveImage
                  alt={`${project.title} Screenshot`}
                  width={section.mainImage.sharp.original.width}
                  height={section.mainImage.sharp.original.height}
                  src={section.mainImage.sharp.original.src}
                />
              </Link>
            ) : (
              <ProgressiveImage
                alt={`${project.title} Screenshot`}
                width={section.mainImage.sharp.original.width}
                height={section.mainImage.sharp.original.height}
                src={section.mainImage.sharp.original.src}
              />
            ))}
          {section.mainVideo && (
            <EmbeddedYouTube
              origin="https://adamgraham.github.io"
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
              images={section.gallery.map((image) => ({
                width: image.sharp.original.width,
                height: image.sharp.original.height,
                src: image.sharp.original.src,
              }))}
              minWidth={132}
            />
          )}
          {section.videos &&
            section.videos.map((video) => (
              <EmbeddedYouTube
                className="margin-bottom-lg"
                key={video}
                origin="https://adamgraham.github.io"
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
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
  category: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  description_short: PropTypes.string,
  description_long: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  image: ImageProps.isRequired,
  role: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      mainImage: ImageProps,
      mainImageLink: PropTypes.string,
      mainVideo: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      gallery: PropTypes.arrayOf(ImageProps),
      videos: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  tech: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
});

Project.propTypes = {
  className: PropTypes.string,
  project: ProjectProps,
};

export default Project;
