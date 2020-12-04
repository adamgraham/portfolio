import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GallerySlide = ({ inactive = false, slide }) => {
  const imageRef = useRef();
  const [loading, setLoading] = useState(true);

  const loadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image && loading) {
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
  }, [imageRef, loading]);

  return (
    <div
      className={classNames('slide', {
        loading,
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
