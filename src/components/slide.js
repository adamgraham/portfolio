import { Button, Link, ProgressiveImage } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageProps } from './image';
import '../styles/slide.css';

const Slide = ({ className, slide }) => {
  const offline = typeof navigator !== 'undefined' && !navigator.onLine;
  const projectPath = `/${slide.category}/${slide.id}`;
  return (
    <div className={classNames('slide', className)}>
      <div className="slide__image-wrapper">
        <Link ElementType={GatsbyLink} to={projectPath} unstyled>
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
          <h1 className="h3">{slide.title}</h1>
          <p className="text-foreground-secondary">
            {slide.description_short || slide.description}
          </p>
          <Link ElementType={GatsbyLink} to={projectPath} unstyled>
            <Button size={Button.size.small}>More Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SlideProps = PropTypes.shape({
  category: PropTypes.string.isRequired,
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
