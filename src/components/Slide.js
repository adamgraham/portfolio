import {
  ClickableDiv,
  LoadingSpinner,
  useLoading,
  withTransition,
} from '@zigurous/react-components';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/slide.css';

const Slide = ({ className, inactive = false, slide }) => {
  const history = useHistory();
  const [image, loading] = useLoading();
  return (
    <div className={classNames('slide', className)} key={slide.id}>
      <ClickableDiv
        className={classNames('slide__image-wrapper', { loading })}
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
          ref={image}
          src={slide.image}
        />
        {loading && <LoadingSpinner loading={loading} />}
      </ClickableDiv>
      <div className="slide__text-wrapper">
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          <Link className="font-weight-semibold" to={slide.link}>
            {slide.linkText || 'More Details'}
          </Link>
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
  inactive: PropTypes.bool,
  slide: SlideProps,
};

export default withTransition(Slide, 'fade-out', 'inactive');
