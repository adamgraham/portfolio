import '../styles/slide.css';
import { Button, Link, ProgressiveImage } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageProps } from '../types/image';

const Slide = ({ className, slide }) => {
  const offline = typeof navigator !== 'undefined' && !navigator.onLine;
  const projectPath = `/${slide.category}/${slide.id}`;
  return (
    <div className={classNames('slide', className)}>
      <div className="slide__image-wrapper">
        <Link
          className="display-inline-flex"
          ElementType={GatsbyLink}
          to={projectPath}
          unstyled
        >
          <ProgressiveImage
            alt={slide.imageAltText || ''}
            animated={false}
            className={classNames('slide__image', {
              [`slide__image--border-${slide.imageBorder}`]: slide.imageBorder,
            })}
            width={slide.image.sharp.original.width}
            height={slide.image.sharp.original.height}
            src={slide.image.sharp.original.src}
            showLoadingSpinner={!offline}
          />
        </Link>
      </div>
      <div className="slide__text-wrapper">
        <div className="slide__text-container">
          <p className="eyebrow">{slide.date}</p>
          <h1 className="title h2">{slide.title}</h1>
          <p className="description opacity-90p">
            {slide.description_short || slide.description}
          </p>
          <Link
            ElementType={GatsbyLink}
            to={projectPath}
            style={{ marginLeft: '-4px' }}
            unstyled
          >
            <Button
              className="shadow-button"
              size={Button.size.small}
              shape={Button.shape.rounded}
            >
              More Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SlideProps = PropTypes.shape({
  category: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  description_short: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: ImageProps.isRequired,
  imageAltText: PropTypes.string,
  imageBorder: PropTypes.string,
  title: PropTypes.string.isRequired,
});

Slide.propTypes = {
  className: PropTypes.string,
  slide: SlideProps,
};

export default Slide;
