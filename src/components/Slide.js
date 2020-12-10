import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/slide.css';

const Slide = ({ inactive = false, slide, showInfo = true }) => {
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
          alt={slide.altText || ''}
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
      {showInfo && (
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          <a className="font-weight-semibold" href={slide.link}>
            {slide.linkText || 'More Details'}
          </a>
        </div>
      )}
    </div>
  );
};

export const SlideProps = PropTypes.shape({
  altText: PropTypes.string,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageBorder: PropTypes.string,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
});

Slide.propTypes = {
  inactive: PropTypes.bool,
  slide: SlideProps,
  showInfo: PropTypes.bool,
};

export default Slide;
