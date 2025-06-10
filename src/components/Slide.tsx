import '../styles/slide.css';
import { Link, ProgressiveImage, socialIcons, Text } from '@zigurous/forge-react'; // prettier-ignore
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
        <Link as={GatsbyLink} className="inline-flex" to={projectPath} unstyled>
          <ProgressiveImage
            alt={`${slide.title} Painting`}
            animated={false}
            className={classNames('slide__image', {
              'slide__image--no-border':
                typeof slide.imageBorder === 'boolean' &&
                slide.imageBorder === false,
            })}
            width={slide.image?.sharp.original.width}
            height={slide.image?.sharp.original.height}
            src={slide.image?.sharp.original.src}
            showLoadingSpinner={!offline}
          />
        </Link>
      </div>
      <div className="slide__text-wrapper">
        <div className="slide__text-container w-full">
          <Text className="ml-xxxs" transform="capitalize" type="eyebrow">
            {slide.date}
          </Text>
          <Text as="h1" marginBottom="sm" type="title-lg" weight="700">
            {slide.title}
          </Text>
          <Text
            className="description text-pretty opacity-90"
            marginBottom="lg"
            type="body"
          >
            {slide.description_short || slide.description}
          </Text>
          <Link
            as={slide.customLink ? 'a' : GatsbyLink}
            external={Boolean(slide.customLink)}
            style={{ marginLeft: '-4px' }}
            href={slide.customLink?.href || projectPath}
            unstyled
          >
            <ShadowButton
              icon={slide.customLink?.icon}
              iconProps={{
                type:
                  typeof slide.customLink?.icon === 'string' &&
                  slide.customLink?.icon in socialIcons
                    ? 'social'
                    : 'material',
              }}
              iconAlignment={slide.customLink?.iconAlignment || 'trailing'}
            >
              {slide.customLink?.name || 'More Details'}
            </ShadowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
