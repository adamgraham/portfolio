import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GallerySlide = ({ inactive = false, slide }) => {
  const imageRef = useRef();
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadComplete = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image && !imageLoaded) {
      if (image.complete) {
        loadComplete();
      } else {
        image.addEventListener('load', loadComplete);
      }
    }
    return () => {
      if (image) {
        image.removeEventListener('load', loadComplete);
      }
    };
  }, [imageLoaded, imageRef]);

  return (
    <div
      className={classNames('slide', {
        inactive,
      })}
      key={slide.id}
    >
      <div className="slide__image-wrapper">
        <img
          alt=""
          className={classNames(
            'slide__image',
            {
              'slide__image--loading': !imageLoaded,
              [`slide__image--border-${slide.imageBorder}`]: slide.imageBorder,
            },
            'box-shadow-4'
          )}
          ref={imageRef}
          src={slide.image}
        ></img>
      </div>
      <div className="slide__text-container">
        <div className="h4">{slide.title}</div>
        <p>{slide.description}</p>
        <a className="font-weight-semibold" href={slide.link}>
          {slide.linkText || 'More Details'}
        </a>
      </div>
    </div>
  );
};

export const SlideProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageBorder: PropTypes.string,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string,
});

GallerySlide.propTypes = {
  inactive: PropTypes.bool,
  slide: SlideProps,
};

export default GallerySlide;
