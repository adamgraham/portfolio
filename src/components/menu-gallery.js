import { ProgressiveImage } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { GalleryContext } from '../context';

const MenuGallery = ({ onSelect = () => {}, show }) => {
  return (
    <div
      aria-hidden={!show}
      className={classNames('app-menu__gallery-view', {
        open: show,
      })}
    >
      <GalleryContext.Consumer>
        {({ gallery, changeSlide, navigateToSlide }) => (
          <div className="app-menu__gallery">
            {gallery.map((slide, index) => (
              <button
                aria-disabled={!show}
                aria-label={slide.title}
                className="app-menu__thumbnail"
                disabled={!show}
                key={slide.id}
                onClick={() => {
                  changeSlide(index);
                  navigateToSlide(slide);
                  onSelect();
                }}
              >
                <ProgressiveImage
                  alt={slide.imageAltText || ''}
                  className={classNames('app-menu__thumbnail-image', {
                    [`app-menu__thumbnail-image--border-${slide.imageBorder}`]:
                      slide.imageBorder,
                  })}
                  width={slide.image.sharp.original.width}
                  height={slide.image.sharp.original.height}
                  src={slide.image.sharp.original.src}
                />
              </button>
            ))}
          </div>
        )}
      </GalleryContext.Consumer>
    </div>
  );
};

MenuGallery.propTypes = {
  onSelect: PropTypes.func,
  show: PropTypes.bool,
};

export default MenuGallery;
