import '../styles/slide.css';
import { Link, ProgressiveImage } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import ShadowButton from './ShadowButton';
import type { SlideData } from '../types';

export interface SlideProps {
  slide: SlideData;
}

export default function Slide({ slide }: SlideProps) {
  const offline = typeof navigator !== 'undefined' && !navigator.onLine;
  const projectPath = `/${slide.category}/${slide.id}`;
  return (
    <div className="slide">
      <div className="slide__image-wrapper">
        <Link
          as={GatsbyLink}
          className="display-inline-flex"
          to={projectPath}
          unstyled
        >
          <ProgressiveImage
            alt={slide.imageAltText || ''}
            animated={false}
            className={classNames('slide__image', {
              'slide__image--no-border':
                typeof slide.imageBorder === 'boolean' &&
                slide.imageBorder === false,
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
          <h1 className="title">{slide.title}</h1>
          <p className="description opacity-90p">
            {slide.description_short || slide.description}
          </p>
          <Link
            as={GatsbyLink}
            style={{ marginLeft: '-4px' }}
            to={projectPath}
            unstyled
          >
            <ShadowButton>More Details</ShadowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
