import {
  ClickableDiv,
  ImageFadeIn,
  withTransition,
} from '@zigurous/react-components';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/slide.css';

const Slide = ({ className, inactive = false, slide, showInfo = true }) => {
  const history = useHistory();
  return (
    <div className={classNames('slide', className)} key={slide.id}>
      <ClickableDiv
        className="slide__image-wrapper"
        history={history}
        link={slide.link}
      >
        <ImageFadeIn
          alt={slide.altText}
          className={classNames(
            'slide__image',
            {
              'slide__image--border-white': !slide.imageBorder,
              [`slide__image--border-${slide.imageBorder}`]: slide.imageBorder,
            },
            'box-shadow-4'
          )}
          src={slide.image}
        />
      </ClickableDiv>
      <div
        className={classNames('slide__text-wrapper', {
          'slide__text-wrapper--hide-info': !showInfo,
        })}
      >
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          <Link className="font-weight-semibold" to={slide.link}>
            {slide.linkText || 'More Details'}
          </Link>
        </div>
      </div>
      {/* {showInfo && (
        <div className="slide__text-container">
          <h1 className="h4">{slide.title}</h1>
          <p>{slide.description}</p>
          <Link className="font-weight-semibold" to={slide.link}>
            {slide.linkText || 'More Details'}
          </Link>
        </div>
      )} */}
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
  showInfo: PropTypes.bool,
};

export default withTransition(Slide, 'fade-out', 'inactive');
