import {
  ClickableDiv,
  LoadingSpinner,
  useLoading,
} from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import '../styles/slide.css';

const Slide = ({ className, slide }) => {
  const image = useRef();
  const loading = useLoading(image);
  return (
    <div className={classNames('slide', className)} key={slide.id}>
      <ClickableDiv
        className="slide__image-wrapper"
        history={history}
        link={slide.link}
      >
        <img
          alt={slide.altText}
          className={classNames(
            'slide__image',
            {
              'slide__image--border-white': !slide.imageBorder,
              [`slide__image--border-${slide.imageBorder}`]: slide.imageBorder,
            },
            { loading },
            'shadow-lg'
          )}
          loading="lazy"
          ref={image}
          src={slide.image}
        />
        {loading && <LoadingSpinner loading={loading} />}
      </ClickableDiv>
      <div className="slide__text-wrapper">
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          {/* <Link className="font-weight-semibold" to={slide.link}>
            {slide.linkText || 'More Details'}
          </Link> */}
        </div>
      </div>
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
  className: PropTypes.string,
  slide: SlideProps,
};

export default Slide;
