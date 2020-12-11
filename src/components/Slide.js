import { ClickableDiv } from '@zigurous/react-components';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/slide.css';

const Slide = ({ inactive = false, slide, showInfo = true }) => {
  const imageRef = useRef();
  const history = useHistory();
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
      <ClickableDiv
        className="slide__image-wrapper"
        history={history}
        link={slide.link}
      >
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
      </ClickableDiv>
      {showInfo && (
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          <Link className="font-weight-semibold" to={slide.link}>
            {slide.linkText || 'More Details'}
          </Link>
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
