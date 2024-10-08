import '../styles/project.css';
import { Button, ButtonGroup, EmbeddedYouTube, ImageGallery, Link, ProgressiveImage } from '@zigurous/react-components'; // prettier-ignore
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageProps } from '../types/image';

const Project = ({ className, project }) => (
  <article className={classNames('project', 'container-md', className)}>
    <section>
      <h1 className="title">{project.title}</h1>
      {project.description && (
        <p className="opacity-90p">{project.description}</p>
      )}
      {project.description_long &&
        project.description_long.map((description) => (
          <p className="opacity-90p" key={description}>
            {description}
          </p>
        ))}
      {project.buttons && (
        <ButtonGroup>
          {project.buttons.map((button) => (
            <Link
              external
              to={button.link}
              key={button.name}
              style={{ marginLeft: '-4px' }}
              unstyled
            >
              <Button
                className="shadow-button"
                icon={button.icon && 'left'}
                iconName={button.icon}
                size={Button.size.small}
                shape={Button.shape.rounded}
              >
                {button.name}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      )}
    </section>
    {/* {project.details && (
      <section>
        <p className="font-sm opacity-90p">
          {project.details.map((detail, index) => (
            <React.Fragment key={detail.key}>
              {index !== 0 && <br />}
              <em>{detail.key}</em> {detail.value}
            </React.Fragment>
          ))}
        </p>
      </section>
    )} */}
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
          {section.mainImage && (
            <ProgressiveImage
              alt={`${project.title} Screenshot`}
              width={section.mainImage.sharp.original.width}
              height={section.mainImage.sharp.original.height}
              src={section.mainImage.sharp.original.src}
            />
          )}
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
      link: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  category: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  description_short: PropTypes.string,
  description_long: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  id: PropTypes.string.isRequired,
  image: ImageProps.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      mainImage: ImageProps,
      mainVideo: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      gallery: PropTypes.arrayOf(ImageProps),
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
