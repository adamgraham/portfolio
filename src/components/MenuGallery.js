import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GalleryContext from './GalleryContext';

const MenuGallery = ({ onSelect, open }) => {
  return (
    <div
      aria-hidden={!open}
      className={classNames('app-menu__gallery-view', {
        open: open,
      })}
    >
      <GalleryContext.Consumer>
        {({ gallery, setSlideIndex }) => (
          <div className="app-menu__gallery">
            {gallery.map((slide, index) => (
              <button
                aria-disabled={!open}
                aria-label={slide.title}
                className="app-menu__thumbnail"
                disabled={!open}
                key={slide.id}
                onClick={() => {
                  setSlideIndex(index);
                  onSelect(index);
                }}
              >
                <img
                  alt={slide.imageAltText || ''}
                  className={classNames(
                    'img-fluid',
                    'app-menu__thumbnail-image',
                    {
                      [`app-menu__thumbnail-image--border-${slide.imageBorder}`]:
                        slide.imageBorder,
                    }
                  )}
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
  open: PropTypes.bool,
};

export default MenuGallery;
